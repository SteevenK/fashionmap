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
    points: "225,45 286,44 286,59 224,59"
  },
  {
    id: 2,
    name: 'Boutique B',
    description: 'Description de la Boutique B',
    points: "224,59 286,59 286.5,73 223,73"
  },
  {
    id: 3,
    name: 'Boutique C',
    description: 'Description de la Boutique B',
    points: "223,73 286.5,73 287,87.5 222,88"
  },
  {
    id: 4,
    name: 'Boutique D',
    description: 'Description de la Boutique B',
    points: "222,88 287,87.5 287,102.5 221,102"
  },
  {
    id: 5,
    name: 'Boutique E',
    description: 'Description de la Boutique B',
    points: "221,102 287,102.5 287.5,117.2 220.5,117.2"
  },
];
