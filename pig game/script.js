'use strict';

// selecting elements 
let player0El = document.querySelector('.player--0')
let player1El = document.querySelector('.player--1')
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1')
let current0El = document.getElementById('current--0')
let current1El = document.getElementById('current--1')

let diceEl = document.querySelector('.dice')
let btnNew = document.querySelector('.btn--new')
let btnRoll = document.querySelector('.btn--roll')
let btnHold = document.querySelector('.btn--hold')

let switching = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    //  switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

}

//starting conditions
let scores = [0, 0]
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let playing = true;

let currentScore = 0;
let activePlayer = 0;

//rolling dice fuctionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. generating the random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. display dice
        diceEl.src = `dice-${dice}.png`
        diceEl.classList.remove('hidden')
        // 3. check for rolled 1; 
        if (dice !== 1) {
            //add dice to current score
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            switching()
        }
    }
})
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] = scores[activePlayer] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        if (scores[activePlayer] >= 100) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            diceEl.classList.add('hidden');

            playing = false;
        } else {
            switching()
        }
    }
})
btnNew.addEventListener('click', function () {
    playing = true;
    scores = [0, 0]
    currentScore = 0
    score0El.textContent = 0;
    score1El.textContent = 0;
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    activePlayer = 0
    player0El.classList.add('player--active')
    current0El.textContent = 0
    current0El.textContent = 0


})
