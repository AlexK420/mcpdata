// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_taxpayer_statuses from './taxpayer-statuses/create-taxpayer-statuses';
import create_suggestions from './suggestions/create-suggestions';
import create_ogrns_by_address from './ogrns-by-address/create-ogrns-by-address';
import create_leases from './leases/create-leases';
import create_filters_preview from './filters-preview/create-filters-preview';
import create_batch_changes from './batch-changes/create-batch-changes';
import create_batch_cards from './batch-cards/create-batch-cards';
import create_batch_cards_by_filters from './batch-cards-by-filters/create-batch-cards-by-filters';
import get_courts_arbitration from './arbitration/get-courts-arbitration';
import get_dispute_categories_arbitration from './arbitration/get-dispute-categories-arbitration';
import get_document_types_arbitration from './arbitration/get-document-types-arbitration';
import create_arbitration_batch_cases from './arbitration/batch-cases/create-arbitration-batch-cases';
import retrieve_tax_info from './tax-info/retrieve-tax-info';
import retrieve_sro_membership from './sro-membership/retrieve-sro-membership';
import list_risks from './risks/list-risks';
import list_paid_taxes from './paid-taxes/list-paid-taxes';
import list_okpd_list from './okpd-list/list-okpd-list';
import retrieve_nko_reestr from './nko-reestr/retrieve-nko-reestr';
import list_links from './links/list-links';
import list_government_contracts from './government-contracts/list-government-contracts';
import retrieve_government_contracts_stat from './government-contracts-stat/retrieve-government-contracts-stat';
import retrieve_finance from './finance/retrieve-finance';
import list_regions from './regions/list-regions';
import list_lease_classifier_dictionary from './dictionary/list-lease-classifier-dictionary';
import list_licenses_dictionary from './dictionary/list-licenses-dictionary';
import list_okveds_dictionary from './dictionary/list-okveds-dictionary';
import list_regions_dictionary from './dictionary/list-regions-dictionary';
import list_okpd2_dictionary_procurement from './dictionary/procurement/list-okpd2-dictionary-procurement';
import list_courts_dictionary_arbitration from './dictionary/arbitration/list-courts-dictionary-arbitration';
import list_dispute_categories_dictionary_arbitration from './dictionary/arbitration/list-dispute-categories-dictionary-arbitration';
import list_document_types_dictionary_arbitration from './dictionary/arbitration/list-document-types-dictionary-arbitration';
import retrieve_okpd2_procurement from './procurement/retrieve-okpd2-procurement';
import list_okveds from './okveds/list-okveds';
import list_licenses from './licenses/list-licenses';
import retrieve_lease_classifier from './lease-classifier/retrieve-lease-classifier';
import retrieve_counterparty from './counterparty/retrieve-counterparty';
import list_corporate_actions from './corporate-actions/list-corporate-actions';
import list_blocked_bank_accounts from './blocked-bank-accounts/list-blocked-bank-accounts';
import retrieve_bankruptcy from './bankruptcy/retrieve-bankruptcy';
import list_arbitration_cases from './arbitration-cases/list-arbitration-cases';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_taxpayer_statuses);
addEndpoint(create_suggestions);
addEndpoint(create_ogrns_by_address);
addEndpoint(create_leases);
addEndpoint(create_filters_preview);
addEndpoint(create_batch_changes);
addEndpoint(create_batch_cards);
addEndpoint(create_batch_cards_by_filters);
addEndpoint(get_courts_arbitration);
addEndpoint(get_dispute_categories_arbitration);
addEndpoint(get_document_types_arbitration);
addEndpoint(create_arbitration_batch_cases);
addEndpoint(retrieve_tax_info);
addEndpoint(retrieve_sro_membership);
addEndpoint(list_risks);
addEndpoint(list_paid_taxes);
addEndpoint(list_okpd_list);
addEndpoint(retrieve_nko_reestr);
addEndpoint(list_links);
addEndpoint(list_government_contracts);
addEndpoint(retrieve_government_contracts_stat);
addEndpoint(retrieve_finance);
addEndpoint(list_regions);
addEndpoint(list_lease_classifier_dictionary);
addEndpoint(list_licenses_dictionary);
addEndpoint(list_okveds_dictionary);
addEndpoint(list_regions_dictionary);
addEndpoint(list_okpd2_dictionary_procurement);
addEndpoint(list_courts_dictionary_arbitration);
addEndpoint(list_dispute_categories_dictionary_arbitration);
addEndpoint(list_document_types_dictionary_arbitration);
addEndpoint(retrieve_okpd2_procurement);
addEndpoint(list_okveds);
addEndpoint(list_licenses);
addEndpoint(retrieve_lease_classifier);
addEndpoint(retrieve_counterparty);
addEndpoint(list_corporate_actions);
addEndpoint(list_blocked_bank_accounts);
addEndpoint(retrieve_bankruptcy);
addEndpoint(list_arbitration_cases);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
