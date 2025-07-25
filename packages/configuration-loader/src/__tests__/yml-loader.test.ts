import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import {
  convertYamlToConfiguration,
  loadConfigurationFromFile,
} from '../yml-loader.js'

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
    expect(
      convertYamlToConfiguration(
        'profiles:\nmy-profile:\nkey1: value\nkey2: 42',
      ),
    ).toStrictEqual({ 'my-profile': { key1: 'value', key2: '42' } })
  })

  it(`doesn't consider a new section until we reach the profiles key`, () => {
    expect(
      convertYamlToConfiguration('my-profile:\nkey1: value\nkey2: 42'),
    ).toStrictEqual({})
  })
})

describe('loadConfigurationFromFile', () => {
  it('loads config from a yaml file', () => {
    const yamlPath = join(__dirname, 'data', 'scw-config.yaml')
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
  })

  it('throws an error for an invalid path', () => {
    expect(() => {
      loadConfigurationFromFile('invalid/path.html')
    }).toThrow()
  })
})
