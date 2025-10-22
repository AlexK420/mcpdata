// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Datanewton from 'datanewton';

const client = new Datanewton({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource governmentContracts', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.governmentContracts.list({ key: 'key', types: ['FZ44'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.governmentContracts.list({
      key: 'key',
      types: ['FZ44'],
      company_name: 'company_name',
      end_date: '7321-69-10',
      inn: '321669910225',
      limit: 0,
      offset: 0,
      ogrn: '321669910225610',
      order: 'ASC',
      penalty_sum_high: 0,
      penalty_sum_low: 0,
      penalty_types: ['I'],
      price_high: 0,
      price_low: 0,
      purchase_type_info_code: { type: '11011' },
      reg_number: 'reg_number',
      role: 'CUSTOMER',
      sort: 'DATE',
      start_date: '7321-69-10',
      statuses: ['E'],
      subject_contract: 'subject_contract',
    });
  });
});
