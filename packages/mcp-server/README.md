# Datanewton TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:AlexK420/mcpdata.git
cd mcpdata
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export DATANEWTON_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y datanewton-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "datanewton_api": {
      "command": "node",
      "args": ["/path/to/local/mcpdata/packages/mcp-server", "--client=claude", "--tools=dynamic"],
      "env": {
        "DATANEWTON_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ---------------------- | ------------------------ | --------------------- |
| `x-datanewton-api-key` | `apiKey` | Bearer Authentication |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "datanewton_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "datanewton-mcp/server";

// import a specific tool
import createTaxpayerStatuses from "datanewton-mcp/tools/taxpayer-statuses/create-taxpayer-statuses";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createTaxpayerStatuses, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `taxpayer_statuses`:

- `create_taxpayer_statuses` (`write`): Получить данные о статусе самозанятого налогоплательщика по ИНН

### Resource `suggestions`:

- `create_suggestions` (`write`): Получить список первых 10 подходящих контрагентов, соответствующих входному значению

  Поддерживаются следующие виды поиска:

  - `ОГРН`
  - `ИНН`
  - `Название ЮЛ/ИП, в том числе неполное наименование (например, "Датаном" вместо "Датаномика")`
  - `Транслитерированное название ЮЛ`
  - `Название ЮЛ, написанное в неправильной раскладке клавиатуры`
  - `Неточное название ЮЛ/ИП (с опечатками)`

### Resource `ogrns_by_address`:

- `create_ogrns_by_address` (`write`): Получить список компаний по заданному адресу

### Resource `leases`:

- `create_leases` (`write`): Получить данные о договорах лизинга по заданным условиям

### Resource `filters_preview`:

- `create_filters_preview` (`write`): Получить краткую информацию (предпросмотр) по фильтрам/условиям: оквэд, регионы и т.д.

### Resource `batch_changes`:

- `create_batch_changes` (`write`): Получить изменения по списку контрагентов с определенной даты.
  Можно смотреть изменения за день, за неделю, за квартал, а также за произвольный период времени.
  Можно получить историю изменений выбранных параметров за произвольный период времени.
  Отслеживаются:

  - ИНН, ОГРН, КПП
  - Статус по ЕГРЮЛ/ЕГРИП
  - Название:
    - Полное
    - Краткое
    - Организационно-правовая форма (ОПФ)
    - Код ОПФ по ЕГРЮЛ
  - Адрес местонахождения
  - Единоличный исполнительный орган:
    - Руководитель
    - Управляющая компания
  - Участники
  - Уставный капитал:
    - Размер
    - Тип
  - Реестр МСП:
    - Статус
    - Категория отнесения
  - Недостоверность:
    - Учредителей
    - Руководителей
    - Управляющей компании
    - Адреса
  - Дисквалификация:
    - Учредителей
    - Руководителей
  - Налоговые режимы
  - Бухгалтерская (финансовая) отчетность
  - ОКВЭД (добавление, изменение, удаление)

  Максимальное количество контрагентов в одном запросе - 500.
  Для получения ключа к этой точке API [напишите нам](mailto:info@datanomica.org).

### Resource `batch_cards`:

- `create_batch_cards` (`write`): Получить информацию о нескольких организациях одним запросом (до 5 000 контрагентов в запросе), отправив список ИНН/ОГРН

### Resource `batch_cards_by_filters`:

- `create_batch_cards_by_filters` (`write`): Получить данные контрагентов по фильтрам/условиям: оквэды, регионы и т.д.

### Resource `arbitration`:

- `get_courts_arbitration` (`read`): Получить справочник арбитражных судов: полный список наименований арбитражных судов РФ и количество дел, рассмотренных и рассматриваемых в данных инстанциях
- `get_dispute_categories_arbitration` (`read`): Получить справочник арбитражных споров (категорий), относящихся к компетенции арбитражных судов: категории споров и количество дел в данных категориях
- `get_document_types_arbitration` (`read`): Получить справочник типов документов арбитражных дел: полный список документов (судебных актов), изданных арбитражными судами, а также их количество

### Resource `arbitration.batch_cases`:

- `create_arbitration_batch_cases` (`write`): Получить данные об арбитражных делах с возможностью фильтрации

### Resource `tax_info`:

- `retrieve_tax_info` (`read`): Получить информацию об уплаченных налогах, задолженностях и штрафах, налоговых нарушениях по ИНН/ОГРН

### Resource `sro_membership`:

- `retrieve_sro_membership` (`read`): Получить информацию о членстве в СРО НОСТРОЙ/НОПРИЗ

### Resource `risks`:

- `list_risks` (`read`): Получить список рисков по контрагенту

  **Возможные значения**

  **Негативные списки: (NEGATIVE_LISTS)**

  - `owner_inaccuracy` — Недостоверность учредителя
  - `disqualified_managers` — Руководитель дисквалифицирован
  - `in_sanctions_ofac` — Находится в санкционном списке OFAC
  - `illegal_rewards` — Находится в реестре ЮЛ, привлеченных за незаконное вознаграждение
  - `address_inaccuracy` — Недостоверность адреса
  - `manager_inaccuracy` — Недостоверность руководителя
  - `in_sanctions_uk` — Находится в санкционном списке UK
  - `in_sanctions_eu` — Находится в санкционном списке EU
  - `false_info` — Недостоверные данные по ЕГРЮЛ. Если в ЕГР есть отметка о недостоверности любого из блоков: адрес, участник, руководитель, управляющая компания.
  - `disqualified_owners` — Участник дисквалифицирован
  - `unscrupulous_manager` — Руководитель в РНП
  - `unscrupulous_owner` — Участник в РНП
  - `unscrupulous_supplier_223` — Состоит в реестре недобросовестных поставщиков по ФЗ 223
  - `unscrupulous_supplier_615` — Состоит в реестре недобросовестных поставщиков по ПП 615
  - `unscrupulous_supplier_44` — Состоит в реестре недобросовестных поставщиков по ФЗ 44
  - `disqualified_individual` — ИП дисквалифицирован
  - `management_company_inaccuracy` — Недостоверность управляющей компании
  - `fin_illegal` — Имеет признаки нелегальной деятельности на финансовом рынке

  **Признаки однодневок: (ONE_DAY_COMPANY)**

  - `fns_migration` — Миграция между ФНС (более 2 за 12 месяцев)
  - `mass_address` — Массовый юридический адрес. Под массовым юридическим адресом понимается факт регистрации 5 и более компаний с точностью до офиса/помещения/комнаты
  - `mass_okveds` — ОКВЭДов более 30
  - `company_age` — Возраст менее 1 года
  - `default_capital_table` — Уставный капитал 10 000 ₽
  - `owner_change` — Учредитель сменился менее 1 года назад
  - `mass_owner` — Массовый учредитель (более 5)
  - `manager_change` — Руководитель сменился менее 1 года назад
  - `management_company_change` — Управляющая компания сменилась менее 1 года назад
  - `workers_amount` — Численность работников 0 или 1
  - `mass_manager` — Массовый руководитель (более 5)
  - `tax_debts` — Имеет налоговую задолженность
  - `tax_offences` — Имеет налоговые нарушения

  **Иные факты: (OTHER_FACTS)**

  - `has_licenses` — Имеет действующие лицензии
  - `has_declarations` — Имеет действующие Декларации соответствия
  - `owners_information_limited` — Ограничение доступа к сведениям в ЕГРЮЛ об участнике
  - `zero_intangible_assets` — Нулевая балансовая стоимость нематериальных активов, за последний год
  - `zero_fixed_assets` — Нулевая балансовая стоимость основных средств, за последний год
  - `has_certifications` — Имеет действующие Сертификаты соответствия
  - `management_companies_information_limited` — Ограничение доступа к сведениям в ЕГРЮЛ об управляющей компании
  - `has_government_contracts` — Является поставщиком по госконтрактам
  - `managers_information_limited` — Ограничение доступа к сведениям в ЕГРЮЛ о руководителе
  - `information_limited` — Ограничение доступа к сведениям в ЕГРЮЛ
  - `debt` — Сумма к взысканию по исполнительным производствам превышает 300 000 руб
  - `status_egrul` — Статус в ЕГРЮЛ, требующий внимания
  - `status_egrip` — Статус в ЕГРИП, требующий внимания

  **Сведения о банкротстве: (BANKRUPTCY)**

  - `has_bankruptcy_messages` — Есть сообщения о банкротстве за последний год

### Resource `paid_taxes`:

- `list_paid_taxes` (`read`): Получить данные об уплаченных налогах по ИНН/ОГРН

### Resource `okpd_list`:

- `list_okpd_list` (`read`): Получить список всех ОКПД (ОКПД2) компании, на основании данных в ЕИС Закупки

### Resource `nko_reestr`:

- `retrieve_nko_reestr` (`read`): Получить информацию о принадлежности контрагента к НКО

### Resource `links`:

- `list_links` (`read`): Получить связи контрагента (до 2-го уровня включительно): руководители, участники, ИП

### Resource `government_contracts`:

- `list_government_contracts` (`read`): Получить данные о госконтрактах контрагента по информации из ЕИС Закупки

### Resource `government_contracts_stat`:

- `retrieve_government_contracts_stat` (`read`): Получить статистику по госконтрактам контрагента по информации из ЕИС Закупки

### Resource `finance`:

- `retrieve_finance` (`read`): Получить данные отчетов о финансовых результатах организации

### Resource `regions`:

- `list_regions` (`read`): Получить справочник регионов России

### Resource `dictionary`:

- `list_lease_classifier_dictionary` (`read`): Получить классификатор лизинговых договоров: код лизинга, его наименование и количество заключенных договоров с данным кодом
- `list_licenses_dictionary` (`read`): Получить справочник кодов и типов лицензий
- `list_okveds_dictionary` (`read`): Получить справочник ОКВЭДов
- `list_regions_dictionary` (`read`): Получить справочник регионов России

### Resource `dictionary.procurement`:

- `list_okpd2_dictionary_procurement` (`read`): Получить общероссийский классификатор продукции по видам экономической деятельности (ОКПД2)

### Resource `dictionary.arbitration`:

- `list_courts_dictionary_arbitration` (`read`): Получить справочник арбитражных судов: полный список наименований арбитражных судов РФ и количество дел, рассмотренных и рассматриваемых в данных инстанциях
- `list_dispute_categories_dictionary_arbitration` (`read`): Получить справочник арбитражных споров (категорий), относящихся к компетенции арбитражных судов: категории споров и количество дел в данных категориях
- `list_document_types_dictionary_arbitration` (`read`): Получить справочник типов документов арбитражных дел: полный список документов (судебных актов), изданных арбитражными судами, а также их количество

### Resource `procurement`:

- `retrieve_okpd2_procurement` (`read`): Получить общероссийский классификатор продукции по видам экономической деятельности (ОКПД2)

### Resource `okveds`:

- `list_okveds` (`read`): Получить справочник ОКВЭДов

### Resource `licenses`:

- `list_licenses` (`read`): Получить справочник кодов и типов лицензий

### Resource `lease_classifier`:

- `retrieve_lease_classifier` (`read`): Получить классификатор лизинговых договоров: код лизинга, его наименование и количество заключенных договоров с данным кодом

### Resource `counterparty`:

- `retrieve_counterparty` (`read`): Получить общую информацию о контрагенте из ЕГРЮЛ/ЕГРИП. Конкретное наполнение зависит от переданных секций, описание которых приведено в параметрах запроса.

### Resource `corporate_actions`:

- `list_corporate_actions` (`read`): Получить данные о корпоративных действиях из ФедРесурса

### Resource `blocked_bank_accounts`:

- `list_blocked_bank_accounts` (`read`): Получить структурированные данные о решениях ФНС о приостановлении операций по счетам юридических лиц и ИП

### Resource `bankruptcy`:

- `retrieve_bankruptcy` (`read`): Получить признаки банкротства контрагента

### Resource `arbitration_cases`:

- `list_arbitration_cases` (`read`): Получить данные о судебных делах контрагента с возможностью фильтрации
