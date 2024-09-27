import React from 'react'
import ChooseUs from '../../components/chooseUs/ChooseUs.jsx';
import TrackRecord from '../../components/TrackRecord/TrackRecord.jsx';
import TestimonialSlider from '../../components/Testimonial slider/TestimonialSlider';
import JoinMobantica from '../../components/Join Mobantica/JoinMobantica.jsx';
import Companies from '../../components/Companies/Companies.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx'

import { Container, Row , Col} from 'react-bootstrap';

const Services = () => {
  return (
    <div>
      <Container>
        <Row >
          <Col md={6} xs={12} >
          <p className='fs-3 fw-bold'>Leading Mobile App Development Company in Pune</p>
          <p>Looking to propel your best business forward in today’s competitive landscape? Look no further! 

Mobantica Solutions offers innovative and cost-effective solutions to help businesses thrive. Specializing in state-of-the-art Android app development services, we empower startups and enterprises to achieve exponential growth

Mobantica Solutions is a mobile application development company that builds highly scalable mobile applications using agile development processes leveraging the latest mobile technologies</p>
          </Col>
          <Col md={6} xs={12} >
          <ContactForm></ContactForm>
          </Col>
          
        </Row>
      </Container>
     <ChooseUs />
     <TrackRecord />
     <Companies />
     <TestimonialSlider />
     <JoinMobantica />
    </div>
  )
}

export default Services
