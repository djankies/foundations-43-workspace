// Write your code below this line

function decodeString(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let decodedString = [];
    let encodedString = [];
    let strArr = str.split("");
    let num = strArr.shift();
    console.log(strArr);
    strArr.forEach((letter) => {
        console.log(letter);

        let newLetter = alphabet[alphabet.indexOf(letter) + +num];
        decodedString.push(newLetter);
    });
    return decodedString.join("");
}
console.log(decodeString("2abcdefg"));
