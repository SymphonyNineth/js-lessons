const arr = [{ score: 10 }, { score: 20 }, { score: 5 }];
const result = sortByPropertyDesc(arr, "score");
// Ожидаемый результат: [{ score: 20 }, { score: 10 }, { score: 5 }]

function sortByPropertyDesc(scores, key) {
  return scores.sort((a, b) => {
    return b[key] - a[key];
  });
}
console.log(result);
