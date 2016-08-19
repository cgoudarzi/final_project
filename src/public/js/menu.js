var menuState = {
  create: function () {
    var nameLabel = game.add.text(400, 150, 'Bright-Eyed Beam', {font: '25px Arial', fill: '#F7F052'})

    var startLabel = game.add.text(25, game.world.height-60, 'press the \'spacebar\' to start', {font: '25px Arial', fill: '#F7F052'});

    var spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    spacekey.onDown.addOnce(this.start, this);
  },

  start: function() {
    game.state.start('play');
  },
}
