// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Counterparty extends APIResource {
  /**
   * Получить общую информацию о контрагенте из ЕГРЮЛ/ЕГРИП. Конкретное наполнение
   * зависит от переданных секций, описание которых приведено в параметрах запроса.
   */
  retrieve(
    query: CounterpartyRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CounterpartyRetrieveResponse> {
    return this._client.get('/v1/counterparty', { query, ...options });
  }
}

export interface CounterpartyRetrieveResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Информация о ЮЛ
   */
  company?: CounterpartyRetrieveResponse.Company;

  /**
   * Информация об ИП
   */
  individual?: CounterpartyRetrieveResponse.Individual;

  /**
   * ИНН
   */
  inn?: string;

  /**
   * ОГРН
   */
  ogrn?: string;
}

export namespace CounterpartyRetrieveResponse {
  /**
   * Информация о ЮЛ
   */
  export interface Company {
    /**
     * Адрес организации
     */
    address?: Company.Address;

    /**
     * Уставный капитал (в рублях)
     */
    charter_capital?: string;

    /**
     * Наименование организации
     */
    company_names?: Company.CompanyNames;

    /**
     * Контакты
     */
    contacts?: Company.Contacts;

    /**
     * Дата прекращения деятельности
     */
    dissolved_date?: string;

    /**
     * КПП организации
     */
    kpp?: string;

    /**
     * Управляющая компания
     */
    management_company?: Company.ManagementCompany;

    /**
     * Руководители (Имеющие право без доверенности действовать от имени ЮЛ)
     */
    managers?: Array<Company.Manager>;

    /**
     * Негативные списки
     */
    negative_lists?: Company.NegativeLists;

    /**
     * Список ОКВЭД
     */
    okveds?: Array<Company.Okved>;

    /**
     * ОПФ организации
     */
    opf?: string;

    /**
     * Участники (учредители)
     */
    owners?: Company.Owners;

    /**
     * Информация о правопредшественниках
     */
    predecessors?: Array<Company.Predecessor>;

    /**
     * Дата регистрации
     */
    registration_date?: string;

    /**
     * Коды Росстат (stat_registr)
     */
    ros_stat_codes?: Company.RosStatCodes;

    /**
     * Статус организации
     */
    status?: Company.Status;

    /**
     * Информация о правопреемниках
     */
    successors?: Array<Company.Successor>;

    /**
     * Информация о налоговом режиме
     */
    tax_mode_info?: Company.TaxModeInfo;

    /**
     * Среднесписочная численность по годам
     */
    workers_count?: { [key: string]: number };

    /**
     * Количество лет после регистрации
     */
    years_from_registration?: number;
  }

  export namespace Company {
    /**
     * Адрес организации
     */
    export interface Address {
      /**
       * Дата появления отметки о недостоверности адреса в ЕГРЮЛ
       */
      inaccuracy_date?: string;

      /**
       * Отметка о недостоверности адреса в ЕГРЮЛ (true - недостоверен)
       */
      is_inaccuracy?: boolean;

      /**
       * Адрес одной строкой
       */
      line_address?: string;

      /**
       * Код региона
       */
      region_code?: string;

      /**
       * Почтовый индекс
       */
      zip_code?: string;
    }

    /**
     * Наименование организации
     */
    export interface CompanyNames {
      /**
       * Полное наименование организации
       */
      full_name?: string;

      /**
       * Наименоввание, ОПФ
       */
      reversed_short_name?: string;

      /**
       * Краткое наименование организации
       */
      short_name?: string;
    }

    /**
     * Контакты
     */
    export interface Contacts {
      emails?: Array<Contacts.Email>;

      phones?: Array<Contacts.Phone>;

      websites?: Array<Contacts.Website>;
    }

    export namespace Contacts {
      /**
       * Контактные данные
       */
      export interface Email {
        /**
         * Нормализованный тип контакта
         */
        clean_contact_type?: 'email' | 'website' | 'phone' | 'address';

        /**
         * Значение контакта
         */
        value?: string;
      }

      /**
       * Контактные данные
       */
      export interface Phone {
        /**
         * Нормализованный тип контакта
         */
        clean_contact_type?: 'email' | 'website' | 'phone' | 'address';

        /**
         * Значение контакта
         */
        value?: string;
      }

      /**
       * Контактные данные
       */
      export interface Website {
        /**
         * Нормализованный тип контакта
         */
        clean_contact_type?: 'email' | 'website' | 'phone' | 'address';

        /**
         * Значение контакта
         */
        value?: string;
      }
    }

    /**
     * Управляющая компания
     */
    export interface ManagementCompany {
      /**
       * Дата
       */
      date?: string;

      /**
       * ИНН управляющей компании
       */
      inn?: string;

      /**
       * Название управляющей компании
       */
      name?: string;

