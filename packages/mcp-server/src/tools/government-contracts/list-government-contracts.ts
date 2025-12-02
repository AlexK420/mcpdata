// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'government_contracts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/governmentContracts',
  operationId: '8_getGovernmentContracts',
};

export const tool: Tool = {
  name: 'list_government_contracts',
  description: 'Получить данные о госконтрактах контрагента по информации из ЕИС Закупки\n',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      types: {
        type: 'array',
        description:
          'Тип госконтрактов (может быть несколько)\n\n\n\n**Возможные значения**:\n- `FZ44` - ФЗ-44\n- `FZ223` - ФЗ-223\n- `PP615` - ПП-615\n- `ALL` - Все типы',
        items: {
          type: 'string',
          enum: ['FZ44', 'FZ223', 'ALL'],
        },
      },
      company_name: {
        type: 'string',
        description: 'Наименование участника',
      },
      end_date: {
        type: 'string',
        description: 'Дата конца действия контракта',
      },
      inn: {
        type: 'string',
        description: 'ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП.',
      },
      limit: {
        type: 'integer',
        description: 'Количество дел на странице(максимум 1000).',
      },
      offset: {
        type: 'integer',
        description: 'Отступ страницы.',
      },
      ogrn: {
        type: 'string',
        description: 'ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.',
      },
      order: {
        type: 'string',
        description:
          'Тип сортировки госконтрактов, если поле sort указано\n \n**Возможные значения**:\n- `ASC` - по возрастанию\n- `DESC` - по убыванию',
        enum: ['ASC', 'DESC'],
      },
      penalty_sum_high: {
        type: 'number',
        description: 'Сумма до',
      },
      penalty_sum_low: {
        type: 'number',
        description: 'Сумма от',
      },
      penalty_types: {
        type: 'array',
        description: 'Тип неустойки\n \n**Возможные значения**:\n\n\n- `F` - штраф\n- `I` - пени',
        items: {
          type: 'string',
          description: 'Тип штрафа/неустойки',
          enum: ['I', 'F'],
        },
      },
      price_high: {
        type: 'number',
        description: 'Сумма до',
      },
      price_low: {
        type: 'number',
        description: 'Сумма от',
      },
      purchase_type_info_code: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            description:
              'Способ закупки\n \n**Возможные значения**:\n\n\nдля FZ44: \n- `11011` - открытый конкурс\n- `11021` - конкурс с ограниченным участием\n- `11031` - двухэтапный конкурс\n- `12011` - электронный аукцион\n- `13011` - запрос котировок\n- `14011` - запрос предложений\n- `20000` - закупка у единственного поставщика (подрядчика, исполнителя)\n- `30000` - способ определения поставщика (подрядчика, исполнителя),\n            установленный Правительством Российской Федерации\n            в соответствии со статьей 111 Федерального закона\n- `11044` - закрытый конкурс в электронной форме\n- `11054` - закрытый конкурс с ограниченным участием в электронной форме\n- `11064` - закрытый двухэтапный конкурс в электронной форме\n- `12024` - закрытый аукцион в электронной форме\n- `40000` - закупка товара у единственного поставщика на сумму, предусмотренную частью 12 статьи 93 Закона № 44-ФЗ\n \nдля FZ223: \n- `11011` - конкурс\n- `12012` - аукцион\n- `30000` - закупка у единственного поставщика/подрядчика/исполнителя\n- `40000` - иной способ закупки, предусмотренный правовым актом заказчика, указанным в части 1 статьи 2 Федерального закона\n \nдля PP615: \n- `12011` - электронный аукцион',
            enum: [
              '11011',
              '11021',
              '11031',
              '11044',
              '11054',
              '11064',
              '12011',
              '12012',
              '12024',
              '13011',
              '14011',
              '20000',
              '30000',
              '40000',
            ],
          },
        },
      },
      reg_number: {
        type: 'string',
        description: 'Номер закупки или контракта',
      },
      role: {
        type: 'string',
        description:
          'Роль компании в контракте\n\n\n\n**Возможные значения**:\n- `CUSTOMER` - Заказчик\n- `SUPPLIER` - Поставщик\n- `ALL` - Все роли',
        enum: ['CUSTOMER', 'SUPPLIER', 'ALL'],
      },
      sort: {
        type: 'string',
        description:
          'Поле для сортировки госконтрактов\n \n**Возможные значения**:\n- `DATE` - по дате\n- `PRICE` - по цене',
        enum: ['DATE', 'PRICE'],
      },
      start_date: {
        type: 'string',
        description: 'Дата начала действия контракта',
      },
      statuses: {
        type: 'array',
        description:
          'Статусы контракта\n \n**Возможные значения**:\n- `E` - Исполнение\n- `IN` - Аннулирован\n- `EC` - Исполнение завершено\n- `ET` - Исполнение прекращено',
        items: {
          type: 'string',
          enum: ['E', 'IN', 'EC', 'ET'],
        },
      },
      subject_contract: {
        type: 'string',
        description: 'Предмет контракта',
      },
    },
    required: ['key', 'types'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.governmentContracts.list(body));
  } catch (error) {
    if (error instanceof Datanewton.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
