var names = {
  _name: 'Default'
};

Object.defineProperty(names, 'name', {
  get: function() {
    return this._name;
  },

  set: function(name) {
    if (name == 'Max') {
      this._name = name;
    }
  }
});

console.log(names.name);

names.name = "Sally"
console.log(names.name);