      /**
       * ОГРН управляющей компании
       */
      ogrn?: string;
    }

    /**
     * Руководители (Имеющие право без доверенности действовать от имени ЮЛ)
     */
    export interface Manager {
      /**
       * ФИО руководителя
       */
      fio?: string;

      /**
       * Дата появления отметки о недостоверности руководителя в ЕГРЮЛ
       */
      inaccuracy_date?: string;

      /**
       * ИНН руководителя как физлица
       */
      innfl?: string;

      /**
       * Отметка о недостоверности руководителя в ЕГРЮЛ (true - достоверен, false -
       * недостоверен по ЕГРЮЛ)
       */
      is_inaccuracy?: boolean;

      /**
       * Должность руководителя
       */
      position?: string;
    }

    /**
     * Негативные списки
     */
    export interface NegativeLists {
      /**
       * Недостоверные данные об адресе по ЕГРЮЛ. Возвращается true или false.
       */
      address_false_info?: boolean | string;

      /**
       * Информация о дисквалифицированных лицах.
       */
      disqualified_details?: Array<NegativeLists.DisqualifiedDetail>;

      /**
       * ИП дисквалифицирован. Возвращается true или false.
       */
      disqualified_individual?: boolean | string;

      /**
       * Руководитель дисквалифицирован. Возвращается true или false.
       */
      disqualified_managers?: boolean | string;

      /**
       * Участник дисквалифицирован. Возвращается true или false.
       */
      disqualified_owners?: boolean | string;

      /**
       * Недостоверные данные по ЕГРЮЛ. В ЕГР есть отметка о недостоверности любого из
       * блоков: адрес, участник, руководитель, управляющая компания. Возвращается true
       * или false.
       */
      false_info?: boolean | string;

      /**
       * Находится в реестре ЮЛ, привлеченных за незаконное вознаграждение. Возвращается
       * true или false.
       */
      illegal_rewards?: boolean | string;

      /**
       * Детализация по ЮЛ, привлеченным за незаконное вознаграждение.
       */
      illegal_rewards_details?: Array<NegativeLists.IllegalRewardsDetail>;

      /**
       * Находится в санкционном списке EU. Возвращается true или false.
       */
      in_sanctions_eu?: boolean | string;

      /**
       * Состоит в санкционных списках
       */
      in_sanctions_list?: boolean;

      /**
       * Находится в санкционном списке OFAC. Возвращается true или false.
       */
      in_sanctions_ofac?: boolean | string;

      /**
       * Находится в санкционном списке RF. Возвращается true или false.
       */
      in_sanctions_rf?: boolean | string;

      /**
       * Находится в санкционном списке UK. Возвращается true или false.
       */
      in_sanctions_uk?: boolean | string;

      /**
       * Ограничение доступа к сведениям. Возвращается true или false.
       */
      information_limited?: boolean | string;

      /**
       * Недостоверные данные об управляющей компании по ЕГРЮЛ. Возвращается true или
       * false.
       */
      management_companies_false_info?: boolean | string;

      /**
       * Ограничение доступа к сведениям об управляющей компании. Возвращается true или
       * false.
       */
      management_companies_information_limited?: boolean | string;

      /**
       * Недостоверные данные о руководителе. Возвращается true или false.
       */
      managers_false_info?: boolean | string;

      /**
       * Ограничение доступа к сведениям о руководителе. Возвращается true или false.
       */
      managers_information_limited?: boolean | string;

      /**
       * Недостоверные данные об участнике по ЕГРЮЛ. Возвращается true или false.
       */
      owner_false_info?: boolean | string;

      /**
       * Ограничение доступа к сведениям об участнике. Возвращается true или false.
       */
      owners_information_limited?: boolean | string;

      /**
       * > 50% доля владения, принадлежащая санкционному лицу Возвращается true или
       * > false.
       */
      sanctions_rule_fifty?: boolean | string;

      /**
       * Руководитель в РНП. Возвращается true или false.
       */
      unscrupulous_manager?: boolean | string;

      /**
       * Участник в РНП. Возвращается true или false.
       */
      unscrupulous_owner?: boolean | string;

      /**
       * Содержится в реестре недобросовестных поставщиков по ФЗ 223. Возвращается true
       * или false.
       */
      unscrupulous_supplier223?: boolean | string;

      /**
       * Содержится в реестре недобросовестных поставщиков по ФЗ 44. Возвращается true
       * или false.
       */
      unscrupulous_supplier44?: boolean | string;

      /**
       * Содержится в реестре недобросовестных поставщиков по ПП 615. Возвращается true
       * или false.
       */
      unscrupulous_supplier615?: boolean | string;

