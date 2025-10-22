// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'taxpayer_statuses',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/taxpayerStatuses',
  operationId: '6_getTaxpayerStatuses',
};

export const tool: Tool = {
  name: 'create_taxpayer_statuses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить данные о статусе самозанятого налогоплательщика по ИНН\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/taxpayer_status_create_response',\n  $defs: {\n    taxpayer_status_create_response: {\n      type: 'object',\n      description: 'Статусы самозанятых',\n      properties: {\n        available_count: {\n          type: 'integer',\n          description: 'Количество доступных запросов'\n        },\n        data: {\n          type: 'array',\n          description: 'Статусы самозанятых',\n          items: {\n            type: 'object',\n            description: 'Статус самозанятого налогоплательщика',\n            properties: {\n              inn: {\n                type: 'string',\n                description: 'ИНН'\n              },\n              status_date: {\n                type: 'string',\n                description: 'Дата статуса самозанятого',\n                format: 'date-time'\n              },\n              taxpayer: {\n                type: 'boolean'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      inns: {
        type: 'array',
        description: 'Список ИНН',
        items: {
          type: 'string',
          description: 'Список ИНН',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key'],
  },
  annotations: {},
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.taxpayerStatuses.create(body)));
};

export default { metadata, tool, handler };
