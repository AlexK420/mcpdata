// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class TaxpayerStatuses extends APIResource {
  /**
   * Получить данные о статусе самозанятого налогоплательщика по ИНН
   *
   * @example
   * ```ts
   * const taxpayerStatus = await client.taxpayerStatuses.create(
   *   { key: 'key' },
   * );
   * ```
   */
  create(
    params: TaxpayerStatusCreateParams,
    options?: RequestOptions,
  ): APIPromise<TaxpayerStatusCreateResponse> {
    const { key, ...body } = params;
    return this._client.post('/v1/taxpayerStatuses', { query: { key }, body, ...options });
  }
}

/**
 * Статусы самозанятых
 */
export interface TaxpayerStatusCreateResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Статусы самозанятых
   */
  data?: Array<TaxpayerStatusCreateResponse.Data>;
}

export namespace TaxpayerStatusCreateResponse {
  /**
   * Статус самозанятого налогоплательщика
   */
  export interface Data {
    /**
     * ИНН
     */
    inn?: string;

    /**
     * Дата статуса самозанятого
     */
    status_date?: string;

    taxpayer?: boolean;
  }
}

export interface TaxpayerStatusCreateParams {
  /**
   * Query param: API-ключ.
   */
  key: string;

  /**
   * Body param: Список ИНН
   */
  inns?: Array<string>;
}

export declare namespace TaxpayerStatuses {
  export {
    type TaxpayerStatusCreateResponse as TaxpayerStatusCreateResponse,
    type TaxpayerStatusCreateParams as TaxpayerStatusCreateParams,
  };
}
