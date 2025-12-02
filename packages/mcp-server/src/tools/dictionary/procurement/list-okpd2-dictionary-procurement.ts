// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'dictionary.procurement',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/dictionary/procurement/okpd2',
  operationId: '27_getOkpd2Dictionary_1',
};

export const tool: Tool = {
  name: 'list_okpd2_dictionary_procurement',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить общероссийский классификатор продукции по видам экономической деятельности (ОКПД2)\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/procurement_list_okpd2_response',\n  $defs: {\n    procurement_list_okpd2_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            description: 'Код - расшифровка - количество',\n            properties: {\n              code: {\n                type: 'string',\n                description: 'Значение кода'\n              },\n              count: {\n                type: 'integer',\n                description: 'Количество'\n              },\n              group: {\n                type: 'string',\n                description: 'Группа, к которой относится код'\n              },\n              group_code: {\n                type: 'string',\n                description: 'Код группы, к которой относится код'\n              },\n              name: {\n                type: 'string',\n                description: 'Расшифровка кода'\n              },\n              type: {\n                type: 'string',\n                description: 'Тип контрагента: ip или ul'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.dictionary.procurement.listOkpd2()));
  } catch (error) {
    if (error instanceof Datanewton.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
