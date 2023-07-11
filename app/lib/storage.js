import { assert } from '@ember/debug';
// A super simple wrapper for localStorage to allow for storing arbitrary objects
// ignores exceptions so only use for progressive enhancements

// storage.set('someKey', {my: 'object'})
// storage.get('someKey') returns: {my: 'object'}

export default {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      assert('local storage set failure');
    }
  },
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      assert('local storage get failure');
    }
  },
  remove(key) {
    try {
      return localStorage.removeItem(key);
    } catch (e) {
      assert('local storage remove failure');
    }
  },
  clear() {
    try {
      return localStorage.clear();
    } catch (e) {
      assert('local storage clear failure');
    }
  },
  findItemsByRegex(query) {
    let key;
    let results = [];
    for (key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        if (key.match(query) || (!query && typeof key === 'string')) {
          let value = JSON.parse(localStorage.getItem(key));
          results.push({ key, value });
        }
      }
    }
    return results;
  },
};
