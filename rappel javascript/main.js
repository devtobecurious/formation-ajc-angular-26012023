console.info('coucou');

window.taille = 230;

// context global (pas dans une function)
var poids = 240;
poids = 'coucou';

function Wookie(prenomAModifier) {
    this.prenom = prenomAModifier;
    console.info(window.prenom);
    console.info('je suis un wookie ' + this.prenom + ' ' + this.taille + ' ' + this.poids);
}
Wookie('Chewie Window');

// de base : window == this == var

console.info(this.prenom);
console.info(window.prenom);

/*** NEW ET CONTEXT du THIS */

const monWookie = new Wookie('Chewie new');
monWookie.poids = 18;


function Ours(prenomAModifier) {
    this.prenom = prenomAModifier;
    console.info('ours', this.prenom);
}

const winnie = new Ours('Winnie');

const contextOursPourLeWookie = Wookie.bind(winnie); // On prépare, on n'exécute pas la fonction
contextOursPourLeWookie('test prenom');

Wookie.call(winnie, 'Nouveau prénom de winnie'); // On passe un context et on exécute la fonction Wookie()




/** DELEGATES  */
function calculer(param1, param2, afficher) {
    if (arguments.length < 3) {
        throw new Error('Il manque des paramètres');
    }

    if (typeof(param1) !== 'number' || typeof(param2) !== 'number') {
        throw new Error('Les deux paramètres doivent être des nombres');
    }

    const result = param1 + param2;

    if (typeof(afficher) === 'function') {
        afficher('result du calcul : ' + result);
    }
}

const maLambda = param => console.info(param);

function afficherEnRouge(param) {
    console.error(param);
}

calculer('1', true, afficherEnRouge);

/**  */
class WookieeC {
    prenom = '';
    #taille = 230;

    constructor(unPrenom) {
        this.prenom = unPrenom;
    }

    hurler() {
        console.info('wrrrroaa');
    }

    get taille() {
        return this.#taille;
    }

    set taille(value) {
        this.#taille = value;
    }

}
const wook = new WookieeC('Chewie');
// wook.prenom = 'Chewie';

wook.hurler();
wook.taille = 250;
console.info(wook.taille);
