var scoreboard = document.getElementById('scoreboard');

var winState = {
  create: function () {
    var winLabel = game.add.text(800, 350, 'Thanks for playing, your score was ' + score, {font: '14px Arial', fill: '#ffff00'})

    var startLabel = game.add.text(25, game.world.height-60, 'Party on! your score was ' + score + ' press the \'spacebar\' key to start', {font: '14px Arial', fill: '#F7F052'});

    var spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    scoreboard_2.innerHTML = 'Score: ' + score;

    spacekey.onDown.addOnce(this.start, this);
  },

  start: function() {
    game.state.start('menu');
  },
}
