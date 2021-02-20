var card = {suit : "하트", rank : "A"};
console.log(card);
console.log(card.suit + " " + card["rank"]);
console.log(card.color);

var obj = {};
console.log(obj);

card.value = 14;
console.log(card);

delete card.rank;
console.log(card);

var card = {suit : "하트", rank : "A"};
console.log("suit" in card);
console.log("color" in card);
console.log("toString" in card);

var circle = {
    center : {x : 1.0, y : 2.0},
    radius : 2.5
}

console.log(circle.center);

var a = card;
a.suit = "스페이드";
console.log(a.suit);
console.log(card.suit);