// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Datanewton from 'datanewton';

const client = new Datanewton({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource filtersPreview', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.filtersPreview.create({ key: 'key', limit: 0, offset: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.filtersPreview.create({
      key: 'key',
      limit: 0,
      offset: 0,
      contact_conditions_operator: 'OR',
      contracts: {
        contract_date_from: '2020-01-01',
        contract_date_to: '2025-12-31',
        contract_type: 'FZ44',
        has_contracts: true,
        max_price: 5000000,
        min_price: 1000000,
        okpd2_codes: ['["34.10.30.559"'],
        only_active: false,
        region_code: '41',
        role: 'SUPPLIER',
        search_terms: ['автобус', 'оборудование', 'транспорт'],
        search_text: 'автобус',
      },
      counterparty_type: 'ul',
      egr_statuses: [
        'В процессе банкротства',
        'В процессе реорганизации без последующего прекращения деятельности',
        'Действует',
        'Глава КФХ отсутствует',
        'В процессе ликвидации',
        'В процессе реорганизации с последующим прекращением деятельности',
      ],
      establishment_date_from: '2015-06-24',
      establishment_date_to: '2025-06-24',
      exclude_okveds: ['49'],
      exclude_only_main_okveds: true,
      finance_report_year: 0,
      finance_request: {
        metrics: ['INCOME', 'NET_INCOME'],
        growth_from: 15,
        growth_to: 100,
        year_by_year: false,
        years_count: 3,
      },
      has_income: false,
      income_from: 100000,
      income_to: 100000000,
      leases: {
        role: 'Lessee',
        classifier_codes: ['0106008'],
        contract_date_from: '2020-06-24',
        contract_date_to: '2025-06-24',
        excluded_text: 'легковой транспорт',
        has_leases: true,
        only_active: false,
        search_terms: ['фургон', 'оборудование', 'автомобиль грузовой'],
        search_text: 'фургон',
        stop_date_from: '2024-01-01',
        stop_date_to: '2024-12-31',
      },
      licenses: [0, 0, 0],
      msp_categories: ['U3RhaW5sZXNzIHJvY2tz', 'U3RhaW5sZXNzIHJvY2tz', 'U3RhaW5sZXNzIHJvY2tz'],
      net_income_from: 1000,
      net_income_to: 100000,
      okveds: ['49'],
      only_active: true,
      only_it_companies: false,
      only_main_okveds: true,
      only_msp_innovative: false,
      only_msp_partner: false,
      only_msp_social: false,
      only_nopriz_members: false,
      only_nostroy_members: false,
      only_with_bfo: true,
      only_with_emails: true,
      only_with_phones: true,
      only_with_websites: true,
      opf_codes: ['ip', 'ul', '49', '12267', '67'],
      region_codes: ['50'],
      rosaccreditations: {
        applicant_type: ['Уполномоченное изготовителем лицо'],
        description: 'трикотажные изделия',
        search_terms: ['консервы', 'трикотажные изделия', 'пневматический инструмент'],
        statuses: ['Прекращён', 'Возобновлён'],
        type: 'Декларация или сертификат',
      },
      search_terms: ['консервы', 'финансовый директор', 'автомобиль грузовой'],
      search_text: 'транспорт',
      ssch_from: 0,
      ssch_to: 100,
      support_forms: [0],
      vacancies: {
        excluded_text: 'водитель',
        has_vacancies: true,
        only_active: false,
        only_name: false,
        salary_max: 150000,
        salary_min: 100000,
        search_terms: ['логистика', 'грузоперевозки', 'финансовый директор'],
        source: 'ALL',
        text: 'авиаперевозки',
      },
    });
  });
});
