// function play() {
//     // Step 1: add hidden class
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Step 2: remove hidden class in playground section
//     const playGround = document.getElementById('playground');
//     playGround.classList.remove('hidden');
// }


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