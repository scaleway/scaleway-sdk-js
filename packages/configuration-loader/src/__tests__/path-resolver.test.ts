import { env } from 'node:process'
import { beforeEach, describe, expect, it } from 'vitest'
import { EnvironmentKey } from '../env.js'
import {
  getScwConfigurationDirectory,
  resolveConfigurationFilePath,
} from '../path-resolver.js'

const updateEnv = (key: string, value: string): string | undefined => {
  const old: string | undefined = env[key]
  env[key] = value

  return old
}

const setOrDeleteEnv = (key: string, value?: string): void => {
  if (value) {
    env[key] = value
  } else {
    delete env[key]
  }
}

describe('getScwConfigurationDirectory', () => {
  it(`uses XDG_CONFIG_HOME if any`, () => {
    const newXDG = '/path/xdg'
    const oldXDG: string | undefined = updateEnv('XDG_CONFIG_HOME', newXDG)
    expect(getScwConfigurationDirectory()).toBe(`${newXDG}/scw`)
    setOrDeleteEnv('XDG_CONFIG_HOME', oldXDG)
  })

  it(`uses the home directory if any`, () => {
    const oldXDG: string | undefined = updateEnv('XDG_CONFIG_HOME', '')
    expect(getScwConfigurationDirectory().length).toBeGreaterThan(0)
    setOrDeleteEnv('XDG_CONFIG_HOME', oldXDG)
  })
})

describe('resolveConfigurationFilePath', () => {
  beforeEach(() => {
    setOrDeleteEnv(EnvironmentKey.ScwConfigPath)
  })

  it('is defined and not be empty', () => {
    const filePath: string = resolveConfigurationFilePath()
    expect(filePath).not.toBeNull()
    expect(filePath.length).toBeGreaterThan(0)
  })

  it(`is the user's defined path`, () => {
    const hardCodedPath = '/path/to/the/cloud'
    env[EnvironmentKey.ScwConfigPath] = hardCodedPath
    expect(resolveConfigurationFilePath()).toBe(hardCodedPath)
  })
})
