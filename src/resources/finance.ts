// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FinanceAPI from './finance';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Finance extends APIResource {
  /**
   * Получить данные отчетов о финансовых результатах организации
   */
  retrieve(query: FinanceRetrieveParams, options?: RequestOptions): APIPromise<FinanceRetrieveResponse> {
    return this._client.get('/v1/finance', { query, ...options });
  }
}

/**
 * Данные финансового показателя в разрезе лет
 */
export interface FinanceReportRow {
  childrenMap?: { [key: string]: FinanceReportRow };

  /**
   * Код показателя
   */
  code?: string;

  indicators?: Array<FinanceReportRow>;

  /**
   * Название показателя
   */
  name?: string;

  row_num?: number;

  /**
   * Все значения показателя по годам
   */
  sum?: { [key: string]: number };
}

/**
 * экономические показатели
 */
export interface FinanceRetrieveResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * данные бух отчетов
   */
  balances?: FinanceRetrieveResponse.Balances;

  /**
   * Данные отчетов о финансовых результатах
   */
  fin_results?: FinanceRetrieveResponse.FinResults;

  /**
   * данные отчетов о движении денежных средств
   */
  money_flow?: FinanceRetrieveResponse.MoneyFlow;
}

export namespace FinanceRetrieveResponse {
  /**
   * данные бух отчетов
   */
  export interface Balances {
    /**
     * Данные финансового показателя в разрезе лет
     */
    assets?: Balances.Assets;

    /**
     * Показатели
     */
    indicators?: Array<Balances.Indicator>;

    /**
     * Данные финансового показателя в разрезе лет
     */
    liabilities?: Balances.Liabilities;

    /**
     * ОКУД
     */
    okud?: string;

    /**
     * Годы, за которые организация подавала отчетность. Как правило, отчетность за год
     * включает показатели за два или три года: текущий (отчетный), предыдущий и
     * предшествующий предыдущему. Таким образом, возможна ситуация: компания подает
     * отчетность за один год, с показателями за три года
     */
    years?: Array<number>;
  }

  export namespace Balances {
    /**
     * Данные финансового показателя в разрезе лет
     */
    export interface Assets {
      childrenMap?: { [key: string]: FinanceAPI.FinanceReportRow };

      /**
       * Код показателя
       */
      code?: string;

      indicators?: Array<FinanceAPI.FinanceReportRow>;

      /**
       * Название показателя
       */
      name?: string;

      row_num?: number;

      /**
       * Все значения показателя по годам
       */
      sum?: { [key: string]: number };
    }

    /**
     * Данные финансового показателя в разрезе лет
     */
    export interface Indicator {
      childrenMap?: { [key: string]: FinanceAPI.FinanceReportRow };

      /**
       * Код показателя
       */
      code?: string;

      indicators?: Array<FinanceAPI.FinanceReportRow>;

      /**
       * Название показателя
       */
      name?: string;

      row_num?: number;

      /**
       * Все значения показателя по годам
       */
      sum?: { [key: string]: number };
    }

    /**
     * Данные финансового показателя в разрезе лет
     */
    export interface Liabilities {
      childrenMap?: { [key: string]: FinanceAPI.FinanceReportRow };

      /**
       * Код показателя
       */
      code?: string;

      indicators?: Array<FinanceAPI.FinanceReportRow>;

      /**
       * Название показателя
       */
      name?: string;

      row_num?: number;

      /**
       * Все значения показателя по годам
       */
      sum?: { [key: string]: number };
    }
  }

  /**
   * Данные отчетов о финансовых результатах
   */
  export interface FinResults {
    /**
     * Показатели
     */
    indicators?: Array<FinResults.Indicator>;

    /**
     * ОКУД
     */
    okud?: string;

    /**
     * Годы, за которые организация подавала отчетность. Как правило, отчетность за год
     * включает показатели за два или три года: текущий (отчетный), предыдущий и
     * предшествующий предыдущему. Таким образом, возможна ситуация: компания подает
     * отчетность за один год, с показателями за три года
     */
    years?: Array<number>;
  }

  export namespace FinResults {
    /**
     * Данные финансового показателя в разрезе лет
     */
    export interface Indicator {
      childrenMap?: { [key: string]: FinanceAPI.FinanceReportRow };

      /**
       * Код показателя
       */
      code?: string;

      indicators?: Array<FinanceAPI.FinanceReportRow>;

      /**
       * Название показателя
       */
      name?: string;

      row_num?: number;

      /**
       * Все значения показателя по годам
       */
      sum?: { [key: string]: number };
    }
  }

  /**
   * данные отчетов о движении денежных средств
   */
  export interface MoneyFlow {
    /**
     * Показатели
     */
    indicators?: Array<MoneyFlow.Indicator>;

    /**
     * ОКУД
     */
    okud?: string;

    /**
     * Годы, за которые организация подавала отчетность. Как правило, отчетность за год
     * включает показатели за два или три года: текущий (отчетный), предыдущий и
     * предшествующий предыдущему. Таким образом, возможна ситуация: компания подает
     * отчетность за один год, с показателями за три года
     */
    years?: Array<number>;
  }

  export namespace MoneyFlow {
    /**
     * Данные финансового показателя в разрезе лет
     */
    export interface Indicator {
      childrenMap?: { [key: string]: FinanceAPI.FinanceReportRow };

      /**
       * Код показателя
       */
      code?: string;

      indicators?: Array<FinanceAPI.FinanceReportRow>;

      /**
       * Название показателя
       */
      name?: string;

      row_num?: number;

      /**
       * Все значения показателя по годам
       */
      sum?: { [key: string]: number };
    }
  }
}

export interface FinanceRetrieveParams {
  /**
   * API-ключ.
   */
  key: string;

  /**
   * ИНН организации. Должен быть указан, если не указан ОГРН. В случае определения
   * нескольких организаций с этим ИНН (например, при наличии филиалов) будет
   * возвращена информация по головной организации.
   */
  inn?: string;

  /**
   * ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.
   */
  ogrn?: string;
}

export declare namespace Finance {
  export {
    type FinanceReportRow as FinanceReportRow,
    type FinanceRetrieveResponse as FinanceRetrieveResponse,
    type FinanceRetrieveParams as FinanceRetrieveParams,
  };
}
