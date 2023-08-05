let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['J', 'Q', 'K', 'A'];
let points = 0;
let pcPoints = 0;

// html references
const askBtn = document.querySelector('#btnAsk');
const stopBtn = document.querySelector('#btnStop');
const newBtn = document.querySelector('#btnNew');
let scores = document.querySelectorAll('small');
let playerField = document.querySelector('#player-cards');
let pcField = document.querySelector('#pc-cards');
let playerResult = 0;
let pcResult = 0;
const perfectScore = 21;

// necessary functions
const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (const type of types) {
            deck.push(i + type);
        }
    }
    for (const type of types) {
        for (const special of specials) {
            deck.push(special + type);
        }
    }
    deck = _.shuffle(deck);
    return deck;
};

const MixedDeck = createDeck();

const askCard = (deck) => {
    if (deck.length === 0) throw "There's no cards in the deck";
    const card = deck.pop();
    return card;
};

const valueCard = (card) => {
    const value = card.substring(0, card.length - 1);
    return (isNaN(value)) ?
        (value === 'A') ? 11 : 10 :
        value * 1;
};

// events
const playCards = (points, field) => {
    const card = askCard(MixedDeck);
    points = points + valueCard(card);
    const newCard = document.createElement('img');
    newCard.classList.add('carta');
    newCard.src = `assets/cartas/cartas/${card}.png`;
    field.append(newCard);
    return points;
}

askBtn.addEventListener('click', () => {
    playerResult = playCards(points, playerField) + playerResult;
    scores[0].innerText = playerResult;
    if (playerResult > perfectScore) {
        scores[0].innerText = playerResult + " -> You lose :(";
        askBtn.disabled = true;
        stopBtn.disabled = true;
    } else if (playerResult === perfectScore) {
        scores[0].innerText = playerResult + " -> Perfect Score :)";
        askBtn.disabled = true;
        stopBtn.disabled = true;
    }
});

stopBtn.addEventListener('click', () => {
    console.log('The PC says: my turn');
    askBtn.disabled = true;
    stopBtn.disabled = true;
    do {
        pcResult = playCards(pcPoints, pcField) + pcResult;
    } while (pcResult <= playerResult);
    scores[1].innerText = pcResult;
    if (pcResult > perfectScore || pcResult <= playerResult) {
        scores[1].innerText = pcResult + ' -> says: You win :(';
    } else if (pcResult > playerResult) {
        scores[1].innerText = pcResult + ' -> says: I win 3:)';
    } else scores[1].innerText = pcResult + " -> says: It's a draw :)(";
});

newBtn.addEventListener('click', () => {
    console.log('New game');
    window.location.reload();
})