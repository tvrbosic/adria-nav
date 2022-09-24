import { useEffect, useState } from 'react';

import useHttpRequest from '../../hooks/useHttpRequest';
import MapMarker from './MapMarker';

const Markers = () => {
  const [markerData, setMarkerData] = useState([]);
  const { sendRequest } = useHttpRequest();

  const dataHandler = (data) => {
    setMarkerData(data.features);
  };

  useEffect(() => {
    sendRequest({ url: 'https://plovput.li-st.net/getObjekti/' }, dataHandler);
  }, [sendRequest]);

  const dataLoaded = markerData.length > 0 ? true : false;

  return (
    <>
      {dataLoaded &&
        markerData.map((item) => (
          <MapMarker key={item.properties.pk} item={item} />
        ))}
    </>
  );
};

export default Markers;
