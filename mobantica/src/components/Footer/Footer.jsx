import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import { assets } from '../../assets/assets';

const list = {
  Company: ["Home", "About us", "Blog", "Contact"],
  Services: ["Cross platform mobile development", "Mobile App Development", "Web Development", "Product Development", "Woo Commerce", "UI/UX Design"],
  Hire: ["Flutter Developer", "Android Developer", "iOS Developer", "Node Js Developer", "PHP Developer", "Angular Js Developer", "React Native Developer", "React Js Developer"],
}

const Footer = () => {
  return (
    <>
      <Container fluid className='Footer-Container'>
        <Row className='Footer-top-section justify-content-evenly p-5'>
          {Object.keys(list).map((key, index) => (
            <Col key={index} md={3} className='mb-4'>
              <h5 className='fw-bold'>{key}</h5>
              <ul className='list-unstyled'>
                {list[key].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Col>
          ))}
          <Col md={3} className='d-flex flex-column align-items-center justify-content-center'>
            <img src={assets.FooterLogo} alt="" className='footer-logo m-3' />
            <Button>Schedule Consultation</Button>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className='justify-content-between mt-2'>
          <Col xs={12} md={4}>
            <p className='fs-6'>Third Floor, Guruprasad Building, Near Sai Chowk, Pashan Sus Road- 411021</p>
          </Col>
          <Col xs={12} md={4} className='d-flex justify-content-center align-items-center'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='mx-4'>
              <FaFacebookF size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='mx-4'>
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='mx-4'>
              <FaInstagram size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer;
