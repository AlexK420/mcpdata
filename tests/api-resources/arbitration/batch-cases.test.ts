// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Datanewton from 'datanewton';

const client = new Datanewton({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batchCases', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.arbitration.batchCases.create({ key: 'key', limit: 1, offset: 0 });
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
    const response = await client.arbitration.batchCases.create({
      key: 'key',
      limit: 1,
      offset: 0,
      case_num: 'case_num',
      court: 'court',
      dispute: '0',
      doc_type: 'doc_type',
      need_document: true,
      order: 'ASC',
      participant: '1027739020760',
      role: 'RESPONDENT',
      sort: 'date_start',
      start_date_from: '2024-12-01',
      start_date_to: '2025-01-31',
      status: '0',
      sum_from: 0,
      sum_to: 0,
      updated_at_from: '2024-12-01',
      updated_at_to: '2025-12-31',
    });
  });
});
