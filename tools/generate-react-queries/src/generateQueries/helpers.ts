export function toCamelCase(input: string): string {
  const camelCased = input.replace(/([-_][a-z])/gi, s =>
    s.toUpperCase().replace(/[-_]/g, ''),
  )

  return camelCased.charAt(0).toLowerCase() + camelCased.slice(1)
}

export function capitalizeFirstLetter(input: string): string {
  if (!input) {
    return input
  }

  return input.charAt(0).toUpperCase() + input.slice(1)
}

export function lowerCaseFirstLetter(input: string): string {
  if (!input) {
    return input
  }

  return input.charAt(0).toLocaleLowerCase() + input.slice(1)
}
