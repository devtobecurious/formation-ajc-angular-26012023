export interface Wookie {
  prenom: string;
}

export interface Selfie {
  wookie: Wookie;
  titre: string;
  description: string;
  dateCreation: Date
}
