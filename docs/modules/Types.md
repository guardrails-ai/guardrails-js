[guardrails-ai](../README.md) / [Exports](../modules.md) / Types

# Namespace: Types

## Table of contents

### Type Aliases

- [Dictionary](Types.md#dictionary)
- [FromRailOptions](Types.md#fromrailoptions)
- [FromStringOptions](Types.md#fromstringoptions)
- [ParseOptions](Types.md#parseoptions)

## Type Aliases

### Dictionary

Ƭ **Dictionary**: `Record`\<`string`, `any`\>

#### Defined in

[src/types.ts:1](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/types.ts#L1)

___

### FromRailOptions

Ƭ **FromRailOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `numReasks?` | `number` |

#### Defined in

[src/types.ts:3](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/types.ts#L3)

___

### FromStringOptions

Ƭ **FromStringOptions**: [`FromRailOptions`](Types.md#fromrailoptions) & \{ `description?`: `string` ; `instructions?`: `string` ; `prompt?`: `string` ; `reaskInstructions?`: `string` ; `reaskPrompt?`: `string`  }

#### Defined in

[src/types.ts:7](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/types.ts#L7)

___

### ParseOptions

Ƭ **ParseOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fullSchemaReask?` | `boolean` |
| `kwargs?` | [`Dictionary`](Types.md#dictionary) |
| `metadata?` | [`Dictionary`](Types.md#dictionary) |
| `numReasks?` | `number` |
| `promptParams?` | [`Dictionary`](Types.md#dictionary) |

#### Defined in

[src/types.ts:15](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/types.ts#L15)
