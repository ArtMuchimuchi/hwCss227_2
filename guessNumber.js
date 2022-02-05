const secretNumber = Math.floor(Math.random() * 100 + 1);


let maxInterval = 100;
let minInterval = 1;
let guessNumber = parseInt(prompt(`Guess number between ${minInterval}-${maxInterval}!`));

while (guessNumber !== secretNumber) {
    if(guessNumber < minInterval || guessNumber > maxInterval) {
        break;
    }
    else if(guessNumber >= secretNumber) {
        maxInterval = guessNumber - 1;
        guessNumber = parseInt(prompt(`Guess number between ${minInterval}-${maxInterval}!`));
    }
    else if(guessNumber <= secretNumber) {
        minInterval = guessNumber + 1;
        guessNumber = parseInt(prompt(`Guess number between ${minInterval}-${maxInterval}!`));
    }
}

if(parseInt(guessNumber) === secretNumber) {
    alert(`Congratulation! the secret number is ${secretNumber}`);
}
else {
    alert(`the secret number is ${secretNumber}`);
}