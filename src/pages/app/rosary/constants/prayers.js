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

import crucifixion from "../images/crucifixion.svg";
import rosary from "../images/rosary.svg";

import {
  actoDeContriccion,
  oracionDeFatima,
  jaculatoria2,
  jaculatoria3,
  gloria,
  aveMaria,
  senalDeLaCruz,
  credoDeLosAposteles,
  padreNuestro,
  final,
  letaniasLauretanas,
  intencionesDelPapa,
  laSalve,
} from "../audio/es/prayers";
import { getValidPrayers } from "../helpers/validation";

export const prayers = {
  start: {
    id: "start",
    label: "prayers.start.label",
    image: rosary,
    description: "prayers.start.description",
    audio: { en: signOfTheCross, es: senalDeLaCruz },
  },
  intentions: {
    id: "intentions",
    label: "prayers.intentions.label",
    description: "prayers.intentions.description",
    audio: null,
  },
  actOfContrition: {
    id: "actOfContrition",
    label: "prayers.actOfContrition.label",
    description: "prayers.actOfContrition.description",
    audio: { en: actOfContrition, es: actoDeContriccion },
  },
  ourFather: {
    id: "ourFather",
    label: "prayers.ourFather.label",
    description: "prayers.ourFather.description",
    audio: { en: ourFather, es: padreNuestro },
  },
  hailMary: {
    id: "hailMary",
    label: "prayers.hailMary.label",
    description: "prayers.hailMary.description",
    audio: { en: hailMary, es: aveMaria },
  },
  glory: {
    id: "glory",
    label: "prayers.glory.label",
    description: "prayers.glory.description",
    audio: { en: gloryBe, es: gloria },
  },
  creed: {
    id: "creed",
    label: "prayers.creed.label",
    description: "prayers.creed.description",
    audio: { en: theApostelsCreed, es: credoDeLosAposteles },
  },
  signOfCross: {
    id: "signOfCross",
    label: "prayers.signOfCross.label",
    image: crucifixion,
    description: "prayers.signOfCross.description",
    audio: { en: signOfTheCross, es: final },
  },
  jaculatoria: {
    id: "jaculatoria",
    label: "prayers.jaculatoria.label",
    description: "prayers.jaculatoria.description",
    audio: { en: fatimaPrayer, es: oracionDeFatima },
  },
  jaculatoria2: {
    id: "jaculatoria2",
    label: "prayers.jaculatoria2.label",
    description: "prayers.jaculatoria2.description",
    audio: { en: fatimaPrayer2, es: jaculatoria2 },
  },
  jaculatoria3: {
    id: "jaculatoria3",
    label: "prayers.jaculatoria3.label",
    description: "prayers.jaculatoria3.description",
    audio: { en: prayerAfterRosary, es: jaculatoria3 },
  },
  letUsPray: {
    id: "letUsPray",
    label: "prayers.letUsPray.label",
    description: "prayers.letUsPray.description",
    audio: { en: prayerAfterRosary, es: jaculatoria3 },
  },
  fatima: {
    id: "fatima",
    label: "prayers.fatima.label",
    description: "prayers.fatima.description",
    audio: { en: fatimaPrayer, es: oracionDeFatima },
  },
  salve: {
    id: "salve",
    label: "prayers.salve.label",
    description: "prayers.salve.description",
    audio: { en: hailHolyQueen, es: laSalve },
  },
  pope: {
    id: "pope",
    label: "prayers.pope.label",
    description: "prayers.pope.description",
    audio: { en: popePrayers, es: intencionesDelPapa },
  },
  litanies: {
    id: "litanies",
    label: "prayers.litanies.label",
    description: "prayers.litanies.description",
    audio: { en: litanies, es: letaniasLauretanas },
  },
};

export const beginningPrayersKey = "beginningPrayers";
export const endMysteryPrayersKey = "endMysteryPrayers";
export const endingPrayersKey = "endingPrayers";

const beginningPrayers = [
  prayers.start,
  prayers.creed,
  prayers.actOfContrition,
];

const endMysteryPrayers = [
  prayers.glory,
  prayers.jaculatoria2,
  prayers.jaculatoria3,
];

const endingPrayers = [
  prayers.pope,
  prayers.salve,
  prayers.litanies,
  prayers.signOfCross,
];

// return only valid prayers
export const defaultBeginningPrayers = () => getValidPrayers(beginningPrayers);
export const defaultEndMysteryPrayers = () =>
  getValidPrayers(endMysteryPrayers);
export const defaultEndingPrayers = () => getValidPrayers(endingPrayers);
