// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'batch_cards',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/batchCards',
  operationId: '3_getBatchCounterpatriesByInnsOrOgrns',
};

export const tool: Tool = {
  name: 'create_batch_cards',
  description:
    'Получить информацию о нескольких организациях одним запросом (до 5 000 контрагентов в запросе), отправив список ИНН/ОГРН',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      source_inns_or_ogrns: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    required: ['key'],
  },
  annotations: {},
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.batchCards.create(body));
  } catch (error) {
    if (error instanceof Datanewton.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
