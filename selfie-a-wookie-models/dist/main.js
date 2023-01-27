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
function afficherItemsAvecUnTitre(tableau) {
    tableau.forEach(item => {
        console.info(item.titre);
    });
}
const nouveauTableau = [
    { titre: 'mon titre 1' },
    { titre: 'mon titre 2' }
];
const nouveauTableau2 = [
    { titre: 'mon titre 1' },
    { titre: 'mon titre 2' }
];
afficherItemsAvecUnTitre(selfies);
afficherItemsAvecUnTitre(nouveauTableau);
afficherItemsAvecUnTitre(nouveauTableau2);
