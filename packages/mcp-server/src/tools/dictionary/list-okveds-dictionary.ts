// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'dictionary',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/dictionary/okveds',
  operationId: '22_getOkvedsDictionary',
};

export const tool: Tool = {
  name: 'list_okveds_dictionary',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить справочник ОКВЭДов\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/dictionary_list_okveds_response',\n  $defs: {\n    dictionary_list_okveds_response: {\n      type: 'object',\n      description: 'ОКВЭД, имеет вложенную структуру',\n      properties: {\n        all_children_code: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        children: {\n          type: 'array',\n          description: 'Дочерние записи ОКВЭД',\n          items: {\n            $ref: '#/$defs/okved1'\n          }\n        },\n        code: {\n          type: 'string',\n          description: 'Код ОКВЭД'\n        },\n        count: {\n          type: 'integer',\n          description: 'Количество действующих юридических лиц, у которых главный ОКВЭД равен name (с учетом дочерних)'\n        },\n        direct_count: {\n          type: 'integer',\n          description: 'Количество действующих юридических лиц, у которых главный ОКВЭД равен name (без учета дочерних)'\n        },\n        group: {\n          type: 'string',\n          description: 'Группа: A-U'\n        },\n        level: {\n          type: 'integer'\n        },\n        name: {\n          type: 'string',\n          description: 'Наименование ОКВЭД'\n        }\n      }\n    },\n    okved1: {\n      type: 'object',\n      description: 'ОКВЭД, имеет вложенную структуру',\n      properties: {\n        all_children_code: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        children: {\n          type: 'array',\n          description: 'Дочерние записи ОКВЭД',\n          items: {\n            $ref: '#/$defs/okved1'\n          }\n        },\n        code: {\n          type: 'string',\n          description: 'Код ОКВЭД'\n        },\n        count: {\n          type: 'integer',\n          description: 'Количество действующих юридических лиц, у которых главный ОКВЭД равен name (с учетом дочерних)'\n        },\n        direct_count: {\n          type: 'integer',\n          description: 'Количество действующих юридических лиц, у которых главный ОКВЭД равен name (без учета дочерних)'\n        },\n        group: {\n          type: 'string',\n          description: 'Группа: A-U'\n        },\n        level: {\n          type: 'integer'\n        },\n        name: {\n          type: 'string',\n          description: 'Наименование ОКВЭД'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.dictionary.listOkveds()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
