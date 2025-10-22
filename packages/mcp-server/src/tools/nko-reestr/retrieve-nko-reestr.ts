// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'nko_reestr',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/nkoReestr',
  operationId: '15_getNkoReestr',
};

export const tool: Tool = {
  name: 'retrieve_nko_reestr',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить информацию о принадлежности контрагента к НКО\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/nko_reestr_retrieve_response',\n  $defs: {\n    nko_reestr_retrieve_response: {\n      type: 'object',\n      description: 'Реестр НКО',\n      properties: {\n        available_count: {\n          type: 'integer',\n          description: 'Количество доступных запросов'\n        },\n        error: {\n          type: 'object',\n          description: 'Исключительная ситуация',\n          properties: {\n            code: {\n              type: 'integer',\n              description: 'Код ошибки. Например: 1 - контрагент по заданным параметрам не найден'\n            },\n            message: {\n              type: 'string',\n              description: 'Описание'\n            },\n            source: {\n              type: 'object',\n              description: 'Параметры - входные данные, вызвавшие исключительную ситуацию',\n              additionalProperties: true\n            }\n          }\n        },\n        nko_info: {\n          type: 'array',\n          items: {\n            type: 'object',\n            description: 'Записи из реестра НКО',\n            properties: {\n              address: {\n                type: 'string',\n                description: 'Адрес'\n              },\n              forma: {\n                type: 'string',\n                description: 'Наименование вида организационно-правовой формы организации'\n              },\n              name: {\n                type: 'string',\n                description: 'Полное наименование организации'\n              },\n              nko_id: {\n                type: 'integer',\n                description: 'Идентификатор записи'\n              },\n              ogrn_date: {\n                type: 'string',\n                description: 'Дата вступления организации в реестр'\n              },\n              reestr_name: {\n                type: 'string',\n                description: 'Наименование реестра, в который входит организация'\n              },\n              reg_number: {\n                type: 'string',\n                description: 'Номер, присваиваемый организации в системе'\n              },\n              region: {\n                type: 'string',\n                description: 'Регион, в котором осуществляет деятельность НКО'\n              },\n              status_nko: {\n                type: 'string',\n                description: 'Статус НКО',\n                enum: [                  'Исключена',\n                  'Зарегистрирована'\n                ]\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.nkoReestr.retrieve(body)));
};

export default { metadata, tool, handler };
