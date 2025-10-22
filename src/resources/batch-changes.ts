// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BatchChanges extends APIResource {
  /**
   * Получить изменения по списку контрагентов с определенной даты. Можно смотреть
   * изменения за день, за неделю, за квартал, а также за произвольный период
   * времени. Можно получить историю изменений выбранных параметров за произвольный
   * период времени. Отслеживаются:
   *
   * - ИНН, ОГРН, КПП
   * - Статус по ЕГРЮЛ/ЕГРИП
   * - Название:
   *   - Полное
   *   - Краткое
   *   - Организационно-правовая форма (ОПФ)
   *   - Код ОПФ по ЕГРЮЛ
   * - Адрес местонахождения
   * - Единоличный исполнительный орган:
   *   - Руководитель
   *   - Управляющая компания
   * - Участники
   * - Уставный капитал:
   *   - Размер
   *   - Тип
   * - Реестр МСП:
   *   - Статус
   *   - Категория отнесения
   * - Недостоверность:
   *   - Учредителей
   *   - Руководителей
   *   - Управляющей компании
   *   - Адреса
   * - Дисквалификация:
   *   - Учредителей
   *   - Руководителей
   * - Налоговые режимы
   * - Бухгалтерская (финансовая) отчетность
   * - ОКВЭД (добавление, изменение, удаление)
   *
   * Максимальное количество контрагентов в одном запросе - 500. Для получения ключа
   * к этой точке API [напишите нам](mailto:info@datanomica.org).
   *
   * @example
   * ```ts
   * const batchChange = await client.batchChanges.create({
   *   key: 'key',
   * });
   * ```
   */
  create(params: BatchChangeCreateParams, options?: RequestOptions): APIPromise<BatchChangeCreateResponse> {
    const { key, ...body } = params;
    return this._client.post('/v1/batchChanges', { query: { key }, body, ...options });
  }
}

/**
 * Результат проверки изменений по контрагентам
 */
export interface BatchChangeCreateResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Список измененных параметров
   */
  monitoring_responses?: Array<BatchChangeCreateResponse.MonitoringResponse>;
}

export namespace BatchChangeCreateResponse {
  /**
   * Результат проверки изменений по контрагенту
   */
  export interface MonitoringResponse {
    /**
     * Список измененных параметров
     */
    changed_parameters?: Array<MonitoringResponse.ChangedParameter>;

    /**
     * Количество параметров контрагента которые изменились.
     */
    changed_parameters_count?: number;

    /**
     * ОГРН контрагента
     */
    ogrn?: string;
  }

  export namespace MonitoringResponse {
    /**
     * Отслеживаемый параметр контрагента
     */
    export interface ChangedParameter {
      /**
       * Наименование параметра, список:
       *
       * - ИНН
       * - ОГРН
       * - КПП
       * - Полное наименование
       * - Краткое наименование
       * - ОПФ
       * - Код ОПФ по ЕГРЮЛ
       * - Признак недостоверности адреса
       * - Статус по ЕГРЮЛ/ЕГРИП
       * - Размер уставного капитала
       * - Тип уставного капитала
       * - Юр. адрес
       * - ОКВЭД (добавление новых, удаление старых)
       * - Участники
       * - Руководители
       * - Управляющая компания
       * - Статус МСП
       * - Категория МСП
       * - Отчет (БФО)
       * - Банкротство
       * - Суд
       */
      type?:
        | 'REPORT'
        | 'MSP_STATUS'
        | 'MSP_CATEGORY'
        | 'MANAGEMENT_COMPANY'
        | 'OGRN'
        | 'INN'
        | 'KPP'
        | 'FULL_NAME'
        | 'SHORT_NAME'
        | 'OPF'
        | 'OPF_CODE'
        | 'ADDRESS_FALSE_INFO'
        | 'OKVED'
        | 'OWNERS'
        | 'MANAGERS'
        | 'EGR_STATUS'
        | 'COUNTERPARTY_CREATION'
        | 'REG_ADDRESS'
        | 'CAPITAL_TABLE_SIZE'
        | 'CAPITAL_TABLE_TYPE'
        | 'DISQUALIFIED_OWNER'
        | 'DISQUALIFIED_MANAGER'
        | 'OWNERS_FALSE_INFO'
        | 'MANAGERS_FALSE_INFO'
        | 'MANAGEMENT_COMPANY_FALSE_INFO'
        | 'TAX_MODE_ESHN_SIGN'
        | 'TAX_MODE_USN_SIGN'
        | 'TAX_MODE_ENVD_SIGN'
        | 'TAX_MODE_SRP_SIGN'
        | 'TAX_MODE_AUSN_SIGN'
        | 'BANKRUPTCY'
        | 'CASE_RESPONDENT'
        | 'CASE_PLAINTIFF'
        | 'CASE_THIRD_PARTY'
        | 'CASE_INTERESTED_PERSONS'
        | 'CASE_CREDITOR'
        | 'CASE_APPLICANT'
        | 'CASE_DEBTOR'
        | 'CASE_CREDITOR_CURRENT_PAYMENTS'
        | 'CASE_OTHER'
        | 'ALL';

      /**
       * Описание параметра
       */
      type_description?: string;

