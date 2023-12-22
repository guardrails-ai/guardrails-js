[guardrails-ai](../README.md) / [Exports](../modules.md) / [Outputs](../modules/Outputs.md) / FailResult

# Class: FailResult

[Outputs](../modules/Outputs.md).FailResult

## Table of contents

### Constructors

- [constructor](Outputs.FailResult.md#constructor)

### Properties

- [errorMessage](Outputs.FailResult.md#errormessage)
- [fixValue](Outputs.FailResult.md#fixvalue)
- [outcome](Outputs.FailResult.md#outcome)

### Methods

- [fromPyFailResult](Outputs.FailResult.md#frompyfailresult)

## Constructors

### constructor

• **new FailResult**(`errorMessage`, `fixValue`): [`FailResult`](Outputs.FailResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorMessage` | `string` |
| `fixValue` | `any` |

#### Returns

[`FailResult`](Outputs.FailResult.md)

#### Defined in

[src/outputs/fail-result.ts:8](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/fail-result.ts#L8)

## Properties

### errorMessage

• **errorMessage**: `string`

#### Defined in

[src/outputs/fail-result.ts:5](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/fail-result.ts#L5)

___

### fixValue

• **fixValue**: `any`

#### Defined in

[src/outputs/fail-result.ts:6](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/fail-result.ts#L6)

___

### outcome

• **outcome**: `string` = `'fail'`

#### Defined in

[src/outputs/fail-result.ts:4](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/fail-result.ts#L4)

## Methods

### fromPyFailResult

▸ **fromPyFailResult**(`pyFailResult`): `Promise`\<[`FailResult`](Outputs.FailResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyFailResult` | `any` |

#### Returns

`Promise`\<[`FailResult`](Outputs.FailResult.md)\>

#### Defined in

[src/outputs/fail-result.ts:17](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/fail-result.ts#L17)
