function insertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        var currentValue = array[i];
        var j = i - 1; // Initialize j here
        
        // Move elements of array[0..i-1] that are greater than currentValue to one position ahead
        while (j >= 0 && array[j] > currentValue) {
         
          array[j + 1] = array[j];
          
            j--;
        }
        
        array[j + 1] = currentValue;
    }
    return array;
}

// Test the insertionSort function
var data = Array.apply(null, {length:100000}).map(Function.call,Math.random)
console.log(insertionSort(data))