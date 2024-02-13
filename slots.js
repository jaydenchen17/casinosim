document.addEventListener('DOMContentLoaded', function() {
  const reels = document.querySelectorAll('.reel');
  const spinBtn = document.getElementById('spin-btn');
  const symbols = ['slotcherry', 'slotbar', 'slot7','slotclover']; // Updated symbols
  const imagesPath = 'images/';

  function spin() {
    try {
      const spins = 15; // Number of spins
      const spinDelay = 200; // Delay between each spin in milliseconds
      let spinCount = 0;

      const spinInterval = setInterval(() => {
        // Spin each reel
        reels.forEach(reel => {
          reel.innerHTML = '';
          for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * symbols.length);
            const symbol = symbols[randomIndex];
            const img = document.createElement('img');
            img.src = imagesPath + symbol + '.png';
            img.alt = symbol;
            reel.appendChild(img);
          }
        });

        spinCount++;
        if (spinCount === spins) {
          clearInterval(spinInterval);
          // Add a delay before checking for winning combinations
          setTimeout(checkWin, 1000);
        }
      }, spinDelay);
    } catch (error) {
      console.error('An error occurred while spinning:', error);
    }
  }

  // Function to check for winning combinations
  function checkWin() {
    // Check horizontal rows
    for (let i = 0; i < 3; i++) {
      const symbolsInRow = [
        reels[i].children[0].alt,
        reels[i].children[1].alt,
        reels[i].children[2].alt
      ];
      if (symbolsInRow.every(symbol => symbol === symbolsInRow[0])) {
        if (symbolsInRow[0] === 'slot7' && i === 1) {
          // Jackpot in the middle row with 7s
          alert('Congratulations! You win the jackpot!');
        } else {
          // Winning combination in other rows
          alert('Congratulations! You win!');
        }
        return; // Exit function if a winning combination is found
      }
    }
    // If no winning combination is found
    alert('Sorry, try again!');
  }

  spinBtn.addEventListener('click', spin);
});
