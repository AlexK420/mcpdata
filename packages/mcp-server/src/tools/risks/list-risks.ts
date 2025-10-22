// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'risks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/risks',
  operationId: '20_getRisks',
};

export const tool: Tool = {
  name: 'list_risks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить список рисков по контрагенту\n\n**Возможные значения**\n\n**Негативные списки: (NEGATIVE_LISTS)**\n\n - `owner_inaccuracy` — Недостоверность учредителя\n - `disqualified_managers` — Руководитель дисквалифицирован\n - `in_sanctions_ofac` — Находится в санкционном списке OFAC\n - `illegal_rewards` — Находится в реестре ЮЛ, привлеченных за незаконное вознаграждение\n - `address_inaccuracy` — Недостоверность адреса\n - `manager_inaccuracy` — Недостоверность руководителя\n - `in_sanctions_uk` — Находится в санкционном списке UK\n - `in_sanctions_eu` — Находится в санкционном списке EU\n - `false_info` — Недостоверные данные по ЕГРЮЛ. Если в ЕГР есть отметка о недостоверности любого из блоков: адрес, участник, руководитель, управляющая компания.\n - `disqualified_owners` — Участник дисквалифицирован\n - `unscrupulous_manager` — Руководитель в РНП\n - `unscrupulous_owner` — Участник в РНП\n - `unscrupulous_supplier_223` — Состоит в реестре недобросовестных поставщиков по ФЗ 223\n - `unscrupulous_supplier_615` — Состоит в реестре недобросовестных поставщиков по ПП 615\n - `unscrupulous_supplier_44` — Состоит в реестре недобросовестных поставщиков по ФЗ 44\n - `disqualified_individual` — ИП дисквалифицирован\n - `management_company_inaccuracy` — Недостоверность управляющей компании\n - `fin_illegal` — Имеет признаки нелегальной деятельности на финансовом рынке\n\n**Признаки однодневок: (ONE_DAY_COMPANY)**\n\n - `fns_migration` — Миграция между ФНС (более 2 за 12 месяцев)\n - `mass_address` — Массовый юридический адрес. Под массовым юридическим адресом понимается факт регистрации 5 и более компаний с точностью до офиса/помещения/комнаты\n - `mass_okveds` — ОКВЭДов более 30\n - `company_age` — Возраст менее 1 года\n - `default_capital_table` — Уставный капитал 10 000 ₽\n - `owner_change` — Учредитель сменился менее 1 года назад\n - `mass_owner` — Массовый учредитель (более 5)\n - `manager_change` — Руководитель сменился менее 1 года назад\n - `management_company_change` — Управляющая компания сменилась менее 1 года назад\n - `workers_amount` — Численность работников 0 или 1\n - `mass_manager` — Массовый руководитель (более 5)\n - `tax_debts` — Имеет налоговую задолженность\n - `tax_offences` — Имеет налоговые нарушения\n\n**Иные факты: (OTHER_FACTS)**\n\n - `has_licenses` — Имеет действующие лицензии\n - `has_declarations` — Имеет действующие Декларации соответствия\n - `owners_information_limited` — Ограничение доступа к сведениям в ЕГРЮЛ об участнике\n - `zero_intangible_assets` — Нулевая балансовая стоимость нематериальных активов, за последний год\n - `zero_fixed_assets` — Нулевая балансовая стоимость основных средств, за последний год\n - `has_certifications` — Имеет действующие Сертификаты соответствия\n - `management_companies_information_limited` — Ограничение доступа к сведениям в ЕГРЮЛ об управляющей компании\n - `has_government_contracts` — Является поставщиком по госконтрактам\n - `managers_information_limited` — Ограничение доступа к сведениям в ЕГРЮЛ о руководителе\n - `information_limited` — Ограничение доступа к сведениям в ЕГРЮЛ\n - `debt` — Сумма к взысканию по исполнительным производствам превышает 300 000 руб\n - `status_egrul` — Статус в ЕГРЮЛ, требующий внимания\n - `status_egrip` — Статус в ЕГРИП, требующий внимания\n\n**Сведения о банкротстве: (BANKRUPTCY)**\n\n - `has_bankruptcy_messages` — Есть сообщения о банкротстве за последний год\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/risk_list_response',\n  $defs: {\n    risk_list_response: {\n      type: 'object',\n      description: 'Информация о рисках контрагента',\n      properties: {\n        available_count: {\n          type: 'integer',\n          description: 'Количество доступных запросов'\n        },\n        flags: {\n          type: 'array',\n          description: 'Список рисков',\n          items: {\n            type: 'object',\n            description: 'Показатель риска',\n            properties: {\n              category: {\n                type: 'integer',\n                description: 'категория (приоритет) для признаков: 0 - высший (красный), 1 - средний (желтый), остальное - 2. 0 и 1 устанавливается только для негативных признаков.'\n              },\n              comment: {\n                type: 'string',\n                description: 'расширенный комментарий'\n              },\n              description: {\n                type: 'string',\n                description: 'описание признака'\n              },\n              details: {\n                type: 'array',\n                description: 'дополнительная информация',\n                items: {\n                  type: 'array',\n                  description: 'дополнительная информация',\n                  items: {\n                    type: 'object',\n                    description: 'Дополнительная информация',\n                    properties: {\n                      name: {\n                        type: 'string',\n                        description: 'название'\n                      },\n                      value: {\n                        type: 'string',\n                        description: 'значение'\n                      },\n                      value_type: {\n                        type: 'string',\n                        description: 'тип значения',\n                        enum: [                          'string',\n                          'date',\n                          'boolean',\n                          'url'\n                        ]\n                      }\n                    }\n                  }\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'наименование признака'\n              },\n              positive: {\n                type: 'boolean',\n                description: 'является ли позитивным фактором'\n              },\n              type: {\n                type: 'string',\n                description: 'тип показателя',\n                enum: [                  'NEGATIVE_LISTS',\n                  'ONE_DAY_COMPANY',\n                  'OTHER_FACTS',\n                  'BANKRUPTCY'\n                ]\n              },\n              value: {\n                type: 'boolean',\n                description: 'значение true/false'\n              }\n            }\n          }\n        },\n        ogrn: {\n          type: 'string',\n          description: 'ОГРН компании'\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.risks.list(body)));
};

export default { metadata, tool, handler };
