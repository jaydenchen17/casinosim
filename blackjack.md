---
layout: default
title: BlackJack
permalink: /blackjack
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Blackjack Game</title>
    <style>
        body {
            background-image: url('images/blackjacktable.png');
            background-size: cover;
            background-position: center center;
            background-attachment: fixed;
            margin: 0;
            font-family: 'Arial', sans-serif;
            color: #ffffff; /* Text color */
            text-align: center;
            padding: 50px; /* Add padding to the content */
        }
        .textbox {
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid #ffffff;
            padding: 20px;
            margin: 20px;
            border-radius: 10px;
            max-width: 600px;
            margin: auto;
        }
        h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2em;
            line-height: 1.5;
        }
        .button-container {
            display: flex;
            justify-content: center;
        }
        .button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 1em;
            text-decoration: none;
            color: #ffffff;
            background-color: #3498db; /* Button color */
            border-radius: 5px;
            cursor: pointer;
        }
        .card {
            display: inline-block;
            margin: 5px;
            padding: 10px;
            background-color: #ffffff; /* White filling */
            color: #000000; /* Text color */
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>

  <div class="textbox">
    <h1>Simple Blackjack Game</h1>
    <p id="bet-info">Place your bet and click 'Deal' to start.</p>
    <div id="game">
      <div class="button-container">
        <button class="button" onclick="placeBet()">Place Bet</button>
        <button class="button" onclick="deal()" id="dealButton" disabled>Deal</button>
        <button class="button" onclick="hit()" id="hitButton" disabled>Hit</button>
        <button class="button" onclick="stand()" id="standButton" disabled>Stand</button>
      </div>   
      <div id="player-hand">
        <h2>Player's Hand</h2>
        <div id="player-cards"></div>
        <p id="player-score">Score: 0</p>
      </div>      
      <div id="dealer-hand">
        <h2>Dealer's Hand</h2>
        <div id="dealer-cards"></div>
        <p id="dealer-score">Score: 0</p>
      </div>
    </div>
  </div>

  <script>
    let playerHand = [];
    let dealerHand = [];
    let playerScore = 0;
    let dealerScore = 0;
    let userBet = 0;

    function placeBet() {
      userBet = prompt("Place your bet (at least $5):");

      if (userBet >= 5) {
        document.getElementById('bet-info').innerText = 'Bet placed. Click "Deal" to start.';
        document.getElementById('dealButton').disabled = false;
        document.getElementById('hitButton').disabled = true;
        document.getElementById('standButton').disabled = true;
      } else {
        alert("Please place a valid bet (at least $5).");
      }
    }

    function deal() {
      playerHand = [];
      dealerHand = [];
      playerScore = 0;
      dealerScore = 0;

      document.getElementById('bet-info').innerText = 'Playing...';
      clearTable();
      
      // Deal two cards to the player and dealer
      hitPlayer();
      hitDealer();
      hitPlayer();
      hitDealer();

      updateScores();

      // Enable Hit and Stand buttons after dealing
      document.getElementById('hitButton').disabled = false;
      document.getElementById('standButton').disabled = false;
    }

    function hit() {
      // Deal a card to the player
      hitPlayer();

      // Check for bust
      if (playerScore > 21) {
        document.getElementById('bet-info').innerText = 'Player busts! Dealer wins.';
        endGame();
      }
    }

    function stand() {
      // Dealer's turn
      while (dealerScore < 17) {
        hitDealer();
      }

      // Determine the winner
      determineWinner();
    }

    function hitPlayer() {
      const card = getRandomCard();
      playerHand.push(card);
      displayCard(card, 'player-cards');
      updatePlayerScore();
    }

    function hitDealer() {
      const card = getRandomCard();
      dealerHand.push(card);
      displayCard(card, 'dealer-cards');
      updateDealerScore();
    }

    function getRandomCard() {
      const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const randomIndex = Math.floor(Math.random() * cards.length);
      return cards[randomIndex];
    }

    function displayCard(card, target) {
      const cardElement = document.createElement('div');
      cardElement.innerText = card;
      document.getElementById(target).appendChild(cardElement);
    }

    function updatePlayerScore() {
      playerScore = calculateScore(playerHand);
      document.getElementById('player-score').innerText = `Score: ${playerScore}`;
    }

    function updateDealerScore() {
      dealerScore = calculateScore(dealerHand);
      document.getElementById('dealer-score').innerText = `Score: ${dealerScore}`;
    }

    function calculateScore(hand) {
      let score = 0;
      let hasAce = false;

      for (const card of hand) {
        if (card === 'A') {
          hasAce = true;
          score += 11;
        } else if (card === 'K' || card === 'Q' || card === 'J') {
          score += 10;
        } else {
          score += parseInt(card);
        }
      }

      // Handle Aces
      if (hasAce && score > 21) {
        score -= 10;
      }

      return score;
    }

    function determineWinner() {
      if (playerScore > 21) {
        document.getElementById('bet-info').innerText = 'Player busts! Dealer wins.';
      } else if (dealerScore > 21) {
        document.getElementById('bet-info').innerText = 'Dealer busts! Player wins $' + userBet * 2;
      } else if (playerScore > dealerScore) {
        document.getElementById('bet-info').innerText = 'Player wins $' + userBet * 2;
      } else if (playerScore < dealerScore) {
        document.getElementById('bet-info').innerText = 'Dealer wins. You lose $' + userBet;
      } else {
        document.getElementById('bet-info').innerText = 'It\'s a tie! Your bet is returned.';
      }

      endGame();
    }

    function endGame() {
      document.getElementById('bet-info').innerText += ' Click "Place Bet" to play again.';
      document.getElementById('dealButton').disabled = true;
      document.getElementById('hitButton').disabled = true;
      document.getElementById('standButton').disabled = true;
    }

    function clearTable() {
      document.getElementById('player-cards').innerHTML = '';
      document.getElementById('dealer-cards').innerHTML = '';
    }

    function updateScores() {
      updatePlayerScore();
      updateDealerScore();
    }
  </script>

</body>
</html>