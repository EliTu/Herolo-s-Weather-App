module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	globals: {
		'ts-jest': {
			diagnostics: false,
		},
	},
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupTestFrameworkScriptFile: '<rootDir>/src/setupEnzyme.ts',
};
