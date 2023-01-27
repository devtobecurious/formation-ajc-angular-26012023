"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wookie_1 = require("./wookie");
console.info('coucou');
const wookie = new wookie_1.Wookie();
wookie.hurler('grrrr');
let prenom = 'Chewie';
// prenom = 4;
let taille;
taille = 4;
let jedi;
jedi = 8;
jedi.prenom = 'Luke';
jedi.prenom = 4;
jedi = false;
class Jedi {
    prenom = '';
    constructor(prenomM) {
        this.prenom = prenomM;
    }
}
