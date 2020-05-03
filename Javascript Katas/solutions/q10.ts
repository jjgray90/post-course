export const printFirstNonRepeat = (text) => {
    let textArray = text.split("").filter((char) => {
      if (text.indexOf(char) === text.lastIndexOf(char)) return char;
    });
    return textArray[0];
};
