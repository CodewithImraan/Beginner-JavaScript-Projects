const min = 1;
const max = 10;
const answer = Math.floor(Math.random()*(max-min +1))+min;

let attempts= 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`guess the number between ${min}- ${max}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert(`please enter correct number`);
    }   
    else if (guess < min || guess > max){
        window.alert(`please enter valid number`);
    }  
    else {
        attempts++;
        if(guess < answer) {
        window.alert(`low! try again!`);
        }
        else if (guess > answer){
        window.alert(`High! give it a try`);
        }
        else
        {
        window.alert(`Wow number ${answer} was right, it took  you ${attempts} attempts`);
        running= false;

          
        }
    }  
}
