import { prayers } from "../../constants/prayers";
import { rosaryDays, rosaryMysteries } from "../../constants/rosary";

export class RosaryPrayer {
  // private properties
  _observers = [];
  _endDateOfPrayer = null;
  _prayerType = prayers;
  _rosaryDays = rosaryDays;
  _rosaryMysteries = rosaryMysteries;
  _prayersList = [];
  _prayerIndex = 0;

  constructor() {
    // initilize the prayer by setting the rosary
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
  getMystery(daySelected) {
    // if no date is passed it will set today's date
    const dayOfTheWeek = isNaN(daySelected) ? new Date().getDay() : daySelected;
    const arrOfPrayersDays = Object.values(this._rosaryDays);
    const mysteryName = arrOfPrayersDays[dayOfTheWeek];
    const mystery = this._rosaryMysteries[mysteryName];
    return mystery;
  }

  // built the list of all the prayers that the rosary needs
  getPrayersList() {
    const mysteryInfo = this.getMystery();
    const arr = [];
    // 1. set the intial prayers
    arr.push(this._prayerType.start);
    arr.push(this._prayerType.creed);
    arr.push(this._prayerType.petitions);
    arr.push(this._prayerType.actOfContrition);
    // 2. set all the repetitive prayers
    mysteryInfo.mysteries.forEach((mystery) => {
      arr.push({ ...mystery, isMystery: true });
      // Our Father
      arr.push({
        ...this._prayerType.ourFather,
        mystery,
        isCross: true,
      });
      // 10 Hail Mary
      [...Array(10).keys()].forEach((index) => {
        arr.push({
          ...this._prayerType.hailMary,
          mystery,
          index: index + 1,
          isHailMary: true,
        });
      });

      arr.push({ ...this._prayerType.glory, mystery });
      arr.push({ ...this._prayerType.jaculatoria2, mystery });
      arr.push({ ...this._prayerType.jaculatoria3, mystery });
    });
    // 5. set the last prayers
    arr.push(this._prayerType.pope);
    arr.push(this._prayerType.ourFather);
    arr.push(this._prayerType.hailMary);
    arr.push(this._prayerType.glory);
    arr.push(this._prayerType.salve);
    arr.push(this._prayerType.letaniasLauretanas);
    arr.push(this._prayerType.signOfCross);

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
