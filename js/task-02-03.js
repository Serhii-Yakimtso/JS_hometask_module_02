// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает
// параметром произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

function findLongestWord(string = "") {
  // Write code under this line
  const array = string.split(" ");
  let wordLength = 0;
  let longestWord = "";

  for (let i = 0; i < array.length; i += 1) {
    if (wordLength < array[i].length) {
      wordLength = array[i].length;
      longestWord = array[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
