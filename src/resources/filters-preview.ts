// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class FiltersPreview extends APIResource {
  /**
   * Получить краткую информацию (предпросмотр) по фильтрам/условиям: оквэд, регионы
   * и т.д.
   *
   * @example
   * ```ts
   * const filtersPreview = await client.filtersPreview.create({
   *   key: 'key',
   *   limit: 0,
   *   offset: 0,
   * });
   * ```
   */
  create(
    params: FiltersPreviewCreateParams,
    options?: RequestOptions,
  ): APIPromise<FiltersPreviewCreateResponse> {
    const { key, limit, offset, ...body } = params;
    return this._client.post('/v1/filtersPreview', { query: { key, limit, offset }, body, ...options });
  }
}

/**
 * Информация о запрашиваемых контрагентах для препросмотра
 */
export interface FiltersPreviewCreateResponse {
  /**
   * Информация о запрашиваемых контрагентах для препросмотра
   */
  data?: Array<FiltersPreviewCreateResponse.Data>;

  limit?: number;

  offset?: number;

  total?: number;
}

export namespace FiltersPreviewCreateResponse {
  /**
   * Информация о контрагенте для предпросмотра
   */
  export interface Data {
    /**
     * Основной ОКВЭД
     */
    activity_kind?: string;

    /**
     * Описание сертификата
     */
    cert_product_name?: string;

    /**
     * Подходящие значения по контрактам
     */
    contracts_match?: Data.ContractsMatch;

    /**
     * Описание декларации
     */
    decl_product_name?: string;

    /**
     * Выручка
     */
    income?: number;

    /**
     * ИНН
     */
    inn?: string;

    /**
     * Подходящий договор лизинга
     */
    leases_match?: Data.LeasesMatch;

    /**
     * Подходящие значения по лицензии
     */
    license_match?: Data.LicenseMatch;

    /**
     * Руководитель или управляющая компания
     */
    manager?: string;

    /**
     * Название
     */
    name?: string;

    /**
     * Прибыль
     */
    net_income?: number;

    /**
     * ОГРН/ОГРНИП
     */
    ogrn?: string;

    /**
     * Регион/Область
     */
    region?: string;

    /**
     * Подходящие значения по руководителю/участнику/инн/огрн/названию
     */
    registry_subject_match?: Data.RegistrySubjectMatch;

    /**
     * Тип субъекта
     */
    type?: string;

    /**
     * Подходящая вакансия
     */
    vacancy_match?: Data.VacancyMatch;
  }

  export namespace Data {
    /**
     * Подходящие значения по контрактам
     */
    export interface ContractsMatch {
      /**
       * Дата договора
       */
      contract_date?: string;

      /**
       * Статус контракта
       */
      contract_status?: string;

      /**
       * ОКПД2
       */
      okpd2_code?: string;

      /**
       * Наименование позиции
       */
      position_name?: string;

      /**
       * Всего позиций в договоре
       */
      positions_count?: number;

      /**
       * Цена контракта
       */
      price?: number;

      /**
       * Номер закупки
       */
      purchase_notice_number?: string;

      /**
       * Регистрационный номер в ЕИС
       */
      reg_number?: string;

      /**
       * Регион (код субъекта РФ)
       */
      region_code?: string;

      /**
       * Роль контрагента
       */
      role?: 'SUPPLIER' | 'CUSTOMER';

      /**
       * Всего договоров, подходящих под условие
       */
      total_count?: number;

      /**
       * Тип контракта (FZ44, FZ223)
       */
      type?: string;
    }

    /**
     * Подходящий договор лизинга
     */
    export interface LeasesMatch {
      active?: boolean;

      /**
       * Тип лизинга (код)
       */
      code?: string;

      /**
       * Дата контракта
       */
      contract_date?: string;

      /**
       * Номер контракта
       */
      contract_number?: string;

      /**
       * Описание
       */
      desc?: string;

      /**
       * Название
       */
      name?: string;

      /**
       * Роль
       */
      role?: 'Lessor' | 'Lessee';

      /**
       * Дата начала финансовой аренды
       */
      start_date?: string;

