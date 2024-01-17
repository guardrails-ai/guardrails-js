/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {},
  globals: {
    GUARDRAILS_PROCESS_COUNT: "1"
  }
};

export default config;