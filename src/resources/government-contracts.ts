// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GovernmentContracts extends APIResource {
  /**
   * Получить данные о госконтрактах контрагента по информации из ЕИС Закупки
   */
  list(
    query: GovernmentContractListParams,
    options?: RequestOptions,
  ): APIPromise<GovernmentContractListResponse> {
    return this._client.get('/v1/governmentContracts', { query, ...options });
  }
}

/**
 * Данные о госконтрактах
 */
export interface GovernmentContractListResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Данные о госконтрактах
   */
  data?: Array<GovernmentContractListResponse.Data>;

  /**
   * Исключительная ситуация
   */
  error?: GovernmentContractListResponse.Error;

  /**
   * Лимит
   */
  limit?: number;

  /**
   * Отступ
   */
  offset?: number;

  /**
   * Всего контрактов
   */
  total_contracts?: number;
}

export namespace GovernmentContractListResponse {
  /**
   * Данные о госконтрактах
   */
  export interface Data {
    id?: unknown;

    code?: string;

    /**
     * Дата заключения контракта
     */
    contract_date?: string;

    /**
     * Позиции контракта
     */
    contract_positions?: Array<Data.ContractPosition>;

    /**
     * Статус
     */
    contract_status?: 'E' | 'IN' | 'EC' | 'ET';

    /**
     * Валюта контракта
     */
    currency_code?: string;

    /**
     * Заказчик
     */
    customer?: Data.Customer;

    goz?: boolean;

    has_penalties?: boolean;

    /**
     * Ссылка на карточку контракта на сайте Госзакупки
     */
    href?: string;

    /**
     * Место поставки, оказания услуг, выполнения работ по КЛАДР
     */
    kladr_info?: Array<Data.KladrInfo>;

    /**
     * Место поставки, оказания услуг, выполнения работ
     */
    no_kladr_for_region_settlement_info?: Array<Data.NoKladrForRegionSettlementInfo>;

    /**
     * Место поставки, оказания услуг, выполнения работ по ОКТМО
     */
    oktmo_info?: Data.OktmoInfo;

    /**
     * Информация о штрафах/неустойках
     */
    penalties?: Array<Data.Penalty>;

    /**
     * Общая сумма штрафов и неустоек
     */
    penalties_total?: number;

    /**
     * Цена контракта
     */
    price?: number;

    /**
     * Ссылка на закупку
     */
    purchase_href?: string;

    /**
     * Номер закупки
     */
    purchase_notice_number?: string;

    /**
     * Способ закупки (код)
     */
    purchase_type_info_code?: string;

    /**
     * Способ закупки (описание)
     */
    purchase_type_info_dsc?: string;

    /**
     * Сокращенный способ закупки (код)
     */
    purchase_type_info_short_code?: string;

    /**
     * Номер контракта
     */
    reg_number?: string;

    /**
     * Код региона
     */
    region_code?: string;

    role?: string;

    /**
     * Дата обновления контракта в реестре контрактов
     */
    status_date?: string;

    /**
     * Предмет контракта
     */
    subject_contract?: string;

    /**
     * Поставщик
     */
    suppliers?: Array<Data.Supplier>;

    /**
     * Тип контракта
     */
    type?: string;

    /**
     * Год заключения контракта
     */
    year?: number;
  }

  export namespace Data {
    /**
     * Позиция контракта
     */
    export interface ContractPosition {
      /**
       * Валюта цены за единицу
       */
      currency_code?: string;

      /**
       * Место поставки, оказания услуг, выполнения работ по КЛАДР
       */
      kladr_info?: ContractPosition.KladrInfo;

      /**
       * Код КТРУ
       */
      ktru_code?: string;

      /**
       * Наименование товаров, работ, услуг
       */
      name?: string;

      /**
       * Место поставки, оказания услуг, выполнения работ
       */
      no_kladr_for_region_settlement_info?: ContractPosition.NoKladrForRegionSettlementInfo;

      /**
       * Код ОКДП
       */
      okdp_code?: string;

      /**
       * Единица измерения количества (ОКЕИ)
       */
      okei_code?: string;

      /**
       * Код ОКПД
       */
      okpd_code?: string;

      /**
       * Код ОКПД2
       */
      okpd2_code?: string;

      /**
       * Номер позиции
       */
      ordinal_number?: string;

      /**
       * Количество
       */
      quantity?: number;

      /**
       * Стоимость позиции (кол-во \* цена за единицу)
       */
      sum?: string;

      /**
       * Цена за единицу
       */
      unit_price?: string;
    }

    export namespace ContractPosition {
      /**
       * Место поставки, оказания услуг, выполнения работ по КЛАДР
       */
      export interface KladrInfo {
        /**
         * Место доставки
         */
        delivery_place?: string;

