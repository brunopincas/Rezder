ig.module("game.entities.enemy")
    .requires("impact.entity")
    .defines(function () {
        // Subclase de ig.Enitity
        EntityEnemy = ig.Entity.extend({
            // Establece las dimensiones y distancias para la colisión
            type: ig.Entity.TYPE.B,
            size: { x: 38, y: 42 },
            flip: false,
            gravityFactor: 1,
            maxVel: { x: 50, y: 100 },
            friction: { x: 600, y: 0 },

            speed: 100,
            jump_speed: -600,

            // Carga una hoja de animaciones
            animSheet: new ig.AnimationSheet("media/alien-enemy-walk.png", 50, 42),

            checkAgainst: ig.Entity.TYPE.A,

            check: function (other) {
                // If the only entity with the type A is the player, we can safely
                // assume here that 'other' is always the player entity.

                // You can always do some further checks here.

                // give the player some damage on collision:
                other.pos.x = 62;
                other.pos.y = 107;
            },

            init: function (x, y, settings) {
                // Llama al constructor del padre
                this.parent(x, y, settings);

                // Añade animaciones para la hoja de animación
                this.addAnim("walk", 0.3, [0, 1,0]);
            },

            // Se llama a este método en cada frame de cada entidad.
            update: function () {
                this.parent();


                var xdir = this.flip ? -1 : 1;
                this.accel.x = -60 * xdir;

                this.currentAnim.flip.x = this.flip;
            },

            handleMovementTrace: function (res) {
                this.parent(res);
                // collision with a wall? return!
                if (res.collision.x) {
                    this.flip = !this.flip;
                    this.currentAnim = this.anims.walk;
                }
            },

            kill: function () {
                // reset the player position instead of destroying it
                this.pos.x = 0;
                this.pos.y = 0;
            },
        });
    });