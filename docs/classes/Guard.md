[@guardrails-ai/core](../README.md) / [Exports](../modules.md) / Guard

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

[src/guard.ts:16](https://github.com/guardrails-ai/guardrails-js/blob/45cd49e/src/guard.ts#L16)

## Properties

### \_history

• `Private` **\_history**: [`Stack`](Structs.Stack.md)\<[`Call`](History.Call.md)\<`T`\>\>

#### Defined in

[src/guard.ts:14](https://github.com/guardrails-ai/guardrails-js/blob/45cd49e/src/guard.ts#L14)

___

### pyGuard

• `Private` **pyGuard**: `any`

#### Defined in

[src/guard.ts:13](https://github.com/guardrails-ai/guardrails-js/blob/45cd49e/src/guard.ts#L13)

## Accessors

### history

• `get` **history**(): [`Stack`](Structs.Stack.md)\<[`Call`](History.Call.md)\<`T`\>\>

#### Returns

[`Stack`](Structs.Stack.md)\<[`Call`](History.Call.md)\<`T`\>\>

#### Defined in

[src/guard.ts:117](https://github.com/guardrails-ai/guardrails-js/blob/45cd49e/src/guard.ts#L117)

## Methods

### cloneHistory

▸ **cloneHistory**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/guard.ts:110](https://github.com/guardrails-ai/guardrails-js/blob/45cd49e/src/guard.ts#L110)

___

### cloneProperties

▸ **cloneProperties**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/guard.ts:105](https://github.com/guardrails-ai/guardrails-js/blob/45cd49e/src/guard.ts#L105)

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

[src/guard.ts:69](https://github.com/guardrails-ai/guardrails-js/blob/45cd49e/src/guard.ts#L69)

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

[src/guard.ts:21](https://github.com/guardrails-ai/guardrails-js/blob/45cd49e/src/guard.ts#L21)

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

[src/guard.ts:33](https://github.com/guardrails-ai/guardrails-js/blob/45cd49e/src/guard.ts#L33)

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

[src/guard.ts:47](https://github.com/guardrails-ai/guardrails-js/blob/45cd49e/src/guard.ts#L47)
