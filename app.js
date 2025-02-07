
let sum=0;
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let messageEl = document.getElementById('message-el');
let isAlive = false;
let hasBlackJack = false;
let cards = [];
let message = "";

function getRandomCard () {
    let randomNumber = Math.floor(Math.random()*13)+1;

    if (randomNumber > 10){
        return 10;
    }
    else if (randomNumber === 1){
        return 11;
    }
    else {
        return randomNumber;
    }
}


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();


}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    
    for (let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "You have a Blackjack!";
        hasBlackJack = true;
    }
    else if (sum > 21) {
        message = "You are out of the game!";
        isAlive = false;
    }

   messageEl.textContent = message;
    
}

function newCard(){
    
    if (isAlive===true && hasBlackJack=== false) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame()     
    } 
}