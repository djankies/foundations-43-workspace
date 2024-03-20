// const numArr = [2, 4, 0, 100, 4, 11, 2602, 6];
// let evens = [];
// let odds = [];
// function findOutlier(numArr) {
//     for (let i = 0; i < numArr.length; i++) {
//         numArr[i] % 2 === 0 ? evens.push(numArr[i]) : odds.push(numArr[i]);
//         if (evens.length > 1 && odds.length === 1) {
//             return odds[0];
//         }
//         if (odds.length > 1 && evens.length === 1) {
//             return evens[0];
//         }
//     }
// }

function findOutlier(numArr) {
    let odds = 0;
    let evens = 0;

    for (let number of numArr) {
        number % 2 === 0 ? evens++ : odds++;
    }

    let outlierEven = odds > evens;

    for (let number of numArr) {
        if (outlierEven && number % 2 === 0) {
            return number;
        } else if (!outlierEven && number % 2 !== 0) {
            return number;
        }
    }
}


// function findOutlier(numArr) {
//     let even = numArr.filter((a) => a % 2 == 0);
//     let odd = numArr.filter((a) => a % 2 !== 0);
//     return even.length == 1 ? even[0] : odd[0];
// }


console.log(findOutlier(numArr));
