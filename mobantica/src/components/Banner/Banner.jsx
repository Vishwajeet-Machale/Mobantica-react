import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Banner.css'; 
import { assets } from '../../assets/assets';

const Banner = () => {
  return (
    <Container fluid className="banner-container">
      <Row className="align-items-center">
        {/* Text and Info Section */}
        <Col lg={6} md={12} className="text-section">
          <div className="text-content">
            <h1>Let us handle your IT needs, so you can focus on running your business</h1>
            <p>Safeguard your business with top-tier mobile app development and IT solutions.</p>
          </div>
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start my-4">
            <Button className="mx-3 mb-2 mb-lg-0 button-consultation">Book a Free consultation call</Button>
            <Button className="button-team">Create your team</Button>
          </div>
        </Col>

        {/* Banner Image Section */}
        <Col lg={6} md={12} className="image-section">
          <img src={assets.banner} alt="Banner" className="banner-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
