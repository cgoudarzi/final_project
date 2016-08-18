var menuState = {
  create: function () {
    var nameLabel = game.add.text(400, 150, 'Bright-Eyed Beam', {font: '25px Arial', fill: '#ffff00'})

    var startLabel = game.add.text(25, game.world.height-60, 'press the \'P\' key to start', {font: '25px Arial', fill: '#ffff00'});

    var pkey = game.input.keyboard.addKey(Phaser.Keyboard.P);

    pkey.onDown.addOnce(this.start, this);
  },

  start: function() {
    game.state.start('play');
  },
}
