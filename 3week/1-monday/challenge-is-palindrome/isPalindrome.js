// Write your code below
function isPalindrome(word) {
    revWord = word.split('').reverse().join('');
    return word === revWord;
}

let result = isPalindrome('hello')

console.log(result);