ig.module("game.main")
    .requires(
        "impact.game",
        "impact.font",
        "impact.sound",

        "impact.debug.debug",
        "game.entities.enemy",
        "game.entities.player",
        "game.entities.trigger",
        "game.entities.menu_pausa",
        "game.entities.bala",
        "game.entities.misil_enemy",
        "game.entities.lanzar_misil",
        "game.entities.changePlayer",
        "game.entities.ruedaJuego",
        'plugins.camera',
        'plugins.impact-splash-loader',

        //niveles
        'game.levels.inicio',
        "game.levels.level1",
        "game.levels.level2"
    )
    .defines(function () {
        MyGame = ig.Game.extend({
            clearColor: "#000000",
            font: new ig.Font('media/fredoka-one.font.png'),
            // Load a font
            gravity: 180,
            player: null,
            enemy: null,
            // HUD icons
            heartFull: new ig.Image('media/heart-full.png'),
            heartEmpty: new ig.Image('media/heart-empty.png'),
            coinIcon: new ig.Image('media/coin.png'),

            init: function () {
                this.menu_pausa = new EntityMenu_pausa();

                // Initialize your game here; bind keys etc.

                ig.input.bind(ig.KEY.ESC, "pause");


                
                // We want the font's chars to slightly touch each other,
                // so set the letter spacing to -2px.
                this.font.letterSpacing = -2;

                // Load the LevelGrasslands as required above ('game.level.grassland')
                this.loadLevel(LevelLevel1);
            },

            loadLevel: function (data) {
                // Remember the currently loaded level, so we can reload when
                // the player dies.
                this.currentLevel = data;

                // Call the parent implemenation; this creates the background
                // maps and entities.
                this.parent(data);

                this.setupCamera();
            },

            setupCamera: function () {
                // Set up the camera. The camera's center is at a third of the screen
                // size, i.e. somewhat shift left and up. Damping is set to 3px.		
                this.camera = new ig.Camera(ig.system.width / 3, ig.system.height / 3, 3);

                // The camera's trap (the deadzone in which the player can move with the
                // camera staying fixed) is set to according to the screen size as well.
                this.camera.trap.size.x = ig.system.width / 10;
                this.camera.trap.size.y = ig.system.height / 3;

                // The lookahead always shifts the camera in walking position; you can 
                // set it to 0 to disable.
                this.camera.lookAhead.x = ig.system.width / 6;

                // Set camera's screen bounds and reposition the trap on the player
                this.camera.max.x = this.collisionMap.pxWidth - ig.system.width;
                this.camera.max.y = this.collisionMap.pxHeight - ig.system.height;
                this.camera.set(this.player);
            },

            reloadLevel: function () {
                this.loadLevelDeferred(this.currentLevel);
            },

            // l2: function () {
            //     // Initialize your game here; bind keys etc.

            //     this.loadLevel(LevelLevel2);

            //     this.player = this.getEntitiesByType(EntityPlayer)[0];
            //     this.enemy = this.getEntitiesByType(EntityEnemy)[0];


            // },

            update: function () {
                // Update all entities and BackgroundMaps
                this.parent();

                if (ig.input.pressed("pause")) {
                    if (ig.Timer.timeScale == 0) {
                      ig.Timer.timeScale = 1;
                      //this.menu_pausa.reset(ig.system.width/2, ig.system.height/2);
                      this.pause=false;
                    //   console.log("Pausa");
                    } else {
                      ig.Timer.timeScale = 0;
                      //this.menu_pausa.reset(ig.system.width/2, ig.system.height/2);
                      //this.menu_pausa.kill();
                      this.pause=true;
          
                    //   console.log("Pausa");
                    }
                  } else {
                    // console.log("No entra en unpause");
                  }


                // Camera follows the player
                this.camera.follow(this.player);


                // ig.music.add("media/mega-bot-pipes under.ogg");

                // ig.music.volume = 0.5;
                // ig.music.play();
            },

            draw: function () {
                this.parent();

                if (this.pause) {
                    this.menu_pausa.draw();
                }


                // Draw the heart and number of coins in the upper left corner.
                // 'this.player' is set by the player's init method
                if (this.player) {
                    var x = 16,
                        y = 16;

                    for (var i = 0; i < this.player.maxHealth; i++) {
                        // Full or empty heart?
                        if (this.player.health > i) {
                            this.heartFull.draw(x, y);
                        }
                        else {
                            this.heartEmpty.draw(x, y);
                        }

                        x += this.heartEmpty.width + 8;
                    }

                    // We only want to draw the 0th tile of coin sprite-sheet
                    x += 48;
                    this.coinIcon.drawTile(x, y + 6, 0, 36);

                    x += 42;
                    this.font.draw('x ' + this.player.coins, x, y + 10)
                }

                // Draw touch buttons, if we have any
                if (window.myTouchButtons) {
                    window.myTouchButtons.draw();
                }
            },
        });

        // Start the Game with 60fps, a resolution of 320x240, scaled
        // up by a factor of 2
        // ig.main("#canvas", MyGame, 60, 320, 240, 2);

        // The title screen is simply a Game Class itself; it loads the LevelTitle
        // runs it and draws the title image on top.

        MyTitle = ig.Game.extend({
            clearColor: "#000000",
            gravity: 800,

            // The title image
            title: new ig.Image('media/title.png'),

            // Load a font
            font: new ig.Font('media/fredoka-one.font.png'),

            init: function () {
                // Bind keys
                ig.input.bind(ig.KEY.LEFT_ARROW, "left");
                ig.input.bind(ig.KEY.RIGHT_ARROW, "right");
                ig.input.bind(ig.KEY.UP_ARROW, "jump");
                ig.input.bind(ig.KEY.SPACE, 'dispara');

                // Align touch buttons to the screen size, if we have any
                if (window.myTouchButtons) {
                    window.myTouchButtons.align();
                }

                // We want the font's chars to slightly touch each other,
                // so set the letter spacing to -2px.
                this.font.letterSpacing = -2;

                this.loadLevel(LevelInicio);
                this.maxY = this.backgroundMaps[0].pxHeight - ig.system.height;
            },

            update: function () {
                // Check for buttons; start the game if pressed
                
                if (ig.input.pressed('jump') || ig.input.pressed('dispara')) {
                    ig.system.setGame(MyGame);
                    return;
                }


                this.parent();


                // Scroll the screen down; apply some damping.
                var move = this.maxY - this.screen.y;
                if (move > 5) {
                    this.screen.y += move * ig.system.tick;
                    this.titleAlpha = this.screen.y / this.maxY;
                }
                this.screen.x = (this.backgroundMaps[0].pxWidth - ig.system.width) / 2;
            },

            draw: function () {
                this.parent();

                var cx = ig.system.width / 2;
                this.title.draw(cx - this.title.width / 2, 60);

                var startText = ig.ua.mobile
                    ? 'Press Button to Play!'
                    : 'Press Space to Play!';

                this.font.draw(startText, cx, 420, ig.Font.ALIGN.CENTER);

                // Draw touch buttons, if we have any
                if (window.myTouchButtons) {
                    window.myTouchButtons.draw();
                }
            }
        });

        // If our screen is smaller than 640px in width (that's CSS pixels), we scale the 
        // internal resolution of the canvas by 2. This gives us a larger viewport and
        // also essentially enables retina resolution on the iPhone and other devices 
        // with small screens.
        var scale = (window.innerWidth < 640) ? 2 : 1;


        // We want to run the game in "fullscreen", so let's use the window's size
        // directly as the canvas' style size.
        var canvas = document.getElementById('canvas');
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';


        // Listen to the window's 'resize' event and set the canvas' size each time
        // it changes.
        window.addEventListener('resize', function () {
            // If the game hasn't started yet, there's nothing to do here
            if (!ig.system) { return; }

            // Resize the canvas style and tell Impact to resize the canvas itself;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ig.system.resize(window.innerWidth * scale, window.innerHeight * scale);

            // Re-center the camera - it's dependend on the screen size.
            if (ig.game && ig.game.setupCamera) {
                ig.game.setupCamera();
            }

            // Also repositon the touch buttons, if we have any
            if (window.myTouchButtons) {
                window.myTouchButtons.align();
            }
        }, false);


        // Finally, start the game into MyTitle and use the ImpactSplashLoader plugin 
        // as our loading screen
        var width = window.innerWidth * scale,
            height = window.innerHeight * scale;
        ig.main('#canvas', MyTitle, 60, width, height, 1, ig.ImpactSplashLoader);

    });

