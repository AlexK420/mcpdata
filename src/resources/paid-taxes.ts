// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PaidTaxes extends APIResource {
  /**
   * Получить данные об уплаченных налогах по ИНН/ОГРН
   */
  list(query: PaidTaxListParams, options?: RequestOptions): APIPromise<PaidTaxListResponse> {
    return this._client.get('/v1/paidTaxes', { query, ...options });
  }
}

/**
 * Данные об уплаченных налогах
 */
export interface PaidTaxListResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Данные о уплаченных налогах
   */
  data?: Array<PaidTaxListResponse.Data>;

  /**
   * Исключительная ситуация
   */
  error?: PaidTaxListResponse.Error;
}

export namespace PaidTaxListResponse {
  /**
   * Данные об уплаченных налогах
   */
  export interface Data {
    /**
     * Дата формирования документа
     */
    doc_date?: string;

    /**
     * Дата, по состоянию на которую, подготовлены данные для публикации (в ней указан
     * отчетный год)
     */
    report_date?: string;

    /**
     * Список уплаченных налогов
     */
    tax_info_list?: Array<Data.TaxInfoList>;
  }

  export namespace Data {
    /**
     * Информация о налоге
     */
    export interface TaxInfoList {
      /**
       * Наименование налога
       */
      taxName?: string;

      /**
       * Сумма уплаченного налога (в рублях)
       */
      taxValue?: string;
    }
  }

  /**
   * Исключительная ситуация
   */
  export interface Error {
    /**
     * Код ошибки. Например: 1 - контрагент по заданным параметрам не найден
     */
    code?: number;

    /**
     * Описание
     */
    message?: string;

    /**
     * Параметры - входные данные, вызвавшие исключительную ситуацию
     */
    source?: { [key: string]: string };
  }
}

export interface PaidTaxListParams {
  /**
   * API-ключ.
   */
  key: string;

  /**
   * ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП.
   */
  inn?: string;

  /**
   * ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.
   */
  ogrn?: string;
}

export declare namespace PaidTaxes {
  export { type PaidTaxListResponse as PaidTaxListResponse, type PaidTaxListParams as PaidTaxListParams };
}
