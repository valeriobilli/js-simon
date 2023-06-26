

const randomNumbers = [];
while (randomNumbers.length < 5) {

    const number = getRandomNumber(1, 100);

    if (randomNumbers.includes(number) == false) {
        randomNumbers.push(number);
    }
}

document.getElementById("numbers").innerText = randomNumbers;

setTimeout(hideNumbers, 3 * 10000);




// funzioni

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function hideNumbers() {
    document.getElementById("numbers").innerText = "* * * * *";
    document.getElementById("message").innerText = "Quali sono i 5 numeri casuali?"
}
