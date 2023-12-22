[guardrails-ai](../README.md) / [Exports](../modules.md) / [History](../modules/History.md) / CallInputs

# Class: CallInputs

[History](../modules/History.md).CallInputs

## Hierarchy

- [`Inputs`](History.Inputs.md)

  ↳ **`CallInputs`**

## Table of contents

### Constructors

- [constructor](History.CallInputs.md#constructor)

### Properties

- [\_args](History.CallInputs.md#_args)
- [\_fullSchemaReask](History.CallInputs.md#_fullschemareask)
- [\_instructions](History.CallInputs.md#_instructions)
- [\_kwargs](History.CallInputs.md#_kwargs)
- [\_llmOutput](History.CallInputs.md#_llmoutput)
- [\_metadata](History.CallInputs.md#_metadata)
- [\_msgHistory](History.CallInputs.md#_msghistory)
- [\_numReasks](History.CallInputs.md#_numreasks)
- [\_prompt](History.CallInputs.md#_prompt)
- [\_promptParams](History.CallInputs.md#_promptparams)

### Accessors

- [args](History.CallInputs.md#args)
- [fullSchemaReask](History.CallInputs.md#fullschemareask)
- [instructions](History.CallInputs.md#instructions)
- [kwargs](History.CallInputs.md#kwargs)
- [llmOutput](History.CallInputs.md#llmoutput)
- [metadata](History.CallInputs.md#metadata)
- [msgHistory](History.CallInputs.md#msghistory)
- [numReasks](History.CallInputs.md#numreasks)
- [prompt](History.CallInputs.md#prompt)
- [promptParams](History.CallInputs.md#promptparams)

### Methods

- [fromPyCallInputs](History.CallInputs.md#frompycallinputs)
- [fromPyInputs](History.CallInputs.md#frompyinputs)

## Constructors

### constructor

• **new CallInputs**(`llmOutput?`, `instructions?`, `prompt?`, `msgHistory?`, `promptParams?`, `numReasks?`, `metadata?`, `fullSchemaReask?`, `args?`, `kwargs?`): [`CallInputs`](History.CallInputs.md)

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
| `args?` | `any`[] |
| `kwargs?` | [`Dictionary`](../modules/Types.md#dictionary) |

#### Returns

[`CallInputs`](History.CallInputs.md)

#### Overrides

[Inputs](History.Inputs.md).[constructor](History.Inputs.md#constructor)

#### Defined in

[src/history/call-inputs.ts:15](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/call-inputs.ts#L15)

## Properties

### \_args

• `Private` `Optional` **\_args**: `any`[]

Additional arguments for the LLM as provided by the user.",

#### Defined in

[src/history/call-inputs.ts:9](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/call-inputs.ts#L9)

___

### \_fullSchemaReask

• `Protected` `Optional` **\_fullSchemaReask**: `boolean`

Whether to perform reasks across the entire schema or at the field level.

#### Inherited from

[Inputs](History.Inputs.md).[_fullSchemaReask](History.Inputs.md#_fullschemareask)

#### Defined in

[src/history/inputs.ts:36](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L36)

___

### \_instructions

• `Protected` `Optional` **\_instructions**: `string`

The instructions for chat model calls.

#### Inherited from

[Inputs](History.Inputs.md).[_instructions](History.Inputs.md#_instructions)

#### Defined in

[src/history/inputs.ts:12](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L12)

___

### \_kwargs

• `Private` `Optional` **\_kwargs**: [`Dictionary`](../modules/Types.md#dictionary)

Additional keyword-arguments for the LLM as provided by the user.

#### Defined in

[src/history/call-inputs.ts:13](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/call-inputs.ts#L13)

___

### \_llmOutput

• `Protected` `Optional` **\_llmOutput**: `string`

The string output from an external LLM call provided by the user via Guard.parse.

#### Inherited from

[Inputs](History.Inputs.md).[_llmOutput](History.Inputs.md#_llmoutput)

#### Defined in

[src/history/inputs.ts:8](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L8)

___

### \_metadata

• `Protected` `Optional` **\_metadata**: [`Dictionary`](../modules/Types.md#dictionary)

The metadata provided by the user to be used during validation.

#### Inherited from

[Inputs](History.Inputs.md).[_metadata](History.Inputs.md#_metadata)

#### Defined in

[src/history/inputs.ts:32](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L32)

___

### \_msgHistory

• `Protected` `Optional` **\_msgHistory**: [`Dictionary`](../modules/Types.md#dictionary)[]

The message history provided by the user for chat model calls.

#### Inherited from

[Inputs](History.Inputs.md).[_msgHistory](History.Inputs.md#_msghistory)

#### Defined in

[src/history/inputs.ts:20](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L20)

___

### \_numReasks

• `Protected` `Optional` **\_numReasks**: `number`

The total number of reasks allowed; user provided or defaulted.

#### Inherited from

[Inputs](History.Inputs.md).[_numReasks](History.Inputs.md#_numreasks)

#### Defined in

[src/history/inputs.ts:28](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L28)

___

### \_prompt

• `Protected` `Optional` **\_prompt**: `string`

The prompt.

#### Inherited from

[Inputs](History.Inputs.md).[_prompt](History.Inputs.md#_prompt)

#### Defined in

[src/history/inputs.ts:16](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L16)

___

### \_promptParams

• `Protected` `Optional` **\_promptParams**: [`Dictionary`](../modules/Types.md#dictionary)

The parameters provided by the user that will be formatted into the final LLM prompt.

#### Inherited from

[Inputs](History.Inputs.md).[_promptParams](History.Inputs.md#_promptparams)

#### Defined in

[src/history/inputs.ts:24](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L24)

## Accessors

### args

• `get` **args**(): `undefined` \| `any`[]

#### Returns

`undefined` \| `any`[]

#### Defined in

[src/history/call-inputs.ts:93](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/call-inputs.ts#L93)

___

### fullSchemaReask

• `get` **fullSchemaReask**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

Inputs.fullSchemaReask

#### Defined in

[src/history/inputs.ts:113](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L113)

___

### instructions

• `get` **instructions**(): `undefined` \| `string`

The instructions string as provided by the user.

#### Returns

`undefined` \| `string`

#### Overrides

Inputs.instructions

#### Defined in

[src/history/call-inputs.ts:90](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/call-inputs.ts#L90)

___

### kwargs

• `get` **kwargs**(): `undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Returns

`undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Defined in

[src/history/call-inputs.ts:96](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/call-inputs.ts#L96)

___

### llmOutput

• `get` **llmOutput**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Inputs.llmOutput

#### Defined in

[src/history/inputs.ts:92](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L92)

___

### metadata

• `get` **metadata**(): `undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Returns

`undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Inherited from

Inputs.metadata

#### Defined in

[src/history/inputs.ts:110](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L110)

___

### msgHistory

• `get` **msgHistory**(): `undefined` \| [`Dictionary`](../modules/Types.md#dictionary)[]

#### Returns

`undefined` \| [`Dictionary`](../modules/Types.md#dictionary)[]

#### Inherited from

Inputs.msgHistory

#### Defined in

[src/history/inputs.ts:101](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L101)

___

### numReasks

• `get` **numReasks**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

Inputs.numReasks

#### Defined in

[src/history/inputs.ts:107](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L107)

___

### prompt

• `get` **prompt**(): `undefined` \| `string`

The prompt string as provided by the user.

#### Returns

`undefined` \| `string`

#### Overrides

Inputs.prompt

#### Defined in

[src/history/call-inputs.ts:84](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/call-inputs.ts#L84)

___

### promptParams

• `get` **promptParams**(): `undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Returns

`undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Inherited from

Inputs.promptParams

#### Defined in

[src/history/inputs.ts:104](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L104)

## Methods

### fromPyCallInputs

▸ **fromPyCallInputs**(`pyCallInputs`): `Promise`\<[`CallInputs`](History.CallInputs.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyCallInputs` | `any` |

#### Returns

`Promise`\<[`CallInputs`](History.CallInputs.md)\>

#### Defined in

[src/history/call-inputs.ts:41](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/call-inputs.ts#L41)

___

### fromPyInputs

▸ **fromPyInputs**(`pyInputs`): `Promise`\<[`Inputs`](History.Inputs.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyInputs` | `any` |

#### Returns

`Promise`\<[`Inputs`](History.Inputs.md)\>

#### Inherited from

[Inputs](History.Inputs.md).[fromPyInputs](History.Inputs.md#frompyinputs)

#### Defined in

[src/history/inputs.ts:58](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/history/inputs.ts#L58)
