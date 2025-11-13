// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'blocked_bank_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/blockedBankAccounts',
  operationId: '31_getBlockedBankAccounts',
};

export const tool: Tool = {
  name: 'list_blocked_bank_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить структурированные данные о решениях ФНС о приостановлении операций по счетам юридических лиц и ИП\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/blocked_bank_account_list_response',\n  $defs: {\n    blocked_bank_account_list_response: {\n      type: 'object',\n      description: 'Информация о решениях налоговых органов о приостановлении операций по счетам компании',\n      properties: {\n        available_count: {\n          type: 'integer',\n          description: 'Количество доступных запросов'\n        },\n        blockages: {\n          type: 'array',\n          description: 'Информация о блокировках',\n          items: {\n            type: 'object',\n            description: 'Информация о блокировке',\n            properties: {\n              bank_bic: {\n                type: 'string',\n                description: 'БИК банка'\n              },\n              code_tax_inspection: {\n                type: 'string',\n                description: 'Код налогового органа'\n              },\n              decision_date: {\n                type: 'string',\n                description: 'Дата приостановления операции по счетам',\n                format: 'date'\n              },\n              decision_number: {\n                type: 'string',\n                description: 'Номер приостановления операции по счетам'\n              },\n              reason_code: {\n                type: 'string',\n                description: 'Код основания'\n              }\n            }\n          }\n        },\n        check_date: {\n          type: 'string',\n          description: 'Дата и время выполнения live-запроса в ФНС',\n          format: 'date-time'\n        },\n        inn: {\n          type: 'string',\n          description: 'ИНН, по которому получены данные'\n        },\n        message: {\n          type: 'string',\n          description: 'Сообщение о наличии блокировок'\n        },\n        ogrn: {\n          type: 'string',\n          description: 'ОГРН, по которому получены данные'\n        },\n        total_blockages_count: {\n          type: 'integer',\n          description: 'Общее количество найденных записей'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      inn: {
        type: 'string',
        description: 'ИНН организации. Должен быть указан, если не указан ОГРН.',
      },
      ogrn: {
        type: 'string',
        description: 'ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.blockedBankAccounts.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
