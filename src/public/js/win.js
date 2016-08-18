var scoreboard = document.getElementById('scoreboard');

var winState = {
  create: function () {
    var winLabel = game.add.text(800, 350, 'Thanks for playing, your score was ' + score, {font: '14px Arial', fill: '#ffff00'})

    var startLabel = game.add.text(0, game.world.height-60, 'Party on! your score was ' + score + ' press the \'P\' key to start', {font: '14px Arial', fill: '#ffff00'});

    var pkey = game.input.keyboard.addKey(Phaser.Keyboard.P);

    scoreboard.innerHTML = 'Score: ' + score;

    pkey.onDown.addOnce(this.start, this);
  },

  start: function() {
    game.state.start('menu');
  },
}
