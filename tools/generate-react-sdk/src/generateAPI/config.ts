import { Project } from 'ts-morph'

// Load the entry file
export const project = new Project()

// We dont want these types to be suffixed by namespaces
export const rawStringTypes = ['string', 'Blob', 'string[]']
