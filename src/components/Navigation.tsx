import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Calculator, User } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="primary" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
          <Calculator className="me-2" />
          ICAS 2026 CHALLENGE
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Stats</Nav.Link>
            <Nav.Link as={Link} to="/exam" className="px-3">
              <Button variant="outline-light" size="sm">Practice Now</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <User size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;