      /**
       * Детализация по РНП в разрезе 44, 223, 615.
       */
      unscrupulous_suppliers_details?: { [key: string]: Array<NegativeLists.UnscrupulousSuppliersDetail> };
    }

    export namespace NegativeLists {
      /**
       * Информация о дисквалифицированных лицах.
       */
      export interface DisqualifiedDetail {
        birth_date?: string;

        birth_place?: string;

        company_ogrn?: string;

        disqualification_expiry_date?: string;

        disqualification_period?: string;

        disqualification_start_date?: string;

        full_name?: string;

        judge_full_name?: string;

        judge_position?: string;

        koap_article?: string;

        offence_org_name?: string;

        org_inn?: string;

        post?: string;

        protocol_made_org_name?: string;

        register_number?: string;
      }

      /**
       * Данные о ЮЛ или ИП внесенном в реестр неблагонадежных поставщиков (РНП)
       */
      export interface IllegalRewardsDetail {
        /**
         * Номер дела
         */
        case_number?: string;

        /**
         * Суд
         */
        court?: string;

        /**
         * Дата вступления в законную силу
         */
        effective_date?: string;

        /**
         * Дата вынеселения постановления
         */
        issue_date?: string;
      }

      /**
       * Данные о ЮЛ или ИП внесенном в реестр неблагонадежных поставщиков (РНП)
       */
      export interface UnscrupulousSuppliersDetail {
        /**
         * Кем внесена - наименование
         */
        approve_org_full_name?: string;

        /**
         * Кем внесена - номер
         */
        approve_org_reg_num?: string;

        /**
         * Ожидаемая дата исключения
         */
        auto_ex_date?: string;

        /**
         * Информация об исключении из РНП
         */
        exclude_info?: UnscrupulousSuppliersDetail.ExcludeInfo;

        /**
         * Наименование ЮЛ или ИП в РНП
         */
        full_name?: string;

        /**
         * Ссылка на запись о включении
         */
        info_url?: string;

        /**
         * ИНН ЮЛ или ИП в РНП
         */
        inn?: string;

        /**
         * Тип списка РНП, возможные значения: FZ44, FZ223, PP615
         */
        list_type?: string;

        /**
         * Причина внесения
         */
        reason?: string;

        /**
         * Дата внесения
         */
        reason_date?: string;

        /**
         * Номер внесения в РНП
         */
        reg_number?: string;

        /**
         * Статус: внесен в реестр недобросовестных поставщиков, исклюен из списка РНП
         */
        status?: string;
      }

      export namespace UnscrupulousSuppliersDetail {
        /**
         * Информация об исключении из РНП
         */
        export interface ExcludeInfo {
          /**
           * Дата исключения из РНП
           */
          exclude_date?: string;

          /**
           * Ссылка на запись об исключении из РНП
           */
          exclude_info_url?: string;

          /**
           * Тип исключения: AUTO - автоматически, по истечению даты, MANUAL - вручную
           */
          exclude_type?: string;

          /**
           * Номер записи в РНП
           */
          reg_number?: string;
        }
      }
    }

    /**
     * Оквэд
     */
    export interface Okved {
      /**
       * Код ОКВЭД
       */
      code?: string;

      /**
       * Признак основного ОКВЭД
       */
      main?: boolean;

      /**
       * - `new` - если данный ОКВЭД был введен после 2014 года (смена ОКВЭДов компаний);
       * - `old` - если данный ОКВЭД был введен до 2014 года.
       */
      mode?: 'new' | 'old';

      /**
       * Значение (расшифровка)
       */
      value?: string;
    }

    /**
     * Участники (учредители)
     */
    export interface Owners {
      /**
       * Участники (учредители) - физические лица
       */
      fl?: Array<Owners.Fl>;

      /**
       * Участники (учредители) - государственные учреждения
       */
      gov?: Array<Owners.Gov>;

      /**
       * Участники (учредители) - инвестиционные товарищества
       */
      invest?: Array<Owners.Invest>;

      /**
       * Участники (учредители) - само общество
       */
      ooo?: Array<Owners.Ooo>;

      /**
       * Участники (учредители) - паевые инвестиционные фонды (ПИФы)
       */
      pif?: Array<Owners.Pif>;

      /**
       * Участники (учредители) - иностранные ЮЛ
       */
      ul_foreign?: Array<Owners.UlForeign>;

      /**
       * Участники (учредители) - российские ЮЛ
       */
      ul_rus?: Array<Owners.UlRus>;
    }

    export namespace Owners {
      /**
       * Участник - физическое лицо
       */
      export interface Fl {
        /**
         * Размер доли (в рублях)
         */
        captable_size?: number;

        /**
         * Дата обновления
         */
        date?: string;

        /**
         * Признак дисквалификации: true - участник был дисквалифицирован
         */
        disqualified_person?: boolean;

