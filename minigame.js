const bttn = document.getElementById('btn');
const output = document.getElementById('outputtext');

let number = 4;

bttn.addEventListener('click', function(){
    const input = document.getElementById('userInput').value;
    if(input == number){
        output.innerHTML = `You guessed right, the number of attempts to recover a snake sting are: ${number}! You have recoverd from the sting and have won the game!`;
        bttn.disabled = true;
    }
    else if (input < number){
        output.innerHTML = "You guessed too low!"
    }
    else if(input > number){
        output.innerHTML = "You guessed too high!"
    }
    else if(input != number){
        output.innerHTML = "Only enter a number from 1 to 10! No other characters!"
        
    }
});