      /**
       * Дата окончания финансовой аренды
       */
      stop_date?: string;

      /**
       * Причина остановки аренды
       */
      stop_reason?: string;

      /**
       * Всего предметов лизинга в договоре
       */
      subjects_count?: number;

      /**
       * Всего договоров, подходящих под условие
       */
      total_count?: number;
    }

    /**
     * Подходящие значения по лицензии
     */
    export interface LicenseMatch {
      code?: string;

      name?: string;
    }

    /**
     * Подходящие значения по руководителю/участнику/инн/огрн/названию
     */
    export interface RegistrySubjectMatch {
      role?: string;

      value?: string;
    }

    /**
     * Подходящая вакансия
     */
    export interface VacancyMatch {
      active?: boolean;

      /**
       * Описание
       */
      desc?: string;

      /**
       * До
       */
      max?: number;

      /**
       * От
       */
      min?: number;

      /**
       * Название
       */
      name?: string;

      /**
       * Всего вакансий, подходящих под условие
       */
      total_hh_count?: number;

      total_trud_count?: number;

      /**
       * Тип
       */
      type?: 'HH_VACANCIES' | 'VACANCIES' | 'ALL';
    }
  }
}

export interface FiltersPreviewCreateParams {
  /**
   * Query param: API-ключ.
   */
  key: string;

  /**
   * Query param: Лимит.
   */
  limit: number;

  /**
   * Query param: Оффсет.
   */
  offset: number;

  /**
   * Body param: Тип объединения условий контактной информации (AND - все условия
   * должны выполняться, OR - хотя бы одно)
   */
  contact_conditions_operator?: 'AND' | 'OR';

  /**
   * Body param: Запрос по контрактам
   */
  contracts?: FiltersPreviewCreateParams.Contracts;

  /**
   * Body param: Возможные типы контрагентов
   */
  counterparty_type?: 'ul' | 'ip' | 'fl' | 'all';

  /**
   * Body param: Статус компании в ЕГРЮЛ
   */
  egr_statuses?: Array<string>;

  /**
   * Body param: Дата создания компании: с
   */
  establishment_date_from?: string;

  /**
   * Body param: Дата создания компании: по
   */
  establishment_date_to?: string;

  /**
   * Body param: Исключить список ОКВЭД (компаний с какими оквэдами быть не должно)
   * для выгрузки. По умолчанию применяется только к основным ОКВЭД, для применения к
   * дополнительным необходимо устанавливать свойство exclude_only_main_okveds =
   * false.
   */
  exclude_okveds?: Array<string>;

  /**
   * Body param: Применять поле exclude_okveds только к основным ОКВЭД компаний. По
   * умолчанию true - исключать из выборке только те компании, у которых значения
   * exclude_okveds среди основных ОКВЭД
   */
  exclude_only_main_okveds?: boolean;

  /**
   * Body param: По какому отчетному финансовому году применяем фильтр по
   * выручке/прибыли. Если 0, то смотрим за последний известный год (когда компания
   * подавала отчетность)
   */
  finance_report_year?: number;

  /**
   * Body param: Запрос по финансам
   */
  finance_request?: FiltersPreviewCreateParams.FinanceRequest;

  /**
   * Body param: Флаг - выгружать только те, у которых есть выручка
   */
  has_income?: boolean;

  /**
   * Body param: Выручка за последний год (в тыс. рублей): с
   */
  income_from?: number;

  /**
   * Body param: Выручка за последний год (в тыс. рублей): по
   */
  income_to?: number;

  /**
   * Body param: Запрос по договорам лизинга
   */
  leases?: FiltersPreviewCreateParams.Leases;

  /**
   * Body param: Список номеров лицензий
   */
  licenses?: Array<number>;

  /**
   * Body param: Категории МСП. Возможные варианты: 0 - не в МСП (никогда не состоял
   * или вышел), 1 - микропредприятие, 2 - малое предприятие, 3 - среднее предприятие
   */
  msp_categories?: Array<string>;

  /**
   * Body param: Прибыль за последний год (в тыс. рублей): с
   */
  net_income_from?: number;

  /**
   * Body param: Прибыль за последний год (в тыс. рублей): по
   */
  net_income_to?: number;

