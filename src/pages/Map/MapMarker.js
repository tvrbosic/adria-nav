import L from 'leaflet';
import { Marker } from 'react-leaflet';

import MarkerPopup from './MarkerPopup';

const MapMarker = ({ item }) => {
  const Icon = new L.Icon({
    iconUrl: require('../../assets/green_pin.png'),
    shadowUrl: require('../../assets/pin_shadow.png'),
    iconSize: [50, 50],
    shadowSize: [50, 40],
    iconAnchor: [25, 50],
    shadowAnchor: [25, 50],
  });

  return (
    <Marker
      position={[item.geometry.coordinates[1], item.geometry.coordinates[0]]}
      icon={Icon}>
      <MarkerPopup item={item} />
    </Marker>
  );
};

export default MapMarker;
