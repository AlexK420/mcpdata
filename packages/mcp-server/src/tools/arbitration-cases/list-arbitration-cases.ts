// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'arbitration_cases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/arbitrationCases',
  operationId: '5_getArbitrationCase_1',
};

export const tool: Tool = {
  name: 'list_arbitration_cases',
  description: 'Получить данные о судебных делах контрагента с возможностью фильтрации\n',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      company_role: {
        type: 'string',
        description:
          'Роль компании       \n\n**Возможные значения**:\n- `RESPONDENT` - Ответчик\n- `PLAINTIFF` - Истец\n- `THIRD_PARTY` - Третье лицо\n- `INTERESTED_PERSONS` - Заинтересованное лицо\n- `CREDITOR` - Кредитор\n- `APPLICANT` - Заявитель\n- `OTHER` - Иное лицо\n- `ALL` - Все',
        enum: [
          'RESPONDENT',
          'PLAINTIFF',
          'THIRD_PARTY',
          'INTERESTED_PERSONS',
          'CREDITOR',
          'APPLICANT',
          'DEBTOR',
          'CREDITOR_CURRENT_PAYMENTS',
          'OTHER',
          'ALL',
        ],
      },
      dispute: {
        type: 'string',
        description:
          'Арбитражный спор       \n\n**Возможные значения**:\n- `ABSENT` - отсутствует(0)\n- `HAS_LEGAL_SIGNIFICANCE` - об установлении фактов, имеющих юридическое значение(1)\n- `ADMINISTRATIVE_OFFENCES` - об административных правонарушениях(2)\n- `CIVIL_LAW_DISPUTES` - экономические споры по гражданским правоотношениям(3)\n- `BANKRUPTCY_ORGANIZATIONS_AND_CITIZENS` - о несостоятельности (банкротстве) организаций и граждан(4)\n- `ECONOMIC_DISPUTES_ON_PUBLIC_LEGAL_RELATIONS` - (экономические споры по административным и иным публичным правоотношениям (исключая споры об административных правонарушениях)(5)\n- `ENFORCMENT_OF_FOREIGN_JUDGMENTS` - о признании и приведении в исполнение решений иностранных судов и иностранных арбитражных решений(6)\n- `OTHER` - иное(7)\n- `ADMINISTRATIVE_DISPUTE` - административный спор(8)\n- `CHALLENGING_COURT_DECISIONS` - об оспаривании решений трет. судов и о выдаче исп. листов на принудительное исполнение решений трет. судов(9)\n- `DISCIPLINARY_DISPUTES` - дисциплинарные споры(10)\n- `ECONOMIC_DISPUTES` - экономические споры по административным правоотношениям(11)',
        enum: [
          'ABSENT',
          'HAS_LEGAL_SIGNIFICANCE',
          'ADMINISTRATIVE_OFFENCES',
          'CIVIL_LAW_DISPUTES',
          'BANKRUPTCY_ORGANIZATIONS_AND_CITIZENS',
          'ECONOMIC_DISPUTES_ON_PUBLIC_LEGAL_RELATIONS',
          'ENFORCMENT_OF_FOREIGN_JUDGMENTS',
          'OTHER',
          'ADMINISTRATIVE_DISPUTE',
          'CHALLENGING_COURT_DECISIONS',
          'DISCIPLINARY_DISPUTES',
          'ECONOMIC_DISPUTES',
        ],
      },
      end_date: {
        type: 'string',
        description: 'Дата окончания дела.',
      },
      inn: {
        type: 'string',
        description: 'ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП.',
      },
      limit: {
        type: 'integer',
        description: 'Количество сообщений на странице(максимум 1000).',
      },
      need_document: {
        type: 'boolean',
        description: 'Возвращать список документов вынесенных судом или поданных сторонами.',
      },
      offset: {
        type: 'integer',
        description: 'Отступ страницы',
      },
      ogrn: {
        type: 'string',
        description: 'ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.',
      },
      start_date: {
        type: 'string',
        description: 'Дата начала дела.',
      },
      status: {
        type: 'string',
        description:
          'Статус дела       \n\n**Возможные значения**:\n- `OPEN` - Дело рассматривается(0)\n- `CLOSE` - Дело завершено(1)',
        enum: ['CLOSE', 'OPEN'],
      },
      updated_at_from: {
        type: 'string',
        description: 'Дата изменения с',
      },
      year: {
        type: 'string',
        description: 'Год дела.',
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
  try {
    return asTextContentResult(await client.arbitrationCases.list(body));
  } catch (error) {
    if (error instanceof Datanewton.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
