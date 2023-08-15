function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function findMaxLength(arr) {
    return Math.max(...arr).toString().length;
}

function radixSort(arr) {
    let max = findMaxLength(arr);
    for (let i = 0; i < max; i++) {
        let digitBuckets = Array.from({ length: 10 }, () => []); // Initialize digitBuckets for each digit position
        for (let j = 0; j < arr.length; j++) {
            digitBuckets[getDigit(arr[j], i)].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

console.log(radixSort([1, 2, 3, 123, 541, 1093, 124512]));
