module.exports = {
  collectCoverage: true, /** Enable report coverage */
  coverageReporters: ['text', 'lcov'], /** Types of reports */
	preset: 'react-native',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"], /** Enable expect tools */
	roots: ["<rootDir>/src"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	testMatch: [
		"<rootDir>/src/**/__tests__/*.spec.(ts|tsx)"
	],
};
