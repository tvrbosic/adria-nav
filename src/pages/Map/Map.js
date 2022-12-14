import MarkerClusterGroup from 'react-leaflet-cluster';
import {
  useMap,
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
  ZoomControl,
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

const Map = (props) => {
  return (
    <MapContainer
      scrollWheelZoom={true}
      bounds={mapBounds}
      zoomControl={false}
      className={`${styles.mapContainer} ${props.className}`}>
      <ConfigureMap />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <LayersControl position='topright'>
        <LayersControl.Overlay checked name='Safety objects'>
          <LayerGroup>
            <MarkerClusterGroup chunkedLoading>
              <Markers />
            </MarkerClusterGroup>
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
      <ZoomControl position='bottomleft' />
    </MapContainer>
  );
};

export default Map;
