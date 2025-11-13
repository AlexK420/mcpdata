// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'suggestions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/suggestions',
  operationId: '21_getSuggestions',
};

export const tool: Tool = {
  name: 'create_suggestions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить список первых 10 подходящих контрагентов, соответствующих входному значению \n\nПоддерживаются следующие виды поиска: \n - `ОГРН` \n - `ИНН` \n - `Название ЮЛ/ИП, в том числе неполное наименование (например, \"Датаном\" вместо \"Датаномика\")` \n - `Транслитерированное название ЮЛ` \n - `Название ЮЛ, написанное в неправильной раскладке клавиатуры` \n - `Неточное название ЮЛ/ИП (с опечатками)`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/suggestion_create_response',\n  $defs: {\n    suggestion_create_response: {\n      type: 'object',\n      description: 'Ответ в подсказках с набором подходящих запросу контрагентов',\n      properties: {\n        available_count: {\n          type: 'integer',\n          description: 'Количество доступных запросов'\n        },\n        count: {\n          type: 'object',\n          properties: {\n            ip: {\n              type: 'integer'\n            },\n            total: {\n              type: 'integer'\n            },\n            ul: {\n              type: 'integer'\n            }\n          }\n        },\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            description: 'Список компаний',\n            properties: {\n              active: {\n                type: 'boolean',\n                description: 'Признак активности контрагента (действующий/недействующий)'\n              },\n              activity_kind: {\n                type: 'string',\n                description: 'Основной ОКВЭД'\n              },\n              activity_kind_dsc: {\n                type: 'string',\n                description: 'Описание основного вида деятельности'\n              },\n              activity_kind_industry_code: {\n                type: 'string',\n                description: 'Код основного вида деятельности'\n              },\n              activity_kind_mode: {\n                type: 'string',\n                description: 'Тип основного ОКВЭД (new/old): new - после изменений 2014 года, old - до него'\n              },\n              address: {\n                type: 'string',\n                description: 'Адрес'\n              },\n              charter_capital: {\n                type: 'string',\n                description: 'Уставный капитал'\n              },\n              enable_email_notification: {\n                type: 'boolean',\n                description: 'Присылать уведомления на почту'\n              },\n              establishment_date: {\n                type: 'string',\n                description: 'Дата регистрации'\n              },\n              fin_report_year: {\n                type: 'integer',\n                description: 'Последний год сданной отчетности БФО'\n              },\n              groups: {\n                type: 'object',\n                description: 'Блок с информацией о группах (холдинги)',\n                properties: {\n                  holding: {\n                    type: 'object',\n                    properties: {\n                      ogrn: {\n                        type: 'string'\n                      },\n                      share: {\n                        type: 'number'\n                      },\n                      size: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  holding_by_active: {\n                    type: 'object',\n                    properties: {\n                      ogrn: {\n                        type: 'string'\n                      },\n                      share: {\n                        type: 'number'\n                      },\n                      size: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  metagroup: {\n                    type: 'object',\n                    properties: {\n                      ogrn: {\n                        type: 'string'\n                      },\n                      share: {\n                        type: 'number'\n                      },\n                      size: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  metagroup_by_active: {\n                    type: 'object',\n                    properties: {\n                      ogrn: {\n                        type: 'string'\n                      },\n                      share: {\n                        type: 'number'\n                      },\n                      size: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  network: {\n                    type: 'object',\n                    properties: {\n                      ogrn: {\n                        type: 'string'\n                      },\n                      share: {\n                        type: 'number'\n                      },\n                      size: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  network_by_active: {\n                    type: 'object',\n                    properties: {\n                      ogrn: {\n                        type: 'string'\n                      },\n                      share: {\n                        type: 'number'\n                      },\n                      size: {\n                        type: 'integer'\n                      }\n                    }\n                  }\n                }\n              },\n              inn: {\n                type: 'string',\n                description: 'ИНН контрагента'\n              },\n              last_income: {\n                type: 'number',\n                description: 'Выручка за последний отчетный год (в тыс. рублей)'\n              },\n              manager_name: {\n                type: 'string',\n                description: 'Руководитель'\n              },\n              manager_position: {\n                type: 'string',\n                description: 'Должность руководителя'\n              },\n              match: {\n                type: 'string',\n                description: 'Что совпало в поиске (значение)'\n              },\n              match_actual: {\n                type: 'boolean',\n                description: 'Совпадение по актуальным данным или историческим (например, бывшим руководителям)'\n              },\n              match_dsc: {\n                type: 'string',\n                description: 'Тип/описание совпадения - что именно совпало (какое поле/домен)'\n              },\n              name: {\n                type: 'string',\n                description: 'Наименование контрагента (краткое, при его отсутствии - полное)'\n              },\n              ogrn: {\n                type: 'string',\n                description: 'ОГРН контрагента'\n              },\n              region: {\n                type: 'string',\n                description: 'Регион'\n              },\n              region_code: {\n                type: 'string',\n                description: 'Регион (код)'\n              },\n              type: {\n                type: 'string',\n                description: 'Тип: ul - ЮЛ, ip - ИП'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      search_query: {
        type: 'string',
        description: 'Поисковое значение (ОГРН/ИНН/наименование)',
      },
      is_active: {
        type: 'boolean',
        description: 'Признак, позволяющий искать только среди действующих контрагентов',
      },
      type: {
        type: 'string',
        description: 'Возможные типы контрагентов',
        enum: ['ul', 'ip', 'fl', 'all'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'search_query'],
  },
  annotations: {},
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.suggestions.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
