import React, { useState } from 'react';

interface StoreInfo {
  id: number;
  name: string;
  info: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const stores: StoreInfo[] = [
  { id: 1, name: 'Magasin A', info: 'Informations sur le Magasin A', x: 50, y: 50, width: 100, height: 80 },
  { id: 2, name: 'Magasin B', info: 'Informations sur le Magasin B', x: 200, y: 50, width: 120, height: 90 },
];

const App: React.FC = () => {
  const [hoveredStore, setHoveredStore] = useState<StoreInfo | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Fashion Center</h1>
        <p className="text-lg text-gray-600 mt-2">
          Découvrez la carte interactive de notre centre commercial
        </p>
      </header>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
        {/* Section SVG pour la carte */}
        <div className="relative">
          <svg
            width="600"
            height="400"
            className="rounded-lg shadow-lg border border-gray-300"
          >
            {/* Image de fond du plan - placer l'image dans le dossier public */}
            <image href="/images/fashion-center-map.jpg" x="0" y="0" width="600" height="400" />
            {/* Zones interactives pour chaque magasin */}
            {stores.map((store) => (
              <rect
                key={store.id}
                x={store.x}
                y={store.y}
                width={store.width}
                height={store.height}
                fill="transparent"
                stroke="#ff4081"
                strokeWidth="3"
                rx="8"
                ry="8"
                style={{ cursor: 'pointer', transition: 'stroke-width 0.2s' }}
                onMouseEnter={() => setHoveredStore(store)}
                onMouseLeave={() => setHoveredStore(null)}
              />
            ))}
          </svg>
        </div>

        {/* Sidebar pour afficher les informations du magasin survolé */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-80">
          {hoveredStore ? (
            <div>
              <h2 className="text-2xl font-semibold text-pink-500">{hoveredStore.name}</h2>
              <p className="text-gray-700 mt-2">{hoveredStore.info}</p>
            </div>
          ) : (
            <p className="text-gray-500">
              Passez votre souris sur un magasin pour voir les informations.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
