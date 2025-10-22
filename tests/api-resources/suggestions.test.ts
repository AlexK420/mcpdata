// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Datanewton from 'datanewton';

const client = new Datanewton({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource suggestions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.suggestions.create({ key: 'key', search_query: 'Датаном' });
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
    const response = await client.suggestions.create({
      key: 'key',
      search_query: 'Датаном',
      is_active: true,
      type: 'ul',
    });
  });
});
