function BubbleSort(arr){
    let temp =0;
    let count = 0;
    while(count >0){
        for(let i=0;i<arr-1;i++){
        if(arr[i]>arr[i+1]){
            temp = arr[i];
            arr[i] = arr[i+1]
            arr[i+1] = temp
            count++
        }
    }
    }
    return arr;
}
console.log(BubbleSort([23,56,10,1,63,7,3,101]))