        /**
         * Наименование
         */
        full_name?: string;

        /**
         * Код
         */
        kladr_code?: string;
      }

      /**
       * Место поставки, оказания услуг, выполнения работ
       */
      export interface NoKladrForRegionSettlementInfo {
        /**
         * Регион
         */
        region?: string;

        /**
         * Населенный пункт
         */
        settlement?: string;
      }
    }

    /**
     * Заказчик
     */
    export interface Customer {
      /**
       * Email Заказчика
       */
      email?: string;

      /**
       * Факс Заказчика
       */
      fax?: string;

      /**
       * ИНН Заказчика
       */
      inn?: string;

      /**
       * Наименование заказчика
       */
      name?: string;

      /**
       * ОГРН Заказчика
       */
      ogrn?: string;

      /**
       * Телефон Заказчика
       */
      phone?: string;

      /**
       * Возможные типы контрагентов
       */
      type?: 'ul' | 'ip' | 'fl' | 'all';
    }

    /**
     * Место поставки, оказания услуг, выполнения работ по КЛАДР
     */
    export interface KladrInfo {
      /**
       * Место доставки
       */
      delivery_place?: string;

      /**
       * Наименование
       */
      full_name?: string;

      /**
       * Код
       */
      kladr_code?: string;
    }

    /**
     * Место поставки, оказания услуг, выполнения работ
     */
    export interface NoKladrForRegionSettlementInfo {
      /**
       * Регион
       */
      region?: string;

      /**
       * Населенный пункт
       */
      settlement?: string;
    }

    /**
     * Место поставки, оказания услуг, выполнения работ по ОКТМО
     */
    export interface OktmoInfo {
      /**
       * Код
       */
      code?: string;

      /**
       * Место доставки
       */
      delivery_place?: string;

      /**
       * Наименование
       */
      name?: string;
    }

    /**
     * Информация о штрафах/неустойках
     */
    export interface Penalty {
      accrual_amount?: number;

      /**
       * Сторона контракта
       */
      contract_party?: 'C' | 'S';

      /**
       * дата выставления штрафа/неустойки
       */
      invoice_date?: string;

      /**
       * название документа на основании которого выставлен штраф/неустойка
       */
      invoice_doc_name?: string;

      /**
       * номер документа на основании которого выставлен штраф/неустойка
       */
      invoice_doc_num?: string;

      /**
       * дата последнего платежа
       */
      last_payment_date?: string;

      /**
       * название документа последнего платежа
       */
      last_payment_doc_name?: string;

      /**
       * номер документа последнего платежа
       */
      last_payment_doc_num?: string;

      reason_code?: number;

      reason_dsc?: string;

      /**
       * Информация о выполнении этапа контракта
       */
      stage_exc_obj?: Penalty.StageExcObj;

      total_payments_amount?: number;

      /**
       * Тип штрафа/неустойки
       */
      type?: 'I' | 'F';

      /**
       * ссылка на решение в ЕИС
       */
      url?: string;
    }

    export namespace Penalty {
      /**
       * Информация о выполнении этапа контракта
       */
      export interface StageExcObj {
        /**
         * Дата окончания исполнения этапа
         */
        end_date?: string;

        /**
         * Внешний идентификатор этапа
         */
        ext_sid?: string;

        /**
         * Признак закрытия исполнения по этапу.
         */
        final_stage_execution?: boolean;

        /**
         * Уникальный идентификатор этапа контракта в ЕИС
         */
        sid?: number;

        /**
         * Дата начала исполнения этапа
         */
        start_date?: string;
      }
    }

    /**
     * Поставщик
     */
    export interface Supplier {
      /**
       * Код страны
       */
      country_code?: string;

      /**
       * Название страны
       */
      country_full_name?: string;

      /**
       * Email Поставщика
       */
      email?: string;

      /**
       * Имя контактного лица
       */
      first_name?: string;

      /**
       * Полное имя
       */
      full_name?: string;

      /**
       * ИНН поставщика
       */
      inn?: string;

      /**
       * Фамилия контактного лица
       */
      last_name?: string;

      /**
       * Отчество контактного лиц
       */
      middle_name?: string;

      /**
       * Наименование поставщика
       */
      name?: string;

      /**
       * ОГРН поставщика
       */
      ogrn?: string;

      /**
       * Телефон Поставщика
       */
      phone?: string;

      /**
       * Возможные типы контрагентов
       */
      type?: 'ul' | 'ip' | 'fl' | 'all';
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

export interface GovernmentContractListParams {
  /**
   * API-ключ.
   */
  key: string;

