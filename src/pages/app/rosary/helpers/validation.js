import i18next from "i18next";

export const getValidPrayers = (arr) =>
  arr.filter(({ label }) => i18next.t(label));
