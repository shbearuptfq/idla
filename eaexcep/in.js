if (!('toJSON' in Error.prototype)) {
  Object.defineProperty(Error.prototype, 'toJSON', {
    value: function () {
      var alt = {};
      Object.getOwnPropertyNames(this).forEach(function (key) {
        alt[key] = this[key];
      }, this);
      return alt;
    },
    configurable: true,
    writable: true
  });
}

var error = new Error('testing');
error.detail = 'foo bar';
console.log(JSON.stringify(error)); // {"message":"testing","detail":"foo bar"}
