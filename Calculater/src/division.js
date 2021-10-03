/* eslint-disable no-useless-catch */
// @ts-check

/**
 * **Division (A/B)**
 * @param {Number} firstNumber is  first parameter
 * @param {Number} secondNumber  second parameter
 * @returns {Object}
 * **TestCases**: <br>
 * Correct Input  :- (9,3) <br>
 *  Output :- 3 <br>
 *  Explanation :- 9/3 which is 3 as output <br>
 * Incorrect Input 1 :- (" ",10) <br>
 *  Output :- "Both values should be numbers" <br>
 *  Explanation :- String values are not accepted <br>
 * Incorrect Input 2 :- (7,0) <br>
 *  Output :- "cant divide with 0" <br>
 *  Explanation :- denominator cannot be 0
 */

function division(firstNumber, secondNumber) {
    // if(!secondNumber) throw new Error("Invalid dividend "+secondNumber)
    try {
        if (firstNumber === 0 && secondNumber === 0) throw new Error("undefined");
        if ((!firstNumber && typeof firstNumber === "string") || (!secondNumber && typeof secondNumber === "string")) throw new Error("Input cannot be Empty");
        if (isNaN(firstNumber) || isNaN(secondNumber)) throw new Error("Both values should be numbers");
        if (!Math.abs(secondNumber)) throw new Error("cant divide with 0");
        if (!Math.abs(firstNumber)) return 0;
        return firstNumber / secondNumber;
    } catch (error) {
        throw error;
    }
}

module.exports = division;
