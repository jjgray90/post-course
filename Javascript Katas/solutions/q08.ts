export const findDuplicates = (text) => {
  let lettersArray = text.split("");
  let results = [];
  for (let i = 0; i < lettersArray.length; i++) {
    lettersArray.lastIndexOf(lettersArray[i]) !== i
      ? results.push(lettersArray[i])
      : undefined;
  }
  return [...new Set(results)].join("");
};
