console.info('Ah que coucou');

class Wookie {
    prenom = '';
}

const wookie = new Wookie();
wookie.prenom = 'Chewie';
console.info(`prenom : ${wookie.prenom}`);

globalThis.prenom = '';