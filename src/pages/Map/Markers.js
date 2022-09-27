import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import useHttpRequest from '../../hooks/useHttpRequest';
import MapMarker from './MapMarker';
import LoadingOverlay from '../../components/LoadingOverlay';

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
      {!dataLoaded && (
        <LoadingOverlay>
          <Spinner
            animation='border'
            variant='primary'
            style={{ width: '4rem', height: '4rem' }}
          />
        </LoadingOverlay>
      )}
    </>
  );
};

export default Markers;
