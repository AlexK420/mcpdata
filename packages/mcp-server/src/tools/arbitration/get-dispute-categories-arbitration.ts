// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'arbitration',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/arbitration/dispute-categories-dictionary',
  operationId: '30_getArbitrationCasesDisputesDictionary_1',
};

export const tool: Tool = {
  name: 'get_dispute_categories_arbitration',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить справочник арбитражных споров (категорий), относящихся к компетенции арбитражных судов: категории споров и количество дел в данных категориях\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/arbitration_get_dispute_categories_response',\n  $defs: {\n    arbitration_get_dispute_categories_response: {\n      type: 'object',\n      description: 'Статистика по категории спора в арбитражных делах',\n      properties: {\n        code: {\n          type: 'string',\n          description: 'Код категории спора'\n        },\n        count: {\n          type: 'integer',\n          description: 'Количество рассмотренных и рассматриваемых арбитражных дел в данной категории'\n        },\n        name: {\n          type: 'string',\n          description: 'Наименование категории спора'\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.arbitration.getDisputeCategories()));
};

export default { metadata, tool, handler };
