/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  resolver: 'ts-jest-resolver',
  testEnvironment: 'node',
  // useEsm: true,
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    '^.+\\.ts$': [
      'ts-jest', {
        isolatedModules: true,
        useESM: true
      }
    ]
  }
};

export default config;