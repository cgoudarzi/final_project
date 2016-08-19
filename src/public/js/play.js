var playState = {
changeVolume: function(pointer) {
  if (pointer.y < 100) {
    music.mute = false;
  } else if (pointer.y < 300) {
    music.volume += 0.1;
  } else {
    music.volume -= 0.1;
  }
},

create: function () {
  
  //Set music 
  music = game.add.audio('beam');

  music.play(); 
  game.input.onDown.add(this.changeVolume, this);
  //create scoreText
  scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '12px', fill: '#000' });

  
  //------------SETTING THE LEVEL AND PLATFORMS-------------------->
  //Background
  chicago = game.add.tileSprite(0, 0, 800, 400, 'beamWaves'),

  //Platforms group contains platforms we can jump on
  platforms = game.add.group();

  //enable physics for objects of platforms group
  platforms.enableBody = true;

  var grass = platforms.create(0, game.world.height - 60, 'grass');

  //scale to fit width of game
  grass.scale.setTo(4, 1);

  //make grass stationary
  grass.body.immovable = true;




  

  // create platforms
  var ledge = platforms.create(20, 170, 'ledge');
    ledge.scale.setTo(.2, .2);


    ledge.body.immovable = true;

    ledge = platforms.create(200, 170, 'ledge');
    ledge.scale.setTo(.15, .15);

    ledge.body.immovable = true;

    ledge = platforms.create(275, 170, 'ledge');
    ledge.scale.setTo(.15, .15);

    ledge.body.immovable = true;

    ledge = platforms.create(500, 100, 'ledge');
    ledge.scale.setTo(.3, .3);

    ledge.body.immovable = true;

  

  //ADDING THE PLAYER---------------------------------------------------
    player = game.add.sprite(10, game.world.height - 200, 'dude');

    //enable player physics
    game.physics.arcade.enable(player);

    //Player physics properties. Give the little guy a slight bounce
    player.body.bounce.y = .2;
    player.body.gravity.y = 250;
    player.body.collideWorldBounds = true;

    //Our two walking animations
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    //Add Coins & Tapes
    coins = game.add.group();
    coins.enableBody = true;
    tapes = game.add.group();
    coins.enableBody = true;


    
    this.checkPlaying(music.isPlaying);
    

  },


makeCoin: function(total) {
      x = Math.random() * (750 - 5) + 5; 
      if (total < 3) {
        for (i = 0; i < 3; i++) {
          var coin = coins.create(x, 50, 'coin');
          coin.scale.setTo(.7, .7); 
          (i%2 == 0) ? tape = tapes.create(50, 50, 'tape') : console.log(i);
        }
    }
  },

checkPlaying: function(currentTime) {
  if (currentTime < 138000) {
    this.makeCoin(coins.total);
    
  } else {
    this.win()
  }
},

checkScore: function() {
  scoreboard = document.getElementById('scoreboard');
  liveScore = document.getElementById('scoreboard_2');
  scoreboard.value = score;
  liveScore.innerHTML = 'Score: ' + score;
},

update: function() {
    //Collide player with platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(coins, platforms);


    
    chicago.tilePosition.x -= 1;
    

    
    //Collect coins
    function collectCoin(player, coin) {
      coin.kill();
      score += 10;
      console.log(coins.total);
      this.checkScore();



    }

    //Collect tapes
    function collectTape(player, tape) {
      tape.kill();
      score += 20;
      this.checkScore();

    }


    this.checkPlaying(music.currentTime);
    // console.log(music.currentTime)

    // game.physics.arcade.overlap(player, tape, collectTape, null, this);
    game.physics.arcade.overlap(player, coins, collectCoin, null, this);
    
    cursors = game.input.keyboard.createCursorKeys();
    //Reset the player movement velocity
    player.body.velocity.x = 0;


    if (cursors.left.isDown) {
      player.body.velocity.x = -100;
      player.animations.play('left');
    } else if (cursors.right.isDown) {
      player.body.velocity.x = 100;

      player.animations.play('right');
    } else {
      player.animations.stop();
      player.frame = 4;
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.body.velocity.y = -350;
    }

    var pkey = game.input.keyboard.addKey(Phaser.Keyboard.P);

    pkey.onDown.addOnce(this.pause , this);


  },

  pause: function() {
    game.state.start('pause');
  },

  win: function() {
    game.state.start('win');
  }

};
