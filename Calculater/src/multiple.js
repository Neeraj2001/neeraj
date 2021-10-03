/* eslint-disable no-useless-catch */
// @ts-check

/**
 * **Multiplication (A*B)**
 * @param {Number} firstNumber is the first variable
 * @param {Number} secondNumber is the second variable
 * @returns {Object}
 * **TestCases**: <br>
 * Correct Input  :- (3,9) <br>
 *  Output :- 27 <br>
 *  Explanation :- 9*3 which is 27 as output <br>
 * Incorrect Input  :- (" ",10) <br>
 *  Output :- "Both values should be numbers" <br>
 *  Explanation :- String values are not accepted
 */

function multiple(firstNumber, secondNumber) {
    try {
        if ((!firstNumber && typeof firstNumber === "string") || (!secondNumber && typeof secondNumber === "string")) throw new Error("Input cannot be Empty");
        // eslint-disable-next-line no-restricted-globals
        if (isNaN(firstNumber) || isNaN(secondNumber)) throw new Error("Both values should be numbers");
        return firstNumber * secondNumber;
    } catch (error) {
        throw error;
    }
}

module.exports = multiple;
