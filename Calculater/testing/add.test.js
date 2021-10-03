const add = require("../src/add");

describe("Addition of two numbers", () => {
    test("Should add two numbers", () => {
        expect(
            add(1, 2),
        ).toBe(3);
        expect(
            add(0.2, 0.4),
        ).toBeCloseTo(0.6);
    });
    test("Should give error when user gives empty input", () => {
        expect(
            () => {
                add("", 5);
            },
        ).toThrow("Input cannot be Empty");
    });
    test("Should give Error when user gives string as input", () => {
        expect(() => { add("jhkjk", 0.4); }).toThrow("Both values should be numbers");
        expect(
            () => {
                add("jhkjk", 0.4);
            },
        ).toThrow("Both values should be numbers");
    });
    test("Should give Error when user gives Objects as input", () => {
        expect(() => { add("jhkjk", 0.4); }).toThrow("Both values should be numbers");
        expect(
            () => {
                add({}, 0.4);
            },
        ).toThrow("Both values should be numbers");
    });
});
