[@guardrails-ai/core](../README.md) / [Exports](../modules.md) / [History](../modules/History.md) / Iteration

# Class: Iteration\<T\>

[History](../modules/History.md).Iteration

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](History.Iteration.md#constructor)

### Properties

- [\_completionTokensConsumed](History.Iteration.md#_completiontokensconsumed)
- [\_error](History.Iteration.md#_error)
- [\_exception](History.Iteration.md#_exception)
- [\_failedValidations](History.Iteration.md#_failedvalidations)
- [\_inputs](History.Iteration.md#_inputs)
- [\_logs](History.Iteration.md#_logs)
- [\_outputs](History.Iteration.md#_outputs)
- [\_parsedOutput](History.Iteration.md#_parsedoutput)
- [\_promptTokensConsumed](History.Iteration.md#_prompttokensconsumed)
- [\_rawOutput](History.Iteration.md#_rawoutput)
- [\_reasks](History.Iteration.md#_reasks)
- [\_status](History.Iteration.md#_status)
- [\_tokensConsumed](History.Iteration.md#_tokensconsumed)
- [\_validatedOutput](History.Iteration.md#_validatedoutput)
- [\_validationOutput](History.Iteration.md#_validationoutput)
- [\_validatorLogs](History.Iteration.md#_validatorlogs)

### Accessors

- [completionTokensConsumed](History.Iteration.md#completiontokensconsumed)
- [error](History.Iteration.md#error)
- [exception](History.Iteration.md#exception)
- [failedValidations](History.Iteration.md#failedvalidations)
- [inputs](History.Iteration.md#inputs)
- [logs](History.Iteration.md#logs)
- [outputs](History.Iteration.md#outputs)
- [parsedOutput](History.Iteration.md#parsedoutput)
- [promptTokensConsumed](History.Iteration.md#prompttokensconsumed)
- [rawOutput](History.Iteration.md#rawoutput)
- [reasks](History.Iteration.md#reasks)
- [status](History.Iteration.md#status)
- [tokensConsumed](History.Iteration.md#tokensconsumed)
- [validatedOutput](History.Iteration.md#validatedoutput)
- [validationOutput](History.Iteration.md#validationoutput)
- [validatorLogs](History.Iteration.md#validatorlogs)

### Methods

- [fromPyIteration](History.Iteration.md#frompyiteration)

## Constructors

### constructor

• **new Iteration**\<`T`\>(`inputs?`, `outputs?`, `logs?`, `tokensConsumed?`, `promptTokensConsumed?`, `completionTokensConsumed?`, `rawOutput?`, `parsedOutput?`, `validationOutput?`, `validatedOutput?`, `reasks?`, `validatorLogs?`, `error?`, `exception?`, `failedValidations?`, `status?`): [`Iteration`](History.Iteration.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs?` | [`Inputs`](History.Inputs.md) |
| `outputs?` | [`Outputs`](History.Outputs.md)\<`T`\> |
| `logs?` | [`Stack`](Structs.Stack.md)\<`string`\> |
| `tokensConsumed?` | `number` |
| `promptTokensConsumed?` | `number` |
| `completionTokensConsumed?` | `number` |
| `rawOutput?` | `string` |
| `parsedOutput?` | `T` |
| `validationOutput?` | [`ReAsk`](Outputs.ReAsk.md) \| `T` |
| `validatedOutput?` | `T` |
| `reasks?` | [`ReAsk`](Outputs.ReAsk.md)[] |
| `validatorLogs?` | [`ValidatorLogs`](Outputs.ValidatorLogs.md)[] |
| `error?` | `string` |
| `exception?` | `Error` |
| `failedValidations?` | [`ValidatorLogs`](Outputs.ValidatorLogs.md)[] |
| `status?` | `string` |

#### Returns

[`Iteration`](History.Iteration.md)\<`T`\>

#### Defined in

[src/history/iteration.ts:98](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L98)

## Properties

### \_completionTokensConsumed

• `Private` `Optional` **\_completionTokensConsumed**: `number`

Returns the number of completion/output tokens consumed during this iteration.

#### Defined in

[src/history/iteration.ts:38](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L38)

___

### \_error

• `Private` `Optional` **\_error**: `string`

The error message from any exception that raised and interrupted this iteration.

#### Defined in

[src/history/iteration.ts:78](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L78)

___

### \_exception

• `Private` `Optional` **\_exception**: `Error`

The exception that interrupted this iteration.

#### Defined in

[src/history/iteration.ts:84](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L84)

___

### \_failedValidations

• `Private` `Optional` **\_failedValidations**: [`ValidatorLogs`](Outputs.ValidatorLogs.md)[]

The validator logs for any validations that failed during this iteration.

#### Defined in

[src/history/iteration.ts:90](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L90)

___

### \_inputs

• `Private` **\_inputs**: [`Inputs`](History.Inputs.md)

The inputs for the iteration/step.

#### Defined in

[src/history/iteration.ts:13](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L13)

___

### \_logs

• `Private` **\_logs**: [`Stack`](Structs.Stack.md)\<`string`\>

Returns the logs from this iteration as a stack.

#### Defined in

[src/history/iteration.ts:23](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L23)

___

### \_outputs

• `Private` **\_outputs**: [`Outputs`](History.Outputs.md)\<`T`\>

The outputs from the iteration/step.

#### Defined in

[src/history/iteration.ts:18](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L18)

___

### \_parsedOutput

• `Private` `Optional` **\_parsedOutput**: `T`

The output from the LLM after undergoing parsing but before validation.

#### Defined in

[src/history/iteration.ts:48](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L48)

___

### \_promptTokensConsumed

• `Private` `Optional` **\_promptTokensConsumed**: `number`

Returns the number of prompt/input tokens consumed during this iteration.

#### Defined in

[src/history/iteration.ts:33](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L33)

___

### \_rawOutput

• `Private` `Optional` **\_rawOutput**: `string`

The exact output from the LLM.

#### Defined in

[src/history/iteration.ts:43](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L43)

___

### \_reasks

• `Private` `Optional` **\_reasks**: [`ReAsk`](Outputs.ReAsk.md)[]

Reasks generated during validation.
These would be incorporated into the prompt or the next LLM call.

#### Defined in

[src/history/iteration.ts:68](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L68)

___

### \_status

• `Private` `Optional` **\_status**: `string`

Representation of the end state of this iteration.
OneOf: pass, fail, error, not run

#### Defined in

[src/history/iteration.ts:96](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L96)

___

### \_tokensConsumed

• `Private` `Optional` **\_tokensConsumed**: `number`

Returns the total number of tokens consumed during this iteration.

#### Defined in

[src/history/iteration.ts:28](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L28)

___

### \_validatedOutput

• `Private` `Optional` **\_validatedOutput**: `T`

The valid output from the LLM after undergoing validation.
Could be only a partial structure if field level reasks occur.
Could contain fixed values.

#### Defined in

[src/history/iteration.ts:62](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L62)

___

### \_validationOutput

• `Private` `Optional` **\_validationOutput**: [`ReAsk`](Outputs.ReAsk.md) \| `T`

The output from the validation process.
Could be a combination of valid output and ReAsks

#### Defined in

[src/history/iteration.ts:54](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L54)

___

### \_validatorLogs

• `Private` `Optional` **\_validatorLogs**: [`ValidatorLogs`](Outputs.ValidatorLogs.md)[]

The results of each individual validation performed on the LLM response during this iteration.

#### Defined in

[src/history/iteration.ts:73](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L73)

## Accessors

### completionTokensConsumed

• `get` **completionTokensConsumed**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/history/iteration.ts:222](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L222)

___

### error

• `get` **error**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/history/iteration.ts:243](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L243)

___

### exception

• `get` **exception**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Defined in

[src/history/iteration.ts:246](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L246)

___

### failedValidations

• `get` **failedValidations**(): `undefined` \| [`ValidatorLogs`](Outputs.ValidatorLogs.md)[]

#### Returns

`undefined` \| [`ValidatorLogs`](Outputs.ValidatorLogs.md)[]

#### Defined in

[src/history/iteration.ts:249](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L249)

___

### inputs

• `get` **inputs**(): `undefined` \| [`Inputs`](History.Inputs.md)

#### Returns

`undefined` \| [`Inputs`](History.Inputs.md)

#### Defined in

[src/history/iteration.ts:207](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L207)

___

### logs

• `get` **logs**(): `undefined` \| [`Stack`](Structs.Stack.md)\<`string`\>

#### Returns

`undefined` \| [`Stack`](Structs.Stack.md)\<`string`\>

#### Defined in

[src/history/iteration.ts:213](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L213)

___

### outputs

• `get` **outputs**(): `undefined` \| [`Outputs`](History.Outputs.md)\<`T`\>

#### Returns

`undefined` \| [`Outputs`](History.Outputs.md)\<`T`\>

#### Defined in

[src/history/iteration.ts:210](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L210)

___

### parsedOutput

• `get` **parsedOutput**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/history/iteration.ts:228](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L228)

___

### promptTokensConsumed

• `get` **promptTokensConsumed**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/history/iteration.ts:219](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L219)

___

### rawOutput

• `get` **rawOutput**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/history/iteration.ts:225](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L225)

___

### reasks

• `get` **reasks**(): `undefined` \| [`ReAsk`](Outputs.ReAsk.md)[]

#### Returns

`undefined` \| [`ReAsk`](Outputs.ReAsk.md)[]

#### Defined in

[src/history/iteration.ts:237](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L237)

___

### status

• `get` **status**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/history/iteration.ts:252](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L252)

___

### tokensConsumed

• `get` **tokensConsumed**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/history/iteration.ts:216](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L216)

___

### validatedOutput

• `get` **validatedOutput**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/history/iteration.ts:234](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L234)

___

### validationOutput

• `get` **validationOutput**(): `undefined` \| [`ReAsk`](Outputs.ReAsk.md) \| `T`

#### Returns

`undefined` \| [`ReAsk`](Outputs.ReAsk.md) \| `T`

#### Defined in

[src/history/iteration.ts:231](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L231)

___

### validatorLogs

• `get` **validatorLogs**(): `undefined` \| [`ValidatorLogs`](Outputs.ValidatorLogs.md)[]

#### Returns

`undefined` \| [`ValidatorLogs`](Outputs.ValidatorLogs.md)[]

#### Defined in

[src/history/iteration.ts:240](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L240)

## Methods

### fromPyIteration

▸ **fromPyIteration**\<`U`\>(`pyIteration`): `Promise`\<[`Iteration`](History.Iteration.md)\<`U`\>\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyIteration` | `any` |

#### Returns

`Promise`\<[`Iteration`](History.Iteration.md)\<`U`\>\>

#### Defined in

[src/history/iteration.ts:134](https://github.com/guardrails-ai/guardrails-js/blob/7b16ceec34175b977bef288d9d37190ade89c2d8/src/history/iteration.ts#L134)
