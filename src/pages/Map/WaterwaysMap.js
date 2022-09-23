import { useMap, MapContainer, TileLayer, Rectangle } from 'react-leaflet';

import styles from './WaterwaysMap.module.css';

const minZoom = 7;

const mapBounds = [
  [42.126747, 13.112183],
  [46.585294, 19.489746],
];

const ConfigureMap = () => {
  const map = useMap();
  map.setMaxBounds(mapBounds);
  map.setMinZoom(minZoom);
  return null;
};

const WaterwaysMap = () => {
  return (
    <MapContainer
      scrollWheelZoom={true}
      bounds={mapBounds}
      className={styles['mapContainer-div']}>
      <ConfigureMap />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Rectangle bounds={mapBounds} />
    </MapContainer>
  );
};

export default WaterwaysMap;
