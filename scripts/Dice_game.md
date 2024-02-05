---
layout: default
title: Roulette
permalink: /Dice_game
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dice Game</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-image: url('images/dice.jpg)');
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
</head>
<body>
<h1>Welcome to the Dice Game!</h1>
<p>Your balance: $<span id="balance">100</span></p>
<button onclick="playGame()">Play</button>
<script>
    function playGame() {
        var balance = parseInt(document.getElementById("balance").textContent);
        var betAmount = parseInt(prompt("Enter the amount you want to bet:"));
        if (betAmount <= 0 || isNaN(betAmount)) {
            alert("Please enter a valid bet amount greater than 0.");
            return;
        }
        var chosenNumber = parseInt(prompt("Choose a number to bet on (1-6):"));
        if (chosenNumber < 1 || chosenNumber > 6 || isNaN(chosenNumber)) {
            alert("Please choose a number between 1 and 6.");
            return;
        }
        var roll = Math.floor(Math.random() * 6) + 1;
        alert("The dice rolls... You rolled a " + roll);
        if (roll === chosenNumber) {
            alert("Congratulations! You win double your bet amount!");
            balance += betAmount * 2;
        } else {
            alert("Sorry, you lose.");
            balance -= betAmount;
        }
        document.getElementById("balance").textContent = balance;
        if (balance <= 0) {
            alert("You have run out of money. Game over!");
        } else {
            var playAgain = confirm("Do you want to play again?");
            if (!playAgain) {
                alert("Thanks for playing! Your final balance is: $" + balance);
            }
        }
    }
</script>
</body>
</html>
