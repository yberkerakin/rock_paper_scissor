//Selecting the Buttons//

    const button1 = document.querySelector('#btn1');
    const button2 = document.querySelector('#btn2');
    const button3 = document.querySelector('#btn3');
    const textMessage = document.querySelector('#textMessage');
    const playerResult = document.querySelector('#playerResult');
    const compResult = document.querySelector('#computerResult');
    const winMessage = document.querySelector('#winMessage')


    //Playing the Game

    // button1.addEventListener('click',function(){playRound(playersSelection,computersSelection);});
    // button2.addEventListener('click',function(){playRound(playersSelection2,computersSelection);});
    // button3.addEventListener('click',function(){playRound(playersSelection3,computersSelection);});

    //Get players selection

    // button1.addEventListener('click',changePlayerSelection);
    // button2.addEventListener('click',changePlayerSelection2);
    // button3.addEventListener('click',changePlayerSelection3);

    //Get Computers Choice2

    button1.addEventListener('click',getComputerChoice)
    // button2.addEventListener('click',getComputerChoice)
    // button3.addEventListener('click',getComputerChoice)


  


    
    // function changePlayerSelection(){
    //     let playersSelection = 'Rock';
    //     return playersSelection
   
    // };


    // const playersSelection = changePlayerSelection()

    // function changePlayerSelection2(){
    //     let playersSelection2 = 'Paper';
    //     return playersSelection2
    // };

    // const playersSelection2 = changePlayerSelection2()


    // function changePlayerSelection3(){
    //     let playersSelection3 = 'Scissors'
    //     return playersSelection3
    // };

    // const playersSelection3 = changePlayerSelection3()


    //Get Computers Choice

    
    function getComputerChoice(){
        const choices = ['Rock','Paper','Scissors'];
        const compChoice = Math.floor(Math.random()*choices.length)
        let computersSelection = choices[compChoice]
        return computersSelection;
    }


    // let computersSelection = getComputerChoice();
        
    


    //Play the Game!

    let compScore = 0
    let playScore = 0

    function playRound(playersSelection,computersSelection){
        
    
        if (playersSelection === 'Rock' && computersSelection ==='Paper'){
            textMessage.textContent=`You Lose! Paper beats Rock, Computers choice is:${computersSelection}`;
            console.log("You Lose! Paper beats Rock");
            compScore = compScore + 1
            console.log(compScore)
            compResult.textContent=`Computer Result : ${compScore}`
            return compScore
            
            
            
        }else if(playersSelection === 'Paper'&& computersSelection ==='Scissors'){
            textMessage.textContent=`You Lose! Scissors beats paper, Computers choice is:${computersSelection}`;
            console.log("You Lose! Scissors beats Paper");
            compScore = compScore + 1
            console.log(`Player Result : ${compScore}`)
            compResult.textContent=`Computer Result : ${compScore}`
            return compScore  
            
        }else if(playersSelection === 'Scissors'&& computersSelection ==='Rock'){
            textMessage.textContent=`You Lose! Rock beats Scissors, Computers choice is:${computersSelection}`;
            console.log("You Lose! Rock beats Scissors");
            compScore = compScore + 1
            console.log(`Player Result : ${compScore}`)
            compResult.textContent=`Computer Result : ${compScore}`
            return compScore
        
            
        }else if(playersSelection == computersSelection){
            textMessage.textContent='Tie!'
            console.log('Tie!');
            let selection = 'Tie'
            return selection
            
        }else{
            textMessage.textContent=`Fantastic,You Win! Computers choice is:${computersSelection}`
            console.log(`Fantastic,You Win!,Computers choice is:${computersSelection}`);
            playScore = playScore + 1
            console.log(`Player Result : ${playScore}`)
            playerResult.textContent=`Player Result : ${playScore}`
            return playScore
        }



    }



   


    function showWinner(playScore,compScore){
        if(playScore === 5){
            winMessage.textContent='Winner Winner Chicken Dinner!'
            console.log(playScore)
        }else if(compScore === 5){
            winMessage.textContent = 'Sorry,You Lost!'
            console.log(compScore)
        }else{
            return;
        }
    }

    // showWinner(playScore,compScore);


// function game(){
    
    
//     const playersSelection = changePlayerSelection();
//     const playersSelection2 = changePlayerSelection2();
//     const playersSelection3 = changePlayerSelection3();
//     button1.addEventListener('click',changePlayerSelection);
//     button2.addEventListener('click',changePlayerSelection2);
//     button3.addEventListener('click',changePlayerSelection3);
//     button1.addEventListener('click',function(){playRound(playersSelection,computersSelection);});
//     button2.addEventListener('click',function(){playRound(playersSelection2,computersSelection);});
//     button3.addEventListener('click',function(){playRound(playersSelection3,computersSelection);});
//   
//     console.log(computersSelection)

// }
// function gameEnd(){
//     button1.removeEventListener('click',changePlayerSelection);
//     button2.removeEventListener('click',changePlayerSelection2);
//     button3.removeEventListener('click',changePlayerSelection3);
//     button1.removeEventListener('click',function(){playRound(playersSelection,computersSelection);});
//     button2.removeEventListener('click',function(){playRound(playersSelection2,computersSelection);});
//     button3.removeEventListener('click',function(){playRound(playersSelection3,computersSelection);});
// }

button1.addEventListener('click',function(){
    const choices = ['Rock','Paper','Scissors'];
    const compChoice = Math.floor(Math.random()*choices.length)
    let computersSelection = choices[compChoice]
    playersSelection = 'Rock'
    playRound(playersSelection,computersSelection);
    showWinner(playScore,compScore);
}
);
button2.addEventListener('click',function(){
    const choices = ['Rock','Paper','Scissors'];
    const compChoice = Math.floor(Math.random()*choices.length)
    let computersSelection = choices[compChoice]
    playersSelection = 'Paper'
    playRound(playersSelection,computersSelection);
    showWinner(playScore,compScore);
});
button3.addEventListener('click',function(){
    const choices = ['Rock','Paper','Scissors'];
    const compChoice = Math.floor(Math.random()*choices.length)
    let computersSelection = choices[compChoice]
    playersSelection = 'Scissors'
    playRound(playersSelection,computersSelection);
    showWinner(playScore,compScore);
});



function game(){
    const choices = ['Rock','Paper','Scissors'];
    const compChoice = Math.floor(Math.random()*choices.length)
    let computersSelection = choices[compChoice]
    playersSelection = 'Rock'
    playRound(playersSelection,computersSelection);
}
