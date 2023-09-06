export default {
  roots: ['<rootDir>/src'],
  transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)*[.](test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
      '^.+\\.(css|less|scss|png|jpg|jpeg|gif|svg|ico|mp3|wav|pdf)$': 'babel-jest',
  },
};
