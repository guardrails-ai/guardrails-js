[guardrails-ai](../README.md) / [Exports](../modules.md) / Validators

# Namespace: Validators

## Table of contents

### Type Aliases

- [Validator](Validators.md#validator)

### Variables

- [BugFreePython](Validators.md#bugfreepython)
- [BugFreeSQL](Validators.md#bugfreesql)
- [CompetitorCheck](Validators.md#competitorcheck)
- [DetectSecrets](Validators.md#detectsecrets)
- [EndpointIsReachable](Validators.md#endpointisreachable)
- [EndsWith](Validators.md#endswith)
- [ExcludeSqlPredicates](Validators.md#excludesqlpredicates)
- [ExtractedSummarySentencesMatch](Validators.md#extractedsummarysentencesmatch)
- [ExtractiveSummary](Validators.md#extractivesummary)
- [IsHighQualityTranslation](Validators.md#ishighqualitytranslation)
- [IsProfanityFree](Validators.md#isprofanityfree)
- [LowerCase](Validators.md#lowercase)
- [OnTopic](Validators.md#ontopic)
- [OneLine](Validators.md#oneline)
- [PIIFilter](Validators.md#piifilter)
- [ProvenanceV0](Validators.md#provenancev0)
- [ProvenanceV1](Validators.md#provenancev1)
- [PydanticFieldValidator](Validators.md#pydanticfieldvalidator)
- [QARelevanceLLMEval](Validators.md#qarelevancellmeval)
- [ReadingTime](Validators.md#readingtime)
- [RegexMatch](Validators.md#regexmatch)
- [RemoveRedundantSentences](Validators.md#removeredundantsentences)
- [SaliencyCheck](Validators.md#saliencycheck)
- [SimilarToDocument](Validators.md#similartodocument)
- [SimilarToList](Validators.md#similartolist)
- [SqlColumnPresence](Validators.md#sqlcolumnpresence)
- [ToxicLanguage](Validators.md#toxiclanguage)
- [TwoWords](Validators.md#twowords)
- [UpperCase](Validators.md#uppercase)
- [ValidChoices](Validators.md#validchoices)
- [ValidLength](Validators.md#validlength)
- [ValidRange](Validators.md#validrange)
- [ValidURL](Validators.md#validurl)

## Type Aliases

### Validator

Ƭ **Validator**: typeof [`PydanticFieldValidator`](Validators.md#pydanticfieldvalidator) \| typeof [`ValidRange`](Validators.md#validrange) \| typeof [`ValidChoices`](Validators.md#validchoices) \| typeof [`LowerCase`](Validators.md#lowercase) \| typeof [`UpperCase`](Validators.md#uppercase) \| typeof [`ValidLength`](Validators.md#validlength) \| typeof [`RegexMatch`](Validators.md#regexmatch) \| typeof [`TwoWords`](Validators.md#twowords) \| typeof [`OneLine`](Validators.md#oneline) \| typeof [`ValidURL`](Validators.md#validurl) \| typeof [`EndpointIsReachable`](Validators.md#endpointisreachable) \| typeof [`BugFreePython`](Validators.md#bugfreepython) \| typeof [`BugFreeSQL`](Validators.md#bugfreesql) \| typeof [`SqlColumnPresence`](Validators.md#sqlcolumnpresence) \| typeof [`ExcludeSqlPredicates`](Validators.md#excludesqlpredicates) \| typeof [`SimilarToDocument`](Validators.md#similartodocument) \| typeof [`IsProfanityFree`](Validators.md#isprofanityfree) \| typeof [`IsHighQualityTranslation`](Validators.md#ishighqualitytranslation) \| typeof [`EndsWith`](Validators.md#endswith) \| typeof [`ExtractedSummarySentencesMatch`](Validators.md#extractedsummarysentencesmatch) \| typeof [`ReadingTime`](Validators.md#readingtime) \| typeof [`ExtractiveSummary`](Validators.md#extractivesummary) \| typeof [`RemoveRedundantSentences`](Validators.md#removeredundantsentences) \| typeof [`SaliencyCheck`](Validators.md#saliencycheck) \| typeof [`QARelevanceLLMEval`](Validators.md#qarelevancellmeval) \| typeof [`ProvenanceV0`](Validators.md#provenancev0) \| typeof [`ProvenanceV1`](Validators.md#provenancev1) \| typeof [`PIIFilter`](Validators.md#piifilter) \| typeof [`SimilarToList`](Validators.md#similartolist) \| typeof [`DetectSecrets`](Validators.md#detectsecrets) \| typeof [`ToxicLanguage`](Validators.md#toxiclanguage) \| typeof [`CompetitorCheck`](Validators.md#competitorcheck) \| typeof [`OnTopic`](Validators.md#ontopic)

#### Defined in

[src/validators.ts:39](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L39)

## Variables

### BugFreePython

• **BugFreePython**: `any`

#### Defined in

[src/validators.ts:15](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L15)

___

### BugFreeSQL

• **BugFreeSQL**: `any`

#### Defined in

[src/validators.ts:16](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L16)

___

### CompetitorCheck

• **CompetitorCheck**: `any`

#### Defined in

[src/validators.ts:35](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L35)

___

### DetectSecrets

• **DetectSecrets**: `any`

#### Defined in

[src/validators.ts:33](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L33)

___

### EndpointIsReachable

• **EndpointIsReachable**: `any`

#### Defined in

[src/validators.ts:14](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L14)

___

### EndsWith

• **EndsWith**: `any`

#### Defined in

[src/validators.ts:22](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L22)

___

### ExcludeSqlPredicates

• **ExcludeSqlPredicates**: `any`

#### Defined in

[src/validators.ts:18](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L18)

___

### ExtractedSummarySentencesMatch

• **ExtractedSummarySentencesMatch**: `any`

#### Defined in

[src/validators.ts:23](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L23)

___

### ExtractiveSummary

• **ExtractiveSummary**: `any`

#### Defined in

[src/validators.ts:25](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L25)

___

### IsHighQualityTranslation

• **IsHighQualityTranslation**: `any`

#### Defined in

[src/validators.ts:21](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L21)

___

### IsProfanityFree

• **IsProfanityFree**: `any`

#### Defined in

[src/validators.ts:20](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L20)

___

### LowerCase

• **LowerCase**: `any`

#### Defined in

[src/validators.ts:7](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L7)

___

### OnTopic

• **OnTopic**: `any`

#### Defined in

[src/validators.ts:36](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L36)

___

### OneLine

• **OneLine**: `any`

#### Defined in

[src/validators.ts:12](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L12)

___

### PIIFilter

• **PIIFilter**: `any`

#### Defined in

[src/validators.ts:31](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L31)

___

### ProvenanceV0

• **ProvenanceV0**: `any`

#### Defined in

[src/validators.ts:29](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L29)

___

### ProvenanceV1

• **ProvenanceV1**: `any`

#### Defined in

[src/validators.ts:30](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L30)

___

### PydanticFieldValidator

• **PydanticFieldValidator**: `any`

#### Defined in

[src/validators.ts:4](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L4)

___

### QARelevanceLLMEval

• **QARelevanceLLMEval**: `any`

#### Defined in

[src/validators.ts:28](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L28)

___

### ReadingTime

• **ReadingTime**: `any`

#### Defined in

[src/validators.ts:24](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L24)

___

### RegexMatch

• **RegexMatch**: `any`

#### Defined in

[src/validators.ts:10](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L10)

___

### RemoveRedundantSentences

• **RemoveRedundantSentences**: `any`

#### Defined in

[src/validators.ts:26](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L26)

___

### SaliencyCheck

• **SaliencyCheck**: `any`

#### Defined in

[src/validators.ts:27](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L27)

___

### SimilarToDocument

• **SimilarToDocument**: `any`

#### Defined in

[src/validators.ts:19](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L19)

___

### SimilarToList

• **SimilarToList**: `any`

#### Defined in

[src/validators.ts:32](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L32)

___

### SqlColumnPresence

• **SqlColumnPresence**: `any`

#### Defined in

[src/validators.ts:17](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L17)

___

### ToxicLanguage

• **ToxicLanguage**: `any`

#### Defined in

[src/validators.ts:34](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L34)

___

### TwoWords

• **TwoWords**: `any`

#### Defined in

[src/validators.ts:11](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L11)

___

### UpperCase

• **UpperCase**: `any`

#### Defined in

[src/validators.ts:8](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L8)

___

### ValidChoices

• **ValidChoices**: `any`

#### Defined in

[src/validators.ts:6](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L6)

___

### ValidLength

• **ValidLength**: `any`

#### Defined in

[src/validators.ts:9](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L9)

___

### ValidRange

• **ValidRange**: `any`

#### Defined in

[src/validators.ts:5](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L5)

___

### ValidURL

• **ValidURL**: `any`

#### Defined in

[src/validators.ts:13](https://github.com/guardrails-ai/guardrails-js/blob/32d5cab/src/validators.ts#L13)
