[guardrails-ai](../README.md) / [Exports](../modules.md) / [History](../modules/History.md) / ICall

# Interface: ICall\<T\>

[History](../modules/History.md).ICall

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`Call`](../classes/History.Call.md)

## Table of contents

### Properties

- [compiledInstructions](History.ICall.md#compiledinstructions)
- [compiledPrompt](History.ICall.md#compiledprompt)
- [completionTokensConsumed](History.ICall.md#completiontokensconsumed)
- [error](History.ICall.md#error)
- [exception](History.ICall.md#exception)
- [failedValidations](History.ICall.md#failedvalidations)
- [fixedOutput](History.ICall.md#fixedoutput)
- [inputs](History.ICall.md#inputs)
- [instructions](History.ICall.md#instructions)
- [iterations](History.ICall.md#iterations)
- [logs](History.ICall.md#logs)
- [parsedOutputs](History.ICall.md#parsedoutputs)
- [prompt](History.ICall.md#prompt)
- [promptParams](History.ICall.md#promptparams)
- [promptTokensConsumed](History.ICall.md#prompttokensconsumed)
- [rawOutputs](History.ICall.md#rawoutputs)
- [reaskInstructions](History.ICall.md#reaskinstructions)
- [reaskPrompts](History.ICall.md#reaskprompts)
- [reasks](History.ICall.md#reasks)
- [status](History.ICall.md#status)
- [tokensConsumed](History.ICall.md#tokensconsumed)
- [validatedOutput](History.ICall.md#validatedoutput)
- [validationOutput](History.ICall.md#validationoutput)
- [validatorLogs](History.ICall.md#validatorlogs)

## Properties

### compiledInstructions

• `Optional` **compiledInstructions**: `string`

#### Defined in

[src/history/call.ts:18](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L18)

___

### compiledPrompt

• `Optional` **compiledPrompt**: `string`

#### Defined in

[src/history/call.ts:15](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L15)

___

### completionTokensConsumed

• `Optional` **completionTokensConsumed**: `number`

#### Defined in

[src/history/call.ts:23](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L23)

___

### error

• `Optional` **error**: `string`

#### Defined in

[src/history/call.ts:31](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L31)

___

### exception

• `Optional` **exception**: `Error`

#### Defined in

[src/history/call.ts:32](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L32)

___

### failedValidations

• `Optional` **failedValidations**: [`Stack`](../classes/Structs.Stack.md)\<[`ValidatorLogs`](../classes/Outputs.ValidatorLogs.md)\>

#### Defined in

[src/history/call.ts:33](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L33)

___

### fixedOutput

• `Optional` **fixedOutput**: `T`

#### Defined in

[src/history/call.ts:27](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L27)

___

### inputs

• `Optional` **inputs**: [`CallInputs`](../classes/History.CallInputs.md)

#### Defined in

[src/history/call.ts:12](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L12)

___

### instructions

• `Optional` **instructions**: `string`

#### Defined in

[src/history/call.ts:17](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L17)

___

### iterations

• `Optional` **iterations**: [`Stack`](../classes/Structs.Stack.md)\<[`Iteration`](../classes/History.Iteration.md)\<`T`\>\>

#### Defined in

[src/history/call.ts:11](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L11)

___

### logs

• `Optional` **logs**: [`Stack`](../classes/Structs.Stack.md)\<`string`\>

#### Defined in

[src/history/call.ts:20](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L20)

___

### parsedOutputs

• `Optional` **parsedOutputs**: [`Stack`](../classes/Structs.Stack.md)\<`T`\>

#### Defined in

[src/history/call.ts:25](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L25)

___

### prompt

• `Optional` **prompt**: `string`

#### Defined in

[src/history/call.ts:13](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L13)

___

### promptParams

• `Optional` **promptParams**: [`Dictionary`](../modules/Types.md#dictionary)

#### Defined in

[src/history/call.ts:14](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L14)

___

### promptTokensConsumed

• `Optional` **promptTokensConsumed**: `number`

#### Defined in

[src/history/call.ts:22](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L22)

___

### rawOutputs

• `Optional` **rawOutputs**: [`Stack`](../classes/Structs.Stack.md)\<`string`\>

#### Defined in

[src/history/call.ts:24](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L24)

___

### reaskInstructions

• `Optional` **reaskInstructions**: [`Stack`](../classes/Structs.Stack.md)\<`string`\>

#### Defined in

[src/history/call.ts:19](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L19)

___

### reaskPrompts

• `Optional` **reaskPrompts**: [`Stack`](../classes/Structs.Stack.md)\<`string`\>

#### Defined in

[src/history/call.ts:16](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L16)

___

### reasks

• `Optional` **reasks**: [`Stack`](../classes/Structs.Stack.md)\<[`ReAsk`](../classes/Outputs.ReAsk.md)\>

#### Defined in

[src/history/call.ts:29](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L29)

___

### status

• `Optional` **status**: `string`

#### Defined in

[src/history/call.ts:34](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L34)

___

### tokensConsumed

• `Optional` **tokensConsumed**: `number`

#### Defined in

[src/history/call.ts:21](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L21)

___

### validatedOutput

• `Optional` **validatedOutput**: `T`

#### Defined in

[src/history/call.ts:28](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L28)

___

### validationOutput

• `Optional` **validationOutput**: [`ReAsk`](../classes/Outputs.ReAsk.md) \| `T`

#### Defined in

[src/history/call.ts:26](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L26)

___

### validatorLogs

• `Optional` **validatorLogs**: [`Stack`](../classes/Structs.Stack.md)\<[`ValidatorLogs`](../classes/Outputs.ValidatorLogs.md)\>

#### Defined in

[src/history/call.ts:30](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/history/call.ts#L30)
