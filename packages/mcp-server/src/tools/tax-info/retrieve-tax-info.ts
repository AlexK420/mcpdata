// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'tax_info',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/taxInfo',
  operationId: '22_getTaxInfo',
};

export const tool: Tool = {
  name: 'retrieve_tax_info',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить информацию об уплаченных налогах, задолженностях и штрафах, налоговых нарушениях по ИНН/ОГРН\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/tax_info_retrieve_response',\n  $defs: {\n    tax_info_retrieve_response: {\n      type: 'object',\n      description: 'Информация об уплаченных налогах, задолженностях и штрафах, налоговых нарушениях',\n      properties: {\n        available_count: {\n          type: 'integer',\n          description: 'Количество доступных запросов'\n        },\n        company_name: {\n          type: 'string',\n          description: 'Наименование компании'\n        },\n        error: {\n          type: 'object',\n          description: 'Исключительная ситуация',\n          properties: {\n            code: {\n              type: 'integer',\n              description: 'Код ошибки. Например: 1 - контрагент по заданным параметрам не найден'\n            },\n            message: {\n              type: 'string',\n              description: 'Описание'\n            },\n            source: {\n              type: 'object',\n              description: 'Параметры - входные данные, вызвавшие исключительную ситуацию',\n              additionalProperties: true\n            }\n          }\n        },\n        fines_debts: {\n          type: 'array',\n          description: 'Данные о задолженностях и штрафах',\n          items: {\n            type: 'object',\n            description: 'Данные о задолженностях и штрафах',\n            properties: {\n              arrears_sum_infos: {\n                type: 'array',\n                description: 'Сведения о задолженности по налогам, пеням и штрафам',\n                items: {\n                  type: 'object',\n                  description: 'Сведения о налогах',\n                  properties: {\n                    fine_sum: {\n                      type: 'number',\n                      description: 'Сумма штрафа'\n                    },\n                    penalty_sum: {\n                      type: 'number',\n                      description: 'Сумма пени'\n                    },\n                    tax_arrears_sum: {\n                      type: 'number',\n                      description: 'Сумма недоимки по налогу'\n                    },\n                    tax_name: {\n                      type: 'string',\n                      description: 'Наименование налога (сбора, страховых взносов), денежного взыскания'\n                    },\n                    total_sum: {\n                      type: 'number',\n                      description: 'Общая сумма недоимки по налогу, пени и штрафу'\n                    }\n                  }\n                }\n              },\n              doc_creation_date: {\n                type: 'string',\n                description: 'Дата формирования документа',\n                format: 'date-time'\n              },\n              doc_preparation_date: {\n                type: 'string',\n                description: 'Дата, по состоянию на которую, подготовлены данные для публикации',\n                format: 'date-time'\n              }\n            }\n          }\n        },\n        paid_taxes: {\n          type: 'array',\n          description: 'Данные об уплаченных налогах',\n          items: {\n            type: 'object',\n            description: 'Данные об уплаченных налогах',\n            properties: {\n              doc_date: {\n                type: 'string',\n                description: 'Дата формирования документа'\n              },\n              report_date: {\n                type: 'string',\n                description: 'Дата, по состоянию на которую, подготовлены данные для публикации (в ней указан отчетный год)'\n              },\n              tax_info_list: {\n                type: 'array',\n                description: 'Список уплаченных налогов',\n                items: {\n                  type: 'object',\n                  description: 'Информация о налоге',\n                  properties: {\n                    taxName: {\n                      type: 'string',\n                      description: 'Наименование налога'\n                    },\n                    taxValue: {\n                      type: 'string',\n                      description: ' Сумма уплаченного налога (в рублях)'\n                    }\n                  }\n                }\n              }\n            }\n          }\n        },\n        tax_offences: {\n          type: 'array',\n          description: 'Данные о налоговых нарушениях',\n          items: {\n            type: 'object',\n            description: 'Данные о налоговых нарушениях',\n            properties: {\n              doc_date: {\n                type: 'string',\n                description: 'Дата документа',\n                format: 'date-time'\n              },\n              status_date: {\n                type: 'string',\n                description: 'Дата, по состоянию на которую, подготовлены данные для публикации',\n                format: 'date-time'\n              },\n              sum: {\n                type: 'number',\n                description: 'Сумма штрафа'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.taxInfo.retrieve(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
