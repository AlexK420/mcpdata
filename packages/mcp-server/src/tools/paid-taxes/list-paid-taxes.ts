// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'paid_taxes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/paidTaxes',
  operationId: '9_getPaidTaxes',
};

export const tool: Tool = {
  name: 'list_paid_taxes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить данные об уплаченных налогах по ИНН/ОГРН\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/paid_tax_list_response',\n  $defs: {\n    paid_tax_list_response: {\n      type: 'object',\n      description: 'Данные об уплаченных налогах',\n      properties: {\n        available_count: {\n          type: 'integer',\n          description: 'Количество доступных запросов'\n        },\n        data: {\n          type: 'array',\n          description: 'Данные о уплаченных налогах',\n          items: {\n            type: 'object',\n            description: 'Данные об уплаченных налогах',\n            properties: {\n              doc_date: {\n                type: 'string',\n                description: 'Дата формирования документа'\n              },\n              report_date: {\n                type: 'string',\n                description: 'Дата, по состоянию на которую, подготовлены данные для публикации (в ней указан отчетный год)'\n              },\n              tax_info_list: {\n                type: 'array',\n                description: 'Список уплаченных налогов',\n                items: {\n                  type: 'object',\n                  description: 'Информация о налоге',\n                  properties: {\n                    taxName: {\n                      type: 'string',\n                      description: 'Наименование налога'\n                    },\n                    taxValue: {\n                      type: 'string',\n                      description: ' Сумма уплаченного налога (в рублях)'\n                    }\n                  }\n                }\n              }\n            }\n          }\n        },\n        error: {\n          type: 'object',\n          description: 'Исключительная ситуация',\n          properties: {\n            code: {\n              type: 'integer',\n              description: 'Код ошибки. Например: 1 - контрагент по заданным параметрам не найден'\n            },\n            message: {\n              type: 'string',\n              description: 'Описание'\n            },\n            source: {\n              type: 'object',\n              description: 'Параметры - входные данные, вызвавшие исключительную ситуацию',\n              additionalProperties: true\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      inn: {
        type: 'string',
        description: 'ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП.',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.paidTaxes.list(body)));
};

export default { metadata, tool, handler };
