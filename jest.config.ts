import type {Config} from 'jest';

const config: Config = {
  testMatch: ['**/*.test.ts'],
  testEnvironment: 'node',
  preset: 'ts-jest',
};

export default config;
