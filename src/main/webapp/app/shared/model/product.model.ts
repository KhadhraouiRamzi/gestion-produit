export interface IProduct {
  id?: number;
  nom?: string;
  prixUnitaire?: number;
  quantity?: number;
}

export class Product implements IProduct {
  constructor(public id?: number, public nom?: string, public prixUnitaire?: number, public quantity?: number) {}
}
