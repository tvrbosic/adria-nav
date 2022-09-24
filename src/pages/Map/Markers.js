import { useEffect, useState } from 'react';
import { FeatureGroup, Marker } from 'react-leaflet';

import useHttpRequest from '../../hooks/useHttpRequest';

const Markers = () => {
  const [data, setData] = useState([]);
  const { isLoading, error, sendRequest } = useHttpRequest(); // Extract and handle isLoading & error

  const dataHandler = (data) => {
    console.log(data);
  };

  useEffect(() => {
    sendRequest({ url: 'https://plovput.li-st.net/getObjekti/' }, dataHandler);
  }, [sendRequest]);

  //return <div>Markers</div>;
  return (
    <FeatureGroup pathOptions={{ color: 'purple' }}>
      <Marker position={[45, 15]} />
    </FeatureGroup>
  );
};

export default Markers;
