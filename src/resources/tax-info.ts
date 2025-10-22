// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class TaxInfo extends APIResource {
  /**
   * Получить информацию об уплаченных налогах, задолженностях и штрафах, налоговых
   * нарушениях по ИНН/ОГРН
   */
  retrieve(query: TaxInfoRetrieveParams, options?: RequestOptions): APIPromise<TaxInfoRetrieveResponse> {
    return this._client.get('/v1/taxInfo', { query, ...options });
  }
}

/**
 * Информация об уплаченных налогах, задолженностях и штрафах, налоговых нарушениях
 */
export interface TaxInfoRetrieveResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Наименование компании
   */
  company_name?: string;

  /**
   * Исключительная ситуация
   */
  error?: TaxInfoRetrieveResponse.Error;

  /**
   * Данные о задолженностях и штрафах
   */
  fines_debts?: Array<TaxInfoRetrieveResponse.FinesDebt>;

  /**
   * Данные об уплаченных налогах
   */
  paid_taxes?: Array<TaxInfoRetrieveResponse.PaidTax>;

  /**
   * Данные о налоговых нарушениях
   */
  tax_offences?: Array<TaxInfoRetrieveResponse.TaxOffence>;
}

export namespace TaxInfoRetrieveResponse {
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

  /**
   * Данные о задолженностях и штрафах
   */
  export interface FinesDebt {
    /**
     * Сведения о задолженности по налогам, пеням и штрафам
     */
    arrears_sum_infos?: Array<FinesDebt.ArrearsSumInfo>;

    /**
     * Дата формирования документа
     */
    doc_creation_date?: string;

    /**
     * Дата, по состоянию на которую, подготовлены данные для публикации
     */
    doc_preparation_date?: string;
  }

  export namespace FinesDebt {
    /**
     * Сведения о налогах
     */
    export interface ArrearsSumInfo {
      /**
       * Сумма штрафа
       */
      fine_sum?: number;

      /**
       * Сумма пени
       */
      penalty_sum?: number;

      /**
       * Сумма недоимки по налогу
       */
      tax_arrears_sum?: number;

      /**
       * Наименование налога (сбора, страховых взносов), денежного взыскания
       */
      tax_name?: string;

      /**
       * Общая сумма недоимки по налогу, пени и штрафу
       */
      total_sum?: number;
    }
  }

  /**
   * Данные об уплаченных налогах
   */
  export interface PaidTax {
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
    tax_info_list?: Array<PaidTax.TaxInfoList>;
  }

  export namespace PaidTax {
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
   * Данные о налоговых нарушениях
   */
  export interface TaxOffence {
    /**
     * Дата документа
     */
    doc_date?: string;

    /**
     * Дата, по состоянию на которую, подготовлены данные для публикации
     */
    status_date?: string;

    /**
     * Сумма штрафа
     */
    sum?: number;
  }
}

export interface TaxInfoRetrieveParams {
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

export declare namespace TaxInfo {
  export {
    type TaxInfoRetrieveResponse as TaxInfoRetrieveResponse,
    type TaxInfoRetrieveParams as TaxInfoRetrieveParams,
  };
}
