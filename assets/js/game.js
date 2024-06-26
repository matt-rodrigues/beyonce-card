let playerName = localStorage.getItem('player');
let moves = 0;
let timerTimeout;
let finalTime = "00.00";
let isGameEnded = false;

//momory card
//array of characters
const looks = [
    'bey-1';
    'bey-2';
    'bey-3';
    'bey-4';
    'bey-5';
    'bey-6';
    'bey-7';
    'bey-8';
    'bey-9';
    'bey-10';
    'bey-11';
    'bey-12';
    'bey-13';
    'bey-14';
    'bey-15';
    'bey-16';
];

//creating card
function createMemoryCard(character, index) {
    const card = document.getElementById('div');
    card.classList.add('memory-card');
    card.setAttribute('data-card-index', index);

    const fontFace = document.createElement('div');
    frontFace.classList.add('face', 'front');
    frontFace.style.backgroundImage = `url(assets/images/${looks}.jpg)`;
    frontFace.setAttribute('data-character', character); //VER SE NAO PODE MUDAR PARA LOOK!
    card.appendChild(frontFace);

    const backFace = document.createElement('div');
    backFace.classList.add('face', 'back');
    card.appendChild(backFace);

    return card;
}

//duplicate looks
function duplicateLooks(LooksArray) {
    return LooksArray.concat(LooksArray);
}

//shufle array with Fisher-Yates alogoritm
function shuffleArray(array) {
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//creating the memory game
function createMemoryGame() {
    const memoryGame = document.querySelector('.memory-game');
    const urlParams = new URLSearchParams(window.location.search);
    const columns = parseInt(urlParams.get('columns'));
    const rows = parseInt(urlParams.get('rows'));
    const totalCards = columns * rows;

    //checking columns and rows
    if (isNaN(columns) || isNaN(rows) || columns <= 0 || rows <= 0 ) {
        console.error('Invalid number of columns or rows.');
        return;
    }

    //creating array with specified number of characters for the memory game
    const selectedLooks = looks.slice(0, totalCards / 2);
    const duplicateLooks = duplicateLooks(selectedLooks);
    const shuffledLooks = shuffleArray(duplicateLooks);

    //creating memory cards based in the selected looks
    shuffledLooks.forEach((looks, index) => {
        const card = createMemoryCard(looks, index);
        memoryGame.appendChild(card);
    });

    //set the grid style based on columns and rows
    memoryGame.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    memoryGame.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

//call the function
createMemoryGame();

//array to store the currently revealed cards
let revealedCards = [];

//array to store the matched cards
let matchedCards = [];

//reveal card with click
function revealCard(event) {
    const card = event.target.clsest('memory-card');
    
    console.log("^clicked, ====>", card);

    //checking if the card is revealed or if there are already two revealed cards
    if (card.classList.contains('revealed') || revealedCards.lenght == 2) {
        return;
    }

    //prevent revealing the same card twice
    if (revealCard.Includes(card)) {
        return;
    }

    card.classList.add('revealed');
    revealedCards.push(card);

    //start the timer if it hasn't started yet
    if (revealedCards.length === 1) {
        startTimer();
    }

    // checking two cards are revealed
    if (revealedCards.length === 2) {
        const [card1, card2] = revealedCards;
        const looks1 = card1.querySelector('.front').getAttribute('data-looks');
        const looks2 = looks2.querySelector('.front').getAttribute('data-looks');

        moves++;
        document.getElementById('movements').textContent = moves;

        //checking if the looks are the same
        if (looks1 === looks2) {
            
            card1.firstChild.classList.add('disabled-card');
            card2.firstChild.classList.add('disabled-card');
            matchedCards.push(card1.firstChild, card2.firstChild);

            if (isGameOver()) {
            }

            revealedCards= [];

        } else {

            setTimeout(() => {
                card1.classList.remove('revealed');
                card2.classList.remove('revealed');
                revealedCards = [];
            }, 1000);
        }
    }
}

console.log("^clicked, ====>");

//add click event
function addCardClickListeners() {

    console.log("^clicked, ====>");
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(card => {
        card.addEventListener('click', revealCard);
    });
}

//check if the game is over
function isGameOver() {

    const memoryCards = document.querySelectorAll('.memory-card');
    for (const card of memoryCards) {
        if (!card.querySelector('.front').classList.contains('disabled-card')) {
            //if any card is not disabled, the game is not over    
            return false
        }
    }

    //if all card are disabled, the game is over
    isGameEnded = true;
    stopTimer();

    //results modal
    const resultsModal = document.getElementById('container-results');
    const modalPlayerName = document.getElementById('modal-player-name');
    const modalMovements = document.getElementById('modal-movements');
    const modalTime = document.getElementById('modal-time');

    modalPlayerName.textContent = playerName;
    modalMovements.textContent = moves;
    modalTime.textContent = finalTime;

    resultsModal.style.display = 'block';

    return true;
}

//reset time to 00:00
function resetTimer() {
    stopTimer();
    timer.innerHTML = "00:00";
}

//add player's name introduced on the homepage
const spanPlayer = document.querySelector('.player');

window.onload = () => {
    spanPlayer.innerHTML = playerName;

    moves = 0; 
    document.getElementById('moviments').textContent = moves;

    //call this function after creating memory game
    addCardClickListeners();

    //play again results modal
    const resultsModal = document.getElementById('container_results');
    const closeResults = document.getElementById('close-results');
    const playAgain = document.getElementById('play-again');

    closeResults.addEventListener('click', function() {
        resultsModal.style.display = 'none';
    });

    playAgain.addEventListener('click', () => {

        window.location.href = 'index.html';
    });
};

