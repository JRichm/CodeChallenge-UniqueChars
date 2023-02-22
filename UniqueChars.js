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

function eghaSolution(word) {
    let uniqueChars = new Set([])
    let splitWord = word.split('');

    for(let i = 0; i <splitWord.length; i++) {
        uniqueChars.add(splitWord[i])
    }

    return uniqueChars.size === splitWord.length;
}

console.log(eghaSolution("sobo"));