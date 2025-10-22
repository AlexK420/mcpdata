// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DictionaryAPI from './dictionary/dictionary';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Okveds extends APIResource {
  /**
   * Получить справочник ОКВЭДов
   */
  list(options?: RequestOptions): APIPromise<OkvedListResponse> {
    return this._client.get('/v1/okveds', options);
  }
}

/**
 * ОКВЭД, имеет вложенную структуру
 */
export interface OkvedListResponse {
  all_children_code?: Array<string>;

  /**
   * Дочерние записи ОКВЭД
   */
  children?: Array<DictionaryAPI.Okved1>;

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

export declare namespace Okveds {
  export { type OkvedListResponse as OkvedListResponse };
}
