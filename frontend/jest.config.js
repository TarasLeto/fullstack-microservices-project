/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }],
    '^.+\\.css$': 'jest-transform-stub',
  },
  testRegex: '.*\\.(test|spec)\\.(ts|tsx)$',
  collectCoverage: true,
  coverageDirectory: './coverage/frontend',
  coverageReporters: ['text', 'lcov', 'json'],
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: ['node_modules/(?!(module-to-transform)/)'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], 
};
