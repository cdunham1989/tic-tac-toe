'use strict';

class Player {
  constructor(name){
    this._name = name;
  }

  getName() {
    return this._name;
  }
}

module.exports = Player;
