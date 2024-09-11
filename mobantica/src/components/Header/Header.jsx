import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { assets } from '../../assets/assets';
import './Header.css';

function Header() {

  const [show, setShow] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      setShow(false);
    } else {
      // Scrolling up
      setShow(true);
    }
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <Navbar bg="transparent" expand="lg" className={`py-3 header ${show ? 'd-flex' : 'd-none'}`} style={{ borderBottom: '1px solid grey' }}>
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img src={assets.logo} alt="Logo" style={{ height: 35 }} />
        </Navbar.Brand>

        {/* Toggle button for responsive navbar */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About us</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown" className="mx-2">
              <NavDropdown.Item href="#web-development">Web Development</NavDropdown.Item>
              <NavDropdown.Item href="#mobile-development">Mobile Development</NavDropdown.Item>
              <NavDropdown.Item href="#ui-ux-design">UI/UX Design</NavDropdown.Item>
              <NavDropdown.Item href="#digital-marketing">Digital Marketing</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hire Developer" id="hire-developer-dropdown" className="mx-2">
              <NavDropdown.Item href="#frontend-developer">Frontend Developer</NavDropdown.Item>
              <NavDropdown.Item href="#backend-developer">Backend Developer</NavDropdown.Item>
              <NavDropdown.Item href="#fullstack-developer">Fullstack Developer</NavDropdown.Item>
              <NavDropdown.Item href="#devops-engineer">DevOps Engineer</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Case-Study" className="mx-2">Case Study</Nav.Link>
            <Nav.Link href="#Blog" className="mx-2">Blog</Nav.Link>
            <Nav.Link href="#Careers" className="mx-2">Careers</Nav.Link>
          </Nav>

          {/* Contact Info */}
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <span className="me-3">+123-456-7890</span>
            <Button style={{ backgroundColor: '#010ED0', borderRadius: '5px', padding: '6px 20px' }}>Contact Us</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
