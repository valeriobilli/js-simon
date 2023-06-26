
// genera 5 numeri casuali da 1 a 100
const randomNumbers = [];
while (randomNumbers.length < 5) {

    const number = getRandomNumber(1, 100);

    if (randomNumbers.includes(number) == false) {
        randomNumbers.push(number);
    }
}

// stampa i numeri generati in pagina
document.getElementById("numbers").innerText = randomNumbers;

// naconde i numeri dopo 30 secondi
setTimeout(hideNumbers, 20 * 1000);

// prompt per chiedere i numeri
setTimeout(function () {

    const answerNumbers = askNumbers();
    const guessedNumbers = confrontNumbers(randomNumbers, answerNumbers);

    document.getElementById("message").innerHTML = "I numeri che hai indovinato sono:"
    document.getElementById("numbers").innerHTML = guessedNumbers

}, 21 * 1000);


///////////// FUNZIONI /////////////

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function hideNumbers() {
    document.getElementById("numbers").innerText = "* * * * *";
    document.getElementById("message").innerText = "Quali sono i 5 numeri scelti da Simon?"
}

// chiede 5 numeri all'utente tramite prompt
function askNumbers() {

    const answerNumbers = [];

    while (answerNumbers.length < 5) {

        const attemptNumber = answerNumbers.length + 1;
        const number = parseInt(prompt(`Inserisci il ${attemptNumber}° numero`));

        if (answerNumbers.includes(number) == false && number > 0) {
            answerNumbers.push(number);
        }

    }

    return answerNumbers;
}

// confronta i numeri inseriti nel prompt con i numeri generati dalla pagina
function confrontNumbers(randomNumbers, answerNumbers) {

    const guessedNumbers = [];

    for (let i = 0; i < randomNumbers.length; i++) {
        const currentNumber = randomNumbers[i];

        if (answerNumbers.includes(currentNumber)) {
            guessedNumbers.push(currentNumber);
        }
    }

    return guessedNumbers;

}

