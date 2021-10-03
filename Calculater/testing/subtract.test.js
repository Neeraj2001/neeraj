const subtract = require("../src/subtract");

describe("Subtracts the Two Numbers", () => {
    test("subtract two numbers", () => {
        expect(
            subtract(1, 2),
        ).toBe(-1);

        expect(
            subtract(0.2, 0.4),
        ).toBeCloseTo(-0.2);
    });
    test("Should give error when user gives empty input", () => {
        expect(
            () => {
                subtract("", 5);
            },
        ).toThrow("Input cannot be Empty");
    });
    test("Should give error when subtracted with string", () => {
        expect(() => {
            subtract(-0.2, "bj");
        }).toThrow("Both values should be numbers");
    });
});
