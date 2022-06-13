/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed

    this.getHeroElement = function() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function() {
        this.left += this.speed;
    }

    this.moveLeft = function() {
        this.left -= this.speed;
    }

    this.moveDown = function() {
        this.top += this.speed
    }

    this.moveUp = function() {
        this.top -= this.speed
    }
}

var hero = new Hero('naruto.png', 20, 30, 200, 100);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top < hero.size - hero.top) {
        console.log(hero.left)
        hero.moveRight();
    } else if (hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveDown()
    } else if (hero.left > 0 && hero.top >= window.innerHeight - hero.size) {
        console.log(hero.left)
        hero.moveLeft()
    } else if (hero.left < window.innerWidth - hero.size && hero.top > 0) {
        hero.moveUp()
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();