// eventProxy.js
// this code come from http://taobaofed.org/blog/2016/11/17/react-components-communication/

'use strict';
const eventProxy = {
  onObj: {},
  oneObj: {},
  // save on
  on: function(key, fn) {
    if(this.onObj[key] === undefined) {
      this.onObj[key] = [];
    }

    this.onObj[key].push(fn);
  },
  //save one
  one: function(key, fn) {
    if(this.oneObj[key] === undefined) {
      this.oneObj[key] = [];
    }

    this.oneObj[key].push(fn);
  },
  // delete all
  off: function(key) {
    this.onObj[key] = [];
    this.oneObj[key] = [];
  },
  trigger: function() {
    let key, args;
    if(arguments.length == 0) {
      return false;
    }
    // get key
    key = arguments[0];
    // get other para
    args = [].concat(Array.prototype.slice.call(arguments, 1));

    if(this.onObj[key] !== undefined
      && this.onObj[key].length > 0) {
      for(let i in this.onObj[key]) {
        this.onObj[key][i].apply(null, args);
      }
    }
    if(this.oneObj[key] !== undefined
      && this.oneObj[key].length > 0) {
      for(let i in this.oneObj[key]) {
        this.oneObj[key][i].apply(null, args);
        this.oneObj[key][i] = undefined;
      }
      this.oneObj[key] = [];
    }
  }
};

export default eventProxy;
