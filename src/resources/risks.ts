// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Risks extends APIResource {
  /**
   * Получить список рисков по контрагенту
   *
   * **Возможные значения**
   *
   * **Негативные списки: (NEGATIVE_LISTS)**
   *
   * - `owner_inaccuracy` — Недостоверность учредителя
   * - `disqualified_managers` — Руководитель дисквалифицирован
   * - `in_sanctions_ofac` — Находится в санкционном списке OFAC
   * - `illegal_rewards` — Находится в реестре ЮЛ, привлеченных за незаконное
   *   вознаграждение
   * - `address_inaccuracy` — Недостоверность адреса
   * - `manager_inaccuracy` — Недостоверность руководителя
   * - `in_sanctions_uk` — Находится в санкционном списке UK
   * - `in_sanctions_eu` — Находится в санкционном списке EU
   * - `false_info` — Недостоверные данные по ЕГРЮЛ. Если в ЕГР есть отметка о
   *   недостоверности любого из блоков: адрес, участник, руководитель, управляющая
   *   компания.
   * - `disqualified_owners` — Участник дисквалифицирован
   * - `unscrupulous_manager` — Руководитель в РНП
   * - `unscrupulous_owner` — Участник в РНП
   * - `unscrupulous_supplier_223` — Состоит в реестре недобросовестных поставщиков
   *   по ФЗ 223
   * - `unscrupulous_supplier_615` — Состоит в реестре недобросовестных поставщиков
   *   по ПП 615
   * - `unscrupulous_supplier_44` — Состоит в реестре недобросовестных поставщиков по
   *   ФЗ 44
   * - `disqualified_individual` — ИП дисквалифицирован
   * - `management_company_inaccuracy` — Недостоверность управляющей компании
   * - `fin_illegal` — Имеет признаки нелегальной деятельности на финансовом рынке
   *
   * **Признаки однодневок: (ONE_DAY_COMPANY)**
   *
   * - `fns_migration` — Миграция между ФНС (более 2 за 12 месяцев)
   * - `mass_address` — Массовый юридический адрес. Под массовым юридическим адресом
   *   понимается факт регистрации 5 и более компаний с точностью до
   *   офиса/помещения/комнаты
   * - `mass_okveds` — ОКВЭДов более 30
   * - `company_age` — Возраст менее 1 года
   * - `default_capital_table` — Уставный капитал 10 000 ₽
   * - `owner_change` — Учредитель сменился менее 1 года назад
   * - `mass_owner` — Массовый учредитель (более 5)
   * - `manager_change` — Руководитель сменился менее 1 года назад
   * - `management_company_change` — Управляющая компания сменилась менее 1 года
   *   назад
   * - `workers_amount` — Численность работников 0 или 1
   * - `mass_manager` — Массовый руководитель (более 5)
   * - `tax_debts` — Имеет налоговую задолженность
   * - `tax_offences` — Имеет налоговые нарушения
   *
   * **Иные факты: (OTHER_FACTS)**
   *
   * - `has_licenses` — Имеет действующие лицензии
   * - `has_declarations` — Имеет действующие Декларации соответствия
   * - `owners_information_limited` — Ограничение доступа к сведениям в ЕГРЮЛ об
   *   участнике
   * - `zero_intangible_assets` — Нулевая балансовая стоимость нематериальных
   *   активов, за последний год
   * - `zero_fixed_assets` — Нулевая балансовая стоимость основных средств, за
   *   последний год
   * - `has_certifications` — Имеет действующие Сертификаты соответствия
   * - `management_companies_information_limited` — Ограничение доступа к сведениям в
   *   ЕГРЮЛ об управляющей компании
   * - `has_government_contracts` — Является поставщиком по госконтрактам
   * - `managers_information_limited` — Ограничение доступа к сведениям в ЕГРЮЛ о
   *   руководителе
   * - `information_limited` — Ограничение доступа к сведениям в ЕГРЮЛ
   * - `debt` — Сумма к взысканию по исполнительным производствам превышает 300 000
   *   руб
   * - `status_egrul` — Статус в ЕГРЮЛ, требующий внимания
   * - `status_egrip` — Статус в ЕГРИП, требующий внимания
   *
   * **Сведения о банкротстве: (BANKRUPTCY)**
   *
   * - `has_bankruptcy_messages` — Есть сообщения о банкротстве за последний год
   */
  list(query: RiskListParams, options?: RequestOptions): APIPromise<RiskListResponse> {
    return this._client.get('/v1/risks', { query, ...options });
  }
}

/**
 * Информация о рисках контрагента
 */
export interface RiskListResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Список рисков
   */
  flags?: Array<RiskListResponse.Flag>;

  /**
   * ОГРН компании
   */
  ogrn?: string;
}

export namespace RiskListResponse {
  /**
   * Показатель риска
   */
  export interface Flag {
    /**
     * категория (приоритет) для признаков: 0 - высший (красный), 1 - средний (желтый),
     * остальное - 2. 0 и 1 устанавливается только для негативных признаков.
     */
    category?: number;

    /**
     * расширенный комментарий
     */
    comment?: string;

    /**
     * описание признака
     */
    description?: string;

    /**
     * дополнительная информация
     */
    details?: Array<Array<Flag.Detail>>;

    /**
     * наименование признака
     */
    name?: string;

    /**
     * является ли позитивным фактором
     */
    positive?: boolean;

    /**
     * тип показателя
     */
    type?: 'NEGATIVE_LISTS' | 'ONE_DAY_COMPANY' | 'OTHER_FACTS' | 'BANKRUPTCY';

    /**
     * значение true/false
     */
    value?: boolean;
  }

  export namespace Flag {
    /**
     * Дополнительная информация
     */
    export interface Detail {
      /**
       * название
       */
      name?: string;

      /**
       * значение
       */
      value?: string;

      /**
       * тип значения
       */
      value_type?: 'string' | 'date' | 'boolean' | 'url';
    }
  }
}

export interface RiskListParams {
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

export declare namespace Risks {
  export { type RiskListResponse as RiskListResponse, type RiskListParams as RiskListParams };
}
