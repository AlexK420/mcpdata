# Changelog

## 0.1.0 (2025-12-20)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/AlexK420/mcpdata/compare/v0.0.1...v0.1.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **mcp:** add detail field to docs search tool ([4b2017b](https://github.com/AlexK420/mcpdata/commit/4b2017b55610adec8b1a46b2d37d12703df9b47f))
* **mcp:** add typescript check to code execution tool ([5066987](https://github.com/AlexK420/mcpdata/commit/5066987adf78a9796d7bab03826a46f6262dbad4))
* **mcp:** enable optional code execution tool on http mcp servers ([72af577](https://github.com/AlexK420/mcpdata/commit/72af577677c3997c6b9deb3cbe55f0783f12dc6a))
* **mcp:** handle code mode calls in the Stainless API ([839ac88](https://github.com/AlexK420/mcpdata/commit/839ac88fbd1df74deca3e4895e3584b39d7fb8c3))
* **mcp:** return logs on code tool errors ([41d5fd2](https://github.com/AlexK420/mcpdata/commit/41d5fd29e71193adbca5ea8e9fa4c7cc2173cf33))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([5555bbd](https://github.com/AlexK420/mcpdata/commit/5555bbd7d126b51692f036eebe12ad0840c54ef4))
* **mcpb:** pin @anthropic-ai/mcpb version ([990298f](https://github.com/AlexK420/mcpdata/commit/990298fcc57b030ae1f78d7ba385ec5d9624f91d))
* **mcp:** correct code tool API endpoint ([d7df03a](https://github.com/AlexK420/mcpdata/commit/d7df03a0cd7a5522e3dfff87f4b07ea60e16b260))
* **mcp:** pass base url to code tool ([f1b4e0f](https://github.com/AlexK420/mcpdata/commit/f1b4e0f55332e801de9ba9d1ed594890f5a5f3b7))
* **mcp:** return correct lines on typescript errors ([986864a](https://github.com/AlexK420/mcpdata/commit/986864ae236a763a5f37699eb32b3a5db4a791e8))
* **mcp:** return tool execution error on api error ([6459934](https://github.com/AlexK420/mcpdata/commit/6459934e52ba9f580b96314cfa2a3d3157e53256))
* **mcp:** return tool execution error on jq failure ([fe28a35](https://github.com/AlexK420/mcpdata/commit/fe28a35e4398286ca2a262969fff5d76573e425a))


### Chores

* **client:** fix logger property type ([e9faa7a](https://github.com/AlexK420/mcpdata/commit/e9faa7a2b1cc9fa6ea4bec052bfba825261c06e9))
* configure new SDK language ([a930fd0](https://github.com/AlexK420/mcpdata/commit/a930fd0832c1d8ef3fd888df75ec19b122bb2ade))
* **internal:** codegen related update ([83728c6](https://github.com/AlexK420/mcpdata/commit/83728c61575af28520a137f8f09a30273a40d58b))
* **internal:** codegen related update ([b9aa6fc](https://github.com/AlexK420/mcpdata/commit/b9aa6fcd48973b44d9e719ec0d100a18379d9384))
* **internal:** codegen related update ([ec870f5](https://github.com/AlexK420/mcpdata/commit/ec870f58a106701cec6f695c485dc1a9622e421c))
* **internal:** codegen related update ([35c5956](https://github.com/AlexK420/mcpdata/commit/35c5956900f002543fc8782f748cd0fc5aa54594))
* **internal:** codegen related update ([2bcff40](https://github.com/AlexK420/mcpdata/commit/2bcff4090eacb07af1a4de4679726ec05020bf89))
* **internal:** grammar fix (it's -&gt; its) ([4e37db8](https://github.com/AlexK420/mcpdata/commit/4e37db84dd2fd317a15243277ebb9c90d165bb78))
* **internal:** upgrade eslint ([97681ab](https://github.com/AlexK420/mcpdata/commit/97681abb1098977c32bdb1a9ee82548d500dbd1e))
* mcp code tool explicit error message when missing a run function ([f3e1d63](https://github.com/AlexK420/mcpdata/commit/f3e1d63b1e17ea6b6daca88b19afdcf08d46f803))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([5ead6bc](https://github.com/AlexK420/mcpdata/commit/5ead6bc9cca93e80715d0278e41c29a6939e6e4b))
* **mcp:** add line numbers to code tool errors ([3a5a56c](https://github.com/AlexK420/mcpdata/commit/3a5a56c4595482567f3596f34e7c620ee4de0749))
* **mcp:** clarify http auth error ([e26147e](https://github.com/AlexK420/mcpdata/commit/e26147edf9215e2524946a442b5dfc6d4a41cb54))
* **mcp:** remove deprecated tool schemes ([5627a82](https://github.com/AlexK420/mcpdata/commit/5627a82b2cff281d6b1a786056c4e2bf7a154e2e))
* **mcp:** update lockfile ([7f2e41d](https://github.com/AlexK420/mcpdata/commit/7f2e41df2d8a8697cc6f9617b34f08e40770685e))
* **mcp:** upgrade jq-web ([977d40c](https://github.com/AlexK420/mcpdata/commit/977d40c3e6e9a19168d445200509d6364018a7ea))
* update SDK settings ([62283ae](https://github.com/AlexK420/mcpdata/commit/62283aed01b3bb3bc408946faeb1f62c9ea9864d))
* use latest @modelcontextprotocol/sdk ([733071a](https://github.com/AlexK420/mcpdata/commit/733071a72ccfacc4edb2387d1f839f32d2b75938))
* use structured error when code execution tool errors ([9b50e98](https://github.com/AlexK420/mcpdata/commit/9b50e982056247d81e175e5c2a00d14c1e4b1acd))
