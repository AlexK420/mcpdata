// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Datanewton from 'datanewton';

const client = new Datanewton({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource corporateActions', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.corporateActions.list({ key: 'key' });
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
    const response = await client.corporateActions.list({
      key: 'key',
      date_from: '7321-69-10',
      date_to: '7321-69-10',
      group: 'CapitalChange',
      inn: '321669910225',
      limit: 0,
      offset: 0,
      ogrn: '321669910225610',
      type: 'FirmAuthorizedCapitalDecrease',
    });
  });
});
