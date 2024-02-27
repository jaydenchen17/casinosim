document.addEventListener('DOMContentLoaded', function() {
  const reels = document.querySelectorAll('.reel');
  const spinBtn = document.getElementById('spin-btn');
  const symbols = ['slotcherry', 'slotbar', 'slot7', 'slotclover']; // Updated symbols
  const imagesPath = 'images/';

  let userBalance = 100; // Initial user balance
  let userBet;

  function spin() {
    try {
      // Prompt the user to place a wager
      userBet = prompt('Enter your wager (minimum $10):');
      if (userBet === null) return; // Exit if the user cancels
      userBet = parseInt(userBet);
      if (isNaN(userBet) || userBet < 10 || userBet > userBalance) {
        alert('Invalid wager. Please enter a valid amount.');
        return;
      }

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
          userBalance += userBet * 5; // Jackpot payout (5 times the wager)
          updateBalance(userBalance);
          alert('Congratulations! You win the jackpot! Your balance: $' + userBalance);
        } else {
          // Winning combination in other rows
          userBalance += userBet * 2; // Regular win payout (double the wager)
          updateBalance(userBalance);
          alert('Congratulations! You win! Your balance: $' + userBalance);
        }
        return; // Exit function if a winning combination is found
      }
    }
    // If no winning combination is found
    userBalance -= userBet; // Deduct the wager from the user's balance
    updateBalance(userBalance);
    alert('Sorry, try again! Your balance: $' + userBalance);
  }

  // Function to update the user balance on the server
  async function updateBalance(balance) {
    const user_id = '<user_id>'; // Replace <user_id> with the actual user ID
    const token = '<token>'; // Replace <token> with the actual JWT token
    try {
      const response = await fetch(`/api/money/user/${user_id}?balance=${balance}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to update balance');
      }
      const data = await response.json();
      console.log('User balance updated:', data);
    } catch (error) {
      console.error('An error occurred while updating balance:', error);
    }
  }

  spinBtn.addEventListener('click', spin);
});
