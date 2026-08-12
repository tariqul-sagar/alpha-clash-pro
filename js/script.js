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
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  // Checked matched or not

  if (playerPressed === expectedAlphabet) {
    console.log("You got a point");
    removeBgColor(expectedAlphabet);
    continueGame();
  } else {
    console.log("You loss a life");
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
  showElementById("playground");
  continueGame();
}
