import './style.css';
import _ from 'underscore';
(() => {
  'use strict'
  const types = ['C', 'D', 'H', 'S'],
      specials = ['J', 'Q', 'K', 'A'],
      perfectScore = 21;
  let deck = [],
      points = 0,
      pcPoints = 0;

  // html references
  const askBtn = document.querySelector('#btnAsk'),
      stopBtn = document.querySelector('#btnStop'),
      newBtn = document.querySelector('#btnNew');
  let scores = document.querySelectorAll('small'),
      playerField = document.querySelector('#player-cards'),
      pcField = document.querySelector('#pc-cards'),
      playerResult = 0,
      pcResult = 0;

  // necessary functions
  const createDeck = () => {

      deck = [];
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
      return _.shuffle(deck);
  };

  const askCard = (deck) => {
      if (deck.length === 0) throw "There's no cards in the deck";
      return deck.pop();
  };

  const valueCard = (card) => {
      const value = card.substring(0, card.length - 1);
      return (isNaN(value)) ?
          (value === 'A') ? 11 : 10 :
          value * 1;
  };

  // events
  const playCards = (points, field) => {
      const card = askCard(createDeck());
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
      window.location.reload();
  })
})();
