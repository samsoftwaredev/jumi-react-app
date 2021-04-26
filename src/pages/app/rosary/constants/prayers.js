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
    audioId: "start",
    label: "prayers.start.label",
    description: "prayers.start.description",
    audio: { en: signOfTheCross, es: senalDeLaCruz },
  },
  intentions: {
    audioId: "intentions",
    label: "prayers.intentions.label",
    description: "prayers.intentions.description",
    audio: null,
  },
  actOfContrition: {
    audioId: "actOfContrition",
    label: "prayers.actOfContrition.label",
    description: "prayers.actOfContrition.description",
    audio: { en: actOfContrition, es: actoDeContriccion },
  },
  ourFather: {
    audioId: "ourFather",
    label: "prayers.ourFather.label",
    description: "prayers.ourFather.description",
    audio: { en: ourFather, es: padreNuestro },
  },
  hailMary: {
    audioId: "hailMary",
    label: "prayers.hailMary.label",
    description: "prayers.hailMary.description",
    audio: { en: hailMary, es: aveMaria },
  },
  glory: {
    audioId: "glory",
    label: "prayers.glory.label",
    description: "prayers.glory.description",
    audio: { en: gloryBe, es: gloria },
  },
  creed: {
    audioId: "creed",
    label: "prayers.creed.label",
    description: "prayers.creed.description",
    audio: { en: theApostelsCreed, es: credoDeLosAposteles },
  },
  signOfCross: {
    audioId: "signOfCross",
    label: "prayers.signOfCross.label",
    description: "prayers.signOfCross.description",
    audio: { en: signOfTheCross, es: senalDeLaCruz },
  },
  jaculatoria: {
    audioId: "jaculatoria",
    label: "prayers.jaculatoria.label",
    description: "prayers.jaculatoria.description",
    audio: { en: fatimaPrayer, es: oracionDeFatima },
  },
  jaculatoria2: {
    audioId: "jaculatoria2",
    label: "prayers.jaculatoria2.label",
    description: "prayers.jaculatoria2.description",
    audio: { en: fatimaPrayer2, es: jaculatoria2 },
  },
  jaculatoria3: {
    audioId: "jaculatoria3",
    label: "prayers.jaculatoria3.label",
    description: "prayers.jaculatoria3.description",
    audio: { en: prayerAfterRosary, es: jaculatoria3 },
  },
  letUsPray: {
    audioId: "letUsPray",
    label: "prayers.letUsPray.label",
    description: "prayers.letUsPray.description",
    audio: { en: prayerAfterRosary, es: final },
  },
  fatima: {
    audioId: "fatima",
    label: "prayers.fatima.label",
    description: "prayers.fatima.description",
    audio: { en: fatimaPrayer, es: oracionDeFatima },
  },
  salve: {
    audioId: "salve",
    label: "prayers.salve.label",
    description: "prayers.salve.description",
    audio: { en: hailHolyQueen, es: laSalve },
  },
  pope: {
    audioId: "pope",
    label: "prayers.pope.label",
    description: "prayers.pope.description",
    audio: { en: popePrayers, es: intencionesDelPapa },
  },
  litanies: {
    audioId: "litanies",
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
