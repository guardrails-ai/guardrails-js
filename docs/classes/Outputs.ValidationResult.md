[guardrails-ai](../README.md) / [Exports](../modules.md) / [Outputs](../modules/Outputs.md) / ValidationResult

# Class: ValidationResult

[Outputs](../modules/Outputs.md).ValidationResult

## Table of contents

### Constructors

- [constructor](Outputs.ValidationResult.md#constructor)

### Properties

- [\_metadata](Outputs.ValidationResult.md#_metadata)
- [\_outcome](Outputs.ValidationResult.md#_outcome)

### Accessors

- [metadata](Outputs.ValidationResult.md#metadata)
- [outcome](Outputs.ValidationResult.md#outcome)

### Methods

- [fromPyValidationResult](Outputs.ValidationResult.md#frompyvalidationresult)

## Constructors

### constructor

• **new ValidationResult**(`outcome?`, `metadata?`): [`ValidationResult`](Outputs.ValidationResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `outcome?` | `string` |
| `metadata?` | [`Dictionary`](../modules/Types.md#dictionary) |

#### Returns

[`ValidationResult`](Outputs.ValidationResult.md)

#### Defined in

[src/outputs/validation-result.ts:8](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/outputs/validation-result.ts#L8)

## Properties

### \_metadata

• `Private` `Optional` **\_metadata**: [`Dictionary`](../modules/Types.md#dictionary)

#### Defined in

[src/outputs/validation-result.ts:6](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/outputs/validation-result.ts#L6)

___

### \_outcome

• `Private` `Optional` **\_outcome**: `string`

#### Defined in

[src/outputs/validation-result.ts:5](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/outputs/validation-result.ts#L5)

## Accessors

### metadata

• `get` **metadata**(): `undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Returns

`undefined` \| [`Dictionary`](../modules/Types.md#dictionary)

#### Defined in

[src/outputs/validation-result.ts:31](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/outputs/validation-result.ts#L31)

___

### outcome

• `get` **outcome**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/outputs/validation-result.ts:28](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/outputs/validation-result.ts#L28)

## Methods

### fromPyValidationResult

▸ **fromPyValidationResult**(`pyValidationResult`): `Promise`\<[`ValidationResult`](Outputs.ValidationResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyValidationResult` | `any` |

#### Returns

`Promise`\<[`ValidationResult`](Outputs.ValidationResult.md)\>

#### Defined in

[src/outputs/validation-result.ts:16](https://github.com/guardrails-ai/guardrails-js/blob/d37ad09/src/outputs/validation-result.ts#L16)
