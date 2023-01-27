"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arme_1 = require("./arme");
const selfies = [];
const wookie = {
    prenom: 'Chewie'
};
selfies.push({
    dateCreation: new Date(),
    datePrise: new Date(),
    description: 'Trop bien, je suis avec Anakin !',
    titre: 'A mustafar',
    wookie: wookie
});
const arme = new arme_1.Arme();
