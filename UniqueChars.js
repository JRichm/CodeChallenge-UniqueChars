word = "Moonday";

console.log(hasUniqueChars(word));

function hasUniqueChars(wordToCheck) {
    let lettersToCheck = wordToCheck.split('');
    for (let i = 0; i < lettersToCheck.length; i++) {
        for (let j = 0; j < lettersToCheck.length; j++) {
            if (i === j) break;
            if (word[i] === word[j]) return false;
        }
    }
    return true;
}