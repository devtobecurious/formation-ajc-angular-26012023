"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arme = exports.Wookie = void 0;
class Wookie {
    prenom = "Wookie";
    hurler(message) {
        console.info(message);
    }
    seDeplacer() {
        console.info('Je cours');
    }
}
exports.Wookie = Wookie;
class Arme {
}
exports.Arme = Arme;
