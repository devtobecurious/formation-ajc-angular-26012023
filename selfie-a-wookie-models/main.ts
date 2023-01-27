import {Selfie} from './selfie';
import { Wookie } from './wookie';
import {Arme} from './arme';


const selfies: Selfie[] = [];

const wookie: Wookie = {
    prenom: 'Chewie'
};

selfies.push({
    dateCreation: new Date(),
    datePrise: new Date(),
    description: 'Trop bien, je suis avec Anakin !',
    titre: 'A mustafar',
    wookie: wookie
});

const arme = new Arme();


type CommeUnWookie = {
    prenom: string;
}

type CommeUnSelfie = {
    wookie: CommeUnWookie;
    dateCreation: Date;
    datePrise: Date;
    titre: string;
    description: string;
}

type AvecUnTitre = {
    titre: string
}

function afficherItemsAvecUnTitre(tableau: AvecUnTitre[]): void {
    tableau.forEach(item => {
        console.info(item.titre);
    });
}

const nouveauTableau: {titre: string}[] = [
    { titre: 'mon titre 1'},
    { titre: 'mon titre 2'}
];

const nouveauTableau2 = [
    { titre: 'mon titre 1'},
    { titre: 'mon titre 2'}
];

afficherItemsAvecUnTitre(selfies);
afficherItemsAvecUnTitre(nouveauTableau);
afficherItemsAvecUnTitre(nouveauTableau2);