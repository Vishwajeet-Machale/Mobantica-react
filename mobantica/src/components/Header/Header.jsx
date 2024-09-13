import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { assets } from '../../assets/assets';
import './Header.css';

function Header() {
  const navigate = useNavigate();
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

  const handleContactUs = () => {
    navigate('/contact-us');
  }

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
        <Navbar.Brand as={Link} to="/">
          <img src={assets.logo}  alt="Logo" style={{ height: 35 }} />
        </Navbar.Brand>

        {/* Toggle button for responsive navbar */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link className="mx-2" as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="mx-2">About us</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown" className="mx-2">
              <NavDropdown.Item as={Link} className='dropdown-item' to="/services">Web Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} className='dropdown-item' to="/services">Mobile Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} className='dropdown-item' to="/services">UI/UX Design</NavDropdown.Item>
              <NavDropdown.Item as={Link} className='dropdown-item' to="/services">Digital Marketing</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hire Developer" id="hire-developer-dropdown" className="mx-2">
              <NavDropdown.Item as={Link} className='dropdown-item' to="/hire-developer">Frontend Developer</NavDropdown.Item>
              <NavDropdown.Item as={Link} className='dropdown-item' to="/hire-developer">Backend Developer</NavDropdown.Item>
              <NavDropdown.Item as={Link} className='dropdown-item' to="/hire-developer">Fullstack Developer</NavDropdown.Item>
              <NavDropdown.Item as={Link} className='dropdown-item' to="/hire-developer">DevOps Engineer</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/caseStudy" className="mx-2">Case Study</Nav.Link>
            <Nav.Link as={Link} to="/Blog" className="mx-2">Blog</Nav.Link>
            <Nav.Link as={Link} to="/careers" className="mx-2">Careers</Nav.Link>
          </Nav>

          {/* Contact Info */}
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <span className="me-3">+123-456-7890</span>
            <Button className='contact-us-btn' onClick={handleContactUs}>Contact Us</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
