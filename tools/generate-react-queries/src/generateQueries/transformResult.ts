import { capitalizeFirstLetter, toCamelCase } from './helpers.ts'
import type { RawResult, TransformedResult } from './types.ts'

// We flatten the object by replacing `{api: {key: value}}` with `{[toCamelCase(api + '_' + key)]: value}` for each value.
export const transformResult = (rawResult: RawResult): TransformedResult =>
  Object.entries(rawResult).reduce(
    (accTransformed, [nextApiKey, allApiMethods]) => {
      /* Return something like this
    {
      "Webhostingv1alpha1DediboxAPIListDediboxHostingsAll": {
          "methodName": "listDediboxHostings",
          "returnType": "Webhostingv1alpha1.DediboxHosting[]",
          "paramsType": "Webhostingv1alpha1.DediboxApiListDediboxHostingsRequest",
          "namespaces": [
            "Webhosting",
            "v1alpha1",
            "DediboxAPI"
          ],
          "isAll": true
      }
    }
    */
      const transformedApiMethods = Object.entries(allApiMethods).reduce(
        (accApiTransformed, [apiMethod, returnType]) => ({
          ...accApiTransformed,
          [capitalizeFirstLetter(toCamelCase(`${nextApiKey}_${apiMethod}`))]:
            returnType,
        }),
        {},
      )

      return {
        ...accTransformed,
        ...transformedApiMethods,
      }
    },
    {},
  )