      /**
       * Дата изменения на актуальное значение, в случае отсутствия изменений может быть
       * пустым
       */
      updated_at?: string;

      /**
       * Значения параметра
       */
      values?: Array<ChangedParameter.Value>;
    }

    export namespace ChangedParameter {
      /**
       * Значения параметра
       */
      export interface Value {
        /**
         * Новое, актуальное значение, на момент ответа
         */
        new?: string;

        /**
         * Старое значение, на запрашиваемый момент
         */
        old?: string;
      }
    }
  }
}

export interface BatchChangeCreateParams {
  /**
   * Query param: API-ключ.
   */
  key: string;

  /**
   * Body param: Включить историю изменений параметра
   */
  include_history?: boolean;

  /**
   * Body param: ОГРН компаний, по которым нужно получить изменения
   */
  ogrns?: Array<string>;

  /**
   * Body param: Параметры мониторинга. **Возможные значения типа изменений**:
   *
   * - `REPORT` — Бух/Фин отчетность (публикация нового отчета);
   * - `MSP_STATUS` — статус МСП;
   * - `MSP_CATEGORY` — категория МСП;
   * - `MANAGEMENT_COMPANY` — данные управляющей компании;
   * - `OGRN` — ОГРН;
   * - `INN` — ИНН;
   * - `KPP` — КПП;
   * - `FULL_NAME` — полное наименования компании;
   * - `SHORT_NAME` — краткое наименования компании;
   * - `OPF` — ОПФ (организационно-правовой формы) компании;
   * - `OPF_CODE` — код ОПФ;
   * - `ADDRESS_FALSE_INFO` — признак недостоверности адреса;
   * - `OKVED` — ОКВЭД;
   * - `OWNERS` — участники;
   * - `MANAGERS` — руководители;
   * - `EGR_STATUS` — статус организации в ЕГРЮЛ/ЕГРИП;
   * - `COUNTERPARTY_CREATION` — факт создания организации;
   * - `REG_ADDRESS` — адрес местонахождения организации;
   * - `CAPITAL_TABLE_SIZE` — размер уставного капитала;
   * - `CAPITAL_TABLE_TYPE` — тип уставного капитала;
   * - `DISQUALIFIED_OWNER` — дисквалификация участника;
   * - `DISQUALIFIED_MANAGER` — дисквалификация руководителей;
   * - `OWNERS_FALSE_INFO` — признак недостоверности участников;
   * - `MANAGERS_FALSE_INFO` — признак недостоверности руководителей;
   * - `MANAGEMENT_COMPANY_FALSE_INFO` — признак недостоверности управляющей
   *   компании;
   * - `TAX_MODE_ESHN_SIGN` — налоговый режим (ЕСХН);
   * - `TAX_MODE_USN_SIGN` — налоговый режим (УСН);
   * - `TAX_MODE_ENVD_SIGN` — налоговый режим (ЕНДВ);
   * - `TAX_MODE_SRP_SIGN` — налоговый режим (СРП);
   * - `TAX_MODE_AUSN_SIGN` — налоговый режим (АУСН);
   * - `ALL` — все параметры
   */
  param_types?: Array<
    | 'REPORT'
    | 'MSP_STATUS'
    | 'MSP_CATEGORY'
    | 'MANAGEMENT_COMPANY'
    | 'OGRN'
    | 'INN'
    | 'KPP'
    | 'FULL_NAME'
    | 'SHORT_NAME'
    | 'OPF'
    | 'OPF_CODE'
    | 'ADDRESS_FALSE_INFO'
    | 'OKVED'
    | 'OWNERS'
    | 'MANAGERS'
    | 'EGR_STATUS'
    | 'COUNTERPARTY_CREATION'
    | 'REG_ADDRESS'
    | 'CAPITAL_TABLE_SIZE'
    | 'CAPITAL_TABLE_TYPE'
    | 'DISQUALIFIED_OWNER'
    | 'DISQUALIFIED_MANAGER'
    | 'OWNERS_FALSE_INFO'
    | 'MANAGERS_FALSE_INFO'
    | 'MANAGEMENT_COMPANY_FALSE_INFO'
    | 'TAX_MODE_ESHN_SIGN'
    | 'TAX_MODE_USN_SIGN'
    | 'TAX_MODE_ENVD_SIGN'
    | 'TAX_MODE_SRP_SIGN'
    | 'TAX_MODE_AUSN_SIGN'
    | 'BANKRUPTCY'
    | 'CASE_RESPONDENT'
    | 'CASE_PLAINTIFF'
    | 'CASE_THIRD_PARTY'
    | 'CASE_INTERESTED_PERSONS'
    | 'CASE_CREDITOR'
    | 'CASE_APPLICANT'
    | 'CASE_DEBTOR'
    | 'CASE_CREDITOR_CURRENT_PAYMENTS'
    | 'CASE_OTHER'
    | 'ALL'
  >;

  /**
   * Body param: Дата начала мониторинга изменений
   */
  start_date?: string;
}

export declare namespace BatchChanges {
  export {
    type BatchChangeCreateResponse as BatchChangeCreateResponse,
    type BatchChangeCreateParams as BatchChangeCreateParams,
  };
}
