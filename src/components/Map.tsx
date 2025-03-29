import React, { useState, useRef, MouseEvent } from 'react';
import ModernModal from './Modal';
import StorePolygon from './StorePolygon'; // votre composant pour dessiner un store
import { stores, Store } from '../stores';  // Importation de la liste et du type

// Calcule le centre (moyenne des coordonnées) d'un polygone
function getPolygonCenter(points: string): { x: number; y: number } {
  const coords = points
    .trim()
    .split(' ')
    .map((point) => point.split(',').map(Number));
  const total = coords.reduce(
    (acc, [x, y]) => ({ x: acc.x + x, y: acc.y + y }),
    { x: 0, y: 0 }
  );
  return { x: total.x / coords.length, y: total.y / coords.length };
}

const Map: React.FC = () => {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [hoveredStore, setHoveredStore] = useState<Store | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  // Dimensions du viewBox utilisées dans le SVG
  const svgWidth = 800;
  const svgHeight = 600;
  const gridSpacing = 5;

  const handleMouseEnter = (store: Store, event: MouseEvent<SVGPolygonElement>) => {
    setHoveredStore(store);
    const center = getPolygonCenter(store.points);
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const scale = rect.width / svgWidth;
      const tooltipX = rect.left + center.x * scale;
      const tooltipY = rect.top + center.y * scale;
      setTooltipPos({ x: tooltipX, y: tooltipY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredStore(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* Titre de la carte */}
      <h1 className="text-2xl font-bold mb-4">Carte interactive de FashionCenter</h1>

      {/* Container pour la carte avec largeur maximale de 1000px */}
      <div className="relative w-full max-w-[1000px]">
        <svg ref={svgRef} viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto">
          {/* Image de fond via l'élément <image> du SVG */}
          <image href="/FashionEtage1.png" x="0" y="0" width={svgWidth} height={svgHeight} />

          {/* Quadrillage */}
          {Array.from({ length: Math.floor(svgWidth / gridSpacing) + 1 }).map((_, i) => {
            const x = i * gridSpacing;
            const strokeColor = x % 25 === 0 ? "green" : "lightgray";
            const strokeWidth = x % 25 === 0 ? 0.75 : 0.25;
            return (
              <line key={`v-${x}`} x1={x} y1={0} x2={x} y2={svgHeight} stroke={strokeColor} strokeWidth={strokeWidth} />
            );
          })}
          {Array.from({ length: Math.floor(svgHeight / gridSpacing) + 1 }).map((_, i) => {
            const y = i * gridSpacing;
            const strokeColor = y % 25 === 0 ? "green" : "lightgray";
            const strokeWidth = y % 25 === 0 ? 0.75 : 0.25;
            return (
              <line key={`h-${y}`} x1={0} y1={y} x2={svgWidth} y2={y} stroke={strokeColor} strokeWidth={strokeWidth} />
            );
          })}
          {Array.from({ length: Math.floor(svgWidth / gridSpacing) + 1 }).map((_, i) => {
            const x = i * gridSpacing;
            return x % 25 === 0 ? (
              <text key={`v-text-${x}`} x={x + 1} y={10} fill="green" fontSize="6">
                {x}
              </text>
            ) : null;
          })}
          {Array.from({ length: Math.floor(svgHeight / gridSpacing) + 1 }).map((_, i) => {
            const y = i * gridSpacing;
            return y % 25 === 0 ? (
              <text key={`h-text-${y}`} x={1} y={y - 1 > 6 ? y - 1 : 6} fill="green" fontSize="6">
                {y}
              </text>
            ) : null;
          })}

          {/* Utilisation du composant StorePolygon pour chaque store */}
          {stores.map(store => (
            <StorePolygon
              key={store.id}
              store={store}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={setSelectedStore}
            />
          ))}
        </svg>

        {/* Tooltip affiché en position fixe */}
        {hoveredStore && (
          <div
            className="fixed bg-gray-800 text-white text-xs px-2 py-1 rounded pointer-events-none"
            style={{
              top: tooltipPos.y,
              left: tooltipPos.x,
              transform: 'translate(-50%, -50%)',
              zIndex: 20,
            }}
          >
            {hoveredStore.name}
          </div>
        )}
      </div>

      {/* Modal pour afficher les détails au clic */}
      {selectedStore && (
        <ModernModal
          isOpen={true}
          onClose={() => setSelectedStore(null)}
          title={selectedStore.name}
        >
          <p>{selectedStore.description}</p>
        </ModernModal>
      )}
    </div>
  );
};

export default Map;
