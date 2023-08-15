function countCharacterOccurrences(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str.toLowerCase().charAt(i);
    if ((char >= 'a' && char <= 'z') || !isNaN(parseInt(char))) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  }

  return charCount;
}

function merge(arr1, arr2) {
 let i = 0;
 let j = 0;
  const results =[];  
    while(i<arr1.length && j < arr2.length) {
      if(arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++
    }else{results.push(arr2[j]);
        j++}
  }
  while(j < arr2.length){
    results.push(arr2[j]);
    j++;
  }
  while(i < arr1.length){
    results.push(arr1[i]);i++
  }
  return results;
}
function mergeSort(arr){
  if(arr.length <= 1) return arr; 
  const mid = Math.floor(arr.length / 2);
  const firsthalf = mergeSort(arr.slice(0, mid))
  const secondhalf = mergeSort(arr.slice(mid))
  return merge(firsthalf, secondhalf);

}
console.log(mergeSort([20,98,7,1,3,101,34,82,46,87]))