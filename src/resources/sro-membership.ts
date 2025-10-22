// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SroMembership extends APIResource {
  /**
   * Получить информацию о членстве в СРО НОСТРОЙ/НОПРИЗ
   */
  retrieve(
    query: SroMembershipRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SroMembershipRetrieveResponse> {
    return this._client.get('/v1/sroMembership', { query, ...options });
  }
}

export interface SroMembershipRetrieveResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Данные
   */
  sro_infos?: Array<SroMembershipRetrieveResponse.SroInfo>;
}

export namespace SroMembershipRetrieveResponse {
  /**
   * Данные
   */
  export interface SroInfo {
    /**
     * Проверки
     */
    checks?: Array<SroInfo.Check>;

    /**
     * Страхование
     */
    ensures?: Array<SroInfo.Ensure>;

    /**
     * Информация о КФ
     */
    fund?: SroInfo.Fund;

    /**
     * Общая информация
     */
    info?: SroInfo.Info;

    /**
     * Сведения о наличии права
     */
    right?: SroInfo.Right;
  }

  export namespace SroInfo {
    /**
     * Проверки
     */
    export interface Check {
      /**
       * Дата окончания проверки
       */
      date?: string;

      /**
       * Факты применения мер дисциплинарного воздействия
       */
      facts?: string;

      /**
       * Результат проверки члена СРО
       */
      result?: string;

      /**
       * Тип проверки
       */
      type?: string;
    }

    /**
     * Страхование
     */
    export interface Ensure {
      /**
       * Наименование страховой компании
       */
      company?: string;

      /**
       * Контактные телефоны
       */
      phones?: string;

      /**
       * Место нахождения
       */
      place?: string;

      /**
       * Предмет договора страхования
       */
      subject?: string;

      /**
       * Размер страховой суммы
       */
      sum?: string;
    }

    /**
     * Информация о КФ
     */
    export interface Fund {
      /**
       * Размер взноса в компенсационный фонд возмещения вреда
       */
      fund_compensate?: number;

      /**
       * Размер взноса в компенсационный фонд обеспечения договорных обязательств
       */
      fund_secure?: number;
    }

    /**
     * Общая информация
     */
    export interface Info {
      /**
       * Сведения о соответствии условиям членства в СРО
       */
      accordance?: string;

      /**
       * Адрес
       */
      address?: string;

      /**
       * Контактные телефоны
       */
      phones?: string;

      /**
       * Регистрационный номер в реестре СРО
       */
      reg_number?: string;

      /**
       * Дата регистрации в реестре СРО
       */
      sro_date?: string;

      /**
       * Идентификатор СРО
       */
      sro_id?: string;

      /**
       * Наименование СРО
       */
      sro_name?: string;

      /**
       * ОГРН СРО
       */
      sro_ogrn?: string;

      /**
       * Дата прекращения членства
       */
      stop_date?: string;

      /**
       * Основание прекращения членства
       */
      stop_reason?: string;

      /**
       * Тип(реестр) СРО
       */
      type?: 'НОСТРОЙ' | 'НОПРИЗ';
    }

    /**
     * Сведения о наличии права
     */
    export interface Right {
      /**
       * В отношении объектов использования атомной энергии
       */
      atomic_relation?: string;

      /**
       * В отношении объектов капитального строительства (кроме особо опасных, технически
       * сложных и уникальных объектов, объектов использования атомной энергии)
       */
      build_relation?: string;

      /**
       * В отношении особо опасных, технически сложных и уникальных объектов капитального
       * строительства (кроме объектов использования атомной энергии)
       */
      danger_relation?: string;

      /**
       * Основание наделения правом
       */
      decision_num_date?: string;

      /**
       * Размер обязательств по договорам подряда с использованием конкурентных способов
       * заключения договоров (уровень ответственности)
       */
      work_obligations?: string;

      /**
       * Стоимость работ по одному договору подряда (уровень ответственности)
       */
      work_price?: string;
    }
  }
}

export interface SroMembershipRetrieveParams {
  /**
   * API-ключ.
   */
  key: string;

  /**
   * Сведения о соответствии: true - только соответствующие, false - только
   * несоответствующие
   */
  accordance?: boolean;

  /**
   * ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП.
   */
  inn?: string;

  /**
   * ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.
   */
  ogrn?: string;

  /**
   * Порядок сортировки по дате регистрации: true - прямой, false - обратный
   */
  order?: boolean;

  /**
   * Фильтр наименования СРО
   */
  sro_name_like?: string;

  /**
   * Статус членства: true - только активные, false - только прекращённые
   */
  status?: boolean;

  /**
   * Реестр СРО: НОСТРОЙ | НОПРИЗ
   */
  type?: 'НОСТРОЙ' | 'НОПРИЗ';
}

export declare namespace SroMembership {
  export {
    type SroMembershipRetrieveResponse as SroMembershipRetrieveResponse,
    type SroMembershipRetrieveParams as SroMembershipRetrieveParams,
  };
}
