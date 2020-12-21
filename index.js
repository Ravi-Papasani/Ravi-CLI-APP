
var readlinesync = require('readline-sync');
const chalk = require('chalk');
 

var userName = readlinesync.question(chalk.blue('What is your name ?'));
var userAnswer = readlinesync.question(chalk.blue('Hello ' + userName + ' ,Do you know Ravi ?'));


//Total Score 
var score = 0;

if(userAnswer === 'yes'){
console.log(chalk.keyword('orange')('Try few questions about Ravi, and get your total score! '));
}
else{
  console.log(chalk.green('Hi ' + userName + ', You can Connect with Ravi on Twitter/Linkedin, to know about him @ravipapasani/Ravi Teja Papasani !'));
}

//Play Function 
 function playQuiz(questions,answers){
  if(userAnswer === 'yes'){
  var userAnswers = readlinesync.question(questions);

  if(userAnswers.toUpperCase() === answers.toUpperCase()){
    console.log(chalk.green('You are Right!'));
    score = score + 1;
  }else{
    console.log(chalk.red('You are Wrong!'));
  }
  console.log('Your score is ' + score)
  }
 }

//Array of Objects

var questions = [{
  question: "Who is Ravi's favorite bowler?",
  answer: "Zaheer"
},{
  question: "Who is Ravi's favorite Tv Host?",
  answer: "Trevor"
},{
  question: "What is Ravi's favorite dish?",
  answer: "Biryani"
},{
  question: "Where do Ravi stay currently?",
  answer: "Dallas"
},{
  question: "Which Tech Company Ravi like most?",
  answer: 'Microsoft'}];

//loops
for(var i=0;i<questions.length;i++){
   var currentQuestion =   questions[i];
playQuiz(currentQuestion.question,currentQuestion.answer);
}

if(userAnswer === 'yes'){
console.log(chalk.bold.green('Your final score is ' + score + ' out of ' + questions.length ));
}

//data of high scores
if(userAnswer === 'yes' && score != 0){
var highScores = [];
highScores.push({name:userName,score:score});
console.log('Below are the Current highScores of the Quiz ');
console.log( highScores);
//highScores.name = userName;
//highScores.score = score;
}

