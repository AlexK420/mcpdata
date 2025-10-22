// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Datanewton } from '../client';

export abstract class APIResource {
  protected _client: Datanewton;

  constructor(client: Datanewton) {
    this._client = client;
  }
}
