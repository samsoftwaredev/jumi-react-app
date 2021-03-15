import {
  secondGloriousMystery,
  secondGloriousMysteryDescription,
  firstGloriousMystery,
  firstGloriousMysteryDescription,
  thirdGloriousMystery,
  thirdGloriousMysteryDescription,
  fourthGloriousMystery,
  fourthGloriousMysteryDescription,
  fifthGloriousMystery,
  fifthGloriousMysteryDescription,
  secondJoyfulMystery,
  secondJoyfulMysteryDescription,
  firstJoyfulMystery,
  firstJoyfulMysteryDescription,
  thirdJoyfulMystery,
  thirdJoyfulMysteryDescription,
  fourthJoyfulMystery,
  fourthJoyfulMysteryDescription,
  // fifthJoyfulMystery,
  // fifthJoyfulMysteryDescription,
  secondLuminousMystery,
  secondLuminousMysteryDescription,
  firstLuminousMystery,
  firstLuminousMysteryDescription,
  thirdLuminousMystery,
  thirdLuminousMysteryDescription,
  fourthLuminousMystery,
  fourthLuminousMysteryDescription,
  fifthLuminousMystery,
  fifthLuminousMysteryDescription,
  secondSorrowfulMystery,
  secondSorrowfulMysteryDescription,
  firstSorrowfulMystery,
  firstSorrowfulMysteryDescription,
  thirdSorrowfulMystery,
  thirdSorrowfulMysteryDescription,
  fourthSorrowfulMystery,
  fourthSorrowfulMysteryDescription,
  fifthSorrowfulMystery,
  fifthSorrowfulMysteryDescription,
} from "../audio/en/mysteries";

export const rosaryDays = {
  // the days of the week start with sunday
  sunday: "glorious",
  monday: "joyful",
  tuesday: "sorrowful",
  wednesday: "glorious",
  thursday: "luminous",
  friday: "sorrowful",
  saturday: "joyful",
};

export const rosaryMysteries = {
  joyful: {
    label: "mysteries.joyful.label",
    mysteries: [
      {
        label: "mysteries.joyful.first.label",
        book: "Lucas 1, 30-32, 38",
        description: "mysteries.joyful.first.description",
        audio: { en: firstJoyfulMystery, es: "" },
        audioDescription: {
          en: firstJoyfulMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.joyful.second.label",
        book: "Lucas 1, 39-43",
        description: "mysteries.joyful.second.description",
        audio: { en: secondJoyfulMystery, es: "" },
        audioDescription: {
          en: secondJoyfulMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.joyful.third.label",
        book: "Lucas 2, 6-11",
        description: "mysteries.joyful.third.description",
        audio: { en: thirdJoyfulMystery, es: "" },
        audioDescription: {
          en: thirdJoyfulMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.joyful.fourth.label",
        book: "Lc 2, 22-25, 34-35",
        description: "mysteries.joyful.fourth.description",
        audio: { en: fourthJoyfulMystery, es: "" },
        audioDescription: {
          en: fourthJoyfulMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.joyful.fifth.label",
        book: "Lc 2, 41-47",
        description: "mysteries.joyful.fifth.description",
        // audio: { en: fifthJoyfulMystery, es: "" },
        // audioDescription: {
        //   en: fifthJoyfulMysteryDescription,
        //   es: "",
        // },
      },
    ],
  },
  luminous: {
    label: "mysteries.luminous.label",
    mysteries: [
      {
        label: "mysteries.luminous.first.label",
        book: "Mt 3, 13, 16-17",
        description: "mysteries.luminous.first.description",
        audio: { en: firstLuminousMystery, es: "" },
        audioDescription: {
          en: firstLuminousMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.luminous.second.label",
        book: "Jn 2,1-5",
        description: "mysteries.luminous.second.description",
        audio: { en: secondLuminousMystery, es: "" },
        audioDescription: {
          en: secondLuminousMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.luminous.third.label",
        book: "Mc 1, 15, 21; 2,3-11; Lc 7, 47-48",
        description: "mysteries.luminous.third.description",
        audio: { en: thirdLuminousMystery, es: "" },
        audioDescription: {
          en: thirdLuminousMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.luminous.fourth.label",
        book: "Mt 17, 1-3, 5",
        description: "mysteries.luminous.fourth.description",
        audio: { en: fourthLuminousMystery, es: "" },
        audioDescription: {
          en: fourthLuminousMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.luminous.fifth.label",
        book: "Jn, 13, 1; Mt 26, 26-29",
        description: "mysteries.luminous.fifth.description",
        audio: { en: fifthLuminousMystery, es: "" },
        audioDescription: {
          en: fifthLuminousMysteryDescription,
          es: "",
        },
      },
    ],
  },
  sorrowful: {
    label: "mysteries.sorrowful.label",
    mysteries: [
      {
        label: "mysteries.sorrowful.first.label",
        book: "Lc 22, 39-46",
        description: "mysteries.sorrowful.first.description",
        audio: { en: firstSorrowfulMystery, es: "" },
        audioDescription: {
          en: firstSorrowfulMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.sorrowful.second.label",
        book: "Jn 18, 33, 19;1",
        description: "mysteries.sorrowful.second.description",
        audio: { en: secondSorrowfulMystery, es: "" },
        audioDescription: {
          en: secondSorrowfulMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.sorrowful.third.label",
        book: "Mt 27, 29-30",
        description: "mysteries.sorrowful.third.description",
        audio: { en: thirdSorrowfulMystery, es: "" },
        audioDescription: {
          en: thirdSorrowfulMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.sorrowful.fourth.label",
        book: "Lc 23, 33-34, 44-46; Jn 19, 33-35",
        description: "mysteries.sorrowful.fourth.description",
        audio: { en: fourthSorrowfulMystery, es: "" },
        audioDescription: {
          en: fourthSorrowfulMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.sorrowful.fifth.label",
        book: "Lc 23, 33-34, 44-46; Jn 19, 33-35",
        description: "mysteries.sorrowful.fifth.description",
        audio: { en: fifthSorrowfulMystery, es: "" },
        audioDescription: {
          en: fifthSorrowfulMysteryDescription,
          es: "",
        },
      },
    ],
  },
  glorious: {
    label: "mysteries.glorious.label",
    mysteries: [
      {
        label: "mysteries.glorious.first.label",
        book: "Mt 28, 5-6",
        description: "mysteries.glorious.first.description",
        audio: { en: firstGloriousMystery, es: "" },
        audioDescription: {
          en: firstGloriousMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.glorious.second.label",
        book: "Lc 24, 50-51; Mc 16, 20",
        description: "mysteries.glorious.second.description",
        audio: { en: secondGloriousMystery, es: "" },
        audioDescription: {
          en: secondGloriousMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.glorious.third.label",
        book: "Hch 1, 14; 2, 1-4",
        description: "mysteries.glorious.third.description",
        audio: { en: thirdGloriousMystery, es: "" },
        audioDescription: {
          en: thirdGloriousMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.glorious.fourth.label",
        book: "Ct 2, 10-11, 14",
        description: "mysteries.glorious.fourth.description",
        audio: { en: fourthGloriousMystery, es: "" },
        audioDescription: {
          en: fourthGloriousMysteryDescription,
          es: "",
        },
      },
      {
        label: "mysteries.glorious.fifth.label",
        book: "Sal. 45, 14-15; Ap 11, 19;12, 1",
        description: "mysteries.glorious.fifth.description",
        audio: { en: fifthGloriousMystery, es: "" },
        audioDescription: {
          en: fifthGloriousMysteryDescription,
          es: "",
        },
      },
    ],
  },
};
