const ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen'];
const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function wordToNum(word) {
    let returnNum = 0;
    let newWord = word.split(' ').reverse();
    let length = newWord.length;
    let num = 3;

    for (let i = 0; i < length; i++) {
        if (teens.includes(newWord[i])) {
            num = 2;
            returnNum += teens.indexOf(newWord[i]) + 11;
        } else {
            if (newWord[i].includes('-thousand')) {
                returnNum += (ones.indexOf(newWord[i].replace(/-thousand/g, '')) + 1) * 1000;
            } else if (newWord[i].includes('-hundred')) {
                returnNum += (ones.indexOf(newWord[i].replace(/-hundred/g, '')) + 1) * 100;
            } else if (tens.includes(newWord[i])) {
                returnNum += (tens.indexOf(newWord[i]) + 1) * 10;
            } else {
                returnNum += ones.indexOf(newWord[i]) + 1;
            }
        }
    }

    return returnNum;
}

function numToWord(num) {
    let resultArr = [];
    let arr = num.toString().split('').reverse().map((item) => Number(item))
    let length = arr.length;
    if (length === 1) {
        resultArr.push(ones[arr[0] - 1])
    }
    if (length >= 2) {
        if (arr[0] != 0 && arr[1] != 1) {
            resultArr.push(ones[arr[0] - 1])
        }
        if (arr[1] === 1 && arr[0] === 0) {
            resultArr.push(tens[arr[1] - 1])
        } else if (arr[1] === 1 && arr[0] != 0) {
            resultArr.push(teens[arr[0] - 1])
        } else {
            resultArr.push(tens[arr[1] - 1])
        }
    }
    if (length >= 3) {
        if (arr[2] === 0) {

        } else {
            resultArr.push(ones[arr[2] - 1] + '-hundred')
        }
    }
    if (length === 4) {
        resultArr.push(ones[arr[3] - 1] + '-thousand')
    }
    return resultArr.reverse().join(' ');
}

console.log(numToWord(2319));
//this reverses the function 🔄
console.log(wordToNum('two-thousand three-hundred nineteen'))