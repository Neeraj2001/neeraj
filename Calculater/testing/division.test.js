const division = require("../src/division");

describe("Division of two number", () => {
    test("Should divide two numbers", () => {
        expect(
            division(4, 2),
        ).toBe(2);
    });
    test("Should give error when user give both input as 0", () => {
        expect(() => {
            division(0, 0);
        }).toThrow("undefined");
    });
    test("Should give error when user give empty input", () => {
        expect(() => {
            division("", 0);
        }).toThrow("Input cannot be Empty");
    });
    test("Should give error when user give string as input", () => {
        expect(() => {
            division(2, "sf");
        }).toThrow("Both values should be numbers");
    });
    test("Should give error when divide by 0", () => {
        expect(() => {
            division(4, 0);
        }).toThrow("cant divide with 0");
    });
});
