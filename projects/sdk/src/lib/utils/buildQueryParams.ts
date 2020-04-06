import { HttpParams, HttpUrlEncodingCodec } from '@angular/common/http'

/**
 * @ignore
 * not part of public api, don't include in generated docs
 *
 * CustomHttpUrlEncodingCodec
 * Fix plus sign (+) not encoding, so sent as blank space
 * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
 */
class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
  encodeKey(k: string): string {
    k = super.encodeKey(k)
    return k.replace(/\+/gi, '%2B')
  }
  encodeValue(v: string): string {
    v = super.encodeValue(v)
    return v.replace(/\+/gi, '%2B')
  }
}

/**
 * @ignore
 * not part of public api, don't include in generated docs
 */
export function buildQueryParams(
  queryParamObj: any,
  operationId: string
): HttpParams {
  let queryParams = new HttpParams({
    encoder: new CustomHttpUrlEncodingCodec(),
  })
  for (const key in queryParamObj) {
    if (!Object.prototype.hasOwnProperty.call(queryParamObj, key)) {
      continue
    }

    const val = queryParamObj[key]
    if (key === 'filters') {
      queryParams = unwrapFilters(val, queryParams)
      continue
    }
    if (typeof val === 'undefined') {
      continue
    }
    if (val === null) {
      throw new Error(
        `Parameter ${key} was null when calling ${operationId}. Null values are not valid values for list options.`
      )
    }
    if (Array.isArray(val)) {
      queryParams = queryParams.set(key, val.join(','))
      continue
    }
    queryParams = queryParams.set(key, val)
  }
  return queryParams
}

/**
 * @ignore
 * not part of public api, don't include in generated docs
 *
 * Unwrap filters object - Swagger doesn't support free-form query parameters
 * out of the box so we need to manually unwrap filters ourselves
 */
function unwrapFilters(filters: any, queryParameters: HttpParams) {
  for (const filterKey in filters) {
    const filterVal = filters[filterKey]
    if (
      !Object.prototype.hasOwnProperty.call(filters, filterKey) ||
      typeof filterVal === 'undefined'
    ) {
      continue
    }
    if (filterVal === null) {
      throw new Error(
        `Null is not a valid filter prop. Use negative filter "!" combined with wildcard filter "*" to define a filter for the absence of a value.
ex: an order list call with  filter 'xp.hasPaid': '!*' would return a list of orders where xp.hasPaid is null or not defined

https://ordercloud.io/features/advanced-querying#filtering`
      )
    }
    if (Array.isArray(filterVal)) {
      filterVal.forEach((arrayVal, index) => {
        const action = index === 0 ? 'set' : 'append'
        queryParameters = queryParameters[action](filterKey, arrayVal)
      })
    } else {
      queryParameters = queryParameters.set(filterKey, filterVal)
    }
  }
  return queryParameters
}
