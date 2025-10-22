// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class OkpdList extends APIResource {
  /**
   * Получить список всех ОКПД (ОКПД2) компании, на основании данных в ЕИС Закупки
   */
  list(query: OkpdListListParams, options?: RequestOptions): APIPromise<OkpdListListResponse> {
    return this._client.get('/v1/okpdList', { query, ...options });
  }
}

/**
 * Данные об ОКПД огранизации
 */
export interface OkpdListListResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Список ОКПД огранизации
   */
  data?: Array<OkpdListListResponse.Data>;

  /**
   * Исключительная ситуация
   */
  error?: OkpdListListResponse.Error;
}

export namespace OkpdListListResponse {
  /**
   * Данные об ОКПД организации
   */
  export interface Data {
    /**
     * Номер позиции
     */
    number?: string;

    /**
     * Код ОКПД
     */
    okpd_code?: string;

    /**
     * Наименование ОКПД
     */
    okpd_name?: string;

    /**
     * Код ОКПД2
     */
    okpd2_code?: string;

    /**
     * Наименование ОКПД2
     */
    okpd2_name?: string;
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

export interface OkpdListListParams {
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

export declare namespace OkpdList {
  export { type OkpdListListResponse as OkpdListListResponse, type OkpdListListParams as OkpdListListParams };
}
