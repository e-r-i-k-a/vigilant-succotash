//Write a function that, given a sentence along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

let sentence = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing'

// getClosingParen(sentence, 10) //79
// getClosingParen(sentence, 28) //46
// getClosingParen(sentence, 57) //78

function getClosingParen(str, idx) {
  let counter = 0;
  for (let i=idx+1; i<str.length; i++) {
    if (str[i] === '(') {
      counter++;
      //increment counter each time we open a parenthesis
    }
    if (str[i] === ')') {
      if (!counter) {
        return i;
        //return when all parentheses are closed
      } else {
        counter --;
        //decrement counter each time we close a parenthesis
      }
    }
  }
}
