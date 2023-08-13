// returns unique numbers from an array of sorted numbers

// function uniqueNumbers(array){
//     const numbers = [];
//     for(i of array){
//         numbers.indexOf(i)!==-1 ? null : numbers.push(i);
//     }
//     return numbers;
// }
// //method 2
// function uniqueNumbers(array) {
//   return [...new Set(array)];
// }
//method 3 multiple pointers 
function uniqueNumbers(array) {
    array = array.sort()
  let pointer1=0
  let pointer2=1
  while(pointer2<array.length) {
    if(array[pointer2]!==array[pointer1])
     {array[pointer1+1]= array[pointer2]; pointer1+=1; pointer2+=1} 
    else{ pointer2+=1}
    
  }
}


console.log(uniqueNumbers([1, 1, 1, 1, 1, 2, 2, 2, 5, 3, 4]));
console.log(uniqueNumbers([1,1,1,1,1,2,2,2,5,3,4]))
