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
    .slot-machine {
      text-align: center;
      border: 10px solid gold; /* Golden border around the entire slot machine */
      padding: 20px; /* Add some padding */
      display: inline-block; /* Ensures the slot machine container fits its content */
      margin: auto; /* Center the slot machine horizontally */
    }
    .reel-container {
      margin-bottom: 20px; /* Add some space between rows */
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
  </style>
</head>
<body>
  <div class="slot-machine">
    <div class="reel-container">
      <div class="reel">
        <img src="images/slotcherry.png" alt="Cherry">
        <img src="images/slotbar.png" alt="Bar">
        <img src="images/slot7.png" alt="Seven">
        <!-- Add more images here -->
      </div>
    </div>
    <div class="row-divider"></div> <!-- Divider between rows -->
    <div class="reel-container">
      <div class="reel">
        <img src="images/slotcherry.png" alt="Cherry">
        <img src="images/slotbar.png" alt="Bar">
        <img src="images/slot7.png" alt="Seven">
        <!-- Add more images here -->
      </div>
    </div>
    <div class="row-divider"></div> <!-- Divider between rows -->
    <div class="reel-container">
      <div class="reel">
        <img src="images/slotcherry.png" alt="Cherry">
        <img src="images/slotbar.png" alt="Bar">
        <img src="images/slot7.png" alt="Seven">
        <!-- Add more images here -->
      </div>
    </div>
    <button id="spin-btn">Spin</button>
  </div>
  
  <script src="slots.js"></script>
</body>
</html>
