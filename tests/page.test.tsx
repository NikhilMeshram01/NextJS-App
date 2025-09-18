import { render, screen } from "@testing-library/react";
import HomePage from "../src/app/page";

describe("Landing Page", () => {
    test("renders without crashing", () => {
        render(<HomePage />);
        expect(screen.getByRole("main")).toBeInTheDocument();
    });

    test("renders Header section", () => {
        render(<HomePage />);
        expect(screen.getByText(/header/i)).toBeInTheDocument(); // adjust if Header has specific text
    });

    test("renders Hero section", () => {
        render(<HomePage />);
        expect(screen.getByText(/hero/i)).toBeInTheDocument(); // adjust based on actual content
    });

    test("renders Footer section", () => {
        render(<HomePage />);
        expect(screen.getByText(/footer/i)).toBeInTheDocument(); // adjust based on actual content
    });
});