        /**
         * Признак ограничения предоставления информации по участнику
         */
        information_limited?: boolean;

        /**
         * ИНН участника
         */
        inn?: string;

        /**
         * Признак массового руководителя
         */
        mass_owner?: boolean;

        /**
         * Название участника
         */
        name?: string;

        /**
         * Доля участия
         */
        share?: string;
      }

      /**
       * Участник - государственное учреждение
       */
      export interface Gov {
        /**
         * Размер доли (в рублях)
         */
        captable_size?: number;

        /**
         * Дата обновления
         */
        date?: string;

        /**
         * Название муниципального образования гос учреждения (для участников - гос
         * учреждений)
         */
        gov_name_mo?: string;

        /**
         * Код региона гос учреждения (для участников - гос учреждений)
         */
        gov_region_code?: string;

        /**
         * Регион гос учреждения (для участников - гос учреждений)
         */
        gov_region_name?: string;

        /**
         * Тип (уровень) гос учреждения (для участников - гос учреждений)
         */
        gov_type?: 'Российская Федерация' | 'Регион' | 'Муниципалитет';

        /**
         * Признак ограничения предоставления информации по участнику
         */
        information_limited?: boolean;

        /**
         * ИНН участника
         */
        inn?: string;

        /**
         * Название участника
         */
        name?: string;

        /**
         * Доля участия
         */
        share?: string;
      }

      /**
       * Участник - инвестиционное товарищество
       */
      export interface Invest {
        /**
         * Дата договора инвестиционного товарищества
         */
        aggr_date?: string;

        /**
         * Наименование договора инвестиционного товарищества
         */
        aggr_name?: string;

        /**
         * Номер договора инвестиционного товарищества
         */
        aggr_number?: string;

        /**
         * Размер доли (в рублях)
         */
        captable_size?: number;

        /**
         * Дата обновления
         */
        date?: string;

        /**
         * Признак ограничения предоставления информации по участнику
         */
        information_limited?: boolean;

        /**
         * ИНН участника
         */
        inn?: string;

        /**
         * Название участника
         */
        name?: string;

        /**
         * Доля участия
         */
        share?: string;
      }

      /**
       * Участник - само общество (ООО)
       */
      export interface Ooo {
        /**
         * Размер доли (в рублях)
         */
        captable_size?: number;

        /**
         * Дата обновления
         */
        date?: string;

        /**
         * Признак ограничения предоставления информации по участнику
         */
        information_limited?: boolean;

        /**
         * ИНН участника
         */
        inn?: string;

        /**
         * Название участника
         */
        name?: string;

        /**
         * Доля участия
         */
        share?: string;
      }

      /**
       * Участник - паевый инвестиционный фонд
       */
      export interface Pif {
        /**
         * Размер доли (в рублях)
         */
        captable_size?: number;

        /**
         * Дата обновления
         */
        date?: string;

        /**
         * Признак ограничения предоставления информации по участнику
         */
        information_limited?: boolean;

        /**
         * ИНН участника
         */
        inn?: string;

        /**
         * Название участника
         */
        name?: string;

        /**
         * ИНН компании - владелеца ПИФа (для участников - ПИФ)
         */
        pif_owner_inn?: string;

        /**
         * Название компании - владелеца ПИФа (для участников - ПИФ)
         */
        pif_owner_name?: string;

        /**
         * ОГРН компании - владелеца ПИФа (для участников - ПИФ)
         */
        pif_owner_ogrn?: string;

        /**
         * Доля участия
         */
        share?: string;
      }

      /**
       * Участник - иностранная организация
       */
      export interface UlForeign {
        /**
         * Размер доли (в рублях)
         */
        captable_size?: number;

        /**
         * Страна (для участников - иностранных ЮЛ)
         */
        country?: string;

        /**
         * Дата обновления
         */
        date?: string;

        /**
         * Признак ограничения предоставления информации по участнику
         */
        information_limited?: boolean;

        /**
         * ИНН участника
         */
        inn?: string;

        /**
         * Название участника
         */
        name?: string;

        /**
         * Регистрационный номер (для участников - иностранных ЮЛ)
         */
        regnum?: string;

        /**
         * Доля участия
         */
        share?: string;
      }

      /**
       * Участник - российское ЮЛ
       */
      export interface UlRus {
        /**
         * Размер доли (в рублях)
         */
        captable_size?: number;

        /**
         * ИНН компании участника
         */
        company_inn?: number;

        /**
         * ОГРН компании участника
         */
        company_ogrn?: number;

        /**
         * Дата обновления
         */
        date?: string;

        /**
         * Признак ограничения предоставления информации по участнику
         */
        information_limited?: boolean;

        /**
         * ИНН участника
         */
        inn?: string;

        /**
         * Название участника
         */
        name?: string;

