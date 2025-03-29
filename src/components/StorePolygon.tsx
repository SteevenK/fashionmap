import React, { MouseEvent } from 'react';
import {Store} from "../stores";

interface StorePolygonProps {
  store: Store;
  onMouseEnter: (store: Store, event: MouseEvent<SVGPolygonElement>) => void;
  onMouseLeave: () => void;
  onClick: (store: Store) => void;
}

const StorePolygon: React.FC<StorePolygonProps> = ({ store, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <polygon
      points={store.points}
      fill="rgba(255, 0, 0, 0.2)"  // fond rouge semi-transparent
      stroke="red"
      strokeWidth={0.5}
      style={{ cursor: 'pointer' }}
      onMouseEnter={(e: MouseEvent<SVGPolygonElement>) => onMouseEnter(store, e)}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(store)}
    />
  );
};

export default StorePolygon;
