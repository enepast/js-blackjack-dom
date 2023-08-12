import _ from 'underscore';
import { askFunction, stopFunction } from './usecases/stop-btn';
(() => {
    'use strict'
    const perfectScore = 21;

    // html references
    const askBtn = document.querySelector('#btnAsk'),
        stopBtn = document.querySelector('#btnStop'),
        newBtn = document.querySelector('#btnNew');

    // events
    askBtn.addEventListener('click', () => {
        askFunction(perfectScore);
    });

    stopBtn.addEventListener('click', () => {
        stopFunction(perfectScore);
    });

    newBtn.addEventListener('click', () => {
        window.location.reload();
    })
})();