export interface Deplacement {
    seDeplacer(): void;
}

export class Wookie implements Deplacement {
    prenom = "Wookie";

    hurler(message: string): void {
        console.info(message);
    }

    seDeplacer(): void {
        console.info('Je cours');
    }
}

export class Arme {
}