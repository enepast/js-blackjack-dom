import _ from 'underscore';
/**
 * This function creates a new deck
 * @param {Array<String>} types Example: ['C', 'D', 'H', 'S']
 * @param {Array<String>} specials Example: ['J', 'Q', 'K', 'A']
 * @returns {Array<String>} Returns a new deck
 */
export const createDeck = (types, specials) => {
    if(!types || types.length === 0) throw new Error('types are mandatory');
    if(!specials || specials.length === 0) throw new Error('specials are mandatory');

    let deck = [];
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