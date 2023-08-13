//Write a recursive function called reverse which accepts a string and returns a new string in reverse.


function reverse(string) {
    // change the index of each char 
    let array = string.split('');
    const reverseString = []
    function helper(){
        reverseString.push(array[array.length - 1]);
        array=array.slice(0,array.length - 1)
        if(array.length !==0)helper()
    }
    helper()
    return reverseString.join('')
}
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

function isPalindrome(string,orignalString = string) {
    // change the index of each char 
    if(string.length ===0) return string === orignalString
        const lastchar = string.charAt(string.length - 1);
        string = string.slice(0,string.length - 1);
        return lastchar + isPalindrome(string,orignalString)
}
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

// console.log(isPalindrome("tatotat"))

const isOdd = val => val % 2 !== 0;

 // false

function someRecursive(arr, func){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length ===0) return false;
  if(func(arr[0])) return true;
  return someRecursive(arr.slice(1),func)
}

function flatten(arr, newarr =[]){
    if(arr.length === 0) return newarr;
  if(Array.isArray(arr[0])) {return flatten(arr[0],newarr)}
  else { 
    newarr.push(arr[0]);
    arr = arr.slice(1);
    return flatten(arr,newarr); 
   } 
}
function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
    // if(!(typeof arr === 'string')){capitalizeFirst(arr[0])}
    const string = arr[0]
    return string[0].toUpperCase()+string[1]
}
console.log(capitalizeFirst(['car','ball']))// true
// someRecursive([4,6,8,9], isOdd), // true
// someRecursive([4,6,8], isOdd), // false
// someRecursive([4,6,8], val => val > 10))