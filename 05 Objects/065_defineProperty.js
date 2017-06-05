var account = {
  cash: 12000,
  _newName: 'Default',
  withdraw: function(amount) {
    this.cash -= amount;
    console.log('Withdrew: ' + amount + ' Left: ' + this.cash);
  }
};

// Use Object.defineProperty(x,y,z) to create a new property on the above object
//  => x = the object accepting the new property
//  => y = the name as at string of the new property
//  => z = JS object where the new property is configured

Object.defineProperty(account, 'deposit', {
  value: function(amount) {   // 'value' is one of the built-in keys you can set
    this.cash += amount;
  },
});

account.deposit(4000);
account.withdraw(1000);


Object.defineProperty(account, 'name', { // setting a value or the new name prop
  value: 'ID-001',
  writable: true           // allows this property to be rewritten
});

console.log(account.name); // => ID-001

account.name = 'ID-003';
console.log(account.name); // => ID-003     because of the 'writable' key



// More available keys 'get' and 'set'
//  => control how values in your objects are set and retrieve
//    - can be used to filter values (ex only 'Max')
Object.defineProperty(account, 'newName', {
  get: function() {    // this funct will be called when 'name' prop is accessed
    return this._newName;   // always return _newName
  },
  set: function(name) {
    if (name == 'Max') {    // only sets newName if name is 'Max'
      this._newName = name;
    }
  }
});

console.log(account._newName); // => 'Default'

account.newName = 'Sally'      // newName is not 'Max', fails the if check
console.log(account._newName); // => 'Default'

account.newName = 'Max'
console.log(account._newName); // => 'Max'
