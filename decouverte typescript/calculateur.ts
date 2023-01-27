export function calculer(param1: number, param2: number, afficher: Function): void {
    const result = param1 + param2;

    afficher(result);
}

calculer(1, 2, mess => console.info(mess));