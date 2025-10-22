// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Licenses extends APIResource {
  /**
   * Получить справочник кодов и типов лицензий
   */
  list(options?: RequestOptions): APIPromise<LicenseListResponse> {
    return this._client.get('/v1/licenses', options);
  }
}

export interface LicenseListResponse {
  data?: Array<LicenseListResponse.Data>;
}

export namespace LicenseListResponse {
  /**
   * Код - расшифровка - количество
   */
  export interface Data {
    /**
     * Значение кода
     */
    code?: string;

    /**
     * Количество
     */
    count?: number;

    /**
     * Группа, к которой относится код
     */
    group?: string;

    /**
     * Код группы, к которой относится код
     */
    group_code?: string;

    /**
     * Расшифровка кода
     */
    name?: string;

    /**
     * Тип контрагента: ip или ul
     */
    type?: string;
  }
}

export declare namespace Licenses {
  export { type LicenseListResponse as LicenseListResponse };
}
