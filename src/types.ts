export type Dictionary = Record<string, any>;

export type FromRailOptions = {
  numReasks?: number;
}

export type FromStringOptions = FromRailOptions & {
  description?: string;
  prompt?: string;
  instructions?: string;
  reaskPrompt?: string;
  reaskInstructions?: string;
};

export type ParseOptions = {
  metadata?: Dictionary;
  numReasks?: number;
  promptParams?: Dictionary;
  fullSchemaReask?: boolean;
  kwargs?: Dictionary;
}