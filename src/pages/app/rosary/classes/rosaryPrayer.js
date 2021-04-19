import {
  defaultBeginningPrayers,
  defaultEndingPrayers,
  defaultEndOfMysteryPrayers,
  prayers,
} from "../constants/prayers";
import { rosaryDays, rosaryMysteries } from "../constants/mysteries";

export class RosaryPrayer {
  // private properties
  _observers = [];
  _endDateOfPrayer = null;
  _prayerType = prayers;
  _rosaryDays = rosaryDays;
  _rosaryMysteries = rosaryMysteries;
  _mysterySelected = rosaryMysteries;
  _prayersList = [];
  _prayerIndex = 0;

  constructor() {
    // initilize the prayer by setting the rosary
    this.setMystery();
    this._prayersList = this.getPrayersList();
  }

  // private methods property

  // notify all subscribers that an action has occured
  _fire(obj, thisObj) {
    var scope = thisObj || window;
    this._observers.forEach(function (item) {
      item.call(scope, obj);
    });
  }

  // public methods property

  // move to the previous prayer
  prevPrayer() {
    if (this._prayerIndex > 0) {
      this._prayerIndex -= 1;
      return this._prayersList[this._prayerIndex];
    }
    return null;
  }

  // move to the next prayer
  nextPrayer() {
    const arrOfPrayers = Object.values(this._prayersList);
    if (this._prayerIndex <= arrOfPrayers.length - 1) {
      this._prayerIndex += 1;
      return this._prayersList[this._prayerIndex];
    }
    return null;
  }

  // go to a specific prayer in the rosary
  jumpToPrayer(index) {
    const arrOfPrayers = Object.values(this._prayersList);
    if (this._prayerIndex <= arrOfPrayers.length - 1) {
      this._prayerIndex = index;
      return this._prayersList[this._prayerIndex];
    }
    return null;
  }

  // get prayer index
  getPrayerIndex() {
    return this._prayerIndex;
  }

  // get the time when the rosary will finish
  getEndDateOfPayer() {
    return this._endDateOfPrayer;
  }

  setEndDateOfPayer(date) {
    this._endDateOfPrayer = date;
  }

  // get current prayer
  getPrayer() {
    return this._prayersList[this._prayerIndex];
  }

  // the mystery of the day
  getMystery() {
    return this._mysterySelected;
  }

  getTodaysMystery() {
    const dayOfTheWeek = new Date().getDay();
    const arrOfPrayersDays = Object.values(this._rosaryDays);
    const mysteryName = arrOfPrayersDays[dayOfTheWeek];
    return mysteryName;
  }

  setMystery(mysteryName) {
    if (!mysteryName) {
      // if no mysteryName was passed, it will set the mystery to today's date
      const name = this.getTodaysMystery();
      this._mysterySelected = this._rosaryMysteries[name];
    } else {
      this._mysterySelected = this._rosaryMysteries[mysteryName];
    }
  }

  // built the list of all the prayers that the rosary needs
  getPrayersList(
    beginningPrayers = defaultBeginningPrayers,
    afterEachMysteryPrayers = defaultEndOfMysteryPrayers,
    endingPrayers = defaultEndingPrayers
  ) {
    const mysteryInfo = this._mysterySelected;
    const arr = [];
    // 1. set the beginning prayers
    arr.push(...beginningPrayers);

    // 2. set all the repetitive prayers
    mysteryInfo.mysteries.forEach((m, index) => {
      const mystery = { mysteryIndex: index + 1, ...m };
      arr.push({ ...mystery, isMystery: true });
      // Our Father
      arr.push({
        ...this._prayerType.ourFather,
        mystery,
        isCross: true,
      });
      // 10 Hail Mary
      [...Array(10).keys()].forEach((prayerIndex) => {
        const hailMaryIndex = prayerIndex + 1;
        arr.push({
          ...this._prayerType.hailMary,
          mystery,
          hailMaryIndex,
          isHailMary: true,
        });
      });
      // 4. prayers after each mystery
      arr.push(...afterEachMysteryPrayers);
    });
    // 5. set the ending prayers
    arr.push(...endingPrayers);

    return arr;
  }

  // the duration of the rosary
  getDuration() {
    const values = this._prayersList.map(({ duration }) => duration);
    const total = values.reduce((a, b) => a + parseFloat(b), 0);
    return total;
  }

  // check if prayer has completed or not
  updatePrayer() {
    const date = new Date();

    // exit if the prayer is the last of the list
    if (this._prayerIndex >= this._prayersList.length - 1) return;

    if (this._endDateOfPrayer === null) {
      // if there is no end date. Set end date

      // at the beggining of each prayer set the duration of that prayer
      const dateMilli = date.getTime() + this.getPrayer().duration;
      this._endDateOfPrayer = new Date(dateMilli);
    } else if (date.getTime() > this._endDateOfPrayer.getTime()) {
      // end date reached, prayer was completed

      // go to next prayer
      this.nextPrayer();
      // notify all subscribers that prayer was completed
      this._fire({ prayer: this.getPrayer(), prayerIndex: this._prayerIndex });
      // reset the end date
      this._endDateOfPrayer = null;
    } else {
      // while the end date hasn't been reached, don't do anything
    }
  }

  subscribe(fn) {
    // add function to list of subscribers
    if (typeof fn === "function") {
      this._observers.push(fn);
    }
  }

  unsubscribe(fn) {
    // remove subscriber function from list
    this._observers = this._observers.filter((item) => {
      if (item !== fn) {
        return item;
      }
      return false;
    });
  }
}
