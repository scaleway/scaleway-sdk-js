const upperFirst = (str: string) =>
  str.slice(0, 1).toUpperCase() + str.slice(1, str.length)

const ACRONYMS = new Set(['k8s', 's2s', 'api', 'http', 'https', 'url', 'uri'])

const handleAcronym = (str: string): string => {
  const lower = str.toLowerCase()
  if (ACRONYMS.has(lower)) {
    return str.toUpperCase()
  }
  return upperFirst(str)
}

export const snakeToPascal = (str: string) =>
  str
    .split('_')
    .map(s => handleAcronym(s.split('/').map(handleAcronym).join('/')))
    .join('')

export const unionTocamelCase = (str: string) =>
  str.split('-').map(upperFirst).join('')

export const snakeToSlug = (str: string) => str.split('_').join('-')

export const snakeToDisplayName = (str: string) =>
  str
    .split('_')
    .map(s => handleAcronym(s.split('/').map(handleAcronym).join('/')))
    .join(' ')

export const renderTemplate = (
  template: string,
  params: Record<string, string>,
): string => {
  let result = template
  for (const [key, value] of Object.entries(params)) {
    const placeholder = `{{${key}}}`
    const stringValue =
      typeof value === 'object' ? JSON.stringify(value) : value.toString()
    result = result.replace(new RegExp(placeholder, 'g'), stringValue)
  }
  return result
}

export const renderTemplatePackageJson = (
  template: string,
  params: Record<string, string>,
) => {
  let result = template
  for (const [key, value] of Object.entries(params)) {
    const placeholder = `{{${key}}}`
    const stringValue =
      typeof value === 'object' ? JSON.stringify(value) : value.toString()
    result = result.replace(new RegExp(placeholder, 'g'), stringValue)
  }
  try {
    return JSON.parse(result)
  } catch (error) {
    console.error('Error parsing package.json:', error)
    throw error
  }
}
