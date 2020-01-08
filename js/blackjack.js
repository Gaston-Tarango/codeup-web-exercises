"use strict";

var numCardsPulled = 0;

var player = {
    cards: [],
    score: 0,
    money: 100
};

var dealer = {
    cards: [],
    score: 0
};

document.getElementById("player-money").innerHTML = "Your Money: $" + player.money;
document.getElementById("hit-button").disabled = true;
document.getElementById("stand-button").disabled = true;

function getCardValue(a) {
    var cardArray = [];
    var total = 0
    var i = 0,
    aceCount = 0;
    cardArray = a;
    for (i; i<cardArray.length;i+=1){
        if (cardArray[i].rank === "J" || cardArray[i].rank === "Q" || cardArray[i].rank === "K"){
            total += 10;
        } else if (cardArray[i].rank === "A") {
            total += 11;
            aceCount += 1;
        } else {
            total += cardArray[i].rank;
        }
    }
    while (aceCount > 0 && total > 21){
        total -= 10;
        aceCount -= 1;
    }
    return total
}
var deck = {
    deckArray: [],
    initialize: function () {
        var suitArray, rankArray, s, r;
        suitArray = ["clubs", "diamonds", "hearts", "spades"]
        rankArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
        for (s = 0; s < suitArray.length; s+= 1) {
            for (r = 0; r < suitArray.length; r+= 1){
                this.deckArray[s * 13 + r] = {
                    rank: rankArray[r],
                    suit: suitArray[s]
                };
            }
        }
    }
}