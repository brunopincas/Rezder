ig.module("game.entities.misil_enemy")
    .requires("impact.entity")
    .defines(function () {
        // Subclase de ig.Enitity
        EntityMisil_enemy = ig.Entity.extend({
            size: { x: 300, y: 100 },
            vel: { x: 400, y: 0 },
            maxVel: { x: 500, y: 0 },
            bounciness: 1,
            accel: { x: 30, y: 0 },
            speed: 150,
            lifetime: 0,
            gravityFactor: 0,

            // how to behave when active collision occurs

            type: ig.Entity.TYPE.B, // Evil enemy group
            checkAgainst: ig.Entity.TYPE.A, // Check against friendly
            collides: ig.Entity.COLLIDES.PASSIVE,


            // where to find the animation sheet

            //animSheet: new ig.AnimationSheet('media/projectile.png',8,4),	

            direction: 'left',

            animSheet: new ig.AnimationSheet('media/misil_enemy_2.png', 300, 100),



            // init function

            init: function (x, y, settings) {


                this.parent(x, y, settings);

                this.addAnim("idle", 1, [0]);

                ig.game.misil_enemy = this;

            },

            update: function () {

                this.accel.x = this.speed;
                this.flip = false;
                // this.lastPressed = 'left';

                this.vel.x = -300;

                this.vel.y = 0;

                this.currentAnim.update();


                if (this.startvelocity == -(this.vel.x) && this.direction == 'right') { this.anims.xaxis.flip.x = true; } else if (this.startvelocity == -(this.vel.x) && this.direction == 'left') { this.anims.xaxis.flip.x = false; } else if (this.startvelocity == -(this.vel.y) && this.direction == 'up') { this.anims.yaxis.flip.y = true; } else if (this.startvelocity == -(this.vel.y) && this.direction == 'down') { this.anims.yaxis.flip.y = false; }

                // a lifetime of 100 fps else kill

                if (this.lifetime <= 500) { this.lifetime += 1; } else { this.kill(); }

                this.parent();

            },

            check: function (other) {
                other.receiveDamage(1, this);
                this.kill();
                this.parent();
            }


        })

    });