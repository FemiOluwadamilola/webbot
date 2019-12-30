// variables define...
const botSpch = document.querySelector('.result');

const res = document.querySelector('#ans');

const btnBox = document.querySelector('.C-Btn'),
img = document.querySelector('#loader');

document.body.addEventListener('keypress',showResponse);

// age calculation 
    let age = new Date();
	  let year = age.getFullYear();

// arrys of questions
let questions = [
  "Hi i'm webbot,what's your name ?",
  "Where are you from ?",
  "What's your age ?",
  "What project are you working on ?",
  "Will you like to play a game ?",
  "It was nice talking to you !!!"
];
// counter for questions
let talk = 0;

botSpch.innerHTML = questions[0];


function showResponse(e){
  // this e.which === 13 is for the enter key to work.
  if(e.which === 13){
    botResponse();
    res.value = "";
  }
}
function botResponse(){
  let resAns = res.value;
  if(resAns === ""){
    document.body.style.backgroundColor = 'red';
    botSpch.innerHTML = 'stop that !!!';
    setTimeout(function(){
      document.body.style.backgroundColor = 'burlywood';
      botSpch.innerHTML = questions[0];
    },2000);
  }else{
     if(talk == 0){
      botSpch.innerHTML = `Hello ${resAns} nice meeting you !!!`;
      res.setAttribute('placeholder','Thinking....!!!');
      ++talk;
      setTimeout(changeQue,3000);
     }else if(talk == 1){
      botSpch.innerHTML = `${resAns} is a nice place !!!`;
      res.setAttribute('placeholder','Thinking....!!!');
      ++talk;
      setTimeout(changeQue,3000);
     }else if(talk == 2){
       const age = parseInt(resAns);
       if(isNaN(age)){
       alert('please input a number to confirm your age !!!');
       }else{
        botSpch.innerHTML = `Wow so you are born in ${year - age} cool !!! `;
        res.setAttribute('placeholder','Thinking....!!!');
        ++talk;
        setTimeout(changeQue,3000);
       }
     }else if(talk == 3){
       if(resAns === 'nothing' || resAns === 'none'){
         botSpch.innerHTML = `That's very bad doing nothing !!!`;
       }else{
        botSpch.innerHTML = ` Whoa ${resAns} that sounds awesome !!!`;
        res.setAttribute('placeholder','Thinking....!!!')
        ++talk;
        setTimeout(changeQue,3000);
       }
     }else if(talk == 4){
       if(resAns === 'yes' || resAns === 'sure' || resAns === 'ok'){
        res.style.display = 'none';
        img.style.display = 'block';
        setTimeout(function(){
          open('game.html','_self');
        },3000);
       }
       if(resAns === 'no'){
         botSpch.innerHTML = `Are you having a bad day?`;
          if(resAns === 'yes'){
            botSpch.innerHTML = `Do you wise to talk about it !!!?`;
          }
            ++talk;
          setTimeout(changeQue,3000);
      }
     }
  }
// setTimeout function for queations incremt
function changeQue(){
  res.setAttribute('placeholder','Enter Your Response...');
   botSpch.innerHTML = questions[talk];
   if(talk == 5){
    res.style.display = 'none';
   }  
 }
}