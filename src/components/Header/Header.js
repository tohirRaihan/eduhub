import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Link to='/' className='navbar-brand'>React-Bootstrap</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/home' className='nav-link'>Home</Link>
                            <Link to='/about' className='nav-link'>About</Link>
                            <Link to='/services' className='nav-link'>Services</Link>
                            <Link to='/blog' className='nav-link'>Blog</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
