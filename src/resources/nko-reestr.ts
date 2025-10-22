// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class NkoReestr extends APIResource {
  /**
   * Получить информацию о принадлежности контрагента к НКО
   */
  retrieve(query: NkoReestrRetrieveParams, options?: RequestOptions): APIPromise<NkoReestrRetrieveResponse> {
    return this._client.get('/v1/nkoReestr', { query, ...options });
  }
}

/**
 * Реестр НКО
 */
export interface NkoReestrRetrieveResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Исключительная ситуация
   */
  error?: NkoReestrRetrieveResponse.Error;

  nko_info?: Array<NkoReestrRetrieveResponse.NkoInfo>;
}

export namespace NkoReestrRetrieveResponse {
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
   * Записи из реестра НКО
   */
  export interface NkoInfo {
    /**
     * Адрес
     */
    address?: string;

    /**
     * Наименование вида организационно-правовой формы организации
     */
    forma?: string;

    /**
     * Полное наименование организации
     */
    name?: string;

    /**
     * Идентификатор записи
     */
    nko_id?: number;

    /**
     * Дата вступления организации в реестр
     */
    ogrn_date?: string;

    /**
     * Наименование реестра, в который входит организация
     */
    reestr_name?: string;

    /**
     * Номер, присваиваемый организации в системе
     */
    reg_number?: string;

    /**
     * Регион, в котором осуществляет деятельность НКО
     */
    region?: string;

    /**
     * Статус НКО
     */
    status_nko?: 'Исключена' | 'Зарегистрирована';
  }
}

export interface NkoReestrRetrieveParams {
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

export declare namespace NkoReestr {
  export {
    type NkoReestrRetrieveResponse as NkoReestrRetrieveResponse,
    type NkoReestrRetrieveParams as NkoReestrRetrieveParams,
  };
}
