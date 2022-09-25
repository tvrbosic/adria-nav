import { Container } from 'react-bootstrap';

import Header from '../components/Header';
import DataTable from '../components/DataTable';

const NavObjectsData = () => {
  return (
    <>
      <Header />
      <Container>
        <DataTable />
      </Container>
    </>
  );
};

export default NavObjectsData;
