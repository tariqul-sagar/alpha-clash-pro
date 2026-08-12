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

  // stop game
  if (playerPressed === "Escape") {
    gameOver();
  }

  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  // Checked matched or not

  if (playerPressed === expectedAlphabet) {
    // console.log('You got a point');

    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    const currentScore = getTextElementValueById("current-score");

    const updatedScore = currentScore + 1;

    setTextElementValueById("current-score", updatedScore);

    // currentScoreElement.innerText = newScore;

    // start new round
    removeBgColor(expectedAlphabet);
    continueGame();
  } else {
    // console.log('You loss a life');
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;

    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  const alphabet = getARandomAlphabet();

  // set the random alphabet
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set bg color
  setBgColor(alphabet);
}

function play() {
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("playground");

  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("playground");
  showElementById("final-score");

  // update Final score

  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("gameEnd-score", lastScore);

  // clear last selected alphabet
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBgColor(currentAlphabet);
}
