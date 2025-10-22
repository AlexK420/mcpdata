// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GovernmentContractsStat extends APIResource {
  /**
   * Получить статистику по госконтрактам контрагента по информации из ЕИС Закупки
   */
  retrieve(
    query: GovernmentContractsStatRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GovernmentContractsStatRetrieveResponse> {
    return this._client.get('/v1/governmentContractsStat', { query, ...options });
  }
}

/**
 * Данные по статистике о госконтрактах
 */
export interface GovernmentContractsStatRetrieveResponse {
  /**
   * Исключительная ситуация
   */
  error?: GovernmentContractsStatRetrieveResponse.Error;

  /**
   * Статистика
   */
  stat?: Array<GovernmentContractsStatRetrieveResponse.Stat>;

  /**
   * Аннулирован
   */
  status_canceled?: number;

  /**
   * Исполнение
   */
  status_execution?: number;

  /**
   * Исполнение завершено
   */
  status_execution_completed?: number;

  /**
   * Исполнение прекращено
   */
  status_execution_terminated?: number;
}

export namespace GovernmentContractsStatRetrieveResponse {
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
   * Статистика
   */
  export interface Stat {
    /**
     * Количество контрактов
     */
    amount?: number;

    /**
     * Количество контрактов с неустойкой
     */
    count_with_penalty?: number;

    /**
     * Сумма неустоек
     */
    penalty_sum?: number;

    /**
     * Сумма
     */
    sum?: number;

    /**
     * Год
     */
    year?: string;
  }
}

export interface GovernmentContractsStatRetrieveParams {
  /**
   * API-ключ.
   */
  key: string;

  /**
   * ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.
   */
  ogrn: string;

  /**
   * Тип госконтрактов **Возможные значения**:
   *
   * - `FZ44` - ФЗ-44
   * - `FZ223` - ФЗ-223
   * - `PP615` - ПП-615
   * - `ALL` - Все типы
   */
  type:
    | 'FZ44'
    | 'FZ223'
    | 'PP615'
    | 'FZ44_API'
    | 'FZ223_API'
    | 'PP615_API'
    | 'P_FZ44'
    | 'P_FZ44_API'
    | 'P_FZ223_API'
    | 'P_PP615'
    | 'RNP_FZ44'
    | 'RNP_FZ223'
    | 'ALL';
}

export declare namespace GovernmentContractsStat {
  export {
    type GovernmentContractsStatRetrieveResponse as GovernmentContractsStatRetrieveResponse,
    type GovernmentContractsStatRetrieveParams as GovernmentContractsStatRetrieveParams,
  };
}
