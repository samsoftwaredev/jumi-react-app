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

export const prayers = {
  start: {
    label: "prayers.start.label",
    image: rosary,
    description: "prayers.start.description",
    audio: { en: signOfTheCross, es: senalDeLaCruz },
  },
  intentions: {
    label: "prayers.intentions.label",
    description: "prayers.intentions.description",
    audio: null,
  },
  actOfContrition: {
    label: "prayers.actOfContrition.label",
    description: "prayers.actOfContrition.description",
    audio: { en: actOfContrition, es: actoDeContriccion },
  },
  ourFather: {
    label: "prayers.ourFather.label",
    description: "prayers.ourFather.description",
    audio: { en: ourFather, es: padreNuestro },
  },
  hailMary: {
    label: "prayers.hailMary.label",
    description: "prayers.hailMary.description",
    audio: { en: hailMary, es: aveMaria },
  },
  glory: {
    label: "prayers.glory.label",
    description: "prayers.glory.description",
    audio: { en: gloryBe, es: gloria },
  },
  creed: {
    label: "prayers.creed.label",
    description: "prayers.creed.description",
    audio: { en: theApostelsCreed, es: credoDeLosAposteles },
  },
  signOfCross: {
    label: "prayers.signOfCross.label",
    image: crucifixion,
    description: "prayers.signOfCross.description",
    audio: { en: signOfTheCross, es: final },
  },
  jaculatoria: {
    label: "prayers.jaculatoria.label",
    description: "prayers.jaculatoria.description",
    audio: { en: fatimaPrayer, es: oracionDeFatima },
  },
  jaculatoria2: {
    label: "prayers.jaculatoria2.label",
    description: "prayers.jaculatoria2.description",
    audio: { en: fatimaPrayer2, es: jaculatoria2 },
  },
  jaculatoria3: {
    label: "prayers.jaculatoria3.label",
    description: "prayers.jaculatoria3.description",
    audio: { en: prayerAfterRosary, es: jaculatoria3 },
  },
  letUsPray: {
    label: "prayers.letUsPray.label",
    description: "prayers.letUsPray.description",
    audio: { en: prayerAfterRosary, es: jaculatoria3 },
  },
  fatima: {
    label: "prayers.fatima.label",
    description: "prayers.fatima.description",
    audio: { en: fatimaPrayer, es: oracionDeFatima },
  },
  salve: {
    label: "prayers.salve.label",
    description: "prayers.salve.description",
    audio: { en: hailHolyQueen, es: laSalve },
  },
  pope: {
    label: "prayers.pope.label",
    description: "prayers.pope.description",
    audio: { en: popePrayers, es: intencionesDelPapa },
  },
  litanies: {
    label: "prayers.litanies.label",
    description: "prayers.litanies.description",
    audio: { en: litanies, es: letaniasLauretanas },
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
