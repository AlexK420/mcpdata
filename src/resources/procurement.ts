// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Procurement extends APIResource {
  /**
   * Получить общероссийский классификатор продукции по видам экономической
   * деятельности (ОКПД2)
   */
  retrieveOkpd2(options?: RequestOptions): APIPromise<ProcurementRetrieveOkpd2Response> {
    return this._client.get('/v1/procurement/okpd2', options);
  }
}

export interface ProcurementRetrieveOkpd2Response {
  data?: Array<ProcurementRetrieveOkpd2Response.Data>;
}

export namespace ProcurementRetrieveOkpd2Response {
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

export declare namespace Procurement {
  export { type ProcurementRetrieveOkpd2Response as ProcurementRetrieveOkpd2Response };
}
