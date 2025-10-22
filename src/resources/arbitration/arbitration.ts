// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BatchCasesAPI from './batch-cases';
import { BatchCaseCreateParams, BatchCaseCreateResponse, BatchCases } from './batch-cases';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Arbitration extends APIResource {
  batchCases: BatchCasesAPI.BatchCases = new BatchCasesAPI.BatchCases(this._client);

  /**
   * Получить справочник арбитражных судов: полный список наименований арбитражных
   * судов РФ и количество дел, рассмотренных и рассматриваемых в данных инстанциях
   *
   * @example
   * ```ts
   * const response = await client.arbitration.getCourts();
   * ```
   */
  getCourts(options?: RequestOptions): APIPromise<ArbitrationGetCourtsResponse> {
    return this._client.get('/v1/arbitration/courts-dictionary', options);
  }

  /**
   * Получить справочник арбитражных споров (категорий), относящихся к компетенции
   * арбитражных судов: категории споров и количество дел в данных категориях
   *
   * @example
   * ```ts
   * const response =
   *   await client.arbitration.getDisputeCategories();
   * ```
   */
  getDisputeCategories(options?: RequestOptions): APIPromise<ArbitrationGetDisputeCategoriesResponse> {
    return this._client.get('/v1/arbitration/dispute-categories-dictionary', options);
  }

  /**
   * Получить справочник типов документов арбитражных дел: полный список документов
   * (судебных актов), изданных арбитражными судами, а также их количество
   *
   * @example
   * ```ts
   * const response =
   *   await client.arbitration.getDocumentTypes();
   * ```
   */
  getDocumentTypes(options?: RequestOptions): APIPromise<ArbitrationGetDocumentTypesResponse> {
    return this._client.get('/v1/arbitration/document-types-dictionary', options);
  }
}

/**
 * Статистика по арбитражного суда
 */
export interface ArbitrationGetCourtsResponse {
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
export interface ArbitrationGetDisputeCategoriesResponse {
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
export interface ArbitrationGetDocumentTypesResponse {
  /**
   * Количество оформленных документов данного типа
   */
  count?: number;

  /**
   * Наименование судебного акта (тип документа)
   */
  name?: string;
}

Arbitration.BatchCases = BatchCases;

export declare namespace Arbitration {
  export {
    type ArbitrationGetCourtsResponse as ArbitrationGetCourtsResponse,
    type ArbitrationGetDisputeCategoriesResponse as ArbitrationGetDisputeCategoriesResponse,
    type ArbitrationGetDocumentTypesResponse as ArbitrationGetDocumentTypesResponse,
  };

  export {
    BatchCases as BatchCases,
    type BatchCaseCreateResponse as BatchCaseCreateResponse,
    type BatchCaseCreateParams as BatchCaseCreateParams,
  };
}
