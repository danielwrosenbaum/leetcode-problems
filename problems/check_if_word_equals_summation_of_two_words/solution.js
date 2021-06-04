/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let firstCount = '';
    let secondCount = '';
    let targetCount = '';
    const lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

        for (let x = 0; x < firstWord.length; x++) {
                for (let i =0; i < lettersArr.length; i++) {
            if (firstWord[x] === lettersArr[i]) {
                firstCount += i; 
            }
        }
        }
        for (let y =0; y < secondWord.length; y++) {
            for (let i =0; i < lettersArr.length; i++) {
            if (secondWord[y] === lettersArr[i]) {
                secondCount += i;
            }
        }
        }
    for (let j =0; j < targetWord.length; j++) {
        for (let i =0; i < lettersArr.length; i++) {
            if (targetWord[j] === lettersArr[i]) {
                targetCount += i;
            }
        }
    }
    if ((parseInt(firstCount) + parseInt(secondCount)) === parseInt(targetCount)) {
        return true;
    } else {
        return false
    }
    
};