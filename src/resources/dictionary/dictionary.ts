// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArbitrationAPI from './arbitration';
import {
  Arbitration,
  ArbitrationListCourtsResponse,
  ArbitrationListDisputeCategoriesResponse,
  ArbitrationListDocumentTypesResponse,
} from './arbitration';
import * as ProcurementAPI from './procurement';
import { Procurement, ProcurementListOkpd2Response } from './procurement';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Dictionary extends APIResource {
  procurement: ProcurementAPI.Procurement = new ProcurementAPI.Procurement(this._client);
  arbitration: ArbitrationAPI.Arbitration = new ArbitrationAPI.Arbitration(this._client);

  /**
   * Получить классификатор лизинговых договоров: код лизинга, его наименование и
   * количество заключенных договоров с данным кодом
   */
  listLeaseClassifier(options?: RequestOptions): APIPromise<DictionaryListLeaseClassifierResponse> {
    return this._client.get('/v1/dictionary/lease-classifier', options);
  }

  /**
   * Получить справочник кодов и типов лицензий
   */
  listLicenses(options?: RequestOptions): APIPromise<DictionaryListLicensesResponse> {
    return this._client.get('/v1/dictionary/licenses', options);
  }

  /**
   * Получить справочник ОКВЭДов
   */
  listOkveds(options?: RequestOptions): APIPromise<DictionaryListOkvedsResponse> {
    return this._client.get('/v1/dictionary/okveds', options);
  }

  /**
   * Получить справочник регионов России
   */
  listRegions(options?: RequestOptions): APIPromise<DictionaryListRegionsResponse> {
    return this._client.get('/v1/dictionary/regions', options);
  }
}

/**
 * ОКВЭД, имеет вложенную структуру
 */
export interface Okved1 {
  all_children_code?: Array<string>;

  /**
   * Дочерние записи ОКВЭД
   */
  children?: Array<Okved1>;

  /**
   * Код ОКВЭД
   */
  code?: string;

  /**
   * Количество действующих юридических лиц, у которых главный ОКВЭД равен name (с
   * учетом дочерних)
   */
  count?: number;

  /**
   * Количество действующих юридических лиц, у которых главный ОКВЭД равен name (без
   * учета дочерних)
   */
  direct_count?: number;

  /**
   * Группа: A-U
   */
  group?: string;

  level?: number;

  /**
   * Наименование ОКВЭД
   */
  name?: string;
}

export interface DictionaryListLeaseClassifierResponse {
  data?: Array<DictionaryListLeaseClassifierResponse.Data>;
}

export namespace DictionaryListLeaseClassifierResponse {
  /**
   * Код - расшифровка - количество
   */
  export interface Data {
    /**
     * Значение кода
     */
    code?: string;

    /**
     * Количество
     */
    count?: number;

    /**
     * Группа, к которой относится код
     */
    group?: string;

    /**
     * Код группы, к которой относится код
     */
    group_code?: string;

    /**
     * Расшифровка кода
     */
    name?: string;

    /**
     * Тип контрагента: ip или ul
     */
    type?: string;
  }
}

export interface DictionaryListLicensesResponse {
  data?: Array<DictionaryListLicensesResponse.Data>;
}

export namespace DictionaryListLicensesResponse {
  /**
   * Код - расшифровка - количество
   */
  export interface Data {
    /**
     * Значение кода
     */
    code?: string;

    /**
     * Количество
     */
    count?: number;

    /**
     * Группа, к которой относится код
     */
    group?: string;

    /**
     * Код группы, к которой относится код
     */
    group_code?: string;

    /**
     * Расшифровка кода
     */
    name?: string;

    /**
     * Тип контрагента: ip или ul
     */
    type?: string;
  }
}

/**
 * ОКВЭД, имеет вложенную структуру
 */
export interface DictionaryListOkvedsResponse {
  all_children_code?: Array<string>;

  /**
   * Дочерние записи ОКВЭД
   */
  children?: Array<Okved1>;

  /**
   * Код ОКВЭД
   */
  code?: string;

  /**
   * Количество действующих юридических лиц, у которых главный ОКВЭД равен name (с
   * учетом дочерних)
   */
  count?: number;

  /**
   * Количество действующих юридических лиц, у которых главный ОКВЭД равен name (без
   * учета дочерних)
   */
  direct_count?: number;

  /**
   * Группа: A-U
   */
  group?: string;

  level?: number;

  /**
   * Наименование ОКВЭД
   */
  name?: string;
}

/**
 * Федеральный округ с регионами
 */
export interface DictionaryListRegionsResponse {
  name?: string;

  regions?: Array<DictionaryListRegionsResponse.Region>;
}

export namespace DictionaryListRegionsResponse {
  /**
   * Регион
   */
  export interface Region {
    code?: string;

    name?: string;
  }
}

Dictionary.Procurement = Procurement;
Dictionary.Arbitration = Arbitration;

export declare namespace Dictionary {
  export {
    type Okved1 as Okved1,
    type DictionaryListLeaseClassifierResponse as DictionaryListLeaseClassifierResponse,
    type DictionaryListLicensesResponse as DictionaryListLicensesResponse,
    type DictionaryListOkvedsResponse as DictionaryListOkvedsResponse,
    type DictionaryListRegionsResponse as DictionaryListRegionsResponse,
  };

  export { Procurement as Procurement, type ProcurementListOkpd2Response as ProcurementListOkpd2Response };

  export {
    Arbitration as Arbitration,
    type ArbitrationListCourtsResponse as ArbitrationListCourtsResponse,
    type ArbitrationListDisputeCategoriesResponse as ArbitrationListDisputeCategoriesResponse,
    type ArbitrationListDocumentTypesResponse as ArbitrationListDocumentTypesResponse,
  };
}
