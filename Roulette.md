---
layout: default
title: Roulette
permalink: /Roulette
---
 <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Roulette Game</title>
<style>
    body {
        font-family: Arial, sans-serif;
    }
    table {
        border-collapse: collapse;
        margin: 20px auto;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: center;
    }
    th {
        background-color: #f2f2f2;
    }
    .result {
        margin-top: 20px;
        text-align: center;
    }
</style>
</head>
<body>
<h1>Roulette Game</h1>
<table>
    <tr>
        <th>1st 12</th>
        <th>2nd 12</th>
        <th>3rd 12</th>
    </tr>
    <tr>
        <th>1 to 18</th>
        <th>EVEN</th>
        <th>RED</th>
    </tr>
    <tr>
        <th>BLACK</th>
        <th>ODD</th>
        <th>19 to 36</th>
    </tr>
</table>
<div class="result"></div>
<button onclick="spinWheel()">Spin Wheel</button>
<script>
    function generateWheel() {
        let wheel = [];
        for (let i = 1; i <= 36; i++) {
            wheel.push(i.toString());
        }
        wheel.push("0", "00");
        return wheel;
    }
    function spinWheel() {
        const wheel = generateWheel();
        const resultDiv = document.querySelector('.result');
        const bet = prompt("Place your bet (number between 0 and 36):");
        const spinResult = wheel[Math.floor(Math.random() * wheel.length)];
        if (bet === spinResult) {
            resultDiv.textContent = `The wheel landed on ${spinResult}! You win!`;
        } else {
            resultDiv.textContent = `The wheel landed on ${spinResult}. You lose!`;
        }
    }
</script>
</body>
</html>
