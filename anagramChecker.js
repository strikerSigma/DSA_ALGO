// Given two strings write a function to determine if the secon string is an anagram of the first.


// function isAnagram(string1,string2) {
//     if(string1.length!==string2.length) return false;
//     const counter1 = {}
//     const counter2 = {}
//     for(char of string1){
//         counter1[char] = ++counter1[char] || 1
//     }
//     for(char of string2){
//         counter2[char] = ++counter2[char] || 1
//     }
//     for(key in counter1){
//         if(!(counter2[key])){
//             return false;
//         }
//         if(!(counter1[key]===counter2[key])){
//             return false;
//         }
//     }
//     return true;
// }
function isAnagram(string1,string2) {
    if(string1.length!==string2.length) return false;
    const counter1 = {}
    const counter2 = {}
    for(let i = 0; i < string1.length; i++) {
        counter1[string1.charAt(i)] = ++counter1[string1.charAt(i)] || 1
    }
    for(let i = 0; i < string1.length; i++) {
        counter2[string2.charAt(i)] = ++counter2[string2.charAt(i)] || 1
    }
    for(key in counter1){
        if(!(counter2[key])){
            return false;
        }
        if(!(counter1[key]===counter2[key])){
            return false;
        }
    }
    return true;
}
console.log(isAnagram("instagram","instgaram"))
console.log(isAnagram("instagram","instgarmm"))