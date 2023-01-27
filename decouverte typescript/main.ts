import { Wookie, Arme, Deplacement } from './wookie';

// Json en javascript => objet litteral
// const veloA = {
//     roue: {
//         diametre: 18
//     }
// }
// veloA.roue.diametre

const velo: Deplacement = {
    seDeplacer(): void {
        console.info('je suis un vélo qui avance');
    }
};

velo.seDeplacer();

// write a typescript code with a class Wookie 




console.info('coucou');

const wookie = new Wookie();
wookie.hurler('grrrr');

let prenom = 'Chewie';
// prenom = 4;

let taille: number;
taille = 4;

let jedi: any;
jedi = 8;
jedi.prenom = 'Luke';
jedi.prenom = 4;
jedi = false;

class Jedi {
    private prenom = '';

    constructor(prenomM: string) {
        this.prenom = prenomM;
    }
}