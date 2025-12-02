// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/leases',
  operationId: '11_getLeases',
};

export const tool: Tool = {
  name: 'create_leases',
  description: 'Получить данные о договорах лизинга по заданным условиям\n',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      limit: {
        type: 'integer',
        description: 'Лимит.',
      },
      offset: {
        type: 'integer',
        description: 'Оффсет.',
      },
      classifier_codes: {
        type: 'array',
        description: 'Коды типа лизинга из классификатора (справочника)',
        items: {
          type: 'string',
          description: 'Коды типа лизинга из классификатора (справочника)',
        },
      },
      lease_end_from: {
        type: 'string',
        description: 'Дата прекращения договора: С (включительно)',
        format: 'date',
      },
      lease_end_to: {
        type: 'string',
        description: 'Дата прекращения договора: По (включительно)',
        format: 'date',
      },
      lease_start_from: {
        type: 'string',
        description: 'Дата заключения договора: С (включительно)',
        format: 'date',
      },
      lease_start_to: {
        type: 'string',
        description: 'Дата заключения договора: По (включит    ельно)',
        format: 'date',
      },
      only_active: {
        type: 'boolean',
        description: 'Только активные договора',
      },
      order: {
        type: 'string',
        description: 'Порядок сортировки',
        enum: ['ASC', 'DESC'],
      },
      search_text: {
        type: 'string',
        description: 'Ключевые слова для поиска в реквизитах договора',
      },
      sort: {
        type: 'string',
        description: 'Поле для сортировки результата',
        enum: ['date_start', 'date_end'],
      },
      updated_after: {
        type: 'string',
        description: 'Дата последнего изменения: С (включительно)',
        format: 'date-time',
      },
    },
    required: ['key', 'limit', 'offset'],
  },
  annotations: {},
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.leases.create(body));
  } catch (error) {
    if (error instanceof Datanewton.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
