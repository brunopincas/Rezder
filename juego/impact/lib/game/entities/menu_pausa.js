ig.module(
    'game.entities.menu_pausa'
)
    .requires(
        'impact.entity'
    )
    .defines(function () {
        EntityMenu_pausa = ig.Entity.extend({
            size: { x: 700, y: 500 },
            font: new ig.Font('media/font.png'),
            init: function () {
                this.parent();
                this.pos.x = (ig.system.width - this.size.x) / 2;
                this.pos.y = (ig.system.height - this.size.y) / 2;
            },

            draw: function () {
                this.parent();
                ig.system.context.fillStyle = 'rgba(0, 12, 116, 0.5)';
                ig.system.context.fillRect(434, 100, this.size.x, this.size.y);
                this.font.draw('PAUSA', (ig.system.width) / 2, (ig.system.height ) / 2, ig.Font.ALIGN.CENTER);
                this.font.draw('Presiona "ESC" para continuar', (ig.system.width) / 2, (ig.system.height + 200 ) / 2, ig.Font.ALIGN.CENTER);
            }
        });
    });