// Write a program that takes an array of numbers as input. Double each even number in the array and remove all odd numbers. Return the modified array.
Ans:
function doubleEvenRemoveOdd(numbers) {
    let modifiedArray = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            modifiedArray.push(num * 2);
        }
    }
    return modifiedArray;
}

// Example usage:
let inputArray = [1, 2, 3, 4, 5, 6];
let modifiedArray = doubleEvenRemoveOdd(inputArray);
console.log(modifiedArray);


// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0
Ans