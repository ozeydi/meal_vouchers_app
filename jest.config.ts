// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
  coverageDirectory: 'coverage',
  clearMocks: true,
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

export default config;
