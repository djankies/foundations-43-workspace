// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function balanceString (str) {
    let leftCount = 0
    
    let rightCount = 0
    
    let strArr = str.split('')
    
    strArr.forEach(character => {
        if (character === '\(') {
            leftCount++
        } else if (character === '\)'){
            rightCount++
        }
    })
    if (leftCount === rightCount) {
        return true
    } else {
        return false
    }

    // while(leftCount !== rightCount) {
    //     if (leftCount > rightCount) {
    //             strArr.push("\)")
    //             rightCount++
    //         } else if (rightCount > leftCount) {
    //             strArr.push("\(" );
    //             leftCount++
    //         }
    //     }
    // return strArr.join('')
}

console.log(balanceString("This ( is unbalanced.)"));
console.log(
    "balanceString (\"This () is balanced. \"):", 
    balanceString("This \( is unbalanced.)"));

console.log(
    'balanceString ("This ( is unbalanced. "):',
    balanceString("This ( is unbalanced.")
);
