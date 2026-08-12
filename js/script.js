// function play() {
//     // Step 1: add hidden class
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Step 2: remove hidden class in playground section
//     const playGround = document.getElementById('playground');
//     playGround.classList.remove('hidden');
// }


function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // Checked matched or not

    if (playerPressed === expectedAlphabet) {
        // console.log('You got a point');

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

        // start new round
        removeBgColor(expectedAlphabet);
        continueGame();
    } else {
        // console.log('You loss a life');
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
    }

}


document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame() {
    const alphabet = getARandomAlphabet();

    // set the random alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set bg color
    setBgColor(alphabet);
}


function play() {
    hideElementById('home-screen');
    showElementById('playground');
    continueGame();
}