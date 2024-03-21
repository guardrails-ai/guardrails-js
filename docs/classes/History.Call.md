[@guardrails-ai/core](../README.md) / [Exports](../modules.md) / [History](../modules/History.md) / Call

# Class: Call\<T\>

[History](../modules/History.md).Call

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`ICall`](../interfaces/History.ICall.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](History.Call.md#constructor)

### Properties

- [\_compiledInstructions](History.Call.md#_compiledinstructions)
- [\_compiledPrompt](History.Call.md#_compiledprompt)
- [\_completionTokensConsumed](History.Call.md#_completiontokensconsumed)
- [\_error](History.Call.md#_error)
- [\_exception](History.Call.md#_exception)
- [\_failedValidations](History.Call.md#_failedvalidations)
- [\_fixedOutput](History.Call.md#_fixedoutput)
- [\_inputs](History.Call.md#_inputs)
- [\_instructions](History.Call.md#_instructions)
- [\_iterations](History.Call.md#_iterations)
- [\_logs](History.Call.md#_logs)
- [\_parsedOutputs](History.Call.md#_parsedoutputs)
- [\_prompt](History.Call.md#_prompt)
- [\_promptParams](History.Call.md#_promptparams)
- [\_promptTokensConsumed](History.Call.md#_prompttokensconsumed)
- [\_rawOutputs](History.Call.md#_rawoutputs)
- [\_reaskInstructions](History.Call.md#_reaskinstructions)
- [\_reaskPrompts](History.Call.md#_reaskprompts)
- [\_reasks](History.Call.md#_reasks)
- [\_status](History.Call.md#_status)
- [\_tokensConsumed](History.Call.md#_tokensconsumed)
- [\_validatedOutput](History.Call.md#_validatedoutput)
- [\_validationOutput](History.Call.md#_validationoutput)
- [\_validatorLogs](History.Call.md#_validatorlogs)

### Accessors

- [compiledInstructions](History.Call.md#compiledinstructions)
- [compiledPrompt](History.Call.md#compiledprompt)
- [completionTokensConsumed](History.Call.md#completiontokensconsumed)
- [error](History.Call.md#error)
- [exception](History.Call.md#exception)
- [failedValidations](History.Call.md#failedvalidations)
- [fixedOutput](History.Call.md#fixedoutput)
- [inputs](History.Call.md#inputs)
- [instructions](History.Call.md#instructions)
- [iterations](History.Call.md#iterations)
- [logs](History.Call.md#logs)
- [parsedOutputs](History.Call.md#parsedoutputs)
- [prompt](History.Call.md#prompt)
- [promptParams](History.Call.md#promptparams)
- [promptTokensConsumed](History.Call.md#prompttokensconsumed)
- [rawOutputs](History.Call.md#rawoutputs)
- [reaskInstructions](History.Call.md#reaskinstructions)
- [reaskPrompts](History.Call.md#reaskprompts)
- [reasks](History.Call.md#reasks)
- [status](History.Call.md#status)
- [tokensConsumed](History.Call.md#tokensconsumed)
- [validatedOutput](History.Call.md#validatedoutput)
- [validationOutput](History.Call.md#validationoutput)
- [validatorLogs](History.Call.md#validatorlogs)

### Methods

- [fromPyCall](History.Call.md#frompycall)

## Constructors

### constructor

• **new Call**\<`T`\>(`call`): [`Call`](History.Call.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `call` | [`ICall`](../interfaces/History.ICall.md)\<`T`\> |

#### Returns

[`Call`](History.Call.md)\<`T`\>

#### Defined in

[src/history/call.ts:164](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L164)

## Properties

### \_compiledInstructions

• `Private` `Optional` **\_compiledInstructions**: `string`

The initial compiled instructions that were passed to the LLM on the first call.

#### Defined in

[src/history/call.ts:77](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L77)

___

### \_compiledPrompt

• `Private` `Optional` **\_compiledPrompt**: `string`

The initial compiled prompt that was passed to the LLM on the first call.

#### Defined in

[src/history/call.ts:61](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L61)

___

### \_completionTokensConsumed

• `Private` `Optional` **\_completionTokensConsumed**: `number`

Returns the total number of completion tokens consumed during all iterations with this call.

#### Defined in

[src/history/call.ts:104](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L104)

___

### \_error

• `Private` `Optional` **\_error**: `string`

The error message from any exception that raised and interrupted the run.

#### Defined in

[src/history/call.ts:147](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L147)

___

### \_exception

• `Private` `Optional` **\_exception**: `Error`

The exception that interrupted the run.

#### Defined in

[src/history/call.ts:152](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L152)

___

### \_failedValidations

• `Private` **\_failedValidations**: [`Stack`](Structs.Stack.md)\<[`ValidatorLogs`](Outputs.ValidatorLogs.md)\>

The validator logs for any validations that failed during the entirety of the run.

#### Defined in

[src/history/call.ts:157](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L157)

___

### \_fixedOutput

• `Private` `Optional` **\_fixedOutput**: `T`

The cumulative validation output across all current iterations with any automatic fixes applied.

#### Defined in

[src/history/call.ts:125](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L125)

___

### \_inputs

• `Private` **\_inputs**: [`CallInputs`](History.CallInputs.md)

The inputs as passed in to Guard.__call__ or Guard.parse

#### Defined in

[src/history/call.ts:46](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L46)

___

### \_instructions

• `Private` `Optional` **\_instructions**: `string`

The instructions as provided by the user when intializing or calling the Guard.

#### Defined in

[src/history/call.ts:72](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L72)

___

### \_iterations

• `Private` **\_iterations**: [`Stack`](Structs.Stack.md)\<[`Iteration`](History.Iteration.md)\<`T`\>\>

A stack of iterations for each step/reask that occurred during this call.

#### Defined in

[src/history/call.ts:41](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L41)

___

### \_logs

• `Private` **\_logs**: [`Stack`](Structs.Stack.md)\<`string`\>

Returns all logs from all iterations as a stack.

#### Defined in

[src/history/call.ts:89](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L89)

___

### \_parsedOutputs

• `Private` **\_parsedOutputs**: [`Stack`](Structs.Stack.md)\<`T`\>

The outputs from the LLM after undergoing parsing but before validation.

#### Defined in

[src/history/call.ts:114](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L114)

___

### \_prompt

• `Private` `Optional` **\_prompt**: `string`

The prompt as provided by the user when intializing or calling the Guard.

#### Defined in

[src/history/call.ts:51](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L51)

___

### \_promptParams

• `Private` `Optional` **\_promptParams**: [`Dictionary`](../modules/Types.md#dictionary)

The prompt parameters as provided by the user when intializing or calling the Guard.

#### Defined in

[src/history/call.ts:56](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L56)

___

### \_promptTokensConsumed

• `Private` `Optional` **\_promptTokensConsumed**: `number`

Returns the total number of prompt tokens consumed during all iterations with this call.

#### Defined in

[src/history/call.ts:99](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L99)

___

### \_rawOutputs

• `Private` **\_rawOutputs**: [`Stack`](Structs.Stack.md)\<`string`\>

The exact outputs from all LLM calls.

#### Defined in

[src/history/call.ts:109](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L109)

___

### \_reaskInstructions

• `Private` **\_reaskInstructions**: [`Stack`](Structs.Stack.md)\<`string`\>

The compiled instructions used during reasks.
Does not include the initial instructions.

#### Defined in

[src/history/call.ts:83](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L83)

___

### \_reaskPrompts

• `Private` **\_reaskPrompts**: [`Stack`](Structs.Stack.md)\<`string`\>

The compiled prompts used during reasks.
Does not include the initial prompt.

#### Defined in

[src/history/call.ts:67](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L67)

___

### \_reasks

• `Private` **\_reasks**: [`Stack`](Structs.Stack.md)\<[`ReAsk`](Outputs.ReAsk.md)\>

Reasks generated during validation that could not be automatically fixed.
These would be incorporated into the prompt for the next LLM call if additional reasks were granted.

#### Defined in

[src/history/call.ts:137](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L137)

___

### \_status

• `Private` `Optional` **\_status**: `string`

Returns the cumulative status of the run based on the validity of the final merged output.

#### Defined in

[src/history/call.ts:162](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L162)

___

### \_tokensConsumed

• `Private` `Optional` **\_tokensConsumed**: `number`

Returns the total number of tokens consumed during all iterations with this call.

#### Defined in

[src/history/call.ts:94](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L94)

___

### \_validatedOutput

• `Private` `Optional` **\_validatedOutput**: `T`

The output from the LLM after undergoing validation.
This will only have a value if the Guard is in a passing state.

#### Defined in

[src/history/call.ts:131](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L131)

___

### \_validationOutput

• `Private` `Optional` **\_validationOutput**: [`ReAsk`](Outputs.ReAsk.md) \| `T`

The cumulative validation output across all current iterations.
Could contain ReAsks.

#### Defined in

[src/history/call.ts:120](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L120)

___

### \_validatorLogs

• `Private` **\_validatorLogs**: [`Stack`](Structs.Stack.md)\<[`ValidatorLogs`](Outputs.ValidatorLogs.md)\>

The results of each individual validation performed on the LLM responses during all iterations.

#### Defined in

[src/history/call.ts:142](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L142)

## Accessors

### compiledInstructions

• `get` **compiledInstructions**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[compiledInstructions](../interfaces/History.ICall.md#compiledinstructions)

#### Defined in

[src/history/call.ts:359](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L359)

___

### compiledPrompt

• `get` **compiledPrompt**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[compiledPrompt](../interfaces/History.ICall.md#compiledprompt)

#### Defined in

[src/history/call.ts:350](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L350)

___

### completionTokensConsumed

• `get` **completionTokensConsumed**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[completionTokensConsumed](../interfaces/History.ICall.md#completiontokensconsumed)

#### Defined in

[src/history/call.ts:374](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L374)

___

### error

• `get` **error**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[error](../interfaces/History.ICall.md#error)

#### Defined in

[src/history/call.ts:398](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L398)

___

### exception

• `get` **exception**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[exception](../interfaces/History.ICall.md#exception)

#### Defined in

[src/history/call.ts:401](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L401)

___

### failedValidations

• `get` **failedValidations**(): [`Stack`](Structs.Stack.md)\<[`ValidatorLogs`](Outputs.ValidatorLogs.md)\>

#### Returns

[`Stack`](Structs.Stack.md)\<[`ValidatorLogs`](Outputs.ValidatorLogs.md)\>

#### Implementation of

[ICall](../interfaces/History.ICall.md).[failedValidations](../interfaces/History.ICall.md#failedvalidations)

#### Defined in

[src/history/call.ts:404](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L404)

___

### fixedOutput

• `get` **fixedOutput**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[fixedOutput](../interfaces/History.ICall.md#fixedoutput)

#### Defined in

[src/history/call.ts:386](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L386)

___

### inputs

• `get` **inputs**(): [`CallInputs`](History.CallInputs.md)

#### Returns

[`CallInputs`](History.CallInputs.md)

#### Implementation of

[ICall](../interfaces/History.ICall.md).[inputs](../interfaces/History.ICall.md#inputs)

#### Defined in

[src/history/call.ts:341](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L341)

___

### instructions

• `get` **instructions**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[instructions](../interfaces/History.ICall.md#instructions)

#### Defined in

[src/history/call.ts:356](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L356)

___

### iterations

• `get` **iterations**(): [`Stack`](Structs.Stack.md)\<[`Iteration`](History.Iteration.md)\<`T`\>\>

#### Returns

[`Stack`](Structs.Stack.md)\<[`Iteration`](History.Iteration.md)\<`T`\>\>

#### Implementation of

[ICall](../interfaces/History.ICall.md).[iterations](../interfaces/History.ICall.md#iterations)

#### Defined in

[src/history/call.ts:338](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L338)

___

### logs

• `get` **logs**(): [`Stack`](Structs.Stack.md)\<`string`\>

#### Returns

[`Stack`](Structs.Stack.md)\<`string`\>

#### Implementation of

[ICall](../interfaces/History.ICall.md).[logs](../interfaces/History.ICall.md#logs)

#### Defined in

[src/history/call.ts:365](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L365)

___

### parsedOutputs

• `get` **parsedOutputs**(): [`Stack`](Structs.Stack.md)\<`T`\>

#### Returns

[`Stack`](Structs.Stack.md)\<`T`\>

#### Implementation of

[ICall](../interfaces/History.ICall.md).[parsedOutputs](../interfaces/History.ICall.md#parsedoutputs)

#### Defined in

[src/history/call.ts:380](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L380)

___

### prompt

• `get` **prompt**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[prompt](../interfaces/History.ICall.md#prompt)

#### Defined in

[src/history/call.ts:344](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L344)

___

### promptParams

• `get` **promptParams**(): `undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Returns

`undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Implementation of

[ICall](../interfaces/History.ICall.md).[promptParams](../interfaces/History.ICall.md#promptparams)

#### Defined in

[src/history/call.ts:347](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L347)

___

### promptTokensConsumed

• `get` **promptTokensConsumed**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[promptTokensConsumed](../interfaces/History.ICall.md#prompttokensconsumed)

#### Defined in

[src/history/call.ts:371](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L371)

___

### rawOutputs

• `get` **rawOutputs**(): [`Stack`](Structs.Stack.md)\<`string`\>

#### Returns

[`Stack`](Structs.Stack.md)\<`string`\>

#### Implementation of

[ICall](../interfaces/History.ICall.md).[rawOutputs](../interfaces/History.ICall.md#rawoutputs)

#### Defined in

[src/history/call.ts:377](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L377)

___

### reaskInstructions

• `get` **reaskInstructions**(): [`Stack`](Structs.Stack.md)\<`string`\>

#### Returns

[`Stack`](Structs.Stack.md)\<`string`\>

#### Implementation of

[ICall](../interfaces/History.ICall.md).[reaskInstructions](../interfaces/History.ICall.md#reaskinstructions)

#### Defined in

[src/history/call.ts:362](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L362)

___

### reaskPrompts

• `get` **reaskPrompts**(): [`Stack`](Structs.Stack.md)\<`string`\>

#### Returns

[`Stack`](Structs.Stack.md)\<`string`\>

#### Implementation of

[ICall](../interfaces/History.ICall.md).[reaskPrompts](../interfaces/History.ICall.md#reaskprompts)

#### Defined in

[src/history/call.ts:353](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L353)

___

### reasks

• `get` **reasks**(): [`Stack`](Structs.Stack.md)\<[`ReAsk`](Outputs.ReAsk.md)\>

#### Returns

[`Stack`](Structs.Stack.md)\<[`ReAsk`](Outputs.ReAsk.md)\>

#### Implementation of

[ICall](../interfaces/History.ICall.md).[reasks](../interfaces/History.ICall.md#reasks)

#### Defined in

[src/history/call.ts:392](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L392)

___

### status

• `get` **status**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[status](../interfaces/History.ICall.md#status)

#### Defined in

[src/history/call.ts:407](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L407)

___

### tokensConsumed

• `get` **tokensConsumed**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[tokensConsumed](../interfaces/History.ICall.md#tokensconsumed)

#### Defined in

[src/history/call.ts:368](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L368)

___

### validatedOutput

• `get` **validatedOutput**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[validatedOutput](../interfaces/History.ICall.md#validatedoutput)

#### Defined in

[src/history/call.ts:389](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L389)

___

### validationOutput

• `get` **validationOutput**(): `undefined` \| [`ReAsk`](Outputs.ReAsk.md) \| `T`

#### Returns

`undefined` \| [`ReAsk`](Outputs.ReAsk.md) \| `T`

#### Implementation of

[ICall](../interfaces/History.ICall.md).[validationOutput](../interfaces/History.ICall.md#validationoutput)

#### Defined in

[src/history/call.ts:383](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L383)

___

### validatorLogs

• `get` **validatorLogs**(): [`Stack`](Structs.Stack.md)\<[`ValidatorLogs`](Outputs.ValidatorLogs.md)\>

#### Returns

[`Stack`](Structs.Stack.md)\<[`ValidatorLogs`](Outputs.ValidatorLogs.md)\>

#### Implementation of

[ICall](../interfaces/History.ICall.md).[validatorLogs](../interfaces/History.ICall.md#validatorlogs)

#### Defined in

[src/history/call.ts:395](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L395)

## Methods

### fromPyCall

▸ **fromPyCall**\<`U`\>(`pyCall`): `Promise`\<[`Call`](History.Call.md)\<`U`\>\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyCall` | `any` |

#### Returns

`Promise`\<[`Call`](History.Call.md)\<`U`\>\>

#### Defined in

[src/history/call.ts:220](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/history/call.ts#L220)
