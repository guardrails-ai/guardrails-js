[guardrails-ai](../README.md) / [Exports](../modules.md) / [History](../modules/History.md) / Inputs

# Class: Inputs

[History](../modules/History.md).Inputs

## Hierarchy

- **`Inputs`**

  ↳ [`CallInputs`](History.CallInputs.md)

## Table of contents

### Constructors

- [constructor](History.Inputs.md#constructor)

### Properties

- [\_fullSchemaReask](History.Inputs.md#_fullschemareask)
- [\_instructions](History.Inputs.md#_instructions)
- [\_llmOutput](History.Inputs.md#_llmoutput)
- [\_metadata](History.Inputs.md#_metadata)
- [\_msgHistory](History.Inputs.md#_msghistory)
- [\_numReasks](History.Inputs.md#_numreasks)
- [\_prompt](History.Inputs.md#_prompt)
- [\_promptParams](History.Inputs.md#_promptparams)

### Accessors

- [fullSchemaReask](History.Inputs.md#fullschemareask)
- [instructions](History.Inputs.md#instructions)
- [llmOutput](History.Inputs.md#llmoutput)
- [metadata](History.Inputs.md#metadata)
- [msgHistory](History.Inputs.md#msghistory)
- [numReasks](History.Inputs.md#numreasks)
- [prompt](History.Inputs.md#prompt)
- [promptParams](History.Inputs.md#promptparams)

### Methods

- [fromPyInputs](History.Inputs.md#frompyinputs)

## Constructors

### constructor

• **new Inputs**(`llmOutput?`, `instructions?`, `prompt?`, `msgHistory?`, `promptParams?`, `numReasks?`, `metadata?`, `fullSchemaReask?`): [`Inputs`](History.Inputs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `llmOutput?` | `string` |
| `instructions?` | `string` |
| `prompt?` | `string` |
| `msgHistory?` | [`Dictionary`](../modules/Types.md#dictionary)[] |
| `promptParams?` | [`Dictionary`](../modules/Types.md#dictionary) |
| `numReasks?` | `number` |
| `metadata?` | [`Dictionary`](../modules/Types.md#dictionary) |
| `fullSchemaReask?` | `boolean` |

#### Returns

[`Inputs`](History.Inputs.md)

#### Defined in

[src/history/inputs.ts:38](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L38)

## Properties

### \_fullSchemaReask

• `Protected` `Optional` **\_fullSchemaReask**: `boolean`

Whether to perform reasks across the entire schema or at the field level.

#### Defined in

[src/history/inputs.ts:36](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L36)

___

### \_instructions

• `Protected` `Optional` **\_instructions**: `string`

The instructions for chat model calls.

#### Defined in

[src/history/inputs.ts:12](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L12)

___

### \_llmOutput

• `Protected` `Optional` **\_llmOutput**: `string`

The string output from an external LLM call provided by the user via Guard.parse.

#### Defined in

[src/history/inputs.ts:8](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L8)

___

### \_metadata

• `Protected` `Optional` **\_metadata**: [`Dictionary`](../modules/Types.md#dictionary)

The metadata provided by the user to be used during validation.

#### Defined in

[src/history/inputs.ts:32](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L32)

___

### \_msgHistory

• `Protected` `Optional` **\_msgHistory**: [`Dictionary`](../modules/Types.md#dictionary)[]

The message history provided by the user for chat model calls.

#### Defined in

[src/history/inputs.ts:20](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L20)

___

### \_numReasks

• `Protected` `Optional` **\_numReasks**: `number`

The total number of reasks allowed; user provided or defaulted.

#### Defined in

[src/history/inputs.ts:28](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L28)

___

### \_prompt

• `Protected` `Optional` **\_prompt**: `string`

The prompt.

#### Defined in

[src/history/inputs.ts:16](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L16)

___

### \_promptParams

• `Protected` `Optional` **\_promptParams**: [`Dictionary`](../modules/Types.md#dictionary)

The parameters provided by the user that will be formatted into the final LLM prompt.

#### Defined in

[src/history/inputs.ts:24](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L24)

## Accessors

### fullSchemaReask

• `get` **fullSchemaReask**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/history/inputs.ts:113](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L113)

___

### instructions

• `get` **instructions**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/history/inputs.ts:95](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L95)

___

### llmOutput

• `get` **llmOutput**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/history/inputs.ts:92](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L92)

___

### metadata

• `get` **metadata**(): `undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Returns

`undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Defined in

[src/history/inputs.ts:110](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L110)

___

### msgHistory

• `get` **msgHistory**(): `undefined` \| [`Dictionary`](../modules/Types.md#dictionary)[]

#### Returns

`undefined` \| [`Dictionary`](../modules/Types.md#dictionary)[]

#### Defined in

[src/history/inputs.ts:101](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L101)

___

### numReasks

• `get` **numReasks**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/history/inputs.ts:107](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L107)

___

### prompt

• `get` **prompt**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/history/inputs.ts:98](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L98)

___

### promptParams

• `get` **promptParams**(): `undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Returns

`undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Defined in

[src/history/inputs.ts:104](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L104)

## Methods

### fromPyInputs

▸ **fromPyInputs**(`pyInputs`): `Promise`\<[`Inputs`](History.Inputs.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyInputs` | `any` |

#### Returns

`Promise`\<[`Inputs`](History.Inputs.md)\>

#### Defined in

[src/history/inputs.ts:58](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/inputs.ts#L58)
