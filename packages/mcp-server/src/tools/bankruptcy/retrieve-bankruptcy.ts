// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'bankruptcy',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bankruptcy',
  operationId: '17_getBankruptcy',
};

export const tool: Tool = {
  name: 'retrieve_bankruptcy',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить признаки банкротства контрагента\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/bankruptcy_retrieve_response',\n  $defs: {\n    bankruptcy_retrieve_response: {\n      type: 'object',\n      description: 'Ответ: банкротства',\n      properties: {\n        available_count: {\n          type: 'integer',\n          description: 'Количество доступных запросов'\n        },\n        data: {\n          type: 'array',\n          description: 'Данные',\n          items: {\n            type: 'object',\n            description: 'Банкротство',\n            properties: {\n              content: {\n                type: 'string',\n                description: 'Текст сообщения'\n              },\n              guid: {\n                type: 'string',\n                description: 'GUID сообщения'\n              },\n              number: {\n                type: 'string',\n                description: 'Номер сообщения'\n              },\n              participants: {\n                type: 'array',\n                description: 'Участники сообщения, лица упомянутые в сообщении',\n                items: {\n                  type: 'object',\n                  description: 'Участник',\n                  properties: {\n                    full_name: {\n                      type: 'string',\n                      description: 'Наименование/ФИО'\n                    },\n                    inn: {\n                      type: 'string',\n                      description: 'ИНН'\n                    },\n                    ogrn: {\n                      type: 'string',\n                      description: 'ОГРН/ОГРНИП'\n                    },\n                    role: {\n                      type: 'string',\n                      description: 'Роль участника (не заполняется для публикатора)',\n                      enum: [                        'Mortgagor',\n                        'Mortgagee',\n                        'Guarantor',\n                        'Principal',\n                        'Beneficiary',\n                        'OtherGuaranteeContractor',\n                        'Lessor',\n                        'Lessee',\n                        'MonetaryClient',\n                        'MonetaryDebtor',\n                        'FinancialAgent',\n                        'Seller',\n                        'Buyer',\n                        'Grantor',\n                        'Concessionaire',\n                        'EstateOwner',\n                        'Debtor',\n                        'CommonParticipant',\n                        'ReorganizationCompany',\n                        'Sro',\n                        'Expert',\n                        'Creditor',\n                        'Appraiser',\n                        'Customer',\n                        'Owner',\n                        'Auditee',\n                        'Auditor',\n                        'Renter',\n                        'Landlord',\n                        'Founder',\n                        'ParticipantWithRightToBuyBack',\n                        'ObligedParty',\n                        'ParticipantInterestedInRightsRestriction',\n                        'ParticipantWithRestrictedRights',\n                        'ParticipantHoldingItem',\n                        'DebtCollector',\n                        'Organizer',\n                        'ControllingPerson',\n                        'ControlledNonResidentCompany',\n                        'Company',\n                        'TradeOrganizer'\n                      ]\n                    },\n                    type: {\n                      type: 'string',\n                      description: 'Тип участника',\n                      enum: [                        'Company',\n                        'IndividualEntrepreneur',\n                        'Person',\n                        'Appraiser',\n                        'NonResidentCompany',\n                        'ForeignSystem',\n                        'Notary'\n                      ]\n                    }\n                  }\n                }\n              },\n              publish_date: {\n                type: 'string',\n                description: 'Дата публикации сообщения'\n              },\n              publisher: {\n                type: 'object',\n                description: 'Участник',\n                properties: {\n                  full_name: {\n                    type: 'string',\n                    description: 'Наименование/ФИО'\n                  },\n                  inn: {\n                    type: 'string',\n                    description: 'ИНН'\n                  },\n                  ogrn: {\n                    type: 'string',\n                    description: 'ОГРН/ОГРНИП'\n                  },\n                  role: {\n                    type: 'string',\n                    description: 'Роль участника (не заполняется для публикатора)',\n                    enum: [                      'Mortgagor',\n                      'Mortgagee',\n                      'Guarantor',\n                      'Principal',\n                      'Beneficiary',\n                      'OtherGuaranteeContractor',\n                      'Lessor',\n                      'Lessee',\n                      'MonetaryClient',\n                      'MonetaryDebtor',\n                      'FinancialAgent',\n                      'Seller',\n                      'Buyer',\n                      'Grantor',\n                      'Concessionaire',\n                      'EstateOwner',\n                      'Debtor',\n                      'CommonParticipant',\n                      'ReorganizationCompany',\n                      'Sro',\n                      'Expert',\n                      'Creditor',\n                      'Appraiser',\n                      'Customer',\n                      'Owner',\n                      'Auditee',\n                      'Auditor',\n                      'Renter',\n                      'Landlord',\n                      'Founder',\n                      'ParticipantWithRightToBuyBack',\n                      'ObligedParty',\n                      'ParticipantInterestedInRightsRestriction',\n                      'ParticipantWithRestrictedRights',\n                      'ParticipantHoldingItem',\n                      'DebtCollector',\n                      'Organizer',\n                      'ControllingPerson',\n                      'ControlledNonResidentCompany',\n                      'Company',\n                      'TradeOrganizer'\n                    ]\n                  },\n                  type: {\n                    type: 'string',\n                    description: 'Тип участника',\n                    enum: [                      'Company',\n                      'IndividualEntrepreneur',\n                      'Person',\n                      'Appraiser',\n                      'NonResidentCompany',\n                      'ForeignSystem',\n                      'Notary'\n                    ]\n                  }\n                }\n              },\n              type_description: {\n                type: 'string',\n                description: 'Тип сообщения (описание)'\n              },\n              type_name: {\n                type: 'string',\n                description: 'Тип сообщения',\n                enum: [                  'CreditorIntentionGoToCourt',\n                  'DebtorIntentionGoToCourt',\n                  'BankruptcyArticle8',\n                  'BankruptcyArticle9',\n                  'AssetImpairment',\n                  'AppearanceOfBankruptcySigns',\n                  'DebtorBankruptcyCourtNotification',\n                  'FirmSupervisionPutIn',\n                  'MoratoriumRejection'\n                ]\n              }\n            }\n          }\n        },\n        limit: {\n          type: 'integer',\n          description: 'Размер страницы'\n        },\n        offset: {\n          type: 'integer',\n          description: 'Смещение страницы'\n        },\n        total: {\n          type: 'integer',\n          description: 'Всего записей'\n        }\n      }\n    }\n  }\n}\n```",
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
      limit: {
        type: 'integer',
        description: 'Количество договоров на странице(максимум 1000).',
      },
      offset: {
        type: 'integer',
        description: 'Отступ страницы',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.bankruptcy.retrieve(body)));
};

export default { metadata, tool, handler };
