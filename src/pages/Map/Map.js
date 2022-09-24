import {
  useMap,
  MapContainer,
  TileLayer,
  ZoomControl,
  Rectangle,
} from 'react-leaflet';

import styles from './Map.module.css';
import Markers from './Markers';

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
      zoomControl={false}
      className={styles['mapContainer-div']}>
      <ConfigureMap />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomleft" />
      <Markers />
    </MapContainer>
  );
};

export default WaterwaysMap;
