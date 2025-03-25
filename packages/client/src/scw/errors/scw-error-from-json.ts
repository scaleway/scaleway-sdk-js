import type { JSONObject } from '../../helpers/json'
import type { ScalewayError } from './scw-error'
/**
 * Interface with static method that initialize {@link ScalewayError} from JSON.
 *
 * @internal
 */
export interface ScalewayErrorFromJSONInitializer {
  fromJSON(status: number, obj: Readonly<JSONObject>): ScalewayError | null
}
