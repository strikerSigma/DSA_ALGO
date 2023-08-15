function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function pivotHelper(arr, start = 0, end = arr.length) {
    let pivot = arr[start];
    let sortIndex = start + 1;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swap(arr, sortIndex, i);
            sortIndex++;
        }
    }
    swap(arr, start, sortIndex - 1);
    return sortIndex - 1;
}
function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivotIndex = pivotHelper(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
    return arr;
}

const arr = [9, 34, 61, 1, 8, 3, 23, 5, 10, 6];
console.log(quickSort(arr));
