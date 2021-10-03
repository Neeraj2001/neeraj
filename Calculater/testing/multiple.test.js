const multiple = require("../src/multiple");

describe("Multiplication of Two Numbers", () => {
    test("multiple of two numbers", () => {
        expect(
            multiple(3, 20),
        ).toBe(60);
    });
    test("Should give error when user give empty input", () => {
        expect(() => {
            multiple("", 0);
        }).toThrow("Input cannot be Empty");
    });
    test("Should give error when multiplied with string", () => {
        expect(() => {
            multiple(2, "ne23");
        }).toThrow("Both values should be numbers");
    });
});