        /**
         * Доля участия
         */
        share?: string;
      }
    }

    /**
     * Сведения о правопредшественнике
     */
    export interface Predecessor {
      /**
       * Полное наименование
       */
      full_name?: string;

      /**
       * ИНН
       */
      inn?: string;

      limited?: boolean;

      /**
       * Предшественник предшественник
       */
      linked_predecessor?: Predecessor.LinkedPredecessor;

      /**
       * ОГРН
       */
      ogrn?: string;
    }

    export namespace Predecessor {
      /**
       * Предшественник предшественник
       */
      export interface LinkedPredecessor {
        /**
         * Полное наименование
         */
        full_name?: string;

        /**
         * ИНН
         */
        inn?: string;

        /**
         * ОГРН
         */
        ogrn?: string;
      }
    }

    /**
     * Коды Росстат (stat_registr)
     */
    export interface RosStatCodes {
      /**
       * Код ОКАТО по Росстат
       */
      okato?: string;

      /**
       * Код ОКФС по Росстат
       */
      okfs?: string;

      /**
       * Код ОКОГУ по Росстат
       */
      okogu?: string;

      /**
       * Код ОКОПФ по Росстат
       */
      okopf?: string;

      /**
       * Код ОКПО по Росстат
       */
      okpo?: string;

      /**
       * Код ОКТМО по Росстат
       */
      oktmo?: string;
    }

    /**
     * Статус организации
     */
    export interface Status {
      /**
       * Признак активности организации
       */
      active_status?: boolean;

      /**
       * Код статуса по ЕГРЮЛ. Для действующих компаний, которые не в состоянии
       * реогранизаций - 001
       */
      code_egr?: string;

      /**
       * Дата изменения статуса
       */
      date_end?: string;

      /**
       * Текст статуса по ЕГРЮЛ/ЕГРИП:
       */
      status_egr?: string;

      /**
       * Краткий статус на английском
       */
      status_eng_short?:
        | 'liquidated'
        | 'liquidation'
        | 'bankrupting'
        | 'reorganizingWithLiquidation'
        | 'reorganizingWithoutLiquidation'
        | 'registrationNotValid'
        | 'registrationMistake'
        | 'headOfKFHIsAbsent'
        | 'active';

      /**
       * Краткий статус на русском
       */
      status_rus_short?:
        | 'Ликвидирована'
        | 'В процессе ликвидации'
        | 'В процессе банкротства'
        | 'В процессе реорганизации с последующим прекращением деятельности'
        | 'В процессе реорганизации без последующего прекращения деятельности'
        | 'Регистрация признана недействительной'
        | 'Регистрация признана ошибочной'
        | 'Глава КФХ отсутствует'
        | 'Действует';
    }

    /**
     * Сведения о правопреемнике
     */
    export interface Successor {
      /**
       * Дата исправления
       */
      fixed_date?: string;

      /**
       * Полное наименование
       */
      full_name?: string;

      /**
       * ИНН
       */
      inn?: string;

      limited?: boolean;

      /**
       * Преемник преемника
       */
      linked_successor?: Successor.LinkedSuccessor;

      /**
       * ОГРН
       */
      ogrn?: string;
    }

    export namespace Successor {
      /**
       * Преемник преемника
       */
      export interface LinkedSuccessor {
        /**
         * Полное наименование
         */
        full_name?: string;

        /**
         * ИНН
         */
        inn?: string;

        /**
         * ОГРН
         */
        ogrn?: string;
      }
    }

    /**
     * Информация о налоговом режиме
     */
    export interface TaxModeInfo {
      /**
       * признак АУСН
       */
      ausn_sign?: boolean;

      /**
       * признак общего налогооблажения
       */
      common_mode?: boolean;

      /**
       * признак ЕНВД
       */
      envd_sign?: boolean;

      /**
       * признак ЕСХН
       */
      eshn_sign?: boolean;

      /**
       * признак НПД
       */
      npd_sign?: boolean;

      /**
       * признак ПСН
       */
      psn_sign?: boolean;

      /**
       * Дата публикации информации о налоговом режиме
       */
      publication_date?: string;

      /**
       * признак СРП
       */
      srp_sign?: boolean;

      /**
       * признак УСН
       */
      usn_sign?: boolean;
    }
  }

  /**
   * Информация об ИП
   */
  export interface Individual {
    /**
     * Контакты
     */
    contacts?: Individual.Contacts;

    /**
     * Дата прекращения деятельности
     */
    dissolved_date?: string;

    /**
     * ФИО
     */
    fio?: string;

    /**
     * Негативные списки
     */
    negative_lists?: Individual.NegativeLists;

    /**
     * Список ОКВЭД
     */
    okveds?: Array<Individual.Okved>;

    /**
     * Дата регистрации
     */
    registration_date?: string;

