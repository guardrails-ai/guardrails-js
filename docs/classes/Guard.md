[guardrails-ai](../README.md) / [Exports](../modules.md) / Guard

# Class: Guard\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Guard.md#constructor)

### Properties

- [\_history](Guard.md#_history)
- [pyGuard](Guard.md#pyguard)

### Accessors

- [history](Guard.md#history)

### Methods

- [cloneHistory](Guard.md#clonehistory)
- [cloneProperties](Guard.md#cloneproperties)
- [parse](Guard.md#parse)
- [fromRail](Guard.md#fromrail)
- [fromRailString](Guard.md#fromrailstring)
- [fromString](Guard.md#fromstring)

## Constructors

### constructor

• **new Guard**\<`T`\>(`pyGuard`): [`Guard`](Guard.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pyGuard` | `any` |

#### Returns

[`Guard`](Guard.md)\<`T`\>

#### Defined in

[src/guard.ts:15](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/guard.ts#L15)

## Properties

### \_history

• `Private` **\_history**: [`Stack`](Structs.Stack.md)\<[`Call`](History.Call.md)\<`T`\>\>

#### Defined in

[src/guard.ts:13](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/guard.ts#L13)

___

### pyGuard

• `Private` **pyGuard**: `any`

#### Defined in

[src/guard.ts:12](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/guard.ts#L12)

## Accessors

### history

• `get` **history**(): [`Stack`](Structs.Stack.md)\<[`Call`](History.Call.md)\<`T`\>\>

#### Returns

[`Stack`](Structs.Stack.md)\<[`Call`](History.Call.md)\<`T`\>\>

#### Defined in

[src/guard.ts:109](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/guard.ts#L109)

## Methods

### cloneHistory

▸ **cloneHistory**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/guard.ts:102](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/guard.ts#L102)

___

### cloneProperties

▸ **cloneProperties**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/guard.ts:97](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/guard.ts#L97)

___

### parse

▸ **parse**(`llmOutput`, `opts?`): `Promise`\<[`ValidationOutcome`](Outputs.ValidationOutcome.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `llmOutput` | `string` |
| `opts` | [`ParseOptions`](../modules/Types.md#parseoptions) |

#### Returns

`Promise`\<[`ValidationOutcome`](Outputs.ValidationOutcome.md)\<`T`\>\>

#### Defined in

[src/guard.ts:68](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/guard.ts#L68)

___

### fromRail

▸ **fromRail**(`railFile`, `opts?`): `Promise`\<[`Guard`](Guard.md)\<`string` \| [`Dictionary`](../modules/Types.md#dictionary)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `railFile` | `string` |
| `opts` | [`FromRailOptions`](../modules/Types.md#fromrailoptions) |

#### Returns

`Promise`\<[`Guard`](Guard.md)\<`string` \| [`Dictionary`](../modules/Types.md#dictionary)\>\>

#### Defined in

[src/guard.ts:20](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/guard.ts#L20)

___

### fromRailString

▸ **fromRailString**(`railString`, `opts?`): `Promise`\<[`Guard`](Guard.md)\<`string` \| [`Dictionary`](../modules/Types.md#dictionary)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `railString` | `string` |
| `opts` | [`FromRailOptions`](../modules/Types.md#fromrailoptions) |

#### Returns

`Promise`\<[`Guard`](Guard.md)\<`string` \| [`Dictionary`](../modules/Types.md#dictionary)\>\>

#### Defined in

[src/guard.ts:32](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/guard.ts#L32)

___

### fromString

▸ **fromString**(`validators`, `opts?`): `Promise`\<[`Guard`](Guard.md)\<`string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validators` | `any`[] |
| `opts` | [`FromStringOptions`](../modules/Types.md#fromstringoptions) |

#### Returns

`Promise`\<[`Guard`](Guard.md)\<`string`\>\>

#### Defined in

[src/guard.ts:46](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/guard.ts#L46)
