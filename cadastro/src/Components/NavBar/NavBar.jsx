import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>

                <Link to="/"><Navbar.Brand href="#home" >Marlon Erick</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link id="RouterNavLink" to="/">Home</Link></Nav.Link>
                        <Nav.Link ><Link id="RouterNavLink" to="/cadastrar">Cadastrar</Link></Nav.Link>
                        <Nav.Link ><Link id="RouterNavLink" to="/cadastrados">Cadastrados</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;