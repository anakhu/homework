/* eslint-disable no-param-reassign */
function getFilter(forbiddenWords = []) {
  const forbiddenWordsMap = forbiddenWords.reduce((a, c) => {
    a[c.toLowerCase()] = 1;

    return a;
  }, {});

  return function filterWords(baseArr = []) {
    return baseArr.filter((word) => !forbiddenWordsMap[word.toLowerCase()]);
  };
}
