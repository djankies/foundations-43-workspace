let aString = "0h0e0l0l0o";
function decode(string) {
    let arr = string.split("");
    let word = [];
    for (let i = 0; i < arr.length; i++) {
        !Number.isNaN(+arr[i]) 
            ? i = i + parseInt(arr[i] )
            :word.push(arr[i]);
    }
    return word.join('')
}
console.log(decode(aString));
