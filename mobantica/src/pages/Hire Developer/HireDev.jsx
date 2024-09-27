import React from 'react'
import TestimonialSlider from '../../components/Testimonial slider/TestimonialSlider'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ChooseUs from '../../components/chooseUs/ChooseUs'
import TrackRecord from '../../components/TrackRecord/TrackRecord'
import JoinMobantica from '../../components/Join Mobantica/JoinMobantica'
import ContactForm from '../../components/ContactForm/ContactForm'


const HireDev = () => {
  return (
    <Container>
    <Row>
      <Col md={7} xs={12}>
      <p className='fs-3 fw-bold'>Hire Developer</p>
      <p>Hire skilled developers from our Flutter Flow Experts team to unlock your app’s full potential! Bring on a dedicated team of Flutter Flow developers who excel in creating responsive, dynamic websites and mobile apps.
Discover top-tier Flutter Flow developers passionate about building high-performance cross-platform applications. Our experienced team will elevate your project with expertise and precision.</p>
   <div className='d-flex justify-content-start align-items-center  '>
    <p className='mx-2 fs-5 fw-bold'>Got a Project in mind?</p>
    <Button>Book a consultation call</Button>
   </div>
   <JoinMobantica />
      </Col>
      <Col md={5} xs={12}>
      <ContactForm />
      </Col>

    </Row>
    <TrackRecord />
    <ChooseUs />
    <TestimonialSlider />
    </Container>
     
    
  )
}

export default HireDev
