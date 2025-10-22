// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class OgrnsByAddress extends APIResource {
  /**
   * Получить список компаний по заданному адресу
   *
   * @example
   * ```ts
   * const ogrnsByAddress = await client.ogrnsByAddress.create({
   *   key: 'key',
   *   address:
   *     '420127, Россия, Татарстан респ., г. Казань, ул. Дементьева, д. 2в',
   * });
   * ```
   */
  create(
    params: OgrnsByAddressCreateParams,
    options?: RequestOptions,
  ): APIPromise<OgrnsByAddressCreateResponse> {
    const { key, ...body } = params;
    return this._client.post('/v1/ogrnsByAddress', { query: { key }, body, ...options });
  }
}

/**
 * Результат поиска компаний по адресу
 */
export interface OgrnsByAddressCreateResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Список компаний
   */
  counterparties?: Array<OgrnsByAddressCreateResponse.Counterparty>;

  /**
   * Исключительная ситуация
   */
  error?: OgrnsByAddressCreateResponse.Error;

  /**
   * Лимит записей на страницу (limit)
   */
  limit?: number;

  /**
   * Смещение выборки (offset)
   */
  offset?: number;

  /**
   * Общее количество компаний по запросу
   */
  total?: number;
}

export namespace OgrnsByAddressCreateResponse {
  /**
   * Список компаний
   */
  export interface Counterparty {
    /**
     * Признак активности контрагента (действующий/недействующий)
     */
    active?: boolean;

    /**
     * Основной ОКВЭД
     */
    activity_kind?: string;

    /**
     * Описание основного вида деятельности
     */
    activity_kind_dsc?: string;

    /**
     * Код основного вида деятельности
     */
    activity_kind_industry_code?: string;

    /**
     * Тип основного ОКВЭД (new/old): new - после изменений 2014 года, old - до него
     */
    activity_kind_mode?: string;

    /**
     * Адрес
     */
    address?: string;

    /**
     * Уставный капитал
     */
    charter_capital?: string;

    /**
     * Присылать уведомления на почту
     */
    enable_email_notification?: boolean;

    /**
     * Дата регистрации
     */
    establishment_date?: string;

    /**
     * Последний год сданной отчетности БФО
     */
    fin_report_year?: number;

    /**
     * Блок с информацией о группах (холдинги)
     */
    groups?: Counterparty.Groups;

    /**
     * ИНН контрагента
     */
    inn?: string;

    /**
     * Выручка за последний отчетный год (в тыс. рублей)
     */
    last_income?: number;

    /**
     * Руководитель
     */
    manager_name?: string;

    /**
     * Должность руководителя
     */
    manager_position?: string;

    /**
     * Что совпало в поиске (значение)
     */
    match?: string;

    /**
     * Совпадение по актуальным данным или историческим (например, бывшим
     * руководителям)
     */
    match_actual?: boolean;

    /**
     * Тип/описание совпадения - что именно совпало (какое поле/домен)
     */
    match_dsc?: string;

    /**
     * Наименование контрагента (краткое, при его отсутствии - полное)
     */
    name?: string;

    /**
     * ОГРН контрагента
     */
    ogrn?: string;

    /**
     * Регион
     */
    region?: string;

    /**
     * Регион (код)
     */
    region_code?: string;

    /**
     * Тип: ul - ЮЛ, ip - ИП
     */
    type?: string;
  }

  export namespace Counterparty {
    /**
     * Блок с информацией о группах (холдинги)
     */
    export interface Groups {
      holding?: Groups.Holding;

      holding_by_active?: Groups.HoldingByActive;

      metagroup?: Groups.Metagroup;

      metagroup_by_active?: Groups.MetagroupByActive;

      network?: Groups.Network;

      network_by_active?: Groups.NetworkByActive;
    }

    export namespace Groups {
      export interface Holding {
        ogrn?: string;

        share?: number;

        size?: number;
      }

      export interface HoldingByActive {
        ogrn?: string;

        share?: number;

        size?: number;
      }

      export interface Metagroup {
        ogrn?: string;

        share?: number;

        size?: number;
      }

      export interface MetagroupByActive {
        ogrn?: string;

        share?: number;

        size?: number;
      }

      export interface Network {
        ogrn?: string;

        share?: number;

        size?: number;
      }

      export interface NetworkByActive {
        ogrn?: string;

        share?: number;

        size?: number;
      }
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

export interface OgrnsByAddressCreateParams {
  /**
   * Query param: API-ключ.
   */
  key: string;

  /**
   * Body param: Адрес
   */
  address: string;

  /**
   * Body param: Количество записей (максимум 100)
   */
  limit?: number;

  /**
   * Body param: Смещение выборки (offset)
   */
  offset?: number;
}

export declare namespace OgrnsByAddress {
  export {
    type OgrnsByAddressCreateResponse as OgrnsByAddressCreateResponse,
    type OgrnsByAddressCreateParams as OgrnsByAddressCreateParams,
  };
}
