import { Wookie } from "./wookie";

/**
 * Des commentaires pour expliquer l'interface
 */
export interface Selfie {
    wookie: Wookie;
    dateCreation: Date;
    datePrise: Date;
    titre: string;
    description: string;
}