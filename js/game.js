// UI variables
const game = document.querySelector('#game'),
 minNum = document.querySelector('.min-num'),
 maxNum = document.querySelector('.max-num'),
 guessInput = document.querySelector('#guess-input'),
 guessBtn = document.querySelector('#guess-Btn'),
 outputMsg = document.querySelector('.message'),
 react = document.querySelector('.model');
//  img = document.querySelector('.reaction-img');

//game values 
let min = 1,
max = 10,
winningNum = getRandomNum(min,max),
guessesLeft = 3;

// Assign UI values
minNum.textContent = min;
maxNum.textContent = max;



game.addEventListener('mousedown',function(e){
  if(e.target.className === 'play-again'){
     window.location.reload();
  }
});

guessBtn.addEventListener('click',function(e){
  let guess = parseInt(guessInput.value);
  // validation
  if(isNaN(guess) ||  guess < min || guess > max){
    alert(`please enter a number between ${min} and ${max}`);
  }

  if(guess === winningNum){
     notification(true,`${winningNum} is correct,YOU WIN !!`);
     react.style.display = "block";
     setTimeout(function(){
      react.style.display = "none";
     },3000);
  }else{
    guessesLeft -= 1;
    if(guessesLeft === 0){
      notification(false,`game over you lost, the correct Number was ${winningNum}`);
    }else{
      guessInput.style.borderColor = "red";
      guessInput.value = '';
      if(isNaN(guess) ||  guess < min || guess > max){

      }else{
        showMessage(`${guess}  is not correct, you have ${guessesLeft} guesses left`,'red');
      }
      
    }
  }
e.preventDefault();
});

function notification(won,msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  showMessage(msg,color);

  guessBtn.value = 'play again';
  guessBtn.className += 'play-again';
}
function getRandomNum(min,max){
   return Math.floor(Math.random()*(max-min+ 1) + min);
}
function showMessage(message,color){
  outputMsg.style.color = color;
  outputMsg.textContent = message;
}