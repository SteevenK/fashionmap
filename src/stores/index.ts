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
    name: 'Boutique 1',
    description: 'Description de la Boutique A',
    points: "225,45 286,44 286,59 224,59"
  },
  {
    id: 2,
    name: 'Boutique 2',
    description: 'Description de la Boutique B',
    points: "224,59 286,59 286.5,73 223,73"
  },
  {
    id: 3,
    name: 'Boutique 3',
    description: 'Description de la Boutique B',
    points: "223,73 286.5,73 287,87.5 222,88"
  },
  {
    id: 4,
    name: 'Boutique 4',
    description: 'Description de la Boutique B',
    points: "222,88 287,87.5 287,102.5 221,102"
  },
  {
    id: 5,
    name: 'Boutique 5',
    description: 'Description de la Boutique B',
    points: "221,102 287,102.5 287.5,117.25 220.5,117.25"
  },
  {
    id: 6,
    name: 'Boutique 6',
    description: 'Description de la Boutique B',
    points: "220.55,117.25 287.5,117.25 287.75,131.5 219.5,131.5"
  },
  {
    id: 7,
    name: 'Boutique 7',
    description: 'Description de la Boutique B',
    points: "219.5,131.5 287.75,131.5 287.75,146 218.5,146"
  },
  {
    id: 8,
    name: 'Boutique 8',
    description: 'Description de la Boutique B',
    points: "218.5,146 287.75,146 288,160.75 217.5,160.75"
  },
];
