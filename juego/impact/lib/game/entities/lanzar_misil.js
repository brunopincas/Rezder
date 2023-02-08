

ig.module(
    'game.entities.lanzar_misil'
)
    .requires(
        'impact.entity', "game.entities.misil_enemy"
    )
    .defines(function () {

        EntityLanzar_misil = ig.Entity.extend({
            _wmDrawBox: true,
            _wmBoxColor: 'rgba(155, 0, 0, 0.7)',

            size: { x: 32, y: 32 },
            direction: 'left',

            triggeredBy: function (entity, trigger) {
                // entity.receiveDamage(this.damage, this);
                ig.game.spawnEntity(EntityMisil_enemy, this.pos.x, this.pos.y, { direction: this.direction });

            },

            update: function () { }
        });

    });