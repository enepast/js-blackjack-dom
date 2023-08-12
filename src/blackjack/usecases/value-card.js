/**
 * 
 * @param {String} card
 * @returns {Number}Returns the value of this card in Blackjack
 */
export const valueCard = (card) => {
    const value = card.substring(0, card.length - 1);
    return (isNaN(value)) ?
        (value === 'A') ? 11 : 10 :
        value * 1;
};