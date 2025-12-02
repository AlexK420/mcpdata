// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  ArbitrationCaseListParams,
  ArbitrationCaseListResponse,
  ArbitrationCases,
} from './resources/arbitration-cases';
import { Bankruptcy, BankruptcyRetrieveParams, BankruptcyRetrieveResponse } from './resources/bankruptcy';
import { BatchCardCreateParams, BatchCardCreateResponse, BatchCards } from './resources/batch-cards';
import {
  BatchCardsByFilterCreateParams,
  BatchCardsByFilterCreateResponse,
  BatchCardsByFilters,
} from './resources/batch-cards-by-filters';
import { BatchChangeCreateParams, BatchChangeCreateResponse, BatchChanges } from './resources/batch-changes';
import {
  BlockedBankAccountListParams,
  BlockedBankAccountListResponse,
  BlockedBankAccounts,
} from './resources/blocked-bank-accounts';
import {
  CorporateActionListParams,
  CorporateActionListResponse,
  CorporateActions,
} from './resources/corporate-actions';
import {
  Counterparty,
  CounterpartyRetrieveParams,
  CounterpartyRetrieveResponse,
} from './resources/counterparty';
import {
  FiltersPreview,
  FiltersPreviewCreateParams,
  FiltersPreviewCreateResponse,
} from './resources/filters-preview';
import {
  Finance,
  FinanceReportRow,
  FinanceRetrieveParams,
  FinanceRetrieveResponse,
} from './resources/finance';
import {
  GovernmentContractListParams,
  GovernmentContractListResponse,
  GovernmentContracts,
} from './resources/government-contracts';
import {
  GovernmentContractsStat,
  GovernmentContractsStatRetrieveParams,
  GovernmentContractsStatRetrieveResponse,
} from './resources/government-contracts-stat';
import { LeaseClassifier, LeaseClassifierRetrieveResponse } from './resources/lease-classifier';
import { LeaseCreateParams, LeaseCreateResponse, Leases } from './resources/leases';
import { LicenseListResponse, Licenses } from './resources/licenses';
import { LinkListParams, LinkListResponse, Links } from './resources/links';
import { NkoReestr, NkoReestrRetrieveParams, NkoReestrRetrieveResponse } from './resources/nko-reestr';
import {
  OgrnsByAddress,
  OgrnsByAddressCreateParams,
  OgrnsByAddressCreateResponse,
} from './resources/ogrns-by-address';
import { OkpdList, OkpdListListParams, OkpdListListResponse } from './resources/okpd-list';
import { OkvedListResponse, Okveds } from './resources/okveds';
import { PaidTaxListParams, PaidTaxListResponse, PaidTaxes } from './resources/paid-taxes';
import { Procurement, ProcurementRetrieveOkpd2Response } from './resources/procurement';
import { RegionListResponse, Regions } from './resources/regions';
import { RiskListParams, RiskListResponse, Risks } from './resources/risks';
import {
  SroMembership,
  SroMembershipRetrieveParams,
  SroMembershipRetrieveResponse,
} from './resources/sro-membership';
import { SuggestionCreateParams, SuggestionCreateResponse, Suggestions } from './resources/suggestions';
import { TaxInfo, TaxInfoRetrieveParams, TaxInfoRetrieveResponse } from './resources/tax-info';
import {
  TaxpayerStatusCreateParams,
  TaxpayerStatusCreateResponse,
  TaxpayerStatuses,
} from './resources/taxpayer-statuses';
import {
  Arbitration,
  ArbitrationGetCourtsResponse,
  ArbitrationGetDisputeCategoriesResponse,
  ArbitrationGetDocumentTypesResponse,
} from './resources/arbitration/arbitration';
import {
  Dictionary,
  DictionaryListLeaseClassifierResponse,
  DictionaryListLicensesResponse,
  DictionaryListOkvedsResponse,
  DictionaryListRegionsResponse,
  Okved1,
} from './resources/dictionary/dictionary';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Defaults to process.env['DATANEWTON_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['DATANEWTON_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['DATANEWTON_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Datanewton API.
 */
export class Datanewton {
  apiKey: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Datanewton API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['DATANEWTON_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['DATANEWTON_BASE_URL'] ?? https://api.datanewton.ru] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('DATANEWTON_BASE_URL'),
    apiKey = readEnv('DATANEWTON_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.DatanewtonError(
        "The DATANEWTON_API_KEY environment variable is missing or empty; either provide it, or instantiate the Datanewton client with an apiKey option, like new Datanewton({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.datanewton.ru`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? Datanewton.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('DATANEWTON_LOG'), "process.env['DATANEWTON_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.datanewton.ru';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Datanewton = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static DatanewtonError = Errors.DatanewtonError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  taxpayerStatuses: API.TaxpayerStatuses = new API.TaxpayerStatuses(this);
  suggestions: API.Suggestions = new API.Suggestions(this);
  ogrnsByAddress: API.OgrnsByAddress = new API.OgrnsByAddress(this);
  leases: API.Leases = new API.Leases(this);
  filtersPreview: API.FiltersPreview = new API.FiltersPreview(this);
  batchChanges: API.BatchChanges = new API.BatchChanges(this);
  batchCards: API.BatchCards = new API.BatchCards(this);
  batchCardsByFilters: API.BatchCardsByFilters = new API.BatchCardsByFilters(this);
  arbitration: API.Arbitration = new API.Arbitration(this);
  taxInfo: API.TaxInfo = new API.TaxInfo(this);
  sroMembership: API.SroMembership = new API.SroMembership(this);
  risks: API.Risks = new API.Risks(this);
  paidTaxes: API.PaidTaxes = new API.PaidTaxes(this);
  okpdList: API.OkpdList = new API.OkpdList(this);
  nkoReestr: API.NkoReestr = new API.NkoReestr(this);
  links: API.Links = new API.Links(this);
  governmentContracts: API.GovernmentContracts = new API.GovernmentContracts(this);
  governmentContractsStat: API.GovernmentContractsStat = new API.GovernmentContractsStat(this);
  finance: API.Finance = new API.Finance(this);
  regions: API.Regions = new API.Regions(this);
  dictionary: API.Dictionary = new API.Dictionary(this);
  procurement: API.Procurement = new API.Procurement(this);
  okveds: API.Okveds = new API.Okveds(this);
  licenses: API.Licenses = new API.Licenses(this);
  leaseClassifier: API.LeaseClassifier = new API.LeaseClassifier(this);
  counterparty: API.Counterparty = new API.Counterparty(this);
  corporateActions: API.CorporateActions = new API.CorporateActions(this);
  blockedBankAccounts: API.BlockedBankAccounts = new API.BlockedBankAccounts(this);
  bankruptcy: API.Bankruptcy = new API.Bankruptcy(this);
  arbitrationCases: API.ArbitrationCases = new API.ArbitrationCases(this);
}

Datanewton.TaxpayerStatuses = TaxpayerStatuses;
Datanewton.Suggestions = Suggestions;
Datanewton.OgrnsByAddress = OgrnsByAddress;
Datanewton.Leases = Leases;
Datanewton.FiltersPreview = FiltersPreview;
Datanewton.BatchChanges = BatchChanges;
Datanewton.BatchCards = BatchCards;
Datanewton.BatchCardsByFilters = BatchCardsByFilters;
Datanewton.Arbitration = Arbitration;
Datanewton.TaxInfo = TaxInfo;
Datanewton.SroMembership = SroMembership;
Datanewton.Risks = Risks;
Datanewton.PaidTaxes = PaidTaxes;
Datanewton.OkpdList = OkpdList;
Datanewton.NkoReestr = NkoReestr;
Datanewton.Links = Links;
Datanewton.GovernmentContracts = GovernmentContracts;
Datanewton.GovernmentContractsStat = GovernmentContractsStat;
Datanewton.Finance = Finance;
Datanewton.Regions = Regions;
Datanewton.Dictionary = Dictionary;
Datanewton.Procurement = Procurement;
Datanewton.Okveds = Okveds;
Datanewton.Licenses = Licenses;
Datanewton.LeaseClassifier = LeaseClassifier;
Datanewton.Counterparty = Counterparty;
Datanewton.CorporateActions = CorporateActions;
Datanewton.BlockedBankAccounts = BlockedBankAccounts;
Datanewton.Bankruptcy = Bankruptcy;
Datanewton.ArbitrationCases = ArbitrationCases;

export declare namespace Datanewton {
  export type RequestOptions = Opts.RequestOptions;

  export {
    TaxpayerStatuses as TaxpayerStatuses,
    type TaxpayerStatusCreateResponse as TaxpayerStatusCreateResponse,
    type TaxpayerStatusCreateParams as TaxpayerStatusCreateParams,
  };

  export {
    Suggestions as Suggestions,
    type SuggestionCreateResponse as SuggestionCreateResponse,
    type SuggestionCreateParams as SuggestionCreateParams,
  };

  export {
    OgrnsByAddress as OgrnsByAddress,
    type OgrnsByAddressCreateResponse as OgrnsByAddressCreateResponse,
    type OgrnsByAddressCreateParams as OgrnsByAddressCreateParams,
  };

  export {
    Leases as Leases,
    type LeaseCreateResponse as LeaseCreateResponse,
    type LeaseCreateParams as LeaseCreateParams,
  };

  export {
    FiltersPreview as FiltersPreview,
    type FiltersPreviewCreateResponse as FiltersPreviewCreateResponse,
    type FiltersPreviewCreateParams as FiltersPreviewCreateParams,
  };

  export {
    BatchChanges as BatchChanges,
    type BatchChangeCreateResponse as BatchChangeCreateResponse,
    type BatchChangeCreateParams as BatchChangeCreateParams,
  };

  export {
    BatchCards as BatchCards,
    type BatchCardCreateResponse as BatchCardCreateResponse,
    type BatchCardCreateParams as BatchCardCreateParams,
  };

  export {
    BatchCardsByFilters as BatchCardsByFilters,
    type BatchCardsByFilterCreateResponse as BatchCardsByFilterCreateResponse,
    type BatchCardsByFilterCreateParams as BatchCardsByFilterCreateParams,
  };

  export {
    Arbitration as Arbitration,
    type ArbitrationGetCourtsResponse as ArbitrationGetCourtsResponse,
    type ArbitrationGetDisputeCategoriesResponse as ArbitrationGetDisputeCategoriesResponse,
    type ArbitrationGetDocumentTypesResponse as ArbitrationGetDocumentTypesResponse,
  };

  export {
    TaxInfo as TaxInfo,
    type TaxInfoRetrieveResponse as TaxInfoRetrieveResponse,
    type TaxInfoRetrieveParams as TaxInfoRetrieveParams,
  };

  export {
    SroMembership as SroMembership,
    type SroMembershipRetrieveResponse as SroMembershipRetrieveResponse,
    type SroMembershipRetrieveParams as SroMembershipRetrieveParams,
  };

  export { Risks as Risks, type RiskListResponse as RiskListResponse, type RiskListParams as RiskListParams };

  export {
    PaidTaxes as PaidTaxes,
    type PaidTaxListResponse as PaidTaxListResponse,
    type PaidTaxListParams as PaidTaxListParams,
  };

  export {
    OkpdList as OkpdList,
    type OkpdListListResponse as OkpdListListResponse,
    type OkpdListListParams as OkpdListListParams,
  };

  export {
    NkoReestr as NkoReestr,
    type NkoReestrRetrieveResponse as NkoReestrRetrieveResponse,
    type NkoReestrRetrieveParams as NkoReestrRetrieveParams,
  };

  export { Links as Links, type LinkListResponse as LinkListResponse, type LinkListParams as LinkListParams };

  export {
    GovernmentContracts as GovernmentContracts,
    type GovernmentContractListResponse as GovernmentContractListResponse,
    type GovernmentContractListParams as GovernmentContractListParams,
  };

  export {
    GovernmentContractsStat as GovernmentContractsStat,
    type GovernmentContractsStatRetrieveResponse as GovernmentContractsStatRetrieveResponse,
    type GovernmentContractsStatRetrieveParams as GovernmentContractsStatRetrieveParams,
  };

  export {
    Finance as Finance,
    type FinanceReportRow as FinanceReportRow,
    type FinanceRetrieveResponse as FinanceRetrieveResponse,
    type FinanceRetrieveParams as FinanceRetrieveParams,
  };

  export { Regions as Regions, type RegionListResponse as RegionListResponse };

  export {
    Dictionary as Dictionary,
    type Okved1 as Okved1,
    type DictionaryListLeaseClassifierResponse as DictionaryListLeaseClassifierResponse,
    type DictionaryListLicensesResponse as DictionaryListLicensesResponse,
    type DictionaryListOkvedsResponse as DictionaryListOkvedsResponse,
    type DictionaryListRegionsResponse as DictionaryListRegionsResponse,
  };

  export {
    Procurement as Procurement,
    type ProcurementRetrieveOkpd2Response as ProcurementRetrieveOkpd2Response,
  };

  export { Okveds as Okveds, type OkvedListResponse as OkvedListResponse };

  export { Licenses as Licenses, type LicenseListResponse as LicenseListResponse };

  export {
    LeaseClassifier as LeaseClassifier,
    type LeaseClassifierRetrieveResponse as LeaseClassifierRetrieveResponse,
  };

  export {
    Counterparty as Counterparty,
    type CounterpartyRetrieveResponse as CounterpartyRetrieveResponse,
    type CounterpartyRetrieveParams as CounterpartyRetrieveParams,
  };

  export {
    CorporateActions as CorporateActions,
    type CorporateActionListResponse as CorporateActionListResponse,
    type CorporateActionListParams as CorporateActionListParams,
  };

  export {
    BlockedBankAccounts as BlockedBankAccounts,
    type BlockedBankAccountListResponse as BlockedBankAccountListResponse,
    type BlockedBankAccountListParams as BlockedBankAccountListParams,
  };

  export {
    Bankruptcy as Bankruptcy,
    type BankruptcyRetrieveResponse as BankruptcyRetrieveResponse,
    type BankruptcyRetrieveParams as BankruptcyRetrieveParams,
  };

  export {
    ArbitrationCases as ArbitrationCases,
    type ArbitrationCaseListResponse as ArbitrationCaseListResponse,
    type ArbitrationCaseListParams as ArbitrationCaseListParams,
  };
}
