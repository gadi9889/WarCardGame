const cardValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

function cardShuffle(deck) {
  for (let i = 0; i < deck.length; i++) {
    let ranPos = Math.floor(Math.random() * deck.length);
    let tmp = deck[ranPos];
    deck[ranPos] = deck[i];
    deck[i] = tmp;
  }
  return deck;
}

module.exports.cardStackGenerator = function() {
    let type = ["C", "S", "H", "D"];
    let deck = [];
  
    for (let i = 0; i < type.length; i++) {
      for (let j = 0; j < cardValues.length; j++) {
        deck.push({
          symbol: cardValues[j],
          value: j + 2,
          type: type[i],
          color: i < 2 ? "black" : "red",
        });
      }
    }
    deck = cardShuffle(deck);
    return deck;
}