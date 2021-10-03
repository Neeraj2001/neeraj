//  @ts-check
/**
 * **Addition (A+B)**
 * @param {Number} firstNumber is the first variable
 * @param {Number} secondNumber is the second variable
 * @returns {Object}
 * **TestCases**: <br>
 * Correct Input  :- (3,9) <br>
 *  Output :- 12 <br>
 *  Explanation :- 9+3 which is 12 as output <br>
 * Incorrect Input 2 :- (" ",10) <br>
 *  Output :- "Both values should be numbers" <br>
 *  Explanation :- String values are not accepted
 */

function add(firstNumber, secondNumber) {
    // eslint-disable-next-line no-useless-catch
    try {
        if ((!firstNumber && typeof firstNumber === "string") || (!secondNumber && typeof secondNumber === "string")) throw new Error("Input cannot be Empty");
        // eslint-disable-next-line no-restricted-globals
        if (isNaN(firstNumber) || isNaN(secondNumber)) throw new Error("Both values should be numbers");
        return firstNumber + secondNumber;
    } catch (error) {
        throw error;
    }
}

module.exports = add;
