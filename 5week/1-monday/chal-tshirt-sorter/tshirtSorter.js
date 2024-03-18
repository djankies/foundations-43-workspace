/* Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.
>>> tshirtSorter('lms')
// sml

>>> tshirtSorter('smllms')
// ssmmll */

// Write your solution below:

let unorderedShirts = "slsmmsllsmsmlmsls";

function shirtSorter(shirts) {
    let smalls = [],
    meds = [],
    larges = [];
    shirts = shirts.split("");
    shirts.forEach((shirt) => {
        if (shirt === "s") {
            smalls.push("s");
        } else if (shirt === "m") {
            meds.push("m");
        } else if (shirt === "l") {
            larges.push("l");
        }
    });
    return [...smalls, ...meds, ...larges].join("");
}

// function shirtSorter(shirts) {
//     let counts = {
//         s: 0,
//         m: 0,
//         l: 0,
//     };

//     for (let i = 0; i < shirts.length; i++) {
//         counts[shirts[i]]++;
//     }

//     let sortedShirts = "";
//     for (let i = 0; i < counts.s; i++) {
//         sortedShirts += "s";
//     }
//     for (let i = 0; i < counts.m; i++) {
//         sortedShirts += "m";
//     }
//     for (let i = 0; i < counts.l; i++) {
//         sortedShirts += "l";
//     }

//     return sortedShirts;
// }
console.log(shirtSorter(unorderedShirts));
