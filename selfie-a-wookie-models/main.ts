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