const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",

  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  moduleFileExtensions: ["js", "jsx"],
};

module.exports = config;
