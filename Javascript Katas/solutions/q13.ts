export const areRotations = (text1, text2) => {
  let combinedStrings = text1 + text1;
  return combinedStrings.includes(text2) ? true : false;
};
