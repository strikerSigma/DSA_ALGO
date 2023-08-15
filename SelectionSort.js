function selectionSort(arr){
    let minIndex = 0;
    let length = arr.length;
    let swap = true;
    while(swap){
        swap = false;
        for(let i = length; i >0; i--) {
        if(arr[length-i]<arr[minIndex]){
            minIndex = length-i;
            swap = true;
        }
    }
    temp = arr[arr.length-length];
    arr[arr.length-length]= arr[minIndex];
    arr[minIndex]= temp;
    length -=1;
    }
}
console.log(selectionSort([2,1,4,5,10,1,6,7]))