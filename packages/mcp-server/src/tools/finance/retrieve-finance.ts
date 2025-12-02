// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'finance',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/finance',
  operationId: '2_getFinanceInfo',
};

export const tool: Tool = {
  name: 'retrieve_finance',
  description: 'Получить данные отчетов о финансовых результатах организации',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      inn: {
        type: 'string',
        description:
          'ИНН организации. Должен быть указан, если не указан ОГРН. В случае определения нескольких организаций с этим ИНН (например, при наличии филиалов) будет возвращена информация по головной организации.',
      },
      ogrn: {
        type: 'string',
        description: 'ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.',
      },
    },
    required: ['key'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.finance.retrieve(body));
  } catch (error) {
    if (error instanceof Datanewton.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
