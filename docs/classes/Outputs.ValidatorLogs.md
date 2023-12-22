[guardrails-ai](../README.md) / [Exports](../modules.md) / [Outputs](../modules/Outputs.md) / ValidatorLogs

# Class: ValidatorLogs

[Outputs](../modules/Outputs.md).ValidatorLogs

## Table of contents

### Constructors

- [constructor](Outputs.ValidatorLogs.md#constructor)

### Properties

- [\_validationResult](Outputs.ValidatorLogs.md#_validationresult)
- [\_validatorName](Outputs.ValidatorLogs.md#_validatorname)
- [\_valueAfterValidation](Outputs.ValidatorLogs.md#_valueaftervalidation)
- [\_valueBeforeValidation](Outputs.ValidatorLogs.md#_valuebeforevalidation)

### Accessors

- [validationResult](Outputs.ValidatorLogs.md#validationresult)
- [validatorName](Outputs.ValidatorLogs.md#validatorname)
- [valueAfterValidation](Outputs.ValidatorLogs.md#valueaftervalidation)
- [valueBeforeValidation](Outputs.ValidatorLogs.md#valuebeforevalidation)

### Methods

- [fromPyValidatorLogs](Outputs.ValidatorLogs.md#frompyvalidatorlogs)

## Constructors

### constructor

• **new ValidatorLogs**(`validatorName?`, `valueBeforeValidation?`, `validationResult?`, `valueAfterValidation?`): [`ValidatorLogs`](Outputs.ValidatorLogs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `validatorName?` | `string` |
| `valueBeforeValidation?` | `any` |
| `validationResult?` | [`ValidationResult`](Outputs.ValidationResult.md) |
| `valueAfterValidation?` | `any` |

#### Returns

[`ValidatorLogs`](Outputs.ValidatorLogs.md)

#### Defined in

[src/outputs/validator-logs.ts:10](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/validator-logs.ts#L10)

## Properties

### \_validationResult

• `Private` `Optional` **\_validationResult**: [`ValidationResult`](Outputs.ValidationResult.md)

#### Defined in

[src/outputs/validator-logs.ts:7](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/validator-logs.ts#L7)

___

### \_validatorName

• `Private` `Optional` **\_validatorName**: `string`

#### Defined in

[src/outputs/validator-logs.ts:5](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/validator-logs.ts#L5)

___

### \_valueAfterValidation

• `Private` `Optional` **\_valueAfterValidation**: `any`

#### Defined in

[src/outputs/validator-logs.ts:8](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/validator-logs.ts#L8)

___

### \_valueBeforeValidation

• `Private` `Optional` **\_valueBeforeValidation**: `any`

#### Defined in

[src/outputs/validator-logs.ts:6](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/validator-logs.ts#L6)

## Accessors

### validationResult

• `get` **validationResult**(): `undefined` \| [`ValidationResult`](Outputs.ValidationResult.md)

#### Returns

`undefined` \| [`ValidationResult`](Outputs.ValidationResult.md)

#### Defined in

[src/outputs/validator-logs.ts:51](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/validator-logs.ts#L51)

___

### validatorName

• `get` **validatorName**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/outputs/validator-logs.ts:45](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/validator-logs.ts#L45)

___

### valueAfterValidation

• `get` **valueAfterValidation**(): `any`

#### Returns

`any`

#### Defined in

[src/outputs/validator-logs.ts:54](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/validator-logs.ts#L54)

___

### valueBeforeValidation

• `get` **valueBeforeValidation**(): `any`

#### Returns

`any`

#### Defined in

[src/outputs/validator-logs.ts:48](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/validator-logs.ts#L48)

## Methods

### fromPyValidatorLogs

▸ **fromPyValidatorLogs**(`pyValidatorLogs`): `Promise`\<[`ValidatorLogs`](Outputs.ValidatorLogs.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyValidatorLogs` | `any` |

#### Returns

`Promise`\<[`ValidatorLogs`](Outputs.ValidatorLogs.md)\>

#### Defined in

[src/outputs/validator-logs.ts:22](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/outputs/validator-logs.ts#L22)