  /**
   * Тип госконтрактов (может быть несколько)
   *
   * **Возможные значения**:
   *
   * - `FZ44` - ФЗ-44
   * - `FZ223` - ФЗ-223
   * - `PP615` - ПП-615
   * - `ALL` - Все типы
   */
  types: Array<'FZ44' | 'FZ223' | 'ALL'>;

  /**
   * Наименование участника
   */
  company_name?: string;

  /**
   * Дата конца действия контракта
   */
  end_date?: string;

  /**
   * ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП.
   */
  inn?: string;

  /**
   * Количество дел на странице(максимум 1000).
   */
  limit?: number;

  /**
   * Отступ страницы.
   */
  offset?: number;

  /**
   * ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.
   */
  ogrn?: string;

  /**
   * Тип сортировки госконтрактов, если поле sort указано
   *
   * **Возможные значения**:
   *
   * - `ASC` - по возрастанию
   * - `DESC` - по убыванию
   */
  order?: 'ASC' | 'DESC';

  /**
   * Сумма до
   */
  penalty_sum_high?: number;

  /**
   * Сумма от
   */
  penalty_sum_low?: number;

  /**
   * Тип неустойки
   *
   * **Возможные значения**:
   *
   * - `F` - штраф
   * - `I` - пени
   */
  penalty_types?: Array<'I' | 'F'>;

  /**
   * Сумма до
   */
  price_high?: number;

  /**
   * Сумма от
   */
  price_low?: number;

  purchase_type_info_code?: GovernmentContractListParams.PurchaseTypeInfoCode;

  /**
   * Номер закупки или контракта
   */
  reg_number?: string;

  /**
   * Роль компании в контракте
   *
   * **Возможные значения**:
   *
   * - `CUSTOMER` - Заказчик
   * - `SUPPLIER` - Поставщик
   * - `ALL` - Все роли
   */
  role?: 'CUSTOMER' | 'SUPPLIER' | 'ALL';

  /**
   * Поле для сортировки госконтрактов
   *
   * **Возможные значения**:
   *
   * - `DATE` - по дате
   * - `PRICE` - по цене
   */
  sort?: 'DATE' | 'PRICE';

  /**
   * Дата начала действия контракта
   */
  start_date?: string;

  /**
   * Статусы контракта
   *
   * **Возможные значения**:
   *
   * - `E` - Исполнение
   * - `IN` - Аннулирован
   * - `EC` - Исполнение завершено
   * - `ET` - Исполнение прекращено
   */
  statuses?: Array<'E' | 'IN' | 'EC' | 'ET'>;

  /**
   * Предмет контракта
   */
  subject_contract?: string;
}

export namespace GovernmentContractListParams {
  export interface PurchaseTypeInfoCode {
    /**
     * Способ закупки
     *
     * **Возможные значения**:
     *
     * для FZ44:
     *
     * - `11011` - открытый конкурс
     * - `11021` - конкурс с ограниченным участием
     * - `11031` - двухэтапный конкурс
     * - `12011` - электронный аукцион
     * - `13011` - запрос котировок
     * - `14011` - запрос предложений
     * - `20000` - закупка у единственного поставщика (подрядчика, исполнителя)
     * - `30000` - способ определения поставщика (подрядчика, исполнителя),
     *   установленный Правительством Российской Федерации в соответствии со статьей
     *   111 Федерального закона
     * - `11044` - закрытый конкурс в электронной форме
     * - `11054` - закрытый конкурс с ограниченным участием в электронной форме
     * - `11064` - закрытый двухэтапный конкурс в электронной форме
     * - `12024` - закрытый аукцион в электронной форме
     * - `40000` - закупка товара у единственного поставщика на сумму, предусмотренную
     *   частью 12 статьи 93 Закона № 44-ФЗ
     *
     * для FZ223:
     *
     * - `11011` - конкурс
     * - `12012` - аукцион
     * - `30000` - закупка у единственного поставщика/подрядчика/исполнителя
     * - `40000` - иной способ закупки, предусмотренный правовым актом заказчика,
     *   указанным в части 1 статьи 2 Федерального закона
     *
     * для PP615:
     *
     * - `12011` - электронный аукцион
     */
    type?:
      | '11011'
      | '11021'
      | '11031'
      | '11044'
      | '11054'
      | '11064'
      | '12011'
      | '12012'
      | '12024'
      | '13011'
      | '14011'
      | '20000'
      | '30000'
      | '40000';
  }
}

export declare namespace GovernmentContracts {
  export {
    type GovernmentContractListResponse as GovernmentContractListResponse,
    type GovernmentContractListParams as GovernmentContractListParams,
  };
}
