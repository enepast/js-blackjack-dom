import { playCards } from "./play-cards";

let scores = document.querySelectorAll('small'),
    pcResult = 0,
    playerResult = 0;
const askBtn = document.querySelector('#btnAsk'),
    stopBtn = document.querySelector('#btnStop'),
    playerField = document.querySelector('#player-cards'),
    pcField = document.querySelector('#pc-cards');

export const stopFunction = (perfectScore) => {
    console.log('The PC says: my turn');
    askBtn.disabled = true;
    stopBtn.disabled = true;
    do {
        pcResult = playCards(pcField) + pcResult;
    } while (pcResult <= playerResult);
    scores[1].innerText = pcResult;
    if (pcResult > perfectScore || pcResult <= playerResult) {
        scores[1].innerText = pcResult + ' -> says: You win :(';
    } else if (pcResult > playerResult) {
        scores[1].innerText = pcResult + ' -> says: I win 3:)';
    } else scores[1].innerText = pcResult + " -> says: It's a draw :)(";
};

export const askFunction = (perfectScore) => {
    playerResult = playCards(playerField) + playerResult;
    scores[0].innerText = playerResult;
    if (playerResult > perfectScore) {
        scores[0].innerText = playerResult + " -> You lose :(";
        askBtn.disabled = true;
        stopBtn.disabled = true;
    } else if (playerResult === perfectScore) {
        scores[0].innerText = playerResult + " -> Perfect Score :)";
        askBtn.disabled = true;
        stopBtn.disabled = true;
        do {
            pcResult = playCards(pcField) + pcResult;
        } while (pcResult <= playerResult);
        scores[1].innerText = pcResult;
        if (pcResult == perfectScore) {
            scores[1].innerText = pcResult + " -> says: It's a draw :)(";
        } else scores[1].innerText = pcResult + ' -> says: You win :(';
    }
};
