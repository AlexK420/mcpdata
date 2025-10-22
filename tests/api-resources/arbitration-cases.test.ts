// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Datanewton from 'datanewton';

const client = new Datanewton({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource arbitrationCases', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.arbitrationCases.list({ key: 'key' });
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
    const response = await client.arbitrationCases.list({
      key: 'key',
      company_role: 'RESPONDENT',
      dispute: 'ABSENT',
      end_date: '7321-69-10',
      inn: '321669910225',
      limit: 0,
      need_document: true,
      offset: 0,
      ogrn: '321669910225610',
      start_date: '7321-69-10',
      status: 'CLOSE',
      updated_at_from: '7321-69-10',
      year: 'year',
    });
  });
});
