// function genKey(depth) {
//     let base64Chars =
//         "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
//     let randomNumbers = [];
//     let charRandDict = {};

//     // Generate an array of unique random numbers between 1 and 256
//     for (let i = 1; i <= depth; i++) {
//         randomNumbers.push(i);
//     }

//     // Shuffle the array
//     for (let i = randomNumbers.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [randomNumbers[i], randomNumbers[j]] = [
//             randomNumbers[j],
//             randomNumbers[i],
//         ];
//     }

//     // // Create a dictionary of base64 chars and random numbers
//     for (let i = 0; i < base64Chars.length; i++) {
//         charRandDict[base64Chars[i]] = randomNumbers[i];
//     }
//     return charRandDict;
// }

// function generateRandomPrimes() {
//     const primes = [];
//     while (primes.length < 64) {
//         const num = Math.floor(Math.random() * 256) + 1;
//         if (isPrime(num)) {
//             primes.push(num);
//         }
//     }
//     return primes;
// }

// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const randomPrimes = generateRandomPrimes();
// // console.log(randomPrimes);
// /* arr = [
//     13, 83, 97, 61, 2, 139, 2, 241, 5, 197, 41, 47, 103, 251, 139, 251, 181,
//     191, 101, 113, 211, 151, 29, 113, 137, 23, 251, 7, 37, 103, 229, 71, 193,
//     11, 101, 157, 179, 103, 5, 239, 59, 239, 2, 113, 41, 17, 131, 239, 3, 251,
//     89, 223, 71, 13, 241, 109, 59, 89, 193, 13, 71, 233, 211, 19,
// ]; */
// const key = {
//     0: 14 + 122977956517698282,
//     1: 84 + 122977956517698282,
//     2: 98 + 122977956517698282,
//     3: 62 + 122977956517698282,
//     4: 3 + 122977956517698282,
//     5: 140 + 122977956517698282,
//     6: 3 + 122977956517698282,
//     7: 242 + 122977956517698282,
//     8: 6 + 122977956517698282,
//     9: 198 + 122977956517698282,
//     A: 42 + 122977956517698282,
//     B: 48 + 122977956517698282,
//     C: 104 + 122977956517698282,
//     D: 252 + 122977956517698282,
//     E: 140 + 122977956517698282,
//     F: 252 + 122977956517698282,
//     G: 182 + 122977956517698282,
//     H: 192 + 122977956517698282,
//     I: 102 + 122977956517698282,
//     J: 114 + 122977956517698282,
//     K: 212 + 122977956517698282,
//     L: 152 + 122977956517698282,
//     M: 30 + 122977956517698282,
//     N: 114 + 122977956517698282,
//     O: 138 + 122977956517698282,
//     P: 24 + 122977956517698282,
//     Q: 252 + 122977956517698282,
//     R: 8 + 122977956517698282,
//     S: 38 + 122977956517698282,
//     T: 104 + 122977956517698282,
//     U: 230 + 122977956517698282,
//     V: 72 + 122977956517698282,
//     W: 194 + 122977956517698282,
//     X: 12 + 122977956517698282,
//     Y: 102 + 122977956517698282,
//     Z: 158 + 122977956517698282,
//     a: 180 + 122977956517698282,
//     b: 104 + 122977956517698282,
//     c: 6 + 122977956517698282,
//     d: 240 + 122977956517698282,
//     e: 60 + 122977956517698282,
//     f: 240 + 122977956517698282,
//     g: 3 + 122977956517698282,
//     h: 114 + 122977956517698282,
//     i: 42 + 122977956517698282,
//     j: 18 + 122977956517698282,
//     k: 132 + 122977956517698282,
//     l: 240 + 122977956517698282,
//     m: 4 + 122977956517698282,
//     n: 252 + 122977956517698282,
//     o: 90 + 122977956517698282,
//     p: 224 + 122977956517698282,
//     q: 72 + 122977956517698282,
//     r: 14 + 122977956517698282,
//     s: 242 + 122977956517698282,
//     t: 110 + 122977956517698282,
//     u: 60 + 122977956517698282,
//     v: 90 + 122977956517698282,
//     w: 194 + 122977956517698282,
//     x: 14 + 122977956517698282,
//     y: 72 + 122977956517698282,
//     z: 234 + 122977956517698282,
//     "+": 212 + 122977956517698282,
//     "/": 20 + 122977956517698282,
// };

// // let assignedKeys = {};
// // for (let i = 0; i < Object.keys(key).length; i++) {
// //     let keyValue = Object.keys(key)[i];
// //     let value = arr[i];
// //     assignedKeys[keyValue] = value;
// // }

// // console.log(assignedKeys);

// const pubKey = [
//     198, 98, 230, 62, 240, 24, 240, 80, 30, 132, 98, 72, 198, 174, 48, 110, 12,
//     182, 74, 44, 48, 138, 242, 198, 152, 252, 200, 3, 12, 194, 84, 234, 138,
//     128, 44, 128, 14, 174, 44, 48, 242, 60, 68, 80, 62, 224, 4, 164, 158, 104,
//     80, 42, 150, 242, 74, 228, 74, 60, 212, 18, 68, 4, 18, 230,
// ];

// function replaceChars(str, charDict) {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (charDict.hasOwnProperty(char)) {
//             result.push(charDict[char]);
//         } else {
//             result.push(char);
//         }
//     }
//     return result;
// }

// multiply = (a, b) => a * b;

// let ReplacedChars = replaceChars("Hello", key);
// for (let i = 0; i < ReplacedChars.length; i++) {
//     ReplacedChars[i] = multiply(ReplacedChars[i], pubKey[i]);
// }

// console.log(ReplacedChars);
function encryptString(str, encryptionKey) {
    // Check if the encryption key is valid
    if (encryptionKey.length < 12 || encryptionKey.length > 24) {
        throw new Error(
            "Encryption key must be between 12 and 24 characters long."
        );
    }

    // Create a dictionary to map characters to their corresponding encrypted values
    const charDict = {};
    for (let i = 0; i < encryptionKey.length; i++) {
        charDict[encryptionKey[i]] = i;
    }

    // Replace characters in the string with their encrypted values
    let encryptedString = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charDict.hasOwnProperty(char)) {
            encryptedString += charDict[char];
        } else {
            encryptedString += char;
        }
    }

    return encryptedString;
}

function decryptString(encryptedStr, encryptionKey) {
    // Check if the encryption key is valid
    if (encryptionKey.length < 12 || encryptionKey.length > 24) {
        throw new Error(
            "Encryption key must be between 12 and 24 characters long."
        );
    }

    // Create a dictionary to map encrypted values to their corresponding characters
    const charDict = {};
    for (let i = 0; i < encryptionKey.length; i++) {
        charDict[i] = encryptionKey[i];
    }

    // Replace encrypted values in the string with their corresponding characters
    let decryptedString = "";
    for (let i = 0; i < encryptedStr.length; i++) {
        const value = encryptedStr[i];
        if (charDict.hasOwnProperty(value)) {
            decryptedString += charDict[value];
        } else {
            decryptedString += value;
        }
    }

    return decryptedString;
}

const strToEncrypt = "Hello, World!";
const encryptionKey = "MyEncryptionKey123";

const encryptedString = encryptString(strToEncrypt, encryptionKey);
console.log("Encrypted String:", encryptedString);

const decryptedString = decryptString(encryptedString, encryptionKey);
console.log("Decrypted String:", decryptedString);
