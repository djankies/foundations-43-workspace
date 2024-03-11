

// Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

function printDigits(num) {
    // Your code here
    let result = '';
    while (num > 0) {
        result += num % 10;
        num = Math.floor(num / 10);
    }
    return result;
}
