document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.querySelector('.show-more');
    const leaderboardRows = document.querySelectorAll('.leaderboard-row');
  
    if (showMoreButton) {
      showMoreButton.addEventListener('click', function() {
        const leaderboardRows = document.querySelectorAll('.leaderboard-row');
        leaderboardRows.forEach(row => {
          row.classList.remove('hidden');
        });
        showMoreButton.style.display = 'none';
      });
    }
  
    function checkWindowSize() {
      if (window.innerWidth <= 768) {
        leaderboardRows.forEach((row, index) => {
          if (index >= 5) {
            row.classList.add('hidden');
          }
        });
        showMoreButton.style.display = 'flex';
      } else {
        leaderboardRows.forEach(row => {
          row.classList.remove('hidden');
        });
        showMoreButton.style.display = 'none';
      }
    }
  
    checkWindowSize();
  
    window.addEventListener('resize', checkWindowSize);
      
    const langSwitch = document.querySelector('.lang-switch');
  
    langSwitch.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  
    document.addEventListener('click', function(event) {
      if (!langSwitch.contains(event.target)) {
        langSwitch.classList.remove('active');
      }
    });
  });
  