'use strict';

var Player = require("../src/player.js")

describe('Player', function() {
  var player

  beforeEach(function() {
    player = new Player("Chris", "O");
  });

  it('instantiaties with the name it is given as a parameter', function() {
    expect(player.getName()).toEqual("Chris");
  });

  it('allows the symbol of the player to be set', function() {
    expect(player.getSymbol()).toEqual("O");
  });

});
