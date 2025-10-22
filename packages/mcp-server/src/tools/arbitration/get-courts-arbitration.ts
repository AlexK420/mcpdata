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
  httpPath: '/v1/arbitration/courts-dictionary',
  operationId: '28_getArbitrationCasesCourtsDictionary_1',
};

export const tool: Tool = {
  name: 'get_courts_arbitration',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить справочник арбитражных судов: полный список наименований арбитражных судов РФ и количество дел, рассмотренных и рассматриваемых в данных инстанциях\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/arbitration_get_courts_response',\n  $defs: {\n    arbitration_get_courts_response: {\n      type: 'object',\n      description: 'Статистика по арбитражного суда',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Количество рассмотренных и рассматриваемых арбитражных дел в данной инстанции'\n        },\n        name: {\n          type: 'string',\n          description: 'Наименование арбитражного суда (инстанции)'\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.arbitration.getCourts()));
};

export default { metadata, tool, handler };
