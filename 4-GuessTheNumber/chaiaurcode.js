let ran = parseInt(Math.random() * 100 + 1);
const subno = document.querySelector('#guessField');
const prgu = document.querySelector('.guesses');
const submit = document.querySelector('#subt');
const rem = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let preguess = [];
let noofguess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(subno.value);
        console.log(guess);
        valgues(guess);
    });
}

function valgues(guess) {
    if (guess < 0 || guess > 100 || isNaN(guess)) {
        console.log("Please enter a valid number between 1 and 100.");
    } else {
        preguess.push(guess);
        if (noofguess === 3) {
            displaguess(guess);
            displaymess('Game over');
            endgame();
        } else {
            displaguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === ran) {
        displaguess(guess);
        displaymess("You guessed it right!");
        endgame();
    } else if (guess < ran) {
        displaymess("Number is too low");
    } else if (guess > ran) {
        displaymess("Number is too high");
    }
}

function displaymess(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function displaguess(guess) {
    subno.value = '';
    prgu.innerHTML += `${guess}, `;
    noofguess++;
    rem.innerHTML = `${3 - noofguess}`;
}

function endgame() {
    subno.value = '';
    subno.setAttribute('disabled', true);
    p.classList.add('button');
    p.innerHTML = `<h2 id="start">Start New Game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();
}

function newgame() {
    const newgameButton = document.querySelector('#start');
    newgameButton.addEventListener('click', (e) => {
        ran = parseInt(Math.random() * 100 + 1);
        preguess = []; // Reset the array
        noofguess = 1;
        prgu.innerHTML = ''; // Clear the displayed guesses
        rem.innerHTML = `${3 - noofguess}`;
        subno.removeAttribute('disabled');
        startover.removeChild(p);
        playgame = true;
    });
}
