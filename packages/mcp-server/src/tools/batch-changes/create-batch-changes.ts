// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'batch_changes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/batchChanges',
  operationId: '4_getBatchCompanyChanges',
};

export const tool: Tool = {
  name: 'create_batch_changes',
  description:
    'Получить изменения по списку контрагентов с определенной даты. \nМожно смотреть изменения за день, за неделю, за квартал, а также за произвольный период времени. \nМожно получить историю изменений выбранных параметров за произвольный период времени. \nОтслеживаются:\n- ИНН, ОГРН, КПП\n- Статус по ЕГРЮЛ/ЕГРИП\n- Название:\n   - Полное\n   - Краткое\n   - Организационно-правовая форма (ОПФ)\n   - Код ОПФ по ЕГРЮЛ\n- Адрес местонахождения\n- Единоличный исполнительный орган:\n   - Руководитель\n   - Управляющая компания\n- Участники\n- Уставный капитал:\n   - Размер\n   - Тип\n- Реестр МСП:\n   - Статус\n   - Категория отнесения\n- Недостоверность:\n   - Учредителей\n   - Руководителей\n   - Управляющей компании\n   - Адреса\n- Дисквалификация:\n   - Учредителей\n   - Руководителей\n- Налоговые режимы\n- Бухгалтерская (финансовая) отчетность\n- ОКВЭД (добавление, изменение, удаление)\n\nМаксимальное количество контрагентов в одном запросе - 500.\nДля получения ключа к этой точке API [напишите нам](mailto:info@datanomica.org).',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      include_history: {
        type: 'boolean',
        description: 'Включить историю изменений параметра',
      },
      ogrns: {
        type: 'array',
        description: 'ОГРН компаний, по которым нужно получить изменения',
        items: {
          type: 'string',
          description: 'ОГРН компаний, по которым нужно получить изменения',
        },
      },
      param_types: {
        type: 'array',
        description:
          'Параметры мониторинга. \n**Возможные значения типа изменений**:\n- `REPORT` — Бух/Фин отчетность (публикация нового отчета);\n- `MSP_STATUS` — статус МСП;\n- `MSP_CATEGORY` — категория МСП;\n- `MANAGEMENT_COMPANY` — данные управляющей компании;\n- `OGRN` — ОГРН;\n- `INN` — ИНН;\n- `KPP` — КПП;\n- `FULL_NAME` — полное наименования компании;\n- `SHORT_NAME` — краткое наименования компании;\n- `OPF` — ОПФ (организационно-правовой формы) компании;\n- `OPF_CODE` — код ОПФ;\n- `ADDRESS_FALSE_INFO` — признак недостоверности адреса;\n- `OKVED` — ОКВЭД;\n- `OWNERS` — участники;\n- `MANAGERS` — руководители;\n- `EGR_STATUS` — статус организации в ЕГРЮЛ/ЕГРИП;\n- `COUNTERPARTY_CREATION` — факт создания организации;\n- `REG_ADDRESS` — адрес местонахождения организации;\n- `CAPITAL_TABLE_SIZE` — размер уставного капитала;\n- `CAPITAL_TABLE_TYPE` — тип уставного капитала;\n- `DISQUALIFIED_OWNER` — дисквалификация участника;\n- `DISQUALIFIED_MANAGER` — дисквалификация руководителей;\n- `OWNERS_FALSE_INFO` — признак недостоверности участников;\n- `MANAGERS_FALSE_INFO` — признак недостоверности руководителей;\n- `MANAGEMENT_COMPANY_FALSE_INFO` — признак недостоверности управляющей компании;\n- `TAX_MODE_ESHN_SIGN` — налоговый режим (ЕСХН);\n- `TAX_MODE_USN_SIGN` — налоговый режим (УСН);\n- `TAX_MODE_ENVD_SIGN` — налоговый режим (ЕНДВ);\n- `TAX_MODE_SRP_SIGN` — налоговый режим (СРП);\n- `TAX_MODE_AUSN_SIGN` — налоговый режим (АУСН);\n- `ALL` — все параметры',
        items: {
          type: 'string',
          description:
            'Параметры мониторинга. \n**Возможные значения типа изменений**:\n- `REPORT` — Бух/Фин отчетность (публикация нового отчета);\n- `MSP_STATUS` — статус МСП;\n- `MSP_CATEGORY` — категория МСП;\n- `MANAGEMENT_COMPANY` — данные управляющей компании;\n- `OGRN` — ОГРН;\n- `INN` — ИНН;\n- `KPP` — КПП;\n- `FULL_NAME` — полное наименования компании;\n- `SHORT_NAME` — краткое наименования компании;\n- `OPF` — ОПФ (организационно-правовой формы) компании;\n- `OPF_CODE` — код ОПФ;\n- `ADDRESS_FALSE_INFO` — признак недостоверности адреса;\n- `OKVED` — ОКВЭД;\n- `OWNERS` — участники;\n- `MANAGERS` — руководители;\n- `EGR_STATUS` — статус организации в ЕГРЮЛ/ЕГРИП;\n- `COUNTERPARTY_CREATION` — факт создания организации;\n- `REG_ADDRESS` — адрес местонахождения организации;\n- `CAPITAL_TABLE_SIZE` — размер уставного капитала;\n- `CAPITAL_TABLE_TYPE` — тип уставного капитала;\n- `DISQUALIFIED_OWNER` — дисквалификация участника;\n- `DISQUALIFIED_MANAGER` — дисквалификация руководителей;\n- `OWNERS_FALSE_INFO` — признак недостоверности участников;\n- `MANAGERS_FALSE_INFO` — признак недостоверности руководителей;\n- `MANAGEMENT_COMPANY_FALSE_INFO` — признак недостоверности управляющей компании;\n- `TAX_MODE_ESHN_SIGN` — налоговый режим (ЕСХН);\n- `TAX_MODE_USN_SIGN` — налоговый режим (УСН);\n- `TAX_MODE_ENVD_SIGN` — налоговый режим (ЕНДВ);\n- `TAX_MODE_SRP_SIGN` — налоговый режим (СРП);\n- `TAX_MODE_AUSN_SIGN` — налоговый режим (АУСН);\n- `ALL` — все параметры',
          enum: [
            'REPORT',
            'MSP_STATUS',
            'MSP_CATEGORY',
            'MANAGEMENT_COMPANY',
            'OGRN',
            'INN',
            'KPP',
            'FULL_NAME',
            'SHORT_NAME',
            'OPF',
            'OPF_CODE',
            'ADDRESS_FALSE_INFO',
            'OKVED',
            'OWNERS',
            'MANAGERS',
            'EGR_STATUS',
            'COUNTERPARTY_CREATION',
            'REG_ADDRESS',
            'CAPITAL_TABLE_SIZE',
            'CAPITAL_TABLE_TYPE',
            'DISQUALIFIED_OWNER',
            'DISQUALIFIED_MANAGER',
            'OWNERS_FALSE_INFO',
            'MANAGERS_FALSE_INFO',
            'MANAGEMENT_COMPANY_FALSE_INFO',
            'TAX_MODE_ESHN_SIGN',
            'TAX_MODE_USN_SIGN',
            'TAX_MODE_ENVD_SIGN',
            'TAX_MODE_SRP_SIGN',
            'TAX_MODE_AUSN_SIGN',
            'BANKRUPTCY',
            'CASE_RESPONDENT',
            'CASE_PLAINTIFF',
            'CASE_THIRD_PARTY',
            'CASE_INTERESTED_PERSONS',
            'CASE_CREDITOR',
            'CASE_APPLICANT',
            'CASE_DEBTOR',
            'CASE_CREDITOR_CURRENT_PAYMENTS',
            'CASE_OTHER',
            'ALL',
          ],
        },
      },
      start_date: {
        type: 'string',
        description: 'Дата начала мониторинга изменений',
        format: 'date',
      },
    },
    required: ['key'],
  },
  annotations: {},
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.batchChanges.create(body));
};

export default { metadata, tool, handler };
