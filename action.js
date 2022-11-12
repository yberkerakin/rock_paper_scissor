function getComputerChoice(){
    const choices = ['ROCK','PAPER','SCISSORS'];
    const compChoice = Math.floor(Math.random()*choices.length)
    return choices[compChoice]
}

getComputerChoice();



function playRound(playersSelection,computersSelection){
    
    if (playersSelection === 'ROCK' && computersSelection ==='PAPER'){
        console.log("You Lose! Paper beats Rock");
    }else if(playersSelection === 'PAPER'&& computersSelection ==='SCISSORS'){
        console.log("You Lose! Scissors beats Paper");
    }else if(playersSelection === 'SCISSORS'&& computersSelection ==='ROCK'){
        console.log("You Lose! Rock beats Scissors");
    }else if(playersSelection == computersSelection){
        console.log('Tie!');
    }else{
        console.log(`Fantastic,You Win!,Computers choice is:${computersSelection}`);
    }
    
}




function game(){
    for (i=0 ;  i<5 ; i++){
        const computersSelection = getComputerChoice();
        let playersSelectionSensitive = prompt('What is your choice? Rock , Paper or Scissors');
        const playersSelection = playersSelectionSensitive.toUpperCase();
        playRound(playersSelection,computersSelection);
        console.log(`You have ${4-i} lives left`);
        
    }
}


game()