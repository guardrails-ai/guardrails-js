[@guardrails-ai/core](../README.md) / [Exports](../modules.md) / [Outputs](../modules/Outputs.md) / ValidationOutcome

# Class: ValidationOutcome\<T\>

[Outputs](../modules/Outputs.md).ValidationOutcome

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Outputs.ValidationOutcome.md#constructor)

### Properties

- [error](Outputs.ValidationOutcome.md#error)
- [rawLlmOutput](Outputs.ValidationOutcome.md#rawllmoutput)
- [reask](Outputs.ValidationOutcome.md#reask)
- [validatedOutput](Outputs.ValidationOutcome.md#validatedoutput)
- [validationPassed](Outputs.ValidationOutcome.md#validationpassed)

### Methods

- [fromPyValidationOutcome](Outputs.ValidationOutcome.md#frompyvalidationoutcome)

## Constructors

### constructor

• **new ValidationOutcome**\<`T`\>(`validationPassed`, `rawLlmOutput?`, `validatedOutput?`, `reask?`, `error?`): [`ValidationOutcome`](Outputs.ValidationOutcome.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `validationPassed` | `boolean` |
| `rawLlmOutput?` | `string` |
| `validatedOutput?` | `T` |
| `reask?` | [`ReAsk`](Outputs.ReAsk.md) |
| `error?` | `string` |

#### Returns

[`ValidationOutcome`](Outputs.ValidationOutcome.md)\<`T`\>

#### Defined in

[src/outputs/validation-outcome.ts:11](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/validation-outcome.ts#L11)

## Properties

### error

• `Optional` **error**: `string`

#### Defined in

[src/outputs/validation-outcome.ts:9](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/validation-outcome.ts#L9)

___

### rawLlmOutput

• `Optional` **rawLlmOutput**: `string`

#### Defined in

[src/outputs/validation-outcome.ts:5](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/validation-outcome.ts#L5)

___

### reask

• `Optional` **reask**: [`ReAsk`](Outputs.ReAsk.md)

#### Defined in

[src/outputs/validation-outcome.ts:7](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/validation-outcome.ts#L7)

___

### validatedOutput

• `Optional` **validatedOutput**: `T`

#### Defined in

[src/outputs/validation-outcome.ts:6](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/validation-outcome.ts#L6)

___

### validationPassed

• **validationPassed**: `boolean`

#### Defined in

[src/outputs/validation-outcome.ts:8](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/validation-outcome.ts#L8)

## Methods

### fromPyValidationOutcome

▸ **fromPyValidationOutcome**\<`OT`\>(`pyValidationOutcome`): `Promise`\<[`ValidationOutcome`](Outputs.ValidationOutcome.md)\<`OT`\>\>

#### Type parameters

| Name |
| :------ |
| `OT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyValidationOutcome` | `any` |

#### Returns

`Promise`\<[`ValidationOutcome`](Outputs.ValidationOutcome.md)\<`OT`\>\>

#### Defined in

[src/outputs/validation-outcome.ts:25](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/validation-outcome.ts#L25)
