// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Arbitration extends APIResource {
  /**
   * Получить справочник арбитражных судов: полный список наименований арбитражных
   * судов РФ и количество дел, рассмотренных и рассматриваемых в данных инстанциях
   */
  listCourts(options?: RequestOptions): APIPromise<ArbitrationListCourtsResponse> {
    return this._client.get('/v1/dictionary/arbitration/courts', options);
  }

  /**
   * Получить справочник арбитражных споров (категорий), относящихся к компетенции
   * арбитражных судов: категории споров и количество дел в данных категориях
   */
  listDisputeCategories(options?: RequestOptions): APIPromise<ArbitrationListDisputeCategoriesResponse> {
    return this._client.get('/v1/dictionary/arbitration/dispute-categories', options);
  }

  /**
   * Получить справочник типов документов арбитражных дел: полный список документов
   * (судебных актов), изданных арбитражными судами, а также их количество
   */
  listDocumentTypes(options?: RequestOptions): APIPromise<ArbitrationListDocumentTypesResponse> {
    return this._client.get('/v1/dictionary/arbitration/document-types', options);
  }
}

/**
 * Статистика по арбитражного суда
 */
export interface ArbitrationListCourtsResponse {
  /**
   * Количество рассмотренных и рассматриваемых арбитражных дел в данной инстанции
   */
  count?: number;

  /**
   * Наименование арбитражного суда (инстанции)
   */
  name?: string;
}

/**
 * Статистика по категории спора в арбитражных делах
 */
export interface ArbitrationListDisputeCategoriesResponse {
  /**
   * Код категории спора
   */
  code?: string;

  /**
   * Количество рассмотренных и рассматриваемых арбитражных дел в данной категории
   */
  count?: number;

  /**
   * Наименование категории спора
   */
  name?: string;
}

/**
 * Статистика по типу документов в арбитражных делах
 */
export interface ArbitrationListDocumentTypesResponse {
  /**
   * Количество оформленных документов данного типа
   */
  count?: number;

  /**
   * Наименование судебного акта (тип документа)
   */
  name?: string;
}

export declare namespace Arbitration {
  export {
    type ArbitrationListCourtsResponse as ArbitrationListCourtsResponse,
    type ArbitrationListDisputeCategoriesResponse as ArbitrationListDisputeCategoriesResponse,
    type ArbitrationListDocumentTypesResponse as ArbitrationListDocumentTypesResponse,
  };
}
