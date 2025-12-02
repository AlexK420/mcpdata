// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'filters_preview',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/filtersPreview',
  operationId: '25_filtersPreview',
};

export const tool: Tool = {
  name: 'create_filters_preview',
  description: 'Получить краткую информацию (предпросмотр) по фильтрам/условиям: оквэд, регионы и т.д.',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'API-ключ.',
      },
      limit: {
        type: 'integer',
        description: 'Лимит.',
      },
      offset: {
        type: 'integer',
        description: 'Оффсет.',
      },
      contact_conditions_operator: {
        type: 'string',
        description:
          'Тип объединения условий контактной информации (AND - все условия должны выполняться, OR - хотя бы одно)',
        enum: ['AND', 'OR'],
      },
      contracts: {
        type: 'object',
        description: 'Запрос по контрактам',
        properties: {
          contract_date_from: {
            type: 'string',
            description: 'Дата заключения контракта: С (включительно)',
            format: 'date',
          },
          contract_date_to: {
            type: 'string',
            description: 'Дата заключения контракта: По (включительно)',
            format: 'date',
          },
          contract_type: {
            type: 'string',
            description: 'Тип контракта (FZ44, FZ223 и др.)',
            enum: ['FZ44', 'FZ223', 'ALL'],
          },
          has_contracts: {
            type: 'boolean',
            description: 'Наличие контрактов',
          },
          max_price: {
            type: 'number',
            description: 'Максимальная сумма контракта',
          },
          min_price: {
            type: 'number',
            description: 'Минимальная сумма контракта',
          },
          okpd2_codes: {
            type: 'array',
            description: 'Коды ОКПД2 предмета контракта',
            items: {
              type: 'string',
              description: 'Коды ОКПД2 предмета контракта',
            },
          },
          only_active: {
            type: 'boolean',
            description: 'Только активные контракты',
          },
          region_code: {
            type: 'string',
            description: 'Регион (код субъекта РФ)',
          },
          role: {
            type: 'string',
            description: 'Роль контрагента',
            enum: ['SUPPLIER', 'CUSTOMER'],
          },
          search_terms: {
            type: 'array',
            description: 'Поисковые термины (каждый элемент — отдельное условие ИЛИ)',
            items: {
              type: 'string',
              description: 'Поисковые термины (каждый элемент — отдельное условие ИЛИ)',
            },
          },
          search_text: {
            type: 'string',
            description: 'Ключевые слова для поиска в предмете контракта',
          },
        },
      },
      counterparty_type: {
        type: 'string',
        description: 'Возможные типы контрагентов',
        enum: ['ul', 'ip', 'fl', 'all'],
      },
      egr_statuses: {
        type: 'array',
        description: 'Статус компании в ЕГРЮЛ',
        items: {
          type: 'string',
          description: 'Статус компании в ЕГРЮЛ',
        },
      },
      establishment_date_from: {
        type: 'string',
        description: 'Дата создания компании: с',
        format: 'date',
      },
      establishment_date_to: {
        type: 'string',
        description: 'Дата создания компании: по',
        format: 'date',
      },
      exclude_okveds: {
        type: 'array',
        description:
          'Исключить список ОКВЭД (компаний с какими оквэдами быть не должно) для выгрузки. По умолчанию применяется только к основным ОКВЭД, для применения к дополнительным необходимо устанавливать свойство exclude_only_main_okveds = false.',
        items: {
          type: 'string',
          description:
            'Исключить список ОКВЭД (компаний с какими оквэдами быть не должно) для выгрузки. По умолчанию применяется только к основным ОКВЭД, для применения к дополнительным необходимо устанавливать свойство exclude_only_main_okveds = false.',
        },
      },
      exclude_only_main_okveds: {
        type: 'boolean',
        description:
          'Применять поле exclude_okveds только к основным ОКВЭД компаний. По умолчанию true - исключать из выборке только те компании, у которых значения exclude_okveds среди основных ОКВЭД',
      },
      finance_report_year: {
        type: 'integer',
        description:
          'По какому отчетному финансовому году применяем фильтр по выручке/прибыли. Если 0, то смотрим за последний известный год (когда компания подавала отчетность)',
      },
      finance_request: {
        type: 'object',
        description: 'Запрос по финансам',
        properties: {
          metrics: {
            type: 'array',
            description: 'Финансовые метрики для анализа',
            items: {
              type: 'string',
              description: 'Финансовые метрики для анализа',
              enum: ['Выручка', 'Чистая прибыль', 'INCOME', 'NET_INCOME'],
            },
          },
          growth_from: {
            type: 'number',
            description: 'Динамика выбранных метрик: рост от (в %)',
          },
          growth_to: {
            type: 'number',
            description: 'Динамика выбранных метрик: рост до (в %)',
          },
          year_by_year: {
            type: 'boolean',
            description:
              'Применять условия по росту к каждому году (год к году), а не только к первому и последнему',
          },
          years_count: {
            type: 'integer',
            description: 'Количество лет для анализа динамики',
          },
        },
        required: ['metrics'],
      },
      has_income: {
        type: 'boolean',
        description: 'Флаг - выгружать только те, у которых есть выручка',
      },
      income_from: {
        type: 'number',
        description: 'Выручка за последний год (в тыс. рублей): с',
      },
      income_to: {
        type: 'number',
        description: 'Выручка за последний год (в тыс. рублей): по',
      },
      leases: {
        type: 'object',
        description: 'Запрос по договорам лизинга',
        properties: {
          role: {
            type: 'string',
            description: 'Роль контрагента',
            enum: ['Lessor', 'Lessee'],
          },
          classifier_codes: {
            type: 'array',
            description: 'Коды типа лизинга из классификатора (справочника)',
            items: {
              type: 'string',
              description: 'Коды типа лизинга из классификатора (справочника)',
            },
          },
          contract_date_from: {
            type: 'string',
            description: 'Дата заключения договора: С (включительно)',
            format: 'date',
          },
          contract_date_to: {
            type: 'string',
            description: 'Дата заключения договора: По (включительно)',
            format: 'date',
          },
          excluded_text: {
            type: 'string',
            description: 'Слова-исключения в реквизитах договора',
          },
          has_leases: {
            type: 'boolean',
            description: 'Наличие договоров лизинга',
          },
          only_active: {
            type: 'boolean',
            description: 'Только активные договора',
          },
          search_terms: {
            type: 'array',
            description: 'Поисковые термины (каждый элемент — отдельное условие ИЛИ) в реквизитах договора ',
            items: {
              type: 'string',
              description:
                'Поисковые термины (каждый элемент — отдельное условие ИЛИ) в реквизитах договора ',
            },
          },
          search_text: {
            type: 'string',
            description: 'Ключевые слова для поиска в реквизитах договора',
          },
          stop_date_from: {
            type: 'string',
            description: 'Дата прекращения договора: С (включительно)',
            format: 'date',
          },
          stop_date_to: {
            type: 'string',
            description: 'Дата прекращения договора: По (включительно)',
            format: 'date',
          },
        },
        required: ['role'],
      },
      licenses: {
        type: 'array',
        description: 'Список номеров лицензий',
        items: {
          type: 'integer',
          description: 'Список номеров лицензий',
        },
      },
      msp_categories: {
        type: 'array',
        description:
          'Категории МСП. Возможные варианты: 0 - не в МСП (никогда не состоял или вышел), 1 - микропредприятие, 2 - малое предприятие, 3 - среднее предприятие ',
        items: {
          type: 'string',
          description:
            'Категории МСП. Возможные варианты: 0 - не в МСП (никогда не состоял или вышел), 1 - микропредприятие, 2 - малое предприятие, 3 - среднее предприятие ',
        },
      },
      net_income_from: {
        type: 'number',
        description: 'Прибыль за последний год (в тыс. рублей): с',
      },
      net_income_to: {
        type: 'number',
        description: 'Прибыль за последний год (в тыс. рублей): по',
      },
      okveds: {
        type: 'array',
        description: 'Список ОКВЭД для выгрузки',
        items: {
          type: 'string',
          description: 'Список ОКВЭД для выгрузки',
        },
      },
      only_active: {
        type: 'boolean',
        description: 'Флаг - только действующие компании',
      },
      only_it_companies: {
        type: 'boolean',
        description: 'Вернуть только аккредитованные ИТ-компании',
      },
      only_main_okveds: {
        type: 'boolean',
        description:
          'Поиск указанных в поле "okveds" видов деятельности среди основных ОКВЭДов компаний. По умолчанию true.',
      },
      only_msp_innovative: {
        type: 'boolean',
        description: 'Производство инновационной, высокотехнологичной продукции',
      },
      only_msp_partner: {
        type: 'boolean',
        description: 'Является партнером',
      },
      only_msp_social: {
        type: 'boolean',
        description: 'Социальное предприятие',
      },
      only_nopriz_members: {
        type: 'boolean',
        description: 'Только члены СРО НОПРИЗ',
      },
      only_nostroy_members: {
        type: 'boolean',
        description: 'Только члены СРО НОСТРОЙ',
      },
      only_with_bfo: {
        type: 'boolean',
        description: 'Только с наличием данных БФО за выбранный год',
      },
      only_with_emails: {
        type: 'boolean',
        description: 'Наличие у контрагента минимум одной электронной почты',
      },
      only_with_phones: {
        type: 'boolean',
        description: 'Наличие у контрагента минимум одного номера телефона',
      },
      only_with_websites: {
        type: 'boolean',
        description: 'Наличие у контрагента минимум одного сайта',
      },
      opf_codes: {
        type: 'array',
        description: 'Код ОПФ или тип контрагента (ip, ul)',
        items: {
          type: 'string',
          description: 'Код ОПФ или тип контрагента (ip, ul)',
        },
      },
      region_codes: {
        type: 'array',
        description: 'Коды регионов',
        items: {
          type: 'string',
          description: 'Коды регионов',
        },
      },
      rosaccreditations: {
        type: 'object',
        description: 'Реестр деклараций/сертификатов соответствия',
        properties: {
          applicant_type: {
            type: 'array',
            description: 'Тип заявителя',
            items: {
              type: 'string',
              description: 'Тип заявителя',
              enum: [
                'Продавец',
                'Изготовитель',
                'Иcполнитель',
                'Уполномоченное изготовителем лицо',
                'Поставщик',
              ],
            },
          },
          description: {
            type: 'string',
            description: 'Слова в описании документа Росаккредитации',
          },
          search_terms: {
            type: 'array',
            description:
              'Поисковые термины (каждый элемент — отдельное условие ИЛИ) в описании документа Росаккредитации ',
            items: {
              type: 'string',
              description:
                'Поисковые термины (каждый элемент — отдельное условие ИЛИ) в описании документа Росаккредитации ',
            },
          },
          statuses: {
            type: 'array',
            description: 'Статус декларации или сертификата',
            items: {
              type: 'string',
              description: 'Статус декларации или сертификата',
              enum: [
                'Архивный',
                'Возобновлён',
                'Выдано предписание',
                'Действует',
                'Недействителен',
                'Прекращён',
                'Приостановлен',
                'Продлен',
                'Направлено уведомление о прекращении',
                'Черновик',
                'Ожидает проверки оператора реестра',
              ],
            },
          },
          type: {
            type: 'string',
            description: 'Тип документа',
            enum: ['Декларация', 'Сертификат', 'Декларация или сертификат'],
          },
        },
      },
      search_terms: {
        type: 'array',
        description: 'Поисковые термины (каждый элемент — отдельное условие ИЛИ) для свободного поиска ',
        items: {
          type: 'string',
          description: 'Поисковые термины (каждый элемент — отдельное условие ИЛИ) для свободного поиска ',
        },
      },
      search_text: {
        type: 'string',
        description: 'Свободное поле поиска',
      },
      ssch_from: {
        type: 'integer',
        description: 'Численность сотрудников: от',
      },
      ssch_to: {
        type: 'integer',
        description: 'Численность сотрудников: по',
      },
      support_forms: {
        type: 'array',
        description: 'Список видов/форм поддержки',
        items: {
          type: 'integer',
          description: 'Список видов/форм поддержки',
        },
      },
      vacancies: {
        type: 'object',
        description: 'Запрос по вакансиям',
        properties: {
          excluded_text: {
            type: 'string',
            description: 'Слово в названии или описании вакансии, которого быть не должно',
          },
          has_vacancies: {
            type: 'boolean',
            description: 'Наличие вакансий',
          },
          only_active: {
            type: 'boolean',
            description: 'Вакансия должна быть активной',
          },
          only_name: {
            type: 'boolean',
            description:
              'Искать поисковые слова/термины (или слова исключения) только в названии вакансии (без описания). То есть, применять условия text, search_terms, excluded_text только к названию вакансии (значение true) или к названию и описанию (значение false, по умолчанию)',
          },
          salary_max: {
            type: 'number',
            description: 'Зарплата: до',
          },
          salary_min: {
            type: 'number',
            description: 'Зарплата: от',
          },
          search_terms: {
            type: 'array',
            description:
              'Поисковые термины (каждый элемент — отдельное условие ИЛИ) в названии или описании вакансии',
            items: {
              type: 'string',
              description:
                'Поисковые термины (каждый элемент — отдельное условие ИЛИ) в названии или описании вакансии',
            },
          },
          source: {
            type: 'string',
            description: 'Источник вакансий',
            enum: ['HH_VACANCIES', 'VACANCIES', 'ALL'],
          },
          text: {
            type: 'string',
            description: 'Слово в названии или описании вакансии',
          },
        },
      },
    },
    required: ['key', 'limit', 'offset'],
  },
  annotations: {},
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.filtersPreview.create(body));
  } catch (error) {
    if (error instanceof Datanewton.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
