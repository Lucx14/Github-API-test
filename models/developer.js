// 'use strict'
const _findMaxKey = Symbol('findMaxKey');
class Developer {
  constructor(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  favouriteLanguage() {
    const count = {};
    const languages = this.data.map(x => x.language);
    // cases where there is a dominant language but also where the numbers are equal
    for (let i = 0; i < languages.length; i += 1) {
      count.hasOwnProperty(languages[i]) ? count[languages[i]] += 1 : count[languages[i]] = 1;
    }
    return this[_findMaxKey](count);
  }

  // private

  [_findMaxKey](obj) {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
  }
}

module.exports = Developer;