  /**
   * Body param: Список ОКВЭД для выгрузки
   */
  okveds?: Array<string>;

  /**
   * Body param: Флаг - только действующие компании
   */
  only_active?: boolean;

  /**
   * Body param: Вернуть только аккредитованные ИТ-компании
   */
  only_it_companies?: boolean;

  /**
   * Body param: Поиск указанных в поле "okveds" видов деятельности среди основных
   * ОКВЭДов компаний. По умолчанию true.
   */
  only_main_okveds?: boolean;

  /**
   * Body param: Производство инновационной, высокотехнологичной продукции
   */
  only_msp_innovative?: boolean;

  /**
   * Body param: Является партнером
   */
  only_msp_partner?: boolean;

  /**
   * Body param: Социальное предприятие
   */
  only_msp_social?: boolean;

  /**
   * Body param: Только члены СРО НОПРИЗ
   */
  only_nopriz_members?: boolean;

  /**
   * Body param: Только члены СРО НОСТРОЙ
   */
  only_nostroy_members?: boolean;

  /**
   * Body param: Только с наличием данных БФО за выбранный год
   */
  only_with_bfo?: boolean;

  /**
   * Body param: Наличие у контрагента минимум одной электронной почты
   */
  only_with_emails?: boolean;

  /**
   * Body param: Наличие у контрагента минимум одного номера телефона
   */
  only_with_phones?: boolean;

  /**
   * Body param: Наличие у контрагента минимум одного сайта
   */
  only_with_websites?: boolean;

  /**
   * Body param: Код ОПФ или тип контрагента (ip, ul)
   */
  opf_codes?: Array<string>;

  /**
   * Body param: Коды регионов
   */
  region_codes?: Array<string>;

  /**
   * Body param: Реестр деклараций/сертификатов соответствия
   */
  rosaccreditations?: FiltersPreviewCreateParams.Rosaccreditations;

  /**
   * Body param: Поисковые термины (каждый элемент — отдельное условие ИЛИ) для
   * свободного поиска
   */
  search_terms?: Array<string>;

  /**
   * Body param: Свободное поле поиска
   */
  search_text?: string;

  /**
   * Body param: Численность сотрудников: от
   */
  ssch_from?: number;

  /**
   * Body param: Численность сотрудников: по
   */
  ssch_to?: number;

  /**
   * Body param: Список видов/форм поддержки
   */
  support_forms?: Array<number>;

  /**
   * Body param: Запрос по вакансиям
   */
  vacancies?: FiltersPreviewCreateParams.Vacancies;
}

export namespace FiltersPreviewCreateParams {
  /**
   * Запрос по контрактам
   */
  export interface Contracts {
    /**
     * Дата заключения контракта: С (включительно)
     */
    contract_date_from?: string;

    /**
     * Дата заключения контракта: По (включительно)
     */
    contract_date_to?: string;

    /**
     * Тип контракта (FZ44, FZ223 и др.)
     */
    contract_type?: 'FZ44' | 'FZ223' | 'ALL';

    /**
     * Наличие контрактов
     */
    has_contracts?: boolean;

    /**
     * Максимальная сумма контракта
     */
    max_price?: number;

    /**
     * Минимальная сумма контракта
     */
    min_price?: number;

    /**
     * Коды ОКПД2 предмета контракта
     */
    okpd2_codes?: Array<string>;

    /**
     * Только активные контракты
     */
    only_active?: boolean;

    /**
     * Регион (код субъекта РФ)
     */
    region_code?: string;

    /**
     * Роль контрагента
     */
    role?: 'SUPPLIER' | 'CUSTOMER';

    /**
     * Поисковые термины (каждый элемент — отдельное условие ИЛИ)
     */
    search_terms?: Array<string>;

    /**
     * Ключевые слова для поиска в предмете контракта
     */
    search_text?: string;
  }

  /**
   * Запрос по финансам
   */
  export interface FinanceRequest {
    /**
     * Финансовые метрики для анализа
     */
    metrics: Array<'Выручка' | 'Чистая прибыль' | 'INCOME' | 'NET_INCOME'>;

