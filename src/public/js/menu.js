var menuState = {
  create: function () {
    var nameLabel = game.add.text(300, 150, 'Bright-Eyed Beam', {font: '25px Orbitron', fill: '#F7F052', align: 'center'})

    var startLabel = game.add.text(250, game.world.height-60, 'press the \'spacebar\' to start', {font: '25px Orbitron', fill: '#F7F052', align: 'center'});

    var spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    spacekey.onDown.addOnce(this.start, this);
  },

  start: function() {
    game.state.start('play');
  },
}
