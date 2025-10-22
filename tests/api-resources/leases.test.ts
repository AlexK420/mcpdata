// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Datanewton from 'datanewton';

const client = new Datanewton({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource leases', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.leases.create({ key: 'key', limit: 0, offset: 0 });
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
    const response = await client.leases.create({
      key: 'key',
      limit: 0,
      offset: 0,
      classifier_codes: ['0104022'],
      lease_end_from: '2025-02-01',
      lease_end_to: '2030-12-31',
      lease_start_from: '2025-01-10',
      lease_start_to: '2025-05-10',
      only_active: true,
      order: 'DESC',
      search_text: 'оборудование',
      sort: 'date_start',
      updated_after: '2019-12-27T18:11:19.117Z',
    });
  });
});
