//offician name whe defining the state
var bootState = {
  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.state.start('load');
  }
};
