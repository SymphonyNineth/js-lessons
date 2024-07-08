const vowelsArr = ["a", "e", "i", "o", "u", "y"];
const arr = ["apple", "banana", "kiwi", "grape", 'pomegranate', 'pineapple', 'peach', 'pear'];
const result = sortByVowels(arr);
// Ожидаемый результат: ['kiwi', 'grape', 'apple', 'banana']

console.log(result);

function isVowel(letter) {
  return vowelsArr.includes(letter);
}

function countVowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      count++;
    }
  }
  return count;
}

function sortByVowels(fruits) {
  return fruits.sort((a, b) => {
    return countVowels(a) - countVowels(b);
  })
}
