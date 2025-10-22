// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'counterparty',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/counterparty',
  operationId: '1_getCompanyData',
};

export const tool: Tool = {
  name: 'retrieve_counterparty',
  description:
    'Получить общую информацию о контрагенте из ЕГРЮЛ/ЕГРИП. Конкретное наполнение зависит от переданных секций, описание которых приведено в параметрах запроса.',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      filters: {
        type: 'array',
        description:
          'Перечень дополнительных секций с данными, которые нужно включить в ответ, разделённые запятой.\nЕсли не указан, то возвращается общая информация об организации (названия, дата регистрации, КПП, статус, уставный капитал).\n**Возможные значения**:\n- `ROSSTAT_BLOCK` — данные о кодах Росстата (ОКПО, ОКАТО, ОКФС, ОКТМО, ОКОГУ, ОКОПФ);\n- `ADDRESS_BLOCK` — данные о юридическом адресе и отметках из ЕГРЮЛ;\n- `MANAGER_BLOCK` — данные о руководителях организации, имеющих право действовать от имени ЮЛ без доверенности;\n- `OWNER_BLOCK` — данные об учредителях и участниках организации (физических лицах, российских ЮЛ, иностранных ЮЛ, ПИФах, государственных учреждениях и субъектах РФ, инвестиционных товариществах);\n- `OKVED_BLOCK` — данные об основных и дополнительных видах экономической деятельности (кодах ОКВЭД) организации;\n- `NEGATIVE_LISTS_BLOCK` — данные о присутствии контрагента (в том числе руководителей, учредителей) в негативных списках: дисквалификация, недостоверные сведения, РНП и т.д.;\n- `WORKERS_COUNT_BLOCK` — данные о среднесписочной численности сотрудников по годам;\n- `CONTACT_BLOCK` — данные о контактах (email, web-сайт, телефон)',
        items: {
          type: 'string',
          enum: [
            'ROSSTAT_BLOCK',
            'ADDRESS_BLOCK',
            'MANAGER_BLOCK',
            'OWNER_BLOCK',
            'OKVED_BLOCK',
            'NEGATIVE_LISTS_BLOCK',
            'WORKERS_COUNT_BLOCK',
            'CONTACT_BLOCK',
          ],
        },
      },
      inn: {
        type: 'string',
        description:
          'ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП. В случае определения нескольких организаций с этим ИНН (например, при наличии филиалов) будет возвращена информация по головной организации.',
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
  return asTextContentResult(await client.counterparty.retrieve(body));
};

export default { metadata, tool, handler };
