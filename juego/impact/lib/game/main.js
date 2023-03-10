ig.module("game.main")
    .requires(
        "impact.game",
        "impact.font",
        "impact.debug.debug",
        "game.entities.enemy",
        "impact.sound",
        "game.entities.player",
        "game.entities.trigger",
        "game.entities.triggerl2",
        "game.entities.bala",

        //niveles
        "game.levels.level1",
        "game.levels.level_2"
    )
    .defines(function() {
        MyGame = ig.Game.extend({
            // Load a font
            font: new ig.Font("media/04b03.font.png"),
            gravity: 180,
            player: null,
            enemy: null,

            init: function() {
                // Initialize your game here; bind keys etc.

                ig.input.bind(ig.KEY.LEFT_ARROW, "left");
                ig.input.bind(ig.KEY.RIGHT_ARROW, "right");
                ig.input.bind(ig.KEY.UP_ARROW, "jump");
                ig.input.bind(ig.KEY.SPACE, 'dispara');

                this.loadLevel(LevelLevel1);

                this.player = this.getEntitiesByType(EntityPlayer)[0];
                this.enemy = this.getEntitiesByType(EntityEnemy)[0];



                this.screen.y = -25;

                
                ig.music.add("media/bso.ogg");
                ig.music.volume = 0.5;
                ig.music.play();

                
            },

            l2: function() {
                // Initialize your game here; bind keys etc.

                this.loadLevel(LevelLevel_2);
                
                this.player = this.getEntitiesByType(EntityPlayer)[0];
                this.enemy = this.getEntitiesByType(EntityEnemy)[0];


            },

            update: function() {
                // Update all entities and backgroundMaps
                this.parent();
                this.player = this.getEntitiesByType(EntityPlayer)[0];
                this.enemy = this.getEntitiesByType(EntityEnemy)[0];

                // Add your own, additional update code here
                //if (this.player) {
                // this.screen.x = this.player.pos.x-50;
                // this.screen.y = this.player.pos.y - ig.system.height+50;
                this.screen.x = this.player.pos.x-50;
                //}
                
            },

            draw: function() {
                // Draw all entities and backgroundMaps
                this.parent();

                // Add your own drawing code here
                /*var x = ig.system.width / 2,
                    y = ig.system.height / 2;

                this.font.draw('It Works!', x, y, ig.Font.ALIGN.CENTER);
				*/
            },
        });

        // Start the Game with 60fps, a resolution of 320x240, scaled
        // up by a factor of 2
        ig.main("#canvas", MyGame, 60, 320, 240, 2);
    });