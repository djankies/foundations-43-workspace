numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function createPhoneNumber(numArr) {
    if (numArr.length === 10) {
        return `${numArr[0]}${numArr[1]}${numArr[2]}) ${numArr[3]}${numArr[4]}${numArr[5]}-${numArr[6]}${numArr[7]}${numArr[8]}${numArr[9]}`;
    } else {
        return "Sorry, wrong number.";
    }
}

function createPhoneNumber(numArr) {
    if (numArr.length === 10) {
        let phoneNumber = ["("];
        for (let i = 0; i < numArr.length; i++) {
            const num = numArr[i];
            if (i === 2) {
                phoneNumber.push(`${num}) `);
            } else if (i === 5) {
                phoneNumber.push(`${num}-`);
            } else {
                phoneNumber.push(`${num}`);
            }
        }
        return phoneNumber.join("");
    } else {
        return "Sorry, wrong number.";
    }
}

console.log(createPhoneNumber(numArr));

`(${numArr[0]}${numArr[1]}${numArr[2]}) ${numArr[3]}${numArr[4]}${numArr[5]}-${numArr[6]}${numArr[7]}${numArr[8]}${numArr[9]}`