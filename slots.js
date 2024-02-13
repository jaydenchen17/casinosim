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
          // Final result - generate symbols one last time
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
        }
      }, spinDelay);
    } catch (error) {
      console.error('An error occurred while spinning:', error);
    }
  }

  spinBtn.addEventListener('click', spin);
});
