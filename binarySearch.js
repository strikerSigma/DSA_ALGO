
function binarySearch(arr,target){
    if(arr.length ===0) return -1;
    var start = 0;
    var end = arr.length-1;
    var middle = Math.floor((start + end) / 2);
    if(arr[middle] === target) return middle;
    else if(arr[middle] > target) return binarySearch(arr.slice(start,middle),target);
    else  return binarySearch(arr.slice(middle + 1, end + 1), target);
}
console.log(binarySearch([1,2,3,4,5,6,7,8,6,5,3,5,4,2],10))
