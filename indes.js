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

console.log([2,4,8,1,3,1,3,10,19,12,2].sort((a, b) =>-a+b))