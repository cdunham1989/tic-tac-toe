'use strict';

class Player {
  constructor(name, symbol){
    this._name = name;
    this._symbol = symbol;
  }

  getName() {
    return this._name;
  }

  getSymbol() {
    return this._symbol;
  }
}

module.exports = Player;
