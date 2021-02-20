function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

var card = new Card("하트", "A");
console.log(card);

function Particle(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.velocity = Math.sqrt(vx * vx + vy * vy);
}
var p = new Particle(0, 0, 3, 4);
console.log(p);

function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    }
}

var p = { x:0, y:0 };
var c = new Circle(p, 2.0);
console.log("넓이 = " + c.area());