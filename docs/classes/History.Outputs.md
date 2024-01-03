[guardrails-ai](../README.md) / [Exports](../modules.md) / [History](../modules/History.md) / Outputs

# Class: Outputs\<T\>

[History](../modules/History.md).Outputs

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](History.Outputs.md#constructor)

### Properties

- [\_error](History.Outputs.md#_error)
- [\_exception](History.Outputs.md#_exception)
- [\_failedValidations](History.Outputs.md#_failedvalidations)
- [\_llmResponseInfo](History.Outputs.md#_llmresponseinfo)
- [\_parsedOutput](History.Outputs.md#_parsedoutput)
- [\_rawOutput](History.Outputs.md#_rawoutput)
- [\_reasks](History.Outputs.md#_reasks)
- [\_status](History.Outputs.md#_status)
- [\_validatedOutput](History.Outputs.md#_validatedoutput)
- [\_validationOutput](History.Outputs.md#_validationoutput)
- [\_validatorLogs](History.Outputs.md#_validatorlogs)

### Accessors

- [error](History.Outputs.md#error)
- [exception](History.Outputs.md#exception)
- [failedValidations](History.Outputs.md#failedvalidations)
- [llmResponseInfo](History.Outputs.md#llmresponseinfo)
- [parsedOutput](History.Outputs.md#parsedoutput)
- [rawOutput](History.Outputs.md#rawoutput)
- [reasks](History.Outputs.md#reasks)
- [status](History.Outputs.md#status)
- [validatedOutput](History.Outputs.md#validatedoutput)
- [validationOutput](History.Outputs.md#validationoutput)
- [validatorLogs](History.Outputs.md#validatorlogs)

### Methods

- [fromPyOutputs](History.Outputs.md#frompyoutputs)

## Constructors

### constructor

• **new Outputs**\<`T`\>(`llmResponseInfo?`, `rawOutput?`, `parsedOutput?`, `validationOutput?`, `validatedOutput?`, `reasks?`, `validatorLogs?`, `error?`, `exception?`, `failedValidations?`, `status?`): [`Outputs`](History.Outputs.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `llmResponseInfo?` | [`LLMResponse`](Outputs.LLMResponse.md) |
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

[`Outputs`](History.Outputs.md)\<`T`\>

#### Defined in

[src/history/outputs.ts:56](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L56)

## Properties

### \_error

• `Private` `Optional` **\_error**: `string`

The error message from any exception that raised and interrupted the process.

#### Defined in

[src/history/outputs.ts:41](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L41)

___

### \_exception

• `Private` `Optional` **\_exception**: `Error`

The exception that interrupted the process.

#### Defined in

[src/history/outputs.ts:45](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L45)

___

### \_failedValidations

• `Private` `Optional` **\_failedValidations**: [`ValidatorLogs`](Outputs.ValidatorLogs.md)[]

A subset of validatorLogs for any validations that did not pass.

#### Defined in

[src/history/outputs.ts:49](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L49)

___

### \_llmResponseInfo

• `Private` `Optional` **\_llmResponseInfo**: [`LLMResponse`](Outputs.LLMResponse.md)

Information from the LLM response.

#### Defined in

[src/history/outputs.ts:11](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L11)

___

### \_parsedOutput

• `Private` `Optional` **\_parsedOutput**: `T`

The output parsed from the LLM response as it was passed into validation.

#### Defined in

[src/history/outputs.ts:19](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L19)

___

### \_rawOutput

• `Private` `Optional` **\_rawOutput**: `string`

The exact output from the LLM.

#### Defined in

[src/history/outputs.ts:15](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L15)

___

### \_reasks

• `Private` `Optional` **\_reasks**: [`ReAsk`](Outputs.ReAsk.md)[]

Information from the validation process used to construct a ReAsk to the LLM on validation failure.

#### Defined in

[src/history/outputs.ts:33](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L33)

___

### \_status

• `Private` `Optional` **\_status**: `string`

Representation of the end state of the validation run
OneOf: pass, fail, error, not run

#### Defined in

[src/history/outputs.ts:54](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L54)

___

### \_validatedOutput

• `Private` `Optional` **\_validatedOutput**: `T`

The valid output after validation.
Could be only a partial structure if field level reasks occur.
Could contain fixed values.

#### Defined in

[src/history/outputs.ts:29](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L29)

___

### \_validationOutput

• `Private` `Optional` **\_validationOutput**: [`ReAsk`](Outputs.ReAsk.md) \| `T`

The output from the validation process.

#### Defined in

[src/history/outputs.ts:23](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L23)

___

### \_validatorLogs

• `Private` `Optional` **\_validatorLogs**: [`ValidatorLogs`](Outputs.ValidatorLogs.md)[]

The results of each individual validation.

#### Defined in

[src/history/outputs.ts:37](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L37)

## Accessors

### error

• `get` **error**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/history/outputs.ts:158](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L158)

___

### exception

• `get` **exception**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Defined in

[src/history/outputs.ts:161](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L161)

___

### failedValidations

• `get` **failedValidations**(): `undefined` \| [`ValidatorLogs`](Outputs.ValidatorLogs.md)[]

#### Returns

`undefined` \| [`ValidatorLogs`](Outputs.ValidatorLogs.md)[]

#### Defined in

[src/history/outputs.ts:164](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L164)

___

### llmResponseInfo

• `get` **llmResponseInfo**(): `undefined` \| [`LLMResponse`](Outputs.LLMResponse.md)

#### Returns

`undefined` \| [`LLMResponse`](Outputs.LLMResponse.md)

#### Defined in

[src/history/outputs.ts:137](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L137)

___

### parsedOutput

• `get` **parsedOutput**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/history/outputs.ts:143](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L143)

___

### rawOutput

• `get` **rawOutput**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/history/outputs.ts:140](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L140)

___

### reasks

• `get` **reasks**(): `undefined` \| [`ReAsk`](Outputs.ReAsk.md)[]

#### Returns

`undefined` \| [`ReAsk`](Outputs.ReAsk.md)[]

#### Defined in

[src/history/outputs.ts:152](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L152)

___

### status

• `get` **status**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/history/outputs.ts:167](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L167)

___

### validatedOutput

• `get` **validatedOutput**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/history/outputs.ts:149](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L149)

___

### validationOutput

• `get` **validationOutput**(): `undefined` \| [`ReAsk`](Outputs.ReAsk.md) \| `T`

#### Returns

`undefined` \| [`ReAsk`](Outputs.ReAsk.md) \| `T`

#### Defined in

[src/history/outputs.ts:146](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L146)

___

### validatorLogs

• `get` **validatorLogs**(): `undefined` \| [`ValidatorLogs`](Outputs.ValidatorLogs.md)[]

#### Returns

`undefined` \| [`ValidatorLogs`](Outputs.ValidatorLogs.md)[]

#### Defined in

[src/history/outputs.ts:155](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L155)

## Methods

### fromPyOutputs

▸ **fromPyOutputs**\<`U`\>(`pyOutputs`): `Promise`\<[`Outputs`](History.Outputs.md)\<`Awaited`\<`U`\>\>\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyOutputs` | `any` |

#### Returns

`Promise`\<[`Outputs`](History.Outputs.md)\<`Awaited`\<`U`\>\>\>

#### Defined in

[src/history/outputs.ts:82](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/outputs.ts#L82)
