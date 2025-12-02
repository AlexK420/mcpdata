// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'ogrns_by_address',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/ogrnsByAddress',
  operationId: '32_ogrnsByAddress',
};

export const tool: Tool = {
  name: 'create_ogrns_by_address',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить список компаний по заданному адресу\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ogrns_by_address_create_response',\n  $defs: {\n    ogrns_by_address_create_response: {\n      type: 'object',\n      description: 'Результат поиска компаний по адресу',\n      properties: {\n        available_count: {\n          type: 'integer',\n          description: 'Количество доступных запросов'\n        },\n        counterparties: {\n          type: 'array',\n          description: 'Список компаний',\n          items: {\n            type: 'object',\n            description: 'Список компаний',\n            properties: {\n              active: {\n                type: 'boolean',\n                description: 'Признак активности контрагента (действующий/недействующий)'\n              },\n              activity_kind: {\n                type: 'string',\n                description: 'Основной ОКВЭД'\n              },\n              activity_kind_dsc: {\n                type: 'string',\n                description: 'Описание основного вида деятельности'\n              },\n              activity_kind_industry_code: {\n                type: 'string',\n                description: 'Код основного вида деятельности'\n              },\n              activity_kind_mode: {\n                type: 'string',\n                description: 'Тип основного ОКВЭД (new/old): new - после изменений 2014 года, old - до него'\n              },\n              address: {\n                type: 'string',\n                description: 'Адрес'\n              },\n              charter_capital: {\n                type: 'string',\n                description: 'Уставный капитал'\n              },\n              enable_email_notification: {\n                type: 'boolean',\n                description: 'Присылать уведомления на почту'\n              },\n              establishment_date: {\n                type: 'string',\n                description: 'Дата регистрации'\n              },\n              fin_report_year: {\n                type: 'integer',\n                description: 'Последний год сданной отчетности БФО'\n              },\n              groups: {\n                type: 'object',\n                description: 'Блок с информацией о группах (холдинги)',\n                properties: {\n                  holding: {\n                    type: 'object',\n                    properties: {\n                      ogrn: {\n                        type: 'string'\n                      },\n                      share: {\n                        type: 'number'\n                      },\n                      size: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  holding_by_active: {\n                    type: 'object',\n                    properties: {\n                      ogrn: {\n                        type: 'string'\n                      },\n                      share: {\n                        type: 'number'\n                      },\n                      size: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  metagroup: {\n                    type: 'object',\n                    properties: {\n                      ogrn: {\n                        type: 'string'\n                      },\n                      share: {\n                        type: 'number'\n                      },\n                      size: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  metagroup_by_active: {\n                    type: 'object',\n                    properties: {\n                      ogrn: {\n                        type: 'string'\n                      },\n                      share: {\n                        type: 'number'\n                      },\n                      size: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  network: {\n                    type: 'object',\n                    properties: {\n                      ogrn: {\n                        type: 'string'\n                      },\n                      share: {\n                        type: 'number'\n                      },\n                      size: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  network_by_active: {\n                    type: 'object',\n                    properties: {\n                      ogrn: {\n                        type: 'string'\n                      },\n                      share: {\n                        type: 'number'\n                      },\n                      size: {\n                        type: 'integer'\n                      }\n                    }\n                  }\n                }\n              },\n              inn: {\n                type: 'string',\n                description: 'ИНН контрагента'\n              },\n              last_income: {\n                type: 'number',\n                description: 'Выручка за последний отчетный год (в тыс. рублей)'\n              },\n              manager_name: {\n                type: 'string',\n                description: 'Руководитель'\n              },\n              manager_position: {\n                type: 'string',\n                description: 'Должность руководителя'\n              },\n              match: {\n                type: 'string',\n                description: 'Что совпало в поиске (значение)'\n              },\n              match_actual: {\n                type: 'boolean',\n                description: 'Совпадение по актуальным данным или историческим (например, бывшим руководителям)'\n              },\n              match_dsc: {\n                type: 'string',\n                description: 'Тип/описание совпадения - что именно совпало (какое поле/домен)'\n              },\n              name: {\n                type: 'string',\n                description: 'Наименование контрагента (краткое, при его отсутствии - полное)'\n              },\n              ogrn: {\n                type: 'string',\n                description: 'ОГРН контрагента'\n              },\n              region: {\n                type: 'string',\n                description: 'Регион'\n              },\n              region_code: {\n                type: 'string',\n                description: 'Регион (код)'\n              },\n              type: {\n                type: 'string',\n                description: 'Тип: ul - ЮЛ, ip - ИП'\n              }\n            }\n          }\n        },\n        error: {\n          type: 'object',\n          description: 'Исключительная ситуация',\n          properties: {\n            code: {\n              type: 'integer',\n              description: 'Код ошибки. Например: 1 - контрагент по заданным параметрам не найден'\n            },\n            message: {\n              type: 'string',\n              description: 'Описание'\n            },\n            source: {\n              type: 'object',\n              description: 'Параметры - входные данные, вызвавшие исключительную ситуацию',\n              additionalProperties: true\n            }\n          }\n        },\n        limit: {\n          type: 'integer',\n          description: 'Лимит записей на страницу (limit)'\n        },\n        offset: {\n          type: 'integer',\n          description: 'Смещение выборки (offset)'\n        },\n        total: {\n          type: 'integer',\n          description: 'Общее количество компаний по запросу'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      address: {
        type: 'string',
        description: 'Адрес',
      },
      limit: {
        type: 'integer',
        description: 'Количество записей (максимум 100)',
      },
      offset: {
        type: 'integer',
        description: 'Смещение выборки (offset)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'address'],
  },
  annotations: {},
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.ogrnsByAddress.create(body)));
  } catch (error) {
    if (error instanceof Datanewton.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
