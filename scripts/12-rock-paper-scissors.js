  //digunakan masa reset score
  let score = JSON.parse(localStorage.getItem
    ('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScoreElement();
    /*
    if (!score) {
      score = {
        win: 0,
        losses: 0,
        ties: 0
      };
    }
    */
    

    //console.log();//

    let isAutoPlaying = false;
    let intervalId;

    //const autoPlay = () => {
      
    //};
    function autoPlay() {
      if (!isAutoPlaying) {
       intervalId = setInterval(() => {
          const playerMove = pickComputerMove(); 
          playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
      } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
      } 
    }

    document.querySelector('.js-rock-button')
      .addEventListener('click', () => {
        playGame('rock')
      });

    document.querySelector('.js-paper-button')
      .addEventListener('click', () => {
        playGame('paper')
      });

    document.querySelector('.js-scissors-button')
      .addEventListener('click', () => {
        playGame('scissors')
      });

    document.body.addEventListener('keydown', (event) => {
      if (event.key === 'r') {
        playGame('rock');
      } else if (event.key === 'p') {
        playGame('paper');
      } else if (event.key === 's') {
        playGame('scissors')
      }
    });
     
    function playGame(playerMove) {
      const computerMove = pickComputerMove();

     // let result = '';//

      if (playerMove === 'scissors') {
        if (computerMove === 'scissors') {
        result = 'seri.';
        } else if (computerMove === 'paper') {
          result = 'menang.';
        } else if (computerMove === 'rock') {
          result = 'kalah.';
        }

      } else if (playerMove === 'paper') {
        const computerMove = pickComputerMove();

       // let result = '';//

        if (computerMove === 'paper') {
          result = 'seri.';
        } else if (computerMove === 'rock') {
          result = 'menang.';
        } else if (computerMove === 'scissors') {
          result = 'kalah.';
        }
       
      }  else if (playerMove === 'rock') {
        const computerMove = pickComputerMove();

        //let result = '';//

        if (computerMove === 'rock') {
          result = 'seri.';
        } else if (computerMove === 'paper'){
          result = 'kalah.';
        } else if (computerMove === 'scissors') {
          result = 'menang.';
        }

        } if (result === 'menang.') {
          score.wins += 1;
        } else if (result === 'kalah.') {
          score.losses += 1;
        } else if (result === 'seri.') {
          score.ties += 1;
        }
    
      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();
      
      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `You
      <img src="images/${playerMove}-emoji.png"
      class="move-icon">
      <img src="images/${computerMove}-emoji.png"
      class="move-icon">
      computer`;
    }
        
      function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = `menang: ${score.wins}, kalah: ${score.losses}, seri: ${score.ties}`;
        }
      
    
      function pickComputerMove() {
      const randomNumber = Math.random();

     // let computerMove = '';

      if(randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;
      
    }
  
