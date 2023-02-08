ig.module("game.entities.player")
    .requires("impact.entity", "game.entities.bala")

    .defines(function () {
        // Subclase de ig.Enitity
        EntityPlayer = ig.Entity.extend({
            // Establece las dimensiones y distancias para la colisión
            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.NONE,
            collides: ig.Entity.COLLIDES.PASSIVE,

            // Carga una hoja de animaciones
            animSheet: new ig.AnimationSheet("media/razerPlayer_run2.png", 96, 96),
            animSheet2: new ig.AnimationSheet("media/tank-unit.png", 200, 80),

            // size: { x: 180, y: 240 },
            size: { x: 77, y: 90 },

            offset: { x: 0, y: 8 },

            maxVel: { x: 100, y: 150 },
            friction: { x: 600, y: 0 },

            flip: false,
            gravityFactor: 1.5,

            accel: { x: 30, y: 0 },
            skin: 1,
            speed: 150,
            jump_speed: -600,

            health: 3,
            maxHealth: 3,
            coins: 0,


            init: function (x, y, settings) {
                // Llama al constructor del padre
                this.parent(x, y, settings);

                // Añade animaciones para la hoja de animación
                this.addAnim("idle", 1, [4]);
                this.addAnim("walk", 0.1, [1, 2, 2, 1]);
                this.addAnim("jump", 1, [3]);
                // this.addAnim("idle", 1, [11]);
                // this.addAnim("walk", 0.1, [12, 13, 13, 12]);
                // this.addAnim("jump", 1, [14]);
                this.addAnim("walkTank", 0.1, [12, 13, 13, 12],this.animSheet2);


                ig.game.player = this;
            },

            // Se llama a este método en cada frame de cada entidad.
            update: function () {
                this.parent();

                this.accel.x = this.speed;
                this.flip = false;
                this.lastPressed = 'right';


                if (this.coins < 5) {
                    if (ig.input.state("jump")) {
                        this.vel.y = this.jump_speed;
                        //var sound = new ig.Sound("media/jump.ogg");
                        //sound.play();
                    }

                    if (ig.input.pressed('dispara')) {
                        // var sound = new ig.Sound("media/disparo.ogg");
                        // sound.play();
                        ig.game.spawnEntity('EntityBala', this.pos.x, this.pos.y, { direction: 'right' });

                        //ig.game.sortEntitiesDeferred();
                    }

                    if (!this.standing) {
                        this.currentAnim = this.anims.jump;
                    } else if (this.vel.x == 0) {
                        this.currentAnim = this.anims.idle;
                    } else {
                        this.currentAnim = this.anims.walk;
                    }

                    this.currentAnim.flip.x = this.flip;

                } else {

                    this.size.x = 100;

                    if (ig.input.pressed('dispara')) {
                        // var sound = new ig.Sound("media/disparo.ogg");
                        // sound.play();
                        ig.game.spawnEntity('EntityBala', this.pos.x, this.pos.y, { direction: 'right' });

                        //ig.game.sortEntitiesDeferred();
                    }

                    // if (!this.standing) {
                    //     this.currentAnim = this.anims.jump;
                    // } else if (this.vel.x == 0) {
                    //     this.currentAnim = this.anims.idle;
                    // } else {
                    //     this.currentAnim = this.anims.walk;
                    // }

                    this.currentAnim = this.anims.walkTank;

                    this.currentAnim.flip.x = this.flip;
                }


            },

            kill: function () {
                this.parent();

                // Reload this level
                ig.game.reloadLevel();
            },

            giveCoins: function (amount) {
                // Custom function, called from the EntityCoin
                this.coins += amount;
            },

            receiveDamage: function (amount, from) {
                if (this.currentAnim == this.anims.pain) {
                    // Already in pain? Do nothing.
                    return;
                }

                // We don't call the parent implementation here, because it 
                // would call this.kill() as soon as the health is zero. 
                // We want to play our death (pain) animation first.
                this.health -= amount;
                // this.currentAnim = this.anims.pain.rewind();

                // Knockback
                this.vel.x = (from.pos.x > this.pos.x) ? -400 : 400;
                this.vel.y = -300;

                // Sound
                // this.sfxHurt.play();

            },

            // changePlayer: function () {
            //     // Carga una hoja de animaciones
            //     this.animSheet = new ig.AnimationSheet("media/razerPlayer_run.png", 48, 48);

            // }

        });
    });