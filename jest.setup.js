
import "@testing-library/jest-dom";

class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
}

global.ResizeObserver = ResizeObserver;

// jest.mock("gsap", () => require("./__mocks__/gsap"));

// ✅ mock gsap globally
jest.mock("gsap");