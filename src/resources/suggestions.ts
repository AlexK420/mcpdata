// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Suggestions extends APIResource {
  /**
   * Получить список первых 10 подходящих контрагентов, соответствующих входному
   * значению
   *
   * Поддерживаются следующие виды поиска:
   *
   * - `ОГРН`
   * - `ИНН`
   * - `Название ЮЛ/ИП, в том числе неполное наименование (например, "Датаном" вместо "Датаномика")`
   * - `Транслитерированное название ЮЛ`
   * - `Название ЮЛ, написанное в неправильной раскладке клавиатуры`
   * - `Неточное название ЮЛ/ИП (с опечатками)`
   *
   * @example
   * ```ts
   * const suggestion = await client.suggestions.create({
   *   key: 'key',
   *   search_query: 'Датаном',
   * });
   * ```
   */
  create(params: SuggestionCreateParams, options?: RequestOptions): APIPromise<SuggestionCreateResponse> {
    const { key, ...body } = params;
    return this._client.post('/v1/suggestions', { query: { key }, body, ...options });
  }
}

/**
 * Ответ в подсказках с набором подходящих запросу контрагентов
 */
export interface SuggestionCreateResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  count?: SuggestionCreateResponse.Count;

  data?: Array<SuggestionCreateResponse.Data>;
}

export namespace SuggestionCreateResponse {
  export interface Count {
    ip?: number;

    total?: number;

    ul?: number;
  }

  /**
   * Список компаний
   */
  export interface Data {
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
    groups?: Data.Groups;

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

  export namespace Data {
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
}

export interface SuggestionCreateParams {
  /**
   * Query param: API-ключ.
   */
  key: string;

  /**
   * Body param: Поисковое значение (ОГРН/ИНН/наименование)
   */
  search_query: string;

  /**
   * Body param: Признак, позволяющий искать только среди действующих контрагентов
   */
  is_active?: boolean;

  /**
   * Body param: Возможные типы контрагентов
   */
  type?: 'ul' | 'ip' | 'fl' | 'all';
}

export declare namespace Suggestions {
  export {
    type SuggestionCreateResponse as SuggestionCreateResponse,
    type SuggestionCreateParams as SuggestionCreateParams,
  };
}
