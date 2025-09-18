

import { render } from "@testing-library/react";
import RootLayout from "../src/app/layout";

// describe("RootLayout", () => {
//     test("renders children inside Providers", () => {
//         const { getByText } = render(<div>Child Component</div>, {
//             wrapper: ({ children }) => <RootLayout>{children}</RootLayout>,
//         });
//         expect(getByText("Child Component")).toBeInTheDocument();
//     });
// });

describe("RootLayout", () => {
    test("renders children inside Providers", () => {
        const { getByText } = render(<RootLayout>Child Component</RootLayout>, {
            container: document.documentElement, // ✅ replace <div> with <html>
        });

        expect(getByText("Child Component")).toBeInTheDocument();
    });
});