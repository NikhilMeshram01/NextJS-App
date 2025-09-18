
const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    // ✅ Force Jest to transpile gsap (ESM package)
    transformIgnorePatterns: [
        "node_modules/(?!(gsap)/)",
        "node_modules/(?!gsap)" // optional: ensures gsap isn’t parsed as ESM
    ],

    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "^gsap$": "<rootDir>/__mocks__/gsap.js"   // ✅ force Jest to use our mock
    },

    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = createJestConfig(customJestConfig);
