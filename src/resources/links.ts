// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Links extends APIResource {
  /**
   * Получить связи контрагента (до 2-го уровня включительно): руководители,
   * участники, ИП
   */
  list(query: LinkListParams, options?: RequestOptions): APIPromise<LinkListResponse> {
    return this._client.get('/v1/links', { query, ...options });
  }
}

/**
 * Граф связей. Содержит список узлов и список связей между ними. Идентификация
 * между связями и узлами производится по ИНН
 */
export interface LinkListResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Типы связей, по которым был построен граф
   */
  edge_types?: Array<'OWNER' | 'MANAGER' | 'INDIVIDUAL' | 'HISTORY_OWNER' | 'HISTORY_MANAGER'>;

  /**
   * Список связей (ребер графа). Содержит информацию об связи между вершинами графа,
   * включая ИНН связанных узлов
   */
  edges?: Array<LinkListResponse.Edge>;

  /**
   * количество связей
   */
  edges_count?: number;

  /**
   * ИНН главной вершины (корня) графа, начиная с которой он был построен
   */
  inn_root?: string;

  /**
   * Сколько уровней связей было построено, начиная c 0 от корня
   */
  max_level?: number;

  /**
   * Список узлов (вершин графа). Содержит информацию об участниках связей (ЮЛ, ИП,
   * ФЛ). Для каждого указан ИНН (для ЮЛ/ИП также указывается ОГРН), название и
   * статус.
   */
  nodes?: Array<LinkListResponse.Node>;

  /**
   * количество узлов
   */
  nodes_count?: number;

  /**
   * ОГРН главной вершины (корня) графа, начиная с которой он был построен
   */
  ogrn_root?: string;
}

export namespace LinkListResponse {
  /**
   * Связь между узлами. Содержит информацию о связанных узлах (ИНН исходного и
   * результирующего узла), уровень связи от корня (начиная с 0), тип связи, значение
   * (описание)
   */
  export interface Edge {
    /**
     * ИНН исходного узла
     */
    inn_source?: string;

    /**
     * ИНН результирующего узла
     */
    inn_target?: string;

    /**
     * Уровень (начиная с 0 от корня)
     */
    level?: number;

    /**
     * Тип связи
     */
    type?: 'OWNER' | 'MANAGER' | 'INDIVIDUAL' | 'HISTORY_OWNER' | 'HISTORY_MANAGER';

    /**
     * Значение (описание) связи
     */
    value?: string;
  }

  /**
   * Узел связи. Содержит информацию об участнике связи: тип (ФЛ, ЮЛ, ИП), ИНН, ОГРН
   * (для ЮЛ/ИП), наименование, статус
   */
  export interface Node {
    /**
     * Основной ОКВЭД, код
     */
    activity_kind?: string;

    /**
     * Основной ОКВЭД, описание
     */
    activity_kind_dsc?: string;

    /**
     * ИНН
     */
    inn?: string;

    /**
     * Наименование
     */
    name?: string;

    /**
     * ОГРН
     */
    ogrn?: string;

    /**
     * Статус
     */
    status?: '0' | '1' | '-1';

    /**
     * Тип
     */
    type?: 'UL' | 'IP' | 'FL';
  }
}

export interface LinkListParams {
  /**
   * API-ключ.
   */
  key: string;

  /**
   * ОГРН или ОГРНИП
   */
  ogrn: string;

  /**
   * Уровень до которого ищем связи, не более 2 (если больше 2, то будет
   * использоваться 2, если меньше 0, то будет использоваться 0). Если не задан, то
   * считается равным 2
   */
  level?: number;
}

export declare namespace Links {
  export { type LinkListResponse as LinkListResponse, type LinkListParams as LinkListParams };
}
