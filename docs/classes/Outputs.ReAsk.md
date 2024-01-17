[guardrails-ai](../README.md) / [Exports](../modules.md) / [Outputs](../modules/Outputs.md) / ReAsk

# Class: ReAsk

[Outputs](../modules/Outputs.md).ReAsk

## Table of contents

### Constructors

- [constructor](Outputs.ReAsk.md#constructor)

### Properties

- [failResults](Outputs.ReAsk.md#failresults)
- [incorrectValue](Outputs.ReAsk.md#incorrectvalue)

### Methods

- [fromPyReAsk](Outputs.ReAsk.md#frompyreask)

## Constructors

### constructor

• **new ReAsk**(`incorrectValue`, `failResults`): [`ReAsk`](Outputs.ReAsk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `incorrectValue` | `any` |
| `failResults` | [`FailResult`](Outputs.FailResult.md)[] |

#### Returns

[`ReAsk`](Outputs.ReAsk.md)

#### Defined in

[src/outputs/reask.ts:8](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/outputs/reask.ts#L8)

## Properties

### failResults

• **failResults**: [`FailResult`](Outputs.FailResult.md)[]

#### Defined in

[src/outputs/reask.ts:6](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/outputs/reask.ts#L6)

___

### incorrectValue

• **incorrectValue**: `any`

#### Defined in

[src/outputs/reask.ts:5](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/outputs/reask.ts#L5)

## Methods

### fromPyReAsk

▸ **fromPyReAsk**(`pyReAsk`): `Promise`\<[`ReAsk`](Outputs.ReAsk.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyReAsk` | `any` |

#### Returns

`Promise`\<[`ReAsk`](Outputs.ReAsk.md)\>

#### Defined in

[src/outputs/reask.ts:16](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/outputs/reask.ts#L16)
