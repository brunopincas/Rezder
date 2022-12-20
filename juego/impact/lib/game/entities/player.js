ig.module("game.entities.player")
    .requires("impact.entity", "game.entities.bala")

    .defines(function () {
        // Subclase de ig.Enitity
        EntityPlayer = ig.Entity.extend({
            // Establece las dimensiones y distancias para la colisión
            type: ig.Entity.TYPE.A,
            size: { x: 24, y: 42 },
            flip: false,
            gravityFactor: 1.5,
            maxVel: { x: 100, y: 150 },
            friction: { x: 600, y: 0 },
            accel: { x: 30, y: 0 },

            speed: 150,
            jump_speed: -600,

            // Carga una hoja de animaciones
            animSheet: new ig.AnimationSheet("media/razerPlayer_run.png", 48, 48),

            init: function (x, y, settings) {
                // Llama al constructor del padre
                this.parent(x, y, settings);

                // Añade animaciones para la hoja de animación
                this.addAnim("idle", 1, [4]);
                this.addAnim("walk", 0.1, [0, 1, 2, 1]);
                this.addAnim("jump", 1, [3]);
            },

            // Se llama a este método en cada frame de cada entidad.
            update: function () {
                this.parent();

                this.accel.x = this.speed;
                this.flip = false;
                this.lastPressed = 'right';


                if (ig.input.state("jump")) {
                    this.vel.y = this.jump_speed;
                    var sound = new ig.Sound("media/jump.ogg");
                    sound.volume = 0.1;
                    sound.play();
                }

                if (ig.input.pressed('dispara')) {
                    var sound = new ig.Sound("media/disparo.ogg");
                    sound.play();
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

                //muertes
                if (this.pos.y > ig.system.height) {
                    //this.kill();
                }
            },

            kill: function () {
                // reset the player position instead of destroying it
                this.pos.x = 64;
                this.pos.y = 144;
            },
        });
    });