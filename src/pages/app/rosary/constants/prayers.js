import {
  actOfContrition,
  fatimaPrayer,
  fatimaPrayer2,
  gloryBe,
  hailMary,
  signOfTheCross,
  theApostelsCreed,
  ourFather,
  prayerAfterRosary,
  litanies,
  popePrayers,
  hailHolyQueen,
} from "../audio/en/prayers";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../storage/localStorage";

export const prayers = {
  start: {
    label: "prayers.start.label",
    description: "prayers.start.description",
    audio: { en: signOfTheCross, es: "" },
  },
  intentions: {
    label: "prayers.intentions.label",
    description: "prayers.intentions.description",
  },
  actOfContrition: {
    label: "prayers.actOfContrition.label",
    description: "prayers.actOfContrition.description",
    audio: { en: actOfContrition, es: "" },
  },
  ourFather: {
    label: "prayers.ourFather.label",
    description: "prayers.ourFather.description",
    audio: { en: ourFather, es: "" },
  },
  hailMary: {
    label: "prayers.hailMary.label",
    description: "prayers.hailMary.description",
    audio: { en: hailMary, es: "" },
  },
  glory: {
    label: "prayers.glory.label",
    description: "prayers.glory.description",
    audio: { en: gloryBe, es: "" },
  },
  creed: {
    label: "prayers.creed.label",
    description: "prayers.creed.description",
    audio: { en: theApostelsCreed, es: "" },
  },
  signOfCross: {
    label: "prayers.signOfCross.label",
    description: "prayers.signOfCross.description",
    audio: { en: signOfTheCross, es: "" },
  },
  jaculatoria: {
    label: "prayers.jaculatoria.label",
    description: "prayers.jaculatoria.description",
    audio: { en: fatimaPrayer, es: "" },
  },
  jaculatoria2: {
    label: "prayers.jaculatoria2.label",
    description: "prayers.jaculatoria2.description",
    audio: { en: fatimaPrayer2, es: "" },
  },
  jaculatoria3: {
    label: "prayers.jaculatoria3.label",
    description: "prayers.jaculatoria3.description",
    audio: { en: prayerAfterRosary, es: "" },
  },
  letUsPray: {
    label: "prayers.letUsPray.label",
    description: "prayers.letUsPray.description",
    audio: { en: prayerAfterRosary, es: "" },
  },
  fatima: {
    label: "prayers.fatima.label",
    description: "prayers.fatima.description",
    audio: { en: fatimaPrayer, es: "" },
  },
  salve: {
    label: "prayers.salve.label",
    description: "prayers.salve.description",
    audio: { en: hailHolyQueen, es: "" },
  },
  pope: {
    label: "prayers.pope.label",
    description: "prayers.pope.description",
    audio: { en: popePrayers, es: "" },
  },
  litanies: {
    label: "prayers.litanies.label",
    description: "prayers.litanies.description",
    audio: { en: litanies, es: "" },
  },
};

export const beginningPrayersKey = "beginningPrayers";
export const endMysteryPrayersKey = "endMysteryPrayers";
export const endingPrayersKey = "endingPrayers";

export const defaultBeginningPrayers = [
  prayers.start,
  prayers.creed,
  prayers.actOfContrition,
];

export const defaultEndMysteryPrayers = [
  prayers.glory,
  prayers.jaculatoria2,
  prayers.jaculatoria3,
];

export const defaultEndingPrayers = [
  prayers.pope,
  prayers.salve,
  prayers.litanies,
  prayers.signOfCross,
];

// get default prayers
export const getBeginningPrayers = () => {
  return getLocalStorage(beginningPrayersKey) || defaultBeginningPrayers;
};

export const getEndOfMysteryPrayers = () => {
  return getLocalStorage(endMysteryPrayersKey) || defaultEndMysteryPrayers;
};

export const getEndingPrayers = () => {
  return getLocalStorage(endMysteryPrayersKey) || defaultEndingPrayers;
};

// set default prayers
export const setBeginningPrayers = (data) => {
  setLocalStorage(beginningPrayersKey, JSON.stringify(data));
};

export const setEndOfMysteryPrayers = (data) => {
  setLocalStorage(endMysteryPrayersKey, JSON.stringify(data));
};

export const setEndingPrayers = (data) => {
  setLocalStorage(endMysteryPrayersKey, JSON.stringify(data));
};

// remove default prayers
export const removeBeginningPrayers = () => {
  removeLocalStorage(beginningPrayersKey);
};

export const removeEndOfMysteryPrayers = () => {
  removeLocalStorage(endMysteryPrayersKey);
};

export const removeEndingPrayers = () => {
  removeLocalStorage(endMysteryPrayersKey);
};
