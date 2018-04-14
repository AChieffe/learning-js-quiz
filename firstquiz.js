//quiz begins, score is zero.

var score = 0

/*
Ask questions.  I used an else statement to console log the question if it's incorrect so I can see which questions aren't adding to the score.
*/

var questOne = prompt('1. Who is president?');
  if (questOne.toUpperCase() === 'TRUMP'){
    score += 1;
  } else {
    console.log('Q1')
  }

var questTwo = prompt('2. What year is it?');
  if (parseInt(questTwo) === 2018){
    score += 1;
  } else {
    console.log('Q2')
  }

var questThr = prompt('3. What is my job?');
  if (questThr.toUpperCase() === 'TEACHER'){
    score += 1;
  } else {
    console.log('Q3')
  }

var questFou = prompt('4. Who is my oldest child?');
  if (questFou.toUpperCase() === 'SHELBY'){
    score += 1;
  } else {
    console.log('Q4')
  }

var questFiv = prompt('5. Who is my youngest child?');
  if (questFiv.toUpperCase() === 'RONNIE'){
    score += 1;
  } else {
    console.log('Q5')
  }

//output results

if (score === 5) {
  alert('Congrats! You answered ' + score + ' questions correctly and earned a GOLD crown!');
} else if (score >= 3) {
  alert('Well done. You answered ' + score + ' questions correctly and earned a SILVER crown!');
} else if (score >= 1) {
  alert('For answering 1 question correctly, you earn a BRONZE crown.');
} else {
  alert('You loser. You answered 0 correct and do not get a crown.');
}

document.write(score);
