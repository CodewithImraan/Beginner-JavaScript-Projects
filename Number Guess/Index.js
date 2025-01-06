const min = 1;
const max = 10;
const answer = Math.floor(Math.random()*(max-min +1))+min;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt('Guess the number betwwen ${min} -${max}');
    guess = Number(guess);
    console.log(guess);
    
    
}e
