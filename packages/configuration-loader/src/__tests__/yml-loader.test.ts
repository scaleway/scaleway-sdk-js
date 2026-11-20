import { chmodSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  convertYamlToConfiguration,
  hasSecureFilePermissions,
  loadConfigurationFromFile,
  loadConfigurationFromFileAsync,
} from '../yml-loader.js'

const currentDir = import.meta.dirname

describe('convertYamlToConfiguration', () => {
  it('loads nothing from non-string object', () => {
    expect(convertYamlToConfiguration(null)).toStrictEqual({})
  })

  it('loads default properties', () => {
    expect(convertYamlToConfiguration('key1: value\nkey2: 42')).toStrictEqual({
      default: { key1: 'value', key2: '42' },
    })
  })

  it('loads properties for a specific profile', () => {
    expect(convertYamlToConfiguration('profiles:\nmy-profile:\nkey1: value\nkey2: 42')).toStrictEqual({
      'my-profile': { key1: 'value', key2: '42' },
    })
  })

  it(`doesn't consider a new section until we reach the profiles key`, () => {
    expect(convertYamlToConfiguration('my-profile:\nkey1: value\nkey2: 42')).toStrictEqual({})
  })
})

describe('loadConfigurationFromFile', () => {
  it('loads config from a yaml file', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
      /* noop */
    })
    const yamlPath = path.join(currentDir, 'data', 'scw-config.yaml')
    const loadedConfig = loadConfigurationFromFile(yamlPath)
    expect(loadedConfig).not.toBeNull()
    expect(
      JSON.stringify(loadedConfig) ===
        JSON.stringify({
          default: { dKey1: 'value1', dKey2: 'value2', dKey4: 'value4' },
          dev: { devKey1: 'value5' },
          prod: { prodKey1: 'value6' },
        }),
    ).toBe(true)
    // The committed test fixture is 0o644 (git only tracks the exec bit),
    // so loading it must emit the insecure-permissions warning.
    expect(warnSpy).toHaveBeenCalledTimes(1)
    expect(warnSpy.mock.calls[0]?.[0]).toMatch(/insecure permissions/iv)
    warnSpy.mockRestore()
  })

  it('throws an error for an invalid path', () => {
    expect(() => {
      loadConfigurationFromFile('invalid/path.html')
    }).toThrow()
  })
})

describe('loadConfigurationFromFileAsync', () => {
  it('loads config from a yaml file asynchronously', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
      /* noop */
    })
    const yamlPath = path.join(currentDir, 'data', 'scw-config.yaml')
    const loadedConfig = await loadConfigurationFromFileAsync(yamlPath)
    expect(loadedConfig).not.toBeNull()
    expect(loadedConfig).toStrictEqual({
      default: { dKey1: 'value1', dKey2: 'value2', dKey4: 'value4' },
      dev: { devKey1: 'value5' },
      prod: { prodKey1: 'value6' },
    })
    expect(warnSpy).toHaveBeenCalledTimes(1)
    expect(warnSpy.mock.calls[0]?.[0]).toMatch(/insecure permissions/iv)
    warnSpy.mockRestore()
  })

  it('rejects for an invalid path', async () => {
    await expect(loadConfigurationFromFileAsync('invalid/path.html')).rejects.toThrow()
  })
})

describe('hasSecureFilePermissions', () => {
  it('returns true on Windows (always)', async () => {
    // This test only validates the contract; actual behavior depends on platform
    if (process.platform === 'win32') {
      const result = await hasSecureFilePermissions('any/path')
      expect(result).toBe(true)
    }
  })

  it('checks file permissions on POSIX', async () => {
    if (process.platform === 'win32') {
      return
    }
    const yamlPath = path.join(currentDir, 'data', 'scw-config.yaml')
    const result = await hasSecureFilePermissions(yamlPath)
    expect(typeof result).toBe('boolean')
  })
})

const tempDirs: string[] = []

afterEach(() => {
  vi.restoreAllMocks()
  for (const dir of tempDirs) {
    rmSync(dir, { recursive: true, force: true })
  }
  tempDirs.length = 0
})

const writeConfig = (mode: number): string => {
  const dir = mkdtempSync(path.join(tmpdir(), 'scw-config-perms-'))
  tempDirs.push(dir)
  const filePath = path.join(dir, 'scw-config.yaml')
  writeFileSync(filePath, 'access_key: SCWXXXXXXXXXXXXXXXXX\nsecret_key: deadbeef\n', { mode })
  // `writeFileSync` honors the mode but umask may widen it; force the exact bits.
  chmodSync(filePath, mode)
  return filePath
}

describe('insecure permissions warning', () => {
  if (process.platform === 'win32') {
    return
  }

  describe('loadConfigurationFromFile', () => {
    it('warns when the config file is world/group readable', () => {
      const filePath = writeConfig(0o644)
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
        /* noop */
      })
      loadConfigurationFromFile(filePath)
      expect(warnSpy).toHaveBeenCalledTimes(1)
      expect(warnSpy.mock.calls[0]?.[0]).toMatch(/insecure permissions/iv)
      expect(warnSpy.mock.calls[0]?.[0]).toContain(filePath)
      expect(warnSpy.mock.calls[0]?.[0]).toMatch(/chmod 600/iv)
    })

    it('does not warn when the config file is 0o600', () => {
      const filePath = writeConfig(0o600)
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
        /* noop */
      })
      loadConfigurationFromFile(filePath)
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })

  describe('loadConfigurationFromFileAsync', () => {
    it('warns when the config file is world/group readable', async () => {
      const filePath = writeConfig(0o644)
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
        /* noop */
      })
      await loadConfigurationFromFileAsync(filePath)
      expect(warnSpy).toHaveBeenCalledTimes(1)
      expect(warnSpy.mock.calls[0]?.[0]).toMatch(/insecure permissions/iv)
      expect(warnSpy.mock.calls[0]?.[0]).toContain(filePath)
      expect(warnSpy.mock.calls[0]?.[0]).toMatch(/chmod 600/iv)
    })

    it('does not warn when the config file is 0o600', async () => {
      const filePath = writeConfig(0o600)
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
        /* noop */
      })
      await loadConfigurationFromFileAsync(filePath)
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })
})
