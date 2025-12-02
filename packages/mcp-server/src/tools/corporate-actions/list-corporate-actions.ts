// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'corporate_actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/corporateActions',
  operationId: '12_getFedResource',
};

export const tool: Tool = {
  name: 'list_corporate_actions',
  description: 'Получить данные о корпоративных действиях из ФедРесурса\n',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      date_from: {
        type: 'string',
        description: 'Дата публикации от',
      },
      date_to: {
        type: 'string',
        description: 'Дата публикации до',
      },
      group: {
        type: 'string',
        description: 'Группа типов: CapitalChange | RegisterAction | Shareholders | Other',
        enum: ['CapitalChange', 'RegisterAction', 'Shareholders', 'Other'],
      },
      inn: {
        type: 'string',
        description: 'ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП.',
      },
      limit: {
        type: 'integer',
        description: 'Количество сообщений на странице(максимум 1000).',
      },
      offset: {
        type: 'integer',
        description: 'Отступ страницы',
      },
      ogrn: {
        type: 'string',
        description: 'ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.',
      },
      type: {
        type: 'string',
        description: 'Тип сообщения: FirmAuthorizedCapitalDecrease | FirmAuthorizedCapitalIncrease |...',
        enum: [
          'FirmAuthorizedCapitalDecrease',
          'FirmAuthorizedCapitalIncrease',
          'FirmSharesAcquisition',
          'FirmLiquidation',
          'FirmReorganization',
          'FirmRegisterExcludeTermination',
          'FirmAutonomousInstitutionCreation',
          'FirmCreated',
          'FirmRegisterExclude',
          'StopOfBusiness',
          'FirmAuthoritiesChange',
          'UnreliableInformation',
          'IntentionExerciseTheRightsOfShareholderNonResident',
          'SatisfactionExerciseTheRightsOfShareholderNonResident',
          'FirmMembersMeeting',
          'SaleOrLeaseEnterprise',
          'AnyOther',
          'RevocationOfPowerAttorney',
          'IntentionInheritanceOfLandProperty',
        ],
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
    return asTextContentResult(await client.corporateActions.list(body));
  } catch (error) {
    if (error instanceof Datanewton.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
