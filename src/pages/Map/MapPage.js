import { Container } from 'react-bootstrap';

import Header from '../../components/Header';
import Map from './Map';

const MapPage = () => {
  return (
    <>
      <Header />
      <Container className='justify-content-center'>
        <Map />
      </Container>
    </>
  );
};

export default MapPage;
