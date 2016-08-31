var pauseState = {
  
  create: function () {
    game.paused = true;
    var pauseLabel = game.add.text(400, 150, 'Press \'Spacebar\' to pause/unpause', {font: '20px Orbitron', fill: '#F7F052', align: 'center'});
        spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    spacekey.onDown.addOnce(this.start, this);
  },

  start: function () {

    game.paused = false;
    game.paused ? console.log('pauuse') : game.world.children[0].destroy();
    game.world.game.paused = false;

  },

};
