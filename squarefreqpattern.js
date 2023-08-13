
//Frequency counter method 1

// function frequencyCounter(array1,array2){
//     if(array1.length != array2.length) return false;
//     for (i in array1){
//         for (j in array2){
//                if(array2[j]===array1[i]*array1[i]){
//                     array2.splice(j, 1);
//                }
//         }
//     }
//     if(array2.length!=0) return false;
//     return true;
// }


// frequency counter method 2
const t1 = performance.now();
function frequencyCounter(array1,array2){
    const counter1 = {}
    const counter2 = {}
    if(array1.length != array2.length) return false;
    for (const num of array1) {
        counter1[num] = (counter1[num] || 0) + 1;
    }
    for (const num of array2) {
        counter2[num] = (counter2[num] || 0) + 1;
    }
    for(key in counter1){
        if(!(key*key in counter2)) return false
        if(counter1[key]!== counter2[key*key]) return false;
    }
    return true;
}
const t2 = performance.now();

//method 3
function frequencyCounter(array1,array2){
    const counter1 = {}
    if(array1.length != array2.length) return false;
    for (const num of array1) {
        counter1[num] = (counter1[num] || 0) + 1;
    }
    for(value of counter1){
        if(array2.indexOf(value)===-1) return false
        else counter1 -= 1;
    }
    return true;
}
console.log(t2-t1)
console.log(frequencyCounter([1,2,1],[4,4,1]))
console.log(frequencyCounter([1,2,3],[9,4,1]))
console.log(frequencyCounter([1,2,3],[1,4,9]))
console.log(frequencyCounter([1,3,3],[9,4,1]))