    /**
     * Коды Росстат (stat_registr)
     */
    ros_stat_codes?: Individual.RosStatCodes;

    /**
     * Статус организации
     */
    status?: Individual.Status;

    /**
     * Информация о налоговом режиме
     */
    tax_mode_info?: Individual.TaxModeInfo;

    /**
     * Вид ИП
     */
    vid_iptext?: string;

    /**
     * Среднесписочная численность по годам
     */
    workers_count?: { [key: string]: number };

    /**
     * Количество лет после регистрации
     */
    years_from_registration?: number;
  }

  export namespace Individual {
    /**
     * Контакты
     */
    export interface Contacts {
      emails?: Array<Contacts.Email>;

      phones?: Array<Contacts.Phone>;

      websites?: Array<Contacts.Website>;
    }

    export namespace Contacts {
      /**
       * Контактные данные
       */
      export interface Email {
        /**
         * Нормализованный тип контакта
         */
        clean_contact_type?: 'email' | 'website' | 'phone' | 'address';

        /**
         * Значение контакта
         */
        value?: string;
      }

      /**
       * Контактные данные
       */
      export interface Phone {
        /**
         * Нормализованный тип контакта
         */
        clean_contact_type?: 'email' | 'website' | 'phone' | 'address';

        /**
         * Значение контакта
         */
        value?: string;
      }

      /**
       * Контактные данные
       */
      export interface Website {
        /**
         * Нормализованный тип контакта
         */
        clean_contact_type?: 'email' | 'website' | 'phone' | 'address';

        /**
         * Значение контакта
         */
        value?: string;
      }
    }

    /**
     * Негативные списки
     */
    export interface NegativeLists {
      /**
       * Недостоверные данные об адресе по ЕГРЮЛ. Возвращается true или false.
       */
      address_false_info?: boolean | string;

      /**
       * Информация о дисквалифицированных лицах.
       */
      disqualified_details?: Array<NegativeLists.DisqualifiedDetail>;

      /**
       * ИП дисквалифицирован. Возвращается true или false.
       */
      disqualified_individual?: boolean | string;

      /**
       * Руководитель дисквалифицирован. Возвращается true или false.
       */
      disqualified_managers?: boolean | string;

      /**
       * Участник дисквалифицирован. Возвращается true или false.
       */
      disqualified_owners?: boolean | string;

      /**
       * Недостоверные данные по ЕГРЮЛ. В ЕГР есть отметка о недостоверности любого из
       * блоков: адрес, участник, руководитель, управляющая компания. Возвращается true
       * или false.
       */
      false_info?: boolean | string;

      /**
       * Находится в реестре ЮЛ, привлеченных за незаконное вознаграждение. Возвращается
       * true или false.
       */
      illegal_rewards?: boolean | string;

      /**
       * Детализация по ЮЛ, привлеченным за незаконное вознаграждение.
       */
      illegal_rewards_details?: Array<NegativeLists.IllegalRewardsDetail>;

      /**
       * Находится в санкционном списке EU. Возвращается true или false.
       */
      in_sanctions_eu?: boolean | string;

      /**
       * Состоит в санкционных списках
       */
      in_sanctions_list?: boolean;

      /**
       * Находится в санкционном списке OFAC. Возвращается true или false.
       */
      in_sanctions_ofac?: boolean | string;

      /**
       * Находится в санкционном списке RF. Возвращается true или false.
       */
      in_sanctions_rf?: boolean | string;

      /**
       * Находится в санкционном списке UK. Возвращается true или false.
       */
      in_sanctions_uk?: boolean | string;

      /**
       * Ограничение доступа к сведениям. Возвращается true или false.
       */
      information_limited?: boolean | string;

      /**
       * Недостоверные данные об управляющей компании по ЕГРЮЛ. Возвращается true или
       * false.
       */
      management_companies_false_info?: boolean | string;

      /**
       * Ограничение доступа к сведениям об управляющей компании. Возвращается true или
       * false.
       */
      management_companies_information_limited?: boolean | string;

      /**
       * Недостоверные данные о руководителе. Возвращается true или false.
       */
      managers_false_info?: boolean | string;

      /**
       * Ограничение доступа к сведениям о руководителе. Возвращается true или false.
       */
      managers_information_limited?: boolean | string;

      /**
       * Недостоверные данные об участнике по ЕГРЮЛ. Возвращается true или false.
       */
      owner_false_info?: boolean | string;

      /**
       * Ограничение доступа к сведениям об участнике. Возвращается true или false.
       */
      owners_information_limited?: boolean | string;

      /**
       * > 50% доля владения, принадлежащая санкционному лицу Возвращается true или
       * > false.
       */
      sanctions_rule_fifty?: boolean | string;

