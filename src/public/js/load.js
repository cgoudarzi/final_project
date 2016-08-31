var loadState = {
  preload: function() {
    var loadingLabel = game.add.text(80,150, 'loading...', {font: '30px Orbitron', fill: '#fffffff'});
    game.load.audio('beam', ['audio/bright_eyed_beam.mp3', 'bright_eyed_beam.ogg']);
    game.load.image('beamWaves', 'img/beam_waves.png');
    game.load.image('ledge', 'img/beer.png');
    game.load.image('grass', 'img/terra.png');
    game.load.image('coin', 'img/Whiskey.png');
    game.load.image('tape', 'img/cassette.png');
    game.load.spritesheet('dude', 'img/cyrus_final.png', 64, 96);
  },

  create: function() {
    //Call the menu state
    game.state.start('menu');
  }
};