    /**
     * Динамика выбранных метрик: рост от (в %)
     */
    growth_from?: number;

    /**
     * Динамика выбранных метрик: рост до (в %)
     */
    growth_to?: number;

    /**
     * Применять условия по росту к каждому году (год к году), а не только к первому и
     * последнему
     */
    year_by_year?: boolean;

    /**
     * Количество лет для анализа динамики
     */
    years_count?: number;
  }

  /**
   * Запрос по договорам лизинга
   */
  export interface Leases {
    /**
     * Роль контрагента
     */
    role: 'Lessor' | 'Lessee';

    /**
     * Коды типа лизинга из классификатора (справочника)
     */
    classifier_codes?: Array<string>;

    /**
     * Дата заключения договора: С (включительно)
     */
    contract_date_from?: string;

    /**
     * Дата заключения договора: По (включительно)
     */
    contract_date_to?: string;

    /**
     * Слова-исключения в реквизитах договора
     */
    excluded_text?: string;

    /**
     * Наличие договоров лизинга
     */
    has_leases?: boolean;

    /**
     * Только активные договора
     */
    only_active?: boolean;

    /**
     * Поисковые термины (каждый элемент — отдельное условие ИЛИ) в реквизитах договора
     */
    search_terms?: Array<string>;

    /**
     * Ключевые слова для поиска в реквизитах договора
     */
    search_text?: string;

    /**
     * Дата прекращения договора: С (включительно)
     */
    stop_date_from?: string;

    /**
     * Дата прекращения договора: По (включительно)
     */
    stop_date_to?: string;
  }

  /**
   * Реестр деклараций/сертификатов соответствия
   */
  export interface Rosaccreditations {
    /**
     * Тип заявителя
     */
    applicant_type?: Array<
      'Продавец' | 'Изготовитель' | 'Иcполнитель' | 'Уполномоченное изготовителем лицо' | 'Поставщик'
    >;

    /**
     * Слова в описании документа Росаккредитации
     */
    description?: string;

    /**
     * Поисковые термины (каждый элемент — отдельное условие ИЛИ) в описании документа
     * Росаккредитации
     */
    search_terms?: Array<string>;

    /**
     * Статус декларации или сертификата
     */
    statuses?: Array<
      | 'Архивный'
      | 'Возобновлён'
      | 'Выдано предписание'
      | 'Действует'
      | 'Недействителен'
      | 'Прекращён'
      | 'Приостановлен'
      | 'Продлен'
      | 'Направлено уведомление о прекращении'
      | 'Черновик'
      | 'Ожидает проверки оператора реестра'
    >;

    /**
     * Тип документа
     */
    type?: 'Декларация' | 'Сертификат' | 'Декларация или сертификат';
  }

  /**
   * Запрос по вакансиям
   */
  export interface Vacancies {
    /**
     * Слово в названии или описании вакансии, которого быть не должно
     */
    excluded_text?: string;

    /**
     * Наличие вакансий
     */
    has_vacancies?: boolean;

    /**
     * Вакансия должна быть активной
     */
    only_active?: boolean;

    /**
     * Искать поисковые слова/термины (или слова исключения) только в названии вакансии
     * (без описания). То есть, применять условия text, search_terms, excluded_text
     * только к названию вакансии (значение true) или к названию и описанию (значение
     * false, по умолчанию)
     */
    only_name?: boolean;

    /**
     * Зарплата: до
     */
    salary_max?: number;

    /**
     * Зарплата: от
     */
    salary_min?: number;

    /**
     * Поисковые термины (каждый элемент — отдельное условие ИЛИ) в названии или
     * описании вакансии
     */
    search_terms?: Array<string>;

    /**
     * Источник вакансий
     */
    source?: 'HH_VACANCIES' | 'VACANCIES' | 'ALL';

    /**
     * Слово в названии или описании вакансии
     */
    text?: string;
  }
}

export declare namespace FiltersPreview {
  export {
    type FiltersPreviewCreateResponse as FiltersPreviewCreateResponse,
    type FiltersPreviewCreateParams as FiltersPreviewCreateParams,
  };
}
