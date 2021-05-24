export const getOrdinalNumbers = (place) => {
  // get the place of the mystery
  switch (place) {
    case 1:
      return "mysteries.ordinalNumbers.first";
    case 2:
      return "mysteries.ordinalNumbers.second";
    case 3:
      return "mysteries.ordinalNumbers.third";
    case 4:
      return "mysteries.ordinalNumbers.fourth";
    case 5:
      return "mysteries.ordinalNumbers.fifth";
    default:
      return "";
  }
};
