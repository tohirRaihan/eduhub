import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <span className="text-danger fw-light h3">Edu</span>
                        <span className="text-success fw-bold h2">Hub</span>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                            <Link to="/courses" className="nav-link">
                                Courses
                            </Link>
                            <Link to="/blogs" className="nav-link">
                                Blogs
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
