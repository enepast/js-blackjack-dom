import { playCards } from "./play-cards";

const askBtn = document.querySelector('#btnAsk'),
    stopBtn = document.querySelector('#btnStop');
let scores = document.querySelectorAll('small'),
    playerField = document.querySelector('#player-cards'),
    playerResult = 0;

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