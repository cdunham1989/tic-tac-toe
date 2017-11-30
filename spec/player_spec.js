'use strict';

var Player = require("../src/player.js")

describe('Player', function() {
  var player

it('instantiaties with the name it is given as a parameter', function() {
  player = new Player("Chris")
  expect(player.getName()).toEqual("Chris");
});

});
