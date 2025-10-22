// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'sro_membership',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/sroMembership',
  operationId: '14_getSroMembership',
};

export const tool: Tool = {
  name: 'retrieve_sro_membership',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить информацию о членстве в СРО НОСТРОЙ/НОПРИЗ\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sro_membership_retrieve_response',\n  $defs: {\n    sro_membership_retrieve_response: {\n      type: 'object',\n      properties: {\n        available_count: {\n          type: 'integer',\n          description: 'Количество доступных запросов'\n        },\n        sro_infos: {\n          type: 'array',\n          description: 'Данные',\n          items: {\n            type: 'object',\n            description: 'Данные',\n            properties: {\n              checks: {\n                type: 'array',\n                description: 'Проверки',\n                items: {\n                  type: 'object',\n                  description: 'Проверки',\n                  properties: {\n                    date: {\n                      type: 'string',\n                      description: 'Дата окончания проверки'\n                    },\n                    facts: {\n                      type: 'string',\n                      description: 'Факты применения мер дисциплинарного воздействия'\n                    },\n                    result: {\n                      type: 'string',\n                      description: 'Результат проверки члена СРО'\n                    },\n                    type: {\n                      type: 'string',\n                      description: 'Тип проверки'\n                    }\n                  }\n                }\n              },\n              ensures: {\n                type: 'array',\n                description: 'Страхование',\n                items: {\n                  type: 'object',\n                  description: 'Страхование',\n                  properties: {\n                    company: {\n                      type: 'string',\n                      description: 'Наименование страховой компании'\n                    },\n                    phones: {\n                      type: 'string',\n                      description: 'Контактные телефоны'\n                    },\n                    place: {\n                      type: 'string',\n                      description: 'Место нахождения'\n                    },\n                    subject: {\n                      type: 'string',\n                      description: 'Предмет договора страхования'\n                    },\n                    sum: {\n                      type: 'string',\n                      description: 'Размер страховой суммы'\n                    }\n                  }\n                }\n              },\n              fund: {\n                type: 'object',\n                description: 'Информация о КФ',\n                properties: {\n                  fund_compensate: {\n                    type: 'number',\n                    description: 'Размер взноса в компенсационный фонд возмещения вреда'\n                  },\n                  fund_secure: {\n                    type: 'number',\n                    description: 'Размер взноса в компенсационный фонд обеспечения договорных обязательств'\n                  }\n                }\n              },\n              info: {\n                type: 'object',\n                description: 'Общая информация',\n                properties: {\n                  accordance: {\n                    type: 'string',\n                    description: 'Сведения о соответствии условиям членства в СРО'\n                  },\n                  address: {\n                    type: 'string',\n                    description: 'Адрес'\n                  },\n                  phones: {\n                    type: 'string',\n                    description: 'Контактные телефоны'\n                  },\n                  reg_number: {\n                    type: 'string',\n                    description: 'Регистрационный номер в реестре СРО'\n                  },\n                  sro_date: {\n                    type: 'string',\n                    description: 'Дата регистрации в реестре СРО',\n                    format: 'date'\n                  },\n                  sro_id: {\n                    type: 'string',\n                    description: 'Идентификатор СРО'\n                  },\n                  sro_name: {\n                    type: 'string',\n                    description: 'Наименование СРО'\n                  },\n                  sro_ogrn: {\n                    type: 'string',\n                    description: 'ОГРН СРО'\n                  },\n                  stop_date: {\n                    type: 'string',\n                    description: 'Дата прекращения членства',\n                    format: 'date'\n                  },\n                  stop_reason: {\n                    type: 'string',\n                    description: 'Основание прекращения членства'\n                  },\n                  type: {\n                    type: 'string',\n                    description: 'Тип(реестр) СРО',\n                    enum: [                      'НОСТРОЙ',\n                      'НОПРИЗ'\n                    ]\n                  }\n                }\n              },\n              right: {\n                type: 'object',\n                description: 'Сведения о наличии права',\n                properties: {\n                  atomic_relation: {\n                    type: 'string',\n                    description: 'В отношении объектов использования атомной энергии'\n                  },\n                  build_relation: {\n                    type: 'string',\n                    description: 'В отношении объектов капитального строительства (кроме особо опасных, технически сложных и уникальных объектов, объектов использования атомной энергии)'\n                  },\n                  danger_relation: {\n                    type: 'string',\n                    description: 'В отношении особо опасных, технически сложных и уникальных объектов капитального строительства (кроме объектов использования атомной энергии)'\n                  },\n                  decision_num_date: {\n                    type: 'string',\n                    description: 'Основание наделения правом'\n                  },\n                  work_obligations: {\n                    type: 'string',\n                    description: 'Размер обязательств по договорам подряда с использованием конкурентных способов заключения договоров (уровень ответственности)'\n                  },\n                  work_price: {\n                    type: 'string',\n                    description: 'Стоимость работ по одному договору подряда (уровень ответственности)'\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      accordance: {
        type: 'boolean',
        description:
          'Сведения о соответствии:\ntrue - только соответствующие,\nfalse - только несоответствующие',
      },
      inn: {
        type: 'string',
        description: 'ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП.',
      },
      ogrn: {
        type: 'string',
        description: 'ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.',
      },
      order: {
        type: 'boolean',
        description: 'Порядок сортировки по дате регистрации:\ntrue - прямой,\nfalse - обратный',
      },
      sro_name_like: {
        type: 'string',
        description: 'Фильтр наименования СРО',
      },
      status: {
        type: 'boolean',
        description: 'Статус членства:\ntrue - только активные,\nfalse - только прекращённые',
      },
      type: {
        type: 'string',
        description: 'Реестр СРО: НОСТРОЙ | НОПРИЗ',
        enum: ['НОСТРОЙ', 'НОПРИЗ'],
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.sroMembership.retrieve(body)));
};

export default { metadata, tool, handler };
