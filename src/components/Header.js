import { Link, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
      <Container>
        <Navbar.Brand href='/'>AdriaNav</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-center'
          as={Link}>
          <Nav>
            <Nav.Link as={NavLink} to='/' end>
              Interaktivna karta
            </Nav.Link>
            <Nav.Link as={NavLink} to='/objects'>
              Sigurnosni objekti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
