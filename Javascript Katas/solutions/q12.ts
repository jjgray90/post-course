export const reverseWithRecursion = (text) => {
  return text === ""
    ? ""
    : reverseWithRecursion(text.substr(1)) + text.charAt(0);
};
