var game = new Phaser.Game(800, 350, Phaser.AUTO, 'canvas_div');
    score = 0;


//Add each state and call name and name for defining
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('pause', pauseState);
game.state.add('win', winState);

//After all of the states are added, start game by calling boot state
game.state.start('boot');
