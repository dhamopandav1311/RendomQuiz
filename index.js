var readLineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readLineSync.question(chalk.bgBlue((chalk.white(("Welcome to Dharmik's quiz FRIENDS!")))));


score = 0;
correct = 0;
wrong = 0;

console.log( chalk.green(`
Wooohooo! Here the we will start Cricket Quiz!!`
));

const questions = [{question: `
What does LBW stand for??
  A.Long Wide Ball                                     
  B. Leg Beyong Width                                  
  C. Leg Before Wicket                                  
  D. Lol Bout to win 
`,
answer: "c"}, 
{ question: `
Which cricketer had scored highest individual score in first-class cricket? 
  A. Don Bradman
  B. Brian Lara
  C. Lane Hutton
  D. Gary Sobers
`,
answer: "b" },
{ question: `
Which cricketer had scored highest individual score in ODI cricket? 
  A. Virender Sehwag
  B. Chris Gayle
  C. Martin Guptill
  D. Rohit Sharma
`,
answer: "d" }];


function play(question, answer){
    userAnswer = readLineSync.question(chalk.cyanBright(question));
    if(userAnswer.toUpperCase() === answer.toUpperCase
    ()){
    console.log(chalk.green("Correct! "));
    score = score + 1;
    console.log("Your current score is: " + score);
  } else{
    console.log(chalk.red("Wrong!"));
    score = score - 1;  
    console.log(chalk.green("Correct Answer is: ")+ answer.toUpperCase())
    console.log("Your Score is: " + score);
  }  

  console.log(chalk.magenta("----------------------------------------------------------")) ;
 
}

for(var i=0; i<questions.length; i++){
  currentQuesion = questions[i];
  play(currentQuesion.question, currentQuesion.answer)
}

console.log("You Scored: " + score);
