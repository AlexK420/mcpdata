// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'datanewton-mcp/filtering';
import { Metadata, asTextContentResult } from 'datanewton-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Datanewton from 'datanewton';

export const metadata: Metadata = {
  resource: 'dictionary.arbitration',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/dictionary/arbitration/document-types',
  operationId: '29_getArbitrationCasesDocTypesDictionary',
};

export const tool: Tool = {
  name: 'list_document_types_dictionary_arbitration',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nПолучить справочник типов документов арбитражных дел: полный список документов (судебных актов), изданных арбитражными судами, а также их количество\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/arbitration_list_document_types_response',\n  $defs: {\n    arbitration_list_document_types_response: {\n      type: 'object',\n      description: 'Статистика по типу документов в арбитражных делах',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Количество оформленных документов данного типа'\n        },\n        name: {\n          type: 'string',\n          description: 'Наименование судебного акта (тип документа)'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Datanewton, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.dictionary.arbitration.listDocumentTypes()),
  );
};

export default { metadata, tool, handler };
