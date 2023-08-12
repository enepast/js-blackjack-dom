import { askCard } from "./ask-card";
import { createDeck } from "./create-deck";
import { valueCard } from "./value-card";
const types = ['C', 'D', 'H', 'S'],
    specials = ['J', 'Q', 'K', 'A'];

    /**
     * 
     * @param {String} field Field item in HTML
     * @returns {Number} Points made with the card/s
     */
export const playCards = (field) => {
    let points = 0;
    const card = askCard(createDeck(types, specials));
    points = points + valueCard(card);
    const newCard = document.createElement('img');
    newCard.classList.add('carta');
    newCard.src = `assets/cartas/cartas/${card}.png`;
    field.append(newCard);
    return points;
}