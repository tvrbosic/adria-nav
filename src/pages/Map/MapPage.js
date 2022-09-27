import { Container } from 'react-bootstrap';

import Header from '../../components/Header';
import Map from './Map';

const MapPage = () => {
  return (
    <Container fluid className='d-flex flex-column vh-100 p-0'>
      <Header />
      <Map className='d-flex' />
    </Container>
  );
};

export default MapPage;
