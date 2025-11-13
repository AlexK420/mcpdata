// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'links',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/links',
  operationId: '10_getLinks',
};

export const tool: Tool = {
  name: 'list_links',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить связи контрагента (до 2-го уровня включительно): руководители, участники, ИП\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/link_list_response',\n  $defs: {\n    link_list_response: {\n      type: 'object',\n      description: 'Граф связей. Содержит список узлов и список связей между ними. Идентификация между связями и узлами производится по ИНН',\n      properties: {\n        available_count: {\n          type: 'integer',\n          description: 'Количество доступных запросов'\n        },\n        edge_types: {\n          type: 'array',\n          description: 'Типы связей, по которым был построен граф',\n          items: {\n            type: 'string',\n            description: 'Типы связей, по которым был построен граф',\n            enum: [              'OWNER',\n              'MANAGER',\n              'INDIVIDUAL',\n              'HISTORY_OWNER',\n              'HISTORY_MANAGER'\n            ]\n          }\n        },\n        edges: {\n          type: 'array',\n          description: 'Список связей (ребер графа). Содержит информацию об связи между вершинами графа, включая ИНН связанных узлов',\n          items: {\n            type: 'object',\n            description: 'Связь между узлами. Содержит информацию о связанных узлах (ИНН исходного и результирующего узла), уровень связи от корня (начиная с 0), тип связи, значение (описание)',\n            properties: {\n              inn_source: {\n                type: 'string',\n                description: 'ИНН исходного узла'\n              },\n              inn_target: {\n                type: 'string',\n                description: 'ИНН результирующего узла'\n              },\n              level: {\n                type: 'integer',\n                description: 'Уровень (начиная с 0 от корня)'\n              },\n              type: {\n                type: 'string',\n                description: 'Тип связи',\n                enum: [                  'OWNER',\n                  'MANAGER',\n                  'INDIVIDUAL',\n                  'HISTORY_OWNER',\n                  'HISTORY_MANAGER'\n                ]\n              },\n              value: {\n                type: 'string',\n                description: 'Значение (описание) связи'\n              }\n            }\n          }\n        },\n        edges_count: {\n          type: 'integer',\n          description: 'количество связей'\n        },\n        inn_root: {\n          type: 'string',\n          description: 'ИНН главной вершины (корня) графа, начиная с которой он был построен'\n        },\n        max_level: {\n          type: 'integer',\n          description: 'Сколько уровней связей было построено, начиная c 0 от корня'\n        },\n        nodes: {\n          type: 'array',\n          description: 'Список узлов (вершин графа). Содержит информацию об участниках связей (ЮЛ, ИП, ФЛ). Для каждого указан ИНН (для ЮЛ/ИП также указывается ОГРН), название и статус.',\n          items: {\n            type: 'object',\n            description: 'Узел связи. Содержит информацию об участнике связи: тип (ФЛ, ЮЛ, ИП), ИНН, ОГРН (для ЮЛ/ИП), наименование, статус',\n            properties: {\n              activity_kind: {\n                type: 'string',\n                description: 'Основной ОКВЭД, код'\n              },\n              activity_kind_dsc: {\n                type: 'string',\n                description: 'Основной ОКВЭД, описание'\n              },\n              inn: {\n                type: 'string',\n                description: 'ИНН'\n              },\n              name: {\n                type: 'string',\n                description: 'Наименование'\n              },\n              ogrn: {\n                type: 'string',\n                description: 'ОГРН'\n              },\n              status: {\n                type: 'string',\n                description: 'Статус',\n                enum: [                  '0',\n                  '1',\n                  '-1'\n                ]\n              },\n              type: {\n                type: 'string',\n                description: 'Тип',\n                enum: [                  'UL',\n                  'IP',\n                  'FL'\n                ]\n              }\n            }\n          }\n        },\n        nodes_count: {\n          type: 'integer',\n          description: 'количество узлов'\n        },\n        ogrn_root: {\n          type: 'string',\n          description: 'ОГРН главной вершины (корня) графа, начиная с которой он был построен'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      ogrn: {
        type: 'string',
        description: 'ОГРН или ОГРНИП',
      },
      level: {
        type: 'integer',
        description:
          'Уровень до которого ищем связи, не более 2 (если больше 2, то будет использоваться 2, если меньше 0, то будет использоваться 0). Если не задан, то считается равным 2',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'ogrn'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.links.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
