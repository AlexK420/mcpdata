// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class LeaseClassifier extends APIResource {
  /**
   * Получить классификатор лизинговых договоров: код лизинга, его наименование и
   * количество заключенных договоров с данным кодом
   */
  retrieve(options?: RequestOptions): APIPromise<LeaseClassifierRetrieveResponse> {
    return this._client.get('/v1/lease_classifier', options);
  }
}

export interface LeaseClassifierRetrieveResponse {
  data?: Array<LeaseClassifierRetrieveResponse.Data>;
}

export namespace LeaseClassifierRetrieveResponse {
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

export declare namespace LeaseClassifier {
  export { type LeaseClassifierRetrieveResponse as LeaseClassifierRetrieveResponse };
}
