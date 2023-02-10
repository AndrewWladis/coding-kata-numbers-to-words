const ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen'];
const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

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
        }
    }
    if (length >= 3) {
        if (arr[0] === 0 && arr[1] === 0 && arr[2] != 0) {
            resultArr.push(ones[arr[2] - 1] + '-hundred')
        } if (arr[2] === 0) {

        } else {
            resultArr.push(ones[arr[2] - 1] + '-hundred and')
        }
    }
    if (length === 4) {
        resultArr.push(ones[arr[3] - 1] + '-thousand')
    }
    return resultArr.reverse().join(' ');
}

//change num to change value
console.log(numToWord(2319));