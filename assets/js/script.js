//player name and play button
const input = document.getElementsByClassName('login-input')[0];
const button = document.getElementsByClassName('login-button')[0];
const form = document.getElementsByClassName('login-form')[0];

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

function validateInput({ target }) {
    if (target.value.length < 2 || target.value.trim() == "") {
        button.setAttribute('disabled', '');
    } else {
        button.removeAttribute('disabled');
    }
}

function handleSubmit(event) {
    event.preventDefault();

    localStorage.setItem('player', input.value);
}

//level of difficulty
//created using the tutorial -  https://www.youtube.com/watch?v=XH5OW46yO8I
const login_button = document.getElementById('login_button');
const levelContainer = document.getElementById('level_container');
const closeScreen = document.getElementById('close');
const btnEasy = document.getElementById('btn_easy');
const btnMedium = document.getElementById('btn_medium');
const btnHard = document.getElementById('btn_hard');

login_button.addEventListener('click', () => {
    levelContainer.classList.add('show');
});

closeScreen.addEventListener('click', () => {
    levelContainer.classList.remove('show');
});

function redirectToGamePage(columns, rows) {
    const url = `game.html?columns=${columns}&rows=${rows}`;
    window.location.href = url;
}

//easy level
btnEasy.addEventListener('click', () => {
    redirectToGamePage(4, 2);
});

//medium level
btnMedium.addEventListener('click', () => {
    const isSmallDevice = window.matchMedia("(max-width: 600px)").matches; 
    const columns = isSmallDevice ? 4 : 6;
    const rows = isSmallDevice ? 4 : 3;
    redirectToGamePage(columns, rows);
});

//hard level
btnHard.addEventListener('click', () => {
    const isSmallDevice = window.matchMedia("(max-width: 600px)").matches;
    const columns = isSmallDevice ? 5 : 8;
    const rows = isSmallDevice ? 6 : 4;
    redirectToGamePage(columns, rows);
})

