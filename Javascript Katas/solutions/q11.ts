export const palindrome = (text) => {
  let word = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reverseWord = word.split("").reverse().join("");

  return word === reverseWord;
};
