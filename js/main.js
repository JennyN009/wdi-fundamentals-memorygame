var cards = [
  {
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }

];

var cardsInPlay = [];

//scores wrong and right answers
var x = 0;
var y = 0;

var checkForMatch = function(){

  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    x = x + 1;
      }
  else {
    alert("Sorry, try again.");
    y = y + 1;
  }

}


var flipCard = function(cardId){

      var cardId = this.getAttribute('data-id');


    //  console.log("User flipped " + cards[cardId].rank);
     cardsInPlay.push(cards[cardId].rank);

    //  console.log(cards[cardId].cardImage);
     //console.log(cards[cardId].suit);


      this.setAttribute('src', cards[cardId].cardImage);

      if (cardsInPlay.length === 2){
          checkForMatch();
            }
}

var createBoard = function(){

  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);

  }
}

var resetGame = function(){
      for (var i = 0; i < 4; i++){
        var cardsFlipped = document.getElementById('game-board');
             cardsFlipped.removeChild(cardsFlipped.childNodes[0]);
             cardsInPlay.pop();
      }

createBoard();
}


var totalScore = function(){
    alert('You got ' + x + ' right and you got ' + y + ' wrong.');

}


//Bonus
var myButton = document.getElementById("clicker");

    myButton.addEventListener('click', resetGame);

//challenge
var getScore = document.getElementById("score");

    getScore.addEventListener('click', totalScore);


createBoard();
