import { useEffect, useState } from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

import useHttpRequest from '../../hooks/useHttpRequest';

const Markers = () => {
  const [markerData, setMarkerData] = useState([]);
  const { sendRequest } = useHttpRequest(); // Extract and handle isLoading & error

  const dataHandler = (data) => {
    console.log(data.features);
    setMarkerData(data.features);
  };

  useEffect(() => {
    sendRequest({ url: 'https://plovput.li-st.net/getObjekti/' }, dataHandler);
  }, [sendRequest]);

  const MarkersList = () => {
    return markerData.map((item) => {
      const Icon = new L.Icon({
        iconUrl: require('../../assets/green_pin.png'),
        shadowUrl: require('../../assets/pin_shadow.png'),
        //iconSize: new L.Point(60, 75),
        iconSize: [50, 50],
        shadowSize: [50, 40],
        iconAnchor: [25, 50],
        shadowAnchor: [25, 50],
      });

      return (
        <Marker
          key={item.properties.pk}
          position={[
            item.geometry.coordinates[1],
            item.geometry.coordinates[0],
          ]}
          icon={Icon}>
          <Popup>Test</Popup>
        </Marker>
      );
    });
  };

  const dataLoaded = markerData.length > 0 ? true : false;

  return <>{dataLoaded && <MarkersList />}</>;
};

export default Markers;
