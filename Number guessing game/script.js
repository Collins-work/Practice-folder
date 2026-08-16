const min = 1;
const max = 100;

const answer = 23;

let guesss;
let attempts;
let running = true;

while(running){
    console.log(answer);
    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }else if(guess < min || guess > max){
        window.alert(`Please enter a number between the range`);
    }else{
        attempts++ 
        if(guess < answer){
            window.alert(`TOO Low, try again`);
        }else if(guess > answer){
            window.alert(`TOO High, try again`);
        }else if(guess === answer){
            window.confirm(`Is that your choosen guess`);
            window.alert(`Eureka you got it, The answer was ${answer} and your attemptes was ${attempts}`)
            running = false;
        }
    }
}

