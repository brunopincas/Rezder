ig.module("game.entities.ruedaJuego")
    .requires("impact.entity")
    .defines(function () {
        // Subclase de ig.Enitity
        EntityRuedaJuego = ig.Entity.extend({
            // Establece las dimensiones y distancias para la colisión
            type: ig.Entity.TYPE.B,
            offset: { x: 40, y: 30 },
            size: { x: 175, y: 178 },
            // Carga una hoja de animaciones
            animSheet: new ig.AnimationSheet("media/saw_rotate.png", 256, 256),
            checkAgainst: ig.Entity.TYPE.A,

            check: function (other) {
                //     // If the only entity with the type A is the player, we can safely
                //     // assume here that 'other' is always the player entity.

                //     // You can always do some further checks here.

                //     // give the player some damage on collision:
                // other.pos.x = 62;
                // other.pos.y = 107;
                other.receiveDamage(1);
            },

            init: function (x, y, settings) {
                // Llama al constructor del padre
                this.parent(x, y, settings);

                // Añade animaciones para la hoja de animación
                this.addAnim("idle", 0.1, [0, 1, 2]);
            },

            // Se llama a este método en cada frame de cada entidad.
            update: function () {
                this.currentAnim.update();
            },

        });
    });