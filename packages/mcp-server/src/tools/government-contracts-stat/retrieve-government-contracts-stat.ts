// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'government_contracts_stat',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/governmentContractsStat',
  operationId: '7_getGovernmentContractsStat',
};

export const tool: Tool = {
  name: 'retrieve_government_contracts_stat',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить статистику по госконтрактам контрагента по информации из ЕИС Закупки\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/government_contracts_stat_retrieve_response',\n  $defs: {\n    government_contracts_stat_retrieve_response: {\n      type: 'object',\n      description: 'Данные по статистике о госконтрактах',\n      properties: {\n        error: {\n          type: 'object',\n          description: 'Исключительная ситуация',\n          properties: {\n            code: {\n              type: 'integer',\n              description: 'Код ошибки. Например: 1 - контрагент по заданным параметрам не найден'\n            },\n            message: {\n              type: 'string',\n              description: 'Описание'\n            },\n            source: {\n              type: 'object',\n              description: 'Параметры - входные данные, вызвавшие исключительную ситуацию',\n              additionalProperties: true\n            }\n          }\n        },\n        stat: {\n          type: 'array',\n          description: 'Статистика',\n          items: {\n            type: 'object',\n            description: 'Статистика',\n            properties: {\n              amount: {\n                type: 'integer',\n                description: 'Количество контрактов'\n              },\n              count_with_penalty: {\n                type: 'integer',\n                description: 'Количество контрактов с неустойкой'\n              },\n              penalty_sum: {\n                type: 'number',\n                description: 'Сумма неустоек'\n              },\n              sum: {\n                type: 'number',\n                description: 'Сумма'\n              },\n              year: {\n                type: 'string',\n                description: 'Год'\n              }\n            }\n          }\n        },\n        status_canceled: {\n          type: 'integer',\n          description: 'Аннулирован'\n        },\n        status_execution: {\n          type: 'integer',\n          description: 'Исполнение'\n        },\n        status_execution_completed: {\n          type: 'integer',\n          description: 'Исполнение завершено'\n        },\n        status_execution_terminated: {\n          type: 'integer',\n          description: 'Исполнение прекращено'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      ogrn: {
        type: 'string',
        description: 'ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.',
      },
      type: {
        type: 'string',
        description:
          'Тип госконтрактов\n**Возможные значения**:\n- `FZ44` - ФЗ-44\n- `FZ223` - ФЗ-223\n- `PP615` - ПП-615\n- `ALL` - Все типы',
        enum: [
          'FZ44',
          'FZ223',
          'PP615',
          'FZ44_API',
          'FZ223_API',
          'PP615_API',
          'P_FZ44',
          'P_FZ44_API',
          'P_FZ223_API',
          'P_PP615',
          'RNP_FZ44',
          'RNP_FZ223',
          'ALL',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'ogrn', 'type'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.governmentContractsStat.retrieve(body)),
    );
  } catch (error) {
    if (error instanceof Datanewton.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
