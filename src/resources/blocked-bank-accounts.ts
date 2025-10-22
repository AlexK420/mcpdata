// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BlockedBankAccounts extends APIResource {
  /**
   * Получить структурированные данные о решениях ФНС о приостановлении операций по
   * счетам юридических лиц и ИП
   */
  list(
    query: BlockedBankAccountListParams,
    options?: RequestOptions,
  ): APIPromise<BlockedBankAccountListResponse> {
    return this._client.get('/v1/blockedBankAccounts', { query, ...options });
  }
}

/**
 * Информация о решениях налоговых органов о приостановлении операций по счетам
 * компании
 */
export interface BlockedBankAccountListResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Информация о блокировках
   */
  blockages?: Array<BlockedBankAccountListResponse.Blockage>;

  /**
   * Дата и время выполнения live-запроса в ФНС
   */
  check_date?: string;

  /**
   * ИНН, по которому получены данные
   */
  inn?: string;

  /**
   * Сообщение о наличии блокировок
   */
  message?: string;

  /**
   * ОГРН, по которому получены данные
   */
  ogrn?: string;

  /**
   * Общее количество найденных записей
   */
  total_blockages_count?: number;
}

export namespace BlockedBankAccountListResponse {
  /**
   * Информация о блокировке
   */
  export interface Blockage {
    /**
     * БИК банка
     */
    bank_bic?: string;

    /**
     * Код налогового органа
     */
    code_tax_inspection?: string;

    /**
     * Дата приостановления операции по счетам
     */
    decision_date?: string;

    /**
     * Номер приостановления операции по счетам
     */
    decision_number?: string;

    /**
     * Код основания
     */
    reason_code?: string;
  }
}

export interface BlockedBankAccountListParams {
  /**
   * API-ключ.
   */
  key: string;

  /**
   * ИНН организации. Должен быть указан, если не указан ОГРН.
   */
  inn?: string;

  /**
   * ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.
   */
  ogrn?: string;
}

export declare namespace BlockedBankAccounts {
  export {
    type BlockedBankAccountListResponse as BlockedBankAccountListResponse,
    type BlockedBankAccountListParams as BlockedBankAccountListParams,
  };
}
