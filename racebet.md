---
layout: default
title: Race Betting
permalink: /racebet
---

<html lang="en">
<body>
    <div class="textbox">
        <h1>Welcome to the Racetrack!</h1>
        <p>Please place your bets after clicking the `Start Race` button below!</p>       
    </div>
</body>
<br>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Webpage Title</title>
    <style>
        body {
            background-image: url('images/racebetbackdrop.png');
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
    </style>
</head>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            text-align: center;
            margin-top: 50px;
        }
        .race-track {
            position: relative;
            width: 80%;
            margin: 0 auto;
        }
        .car {
            position: absolute;
            bottom: 0;
            transition: left 3s linear;  /* Adjust the transition duration as needed */
        }
        #blueCar {
            left: 0;
            bottom: 15px;  /* Adjust the starting position for the blue car */
        }
        #redCar {
            left: 0;
            bottom: 95px;  /* Adjust the starting position for the red car */
        }
        button {
            margin-top: 20px;
            padding: 10px;
            font-size: 16px;
        }
    </style>
    <script>
        var blueCarInterval, redCarInterval;
        var userBet;
        var userChoice;
        function startRace() {
            // Prompt the user to input a wager
            userBet = prompt("Enter the amount you want to wager (at least $10):");
            // Check if the input is valid
            if (userBet >= 10) {
                // Prompt the user to pick a car
                userChoice = prompt("Choose the car you want to bet on (blue or red):");
                // Check if the user picked a valid car
                if (userChoice.toLowerCase() === 'blue' || userChoice.toLowerCase() === 'red') {
                    // Get the cars
                    var blueCar = document.getElementById('blueCar');
                    var redCar = document.getElementById('redCar');
                    // Determine the winner based on specified probabilities
                    var winner;
                    if (userChoice.toLowerCase() === 'red') {
                        winner = Math.random() < 0.3 ? 'red' : 'blue';
                    } else {
                        winner = Math.random() < 0.7 ? 'red' : 'blue';
                    }
                    // Set positions based on the winner
                    blueCar.style.left = winner === 'blue' ? '80%' : '0';
                    redCar.style.left = winner === 'red' ? '80%' : '0';
                    // Disable the button after the race starts
                    document.getElementById('raceButton').disabled = true;
                    // Display the result
                    setTimeout(function () {
                        var resultMessage;
                        if (winner === userChoice.toLowerCase()) {
                            resultMessage = 'Congratulations! You won $' + userBet * 2;
                        } else {
                            resultMessage = 'Sorry, you lost $' + userBet;
                        }
                        alert(resultMessage);
                        stopCars(); // Stop the cars after the race is finished
                    }, 3000);  // Adjust the timeout duration to match the transition duration
                    // Move the cars with different speeds using setInterval
                    blueCarInterval = setInterval(function () {
                        moveCar(blueCar, 5); // Move the blue car
                    }, 80);
                    redCarInterval = setInterval(function () {
                        moveCar(redCar, 4.99); // Move the red car
                    }, 80);
                } else {
                    alert("Please choose a valid car (blue or red).");
                }
            } else {
                alert("Please enter a valid wager amount (at least $5).");
            }
        }
        function moveCar(car, speed) {
            car.style.left = parseFloat(car.style.left) + speed + '%';
            // Check if the car has reached the end
            if (parseFloat(car.style.left) >= 80) {
                stopCar(car);
            }
        }
        function stopCar(car) {
            clearInterval(car === blueCar ? blueCarInterval : redCarInterval);
        }
        function stopCars() {
            stopCar(blueCar);
            stopCar(redCar);
        }
    </script>
</head>
<body>
    <div class="race-track">
        <img src="images/racetrack.png" alt="Race Track" width="1000" height="200">
        <img id="blueCar" class="car" src="images/blueracecar.png" alt="Blue Car" width="100">
        <img id="redCar" class="car" src="images/redracecar.png" alt="Red Car" width="100">
    </div>
    <button id="raceButton" onclick="startRace()">Start Race</button>
</body>
</html>