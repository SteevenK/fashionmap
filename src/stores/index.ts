// stores.ts

export type Store = {
  id: number;
  name: string;
  description: string;
  // Points pour le polygone au format "x1,y1 x2,y2 x3,y3 ..."
  points: string;
};

export const stores: Store[] = [
  {
    id: 1,
    name: 'Boutique A',
    description: 'Description de la Boutique A',
    points: "100,150 200,150 200,250 100,250"
  },
  {
    id: 2,
    name: 'Boutique B',
    description: 'Description de la Boutique B',
    points: "300,350 400,350 400,450 300,450"
  },
  // Ajoutez ici d'autres boutiques avec leurs polygones
];
