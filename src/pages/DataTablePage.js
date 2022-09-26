import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import useHttpRequest from '../hooks/useHttpRequest';
import Header from '../components/Header';
import DataTable from '../components/DataTable';

const NavObjectsData = () => {
  const [objectData, setObjectData] = useState([]);
  const { sendRequest } = useHttpRequest();

  const dataHandler = (data) => {
    setObjectData(data.features);
  };

  useEffect(() => {
    sendRequest({ url: 'https://plovput.li-st.net/getObjekti/' }, dataHandler);
  }, [sendRequest]);

  const dataLoaded = objectData.length > 0 ? true : false;

  return (
    <>
      <Header />
      <Container>
        {dataLoaded && (
          <DataTable
            headers={[
              'Naziv objekta',
              'PS broj',
              'E broj',
              'Tip objekta',
              'Lučka kapetanija',
            ]}
            data={objectData}
          />
        )}
      </Container>
    </>
  );
};

export default NavObjectsData;
