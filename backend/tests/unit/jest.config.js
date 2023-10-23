/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: "../../",
  roots: ["src"],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFiles: ["<rootDir>/tests/unit/jest.setup.ts"]
};