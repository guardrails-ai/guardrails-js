[@guardrails-ai/core](../README.md) / [Exports](../modules.md) / [Outputs](../modules/Outputs.md) / LLMResponse

# Class: LLMResponse

[Outputs](../modules/Outputs.md).LLMResponse

## Table of contents

### Constructors

- [constructor](Outputs.LLMResponse.md#constructor)

### Properties

- [\_output](Outputs.LLMResponse.md#_output)
- [\_promptTokenCount](Outputs.LLMResponse.md#_prompttokencount)
- [\_responseTokenCount](Outputs.LLMResponse.md#_responsetokencount)

### Accessors

- [output](Outputs.LLMResponse.md#output)
- [promptTokenCount](Outputs.LLMResponse.md#prompttokencount)
- [responseTokenCount](Outputs.LLMResponse.md#responsetokencount)

### Methods

- [fromPyLLMResponse](Outputs.LLMResponse.md#frompyllmresponse)

## Constructors

### constructor

• **new LLMResponse**(`promptTokenCount?`, `responseTokenCount?`, `output?`): [`LLMResponse`](Outputs.LLMResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `promptTokenCount?` | `number` |
| `responseTokenCount?` | `number` |
| `output?` | `string` |

#### Returns

[`LLMResponse`](Outputs.LLMResponse.md)

#### Defined in

[src/outputs/llm-response.ts:6](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/llm-response.ts#L6)

## Properties

### \_output

• `Private` `Optional` **\_output**: `string`

#### Defined in

[src/outputs/llm-response.ts:4](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/llm-response.ts#L4)

___

### \_promptTokenCount

• `Private` `Optional` **\_promptTokenCount**: `number`

#### Defined in

[src/outputs/llm-response.ts:2](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/llm-response.ts#L2)

___

### \_responseTokenCount

• `Private` `Optional` **\_responseTokenCount**: `number`

#### Defined in

[src/outputs/llm-response.ts:3](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/llm-response.ts#L3)

## Accessors

### output

• `get` **output**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/outputs/llm-response.ts:41](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/llm-response.ts#L41)

___

### promptTokenCount

• `get` **promptTokenCount**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/outputs/llm-response.ts:35](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/llm-response.ts#L35)

___

### responseTokenCount

• `get` **responseTokenCount**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/outputs/llm-response.ts:38](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/llm-response.ts#L38)

## Methods

### fromPyLLMResponse

▸ **fromPyLLMResponse**(`pyLLMResponse`): `Promise`\<[`LLMResponse`](Outputs.LLMResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyLLMResponse` | `any` |

#### Returns

`Promise`\<[`LLMResponse`](Outputs.LLMResponse.md)\>

#### Defined in

[src/outputs/llm-response.ts:16](https://github.com/guardrails-ai/guardrails-js/blob/d45499d/src/outputs/llm-response.ts#L16)