      /**
       * Руководитель в РНП. Возвращается true или false.
       */
      unscrupulous_manager?: boolean | string;

      /**
       * Участник в РНП. Возвращается true или false.
       */
      unscrupulous_owner?: boolean | string;

      /**
       * Содержится в реестре недобросовестных поставщиков по ФЗ 223. Возвращается true
       * или false.
       */
      unscrupulous_supplier223?: boolean | string;

      /**
       * Содержится в реестре недобросовестных поставщиков по ФЗ 44. Возвращается true
       * или false.
       */
      unscrupulous_supplier44?: boolean | string;

      /**
       * Содержится в реестре недобросовестных поставщиков по ПП 615. Возвращается true
       * или false.
       */
      unscrupulous_supplier615?: boolean | string;

      /**
       * Детализация по РНП в разрезе 44, 223, 615.
       */
      unscrupulous_suppliers_details?: { [key: string]: Array<NegativeLists.UnscrupulousSuppliersDetail> };
    }

    export namespace NegativeLists {
      /**
       * Информация о дисквалифицированных лицах.
       */
      export interface DisqualifiedDetail {
        birth_date?: string;

        birth_place?: string;

        company_ogrn?: string;

        disqualification_expiry_date?: string;

        disqualification_period?: string;

        disqualification_start_date?: string;

        full_name?: string;

        judge_full_name?: string;

        judge_position?: string;

        koap_article?: string;

        offence_org_name?: string;

        org_inn?: string;

        post?: string;

        protocol_made_org_name?: string;

        register_number?: string;
      }

      /**
       * Данные о ЮЛ или ИП внесенном в реестр неблагонадежных поставщиков (РНП)
       */
      export interface IllegalRewardsDetail {
        /**
         * Номер дела
         */
        case_number?: string;

        /**
         * Суд
         */
        court?: string;

        /**
         * Дата вступления в законную силу
         */
        effective_date?: string;

        /**
         * Дата вынеселения постановления
         */
        issue_date?: string;
      }

      /**
       * Данные о ЮЛ или ИП внесенном в реестр неблагонадежных поставщиков (РНП)
       */
      export interface UnscrupulousSuppliersDetail {
        /**
         * Кем внесена - наименование
         */
        approve_org_full_name?: string;

        /**
         * Кем внесена - номер
         */
        approve_org_reg_num?: string;

        /**
         * Ожидаемая дата исключения
         */
        auto_ex_date?: string;

        /**
         * Информация об исключении из РНП
         */
        exclude_info?: UnscrupulousSuppliersDetail.ExcludeInfo;

        /**
         * Наименование ЮЛ или ИП в РНП
         */
        full_name?: string;

        /**
         * Ссылка на запись о включении
         */
        info_url?: string;

        /**
         * ИНН ЮЛ или ИП в РНП
         */
        inn?: string;

        /**
         * Тип списка РНП, возможные значения: FZ44, FZ223, PP615
         */
        list_type?: string;

        /**
         * Причина внесения
         */
        reason?: string;

        /**
         * Дата внесения
         */
        reason_date?: string;

        /**
         * Номер внесения в РНП
         */
        reg_number?: string;

        /**
         * Статус: внесен в реестр недобросовестных поставщиков, исклюен из списка РНП
         */
        status?: string;
      }

      export namespace UnscrupulousSuppliersDetail {
        /**
         * Информация об исключении из РНП
         */
        export interface ExcludeInfo {
          /**
           * Дата исключения из РНП
           */
          exclude_date?: string;

          /**
           * Ссылка на запись об исключении из РНП
           */
          exclude_info_url?: string;

          /**
           * Тип исключения: AUTO - автоматически, по истечению даты, MANUAL - вручную
           */
          exclude_type?: string;

          /**
           * Номер записи в РНП
           */
          reg_number?: string;
        }
      }
    }

    /**
     * Оквэд
     */
    export interface Okved {
      /**
       * Код ОКВЭД
       */
      code?: string;

      /**
       * Признак основного ОКВЭД
       */
      main?: boolean;

      /**
       * - `new` - если данный ОКВЭД был введен после 2014 года (смена ОКВЭДов компаний);
       * - `old` - если данный ОКВЭД был введен до 2014 года.
       */
      mode?: 'new' | 'old';

      /**
       * Значение (расшифровка)
       */
      value?: string;
    }

    /**
     * Коды Росстат (stat_registr)
     */
    export interface RosStatCodes {
      /**
       * Код ОКАТО по Росстат
       */
      okato?: string;

      /**
       * Код ОКФС по Росстат
       */
      okfs?: string;

      /**
       * Код ОКОГУ по Росстат
       */
      okogu?: string;

      /**
       * Код ОКОПФ по Росстат
       */
      okopf?: string;

      /**
       * Код ОКПО по Росстат
       */
      okpo?: string;

