// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Regions extends APIResource {
  /**
   * Получить справочник регионов России
   */
  list(options?: RequestOptions): APIPromise<RegionListResponse> {
    return this._client.get('/v1/regions', options);
  }
}

/**
 * Федеральный округ с регионами
 */
export interface RegionListResponse {
  name?: string;

  regions?: Array<RegionListResponse.Region>;
}

export namespace RegionListResponse {
  /**
   * Регион
   */
  export interface Region {
    code?: string;

    name?: string;
  }
}

export declare namespace Regions {
  export { type RegionListResponse as RegionListResponse };
}
