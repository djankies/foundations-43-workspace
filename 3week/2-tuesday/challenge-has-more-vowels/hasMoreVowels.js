let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
let vowelsInWord = []
hasMoreVowels = (word) => {
    let letters = word.split('')
    letters.forEach(letter => {
        if (vowels.includes(letter)) {
            letters.splice(word.indexOf(letter), 1);
            vowelsInWord.push(letter);
        }
    });
    console.log(letters);
    return vowelsInWord.length > word.length;
}

console.log(hasMoreVowels("yaaay"));

console.log(vowelsInWord);
