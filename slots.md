---
layout: default
title: Roulette
permalink: /slots
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slot Machine</title>
  <style>
    body {
      background-image: url('images/slotmachine.png');
      background-size: 60%;
      background-position: center center;
      background-attachment: fixed;
      margin: 0;
      font-family: 'Arial', sans-serif;
      color: #ffffff; /* Text color */
      text-align: center;
      padding: 50px; /* Add padding to the content */
    }
    .slot-machine {
      text-align: center;
      border: 10px solid gold; /* Golden border around the entire slot machine */
      padding: 20px; /* Add some padding */
      display: inline-block; /* Ensures the slot machine container fits its content */
      margin: auto; /* Center the slot machine horizontally */
    }
    .reel-container {
      margin-bottom: 20px; /* Add some space between rows */
      background-color: white; /* White backdrop for the slot container */
    }
    .row-divider {
      width: 100%;
      height: 5px; /* Height of the row divider */
      background-color: gold; /* Color of the row divider */
      margin: 10px 0; /* Add some space above and below the row divider */
    }
    .reel {
      display: flex;
      flex-direction: row; /* Align symbols horizontally */
      justify-content: center; /* Center symbols horizontally */
    }
    .reel img {
      width: 100px; /* Adjust as needed */
      margin: 0 10px; /* Adjust as needed */
    }
    #spin-btn {
      padding: 10px 20px; /* Add padding */
      font-size: 30px; /* Increase font size */
      font-family: 'Cinzel'; /* Change font */
      background-color: #ffca26; /* Button background color */
      color: #ffffff; /* Button text color (white) */
      border: 2px solid #ff0000; /* Red border */
      border-radius: 5px; /* Rounded corners */
      cursor: pointer; /* Change cursor to pointer on hover */
      transition: background-color 0.3s, border-color 0.3s; /* Smooth transition */
    }
    #spin-btn:hover {
      background-color: #ffc30d; /* Darker background color on hover */
      border-color: #ff0000; /* Red border color on hover */
    }

  </style>
</head>
<body>
  <div class="slot-machine">
    <div class="reel-container">
      <div class="reel">
        <img src="images/slotbar.png" alt="Cherry">
        <img src="images/slotbar.png" alt="Bar">
        <img src="images/slot7.png" alt="Seven">
      </div>
    </div>
    <div class="row-divider"></div> <!-- Divider between rows -->
    <div class="reel-container">
      <div class="reel">
        <img src="images/slotcherry.png" alt="Cherry">
        <img src="images/slot7.png" alt="Bar">
        <img src="images/slotclover.png" alt="Seven">
        <!-- Add more images here -->
      </div>
    </div>
    <div class="row-divider"></div> <!-- Divider between rows -->
    <div class="reel-container">
      <div class="reel">
        <img src="images/slotclover.png" alt="Cherry">
        <img src="images/slotcherry.png" alt="Bar">
        <img src="images/slot7.png" alt="Seven">
        <!-- Add more images here -->
      </div>
    </div>
    <button id="spin-btn">SPIN</button>
  </div>
  
  <script src="slots.js"></script>
</body>
</html>
