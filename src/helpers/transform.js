export const strToId = (str1 = "", str2 = "") => {
  const newStr = str2 ? `${str1}_${str2}` : str1;
  return newStr.toLowerCase().replace(/ /g, "-");
};
