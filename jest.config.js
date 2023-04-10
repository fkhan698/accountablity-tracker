/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
