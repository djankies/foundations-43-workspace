
// Write a function to remove all duplicate letters from a provided string. The string will only contain lowercase letters between a - z. The string will not contain spaces.

// Write your solution below:

// makeUnique('helloworld')
// returns: helowrd

makeUnique(aString) {
    let uniqueString = '';
    for (let i = 0; i < aString.length; i++) {
        if (uniqueString.indexOf(aString[i]) === -1) {
        uniqueString += aString[i];
        }
    }
    return uniqueString;
}