      /**
       * Код ОКТМО по Росстат
       */
      oktmo?: string;
    }

    /**
     * Статус организации
     */
    export interface Status {
      /**
       * Признак активности организации
       */
      active_status?: boolean;

      /**
       * Код статуса по ЕГРЮЛ. Для действующих компаний, которые не в состоянии
       * реогранизаций - 001
       */
      code_egr?: string;

      /**
       * Дата изменения статуса
       */
      date_end?: string;

      /**
       * Текст статуса по ЕГРЮЛ/ЕГРИП:
       */
      status_egr?: string;

      /**
       * Краткий статус на английском
       */
      status_eng_short?:
        | 'liquidated'
        | 'liquidation'
        | 'bankrupting'
        | 'reorganizingWithLiquidation'
        | 'reorganizingWithoutLiquidation'
        | 'registrationNotValid'
        | 'registrationMistake'
        | 'headOfKFHIsAbsent'
        | 'active';

      /**
       * Краткий статус на русском
       */
      status_rus_short?:
        | 'Ликвидирована'
        | 'В процессе ликвидации'
        | 'В процессе банкротства'
        | 'В процессе реорганизации с последующим прекращением деятельности'
        | 'В процессе реорганизации без последующего прекращения деятельности'
        | 'Регистрация признана недействительной'
        | 'Регистрация признана ошибочной'
        | 'Глава КФХ отсутствует'
        | 'Действует';
    }

    /**
     * Информация о налоговом режиме
     */
    export interface TaxModeInfo {
      /**
       * признак АУСН
       */
      ausn_sign?: boolean;

      /**
       * признак общего налогооблажения
       */
      common_mode?: boolean;

      /**
       * признак ЕНВД
       */
      envd_sign?: boolean;

      /**
       * признак ЕСХН
       */
      eshn_sign?: boolean;

      /**
       * признак НПД
       */
      npd_sign?: boolean;

      /**
       * признак ПСН
       */
      psn_sign?: boolean;

      /**
       * Дата публикации информации о налоговом режиме
       */
      publication_date?: string;

      /**
       * признак СРП
       */
      srp_sign?: boolean;

      /**
       * признак УСН
       */
      usn_sign?: boolean;
    }
  }
}

export interface CounterpartyRetrieveParams {
  /**
   * API-ключ.
   */
  key: string;

  /**
   * Перечень дополнительных секций с данными, которые нужно включить в ответ,
   * разделённые запятой. Если не указан, то возвращается общая информация об
   * организации (названия, дата регистрации, КПП, статус, уставный капитал).
   * **Возможные значения**:
   *
   * - `ROSSTAT_BLOCK` — данные о кодах Росстата (ОКПО, ОКАТО, ОКФС, ОКТМО, ОКОГУ,
   *   ОКОПФ);
   * - `ADDRESS_BLOCK` — данные о юридическом адресе и отметках из ЕГРЮЛ;
   * - `MANAGER_BLOCK` — данные о руководителях организации, имеющих право
   *   действовать от имени ЮЛ без доверенности;
   * - `OWNER_BLOCK` — данные об учредителях и участниках организации (физических
   *   лицах, российских ЮЛ, иностранных ЮЛ, ПИФах, государственных учреждениях и
   *   субъектах РФ, инвестиционных товариществах);
   * - `OKVED_BLOCK` — данные об основных и дополнительных видах экономической
   *   деятельности (кодах ОКВЭД) организации;
   * - `NEGATIVE_LISTS_BLOCK` — данные о присутствии контрагента (в том числе
   *   руководителей, учредителей) в негативных списках: дисквалификация,
   *   недостоверные сведения, РНП и т.д.;
   * - `WORKERS_COUNT_BLOCK` — данные о среднесписочной численности сотрудников по
   *   годам;
   * - `CONTACT_BLOCK` — данные о контактах (email, web-сайт, телефон)
   */
  filters?: Array<
    | 'ROSSTAT_BLOCK'
    | 'ADDRESS_BLOCK'
    | 'MANAGER_BLOCK'
    | 'OWNER_BLOCK'
    | 'OKVED_BLOCK'
    | 'NEGATIVE_LISTS_BLOCK'
    | 'WORKERS_COUNT_BLOCK'
    | 'CONTACT_BLOCK'
  >;

  /**
   * ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП. В случае
   * определения нескольких организаций с этим ИНН (например, при наличии филиалов)
   * будет возвращена информация по головной организации.
   */
  inn?: string;

  /**
   * ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.
   */
  ogrn?: string;
}

export declare namespace Counterparty {
  export {
    type CounterpartyRetrieveResponse as CounterpartyRetrieveResponse,
    type CounterpartyRetrieveParams as CounterpartyRetrieveParams,
  };
}
