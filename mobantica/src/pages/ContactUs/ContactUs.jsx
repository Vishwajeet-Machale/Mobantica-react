import React from 'react'
import JoinMobantica from '../../components/Join Mobantica/JoinMobantica'
import { Container, Row, Col } from 'react-bootstrap'
import './ContactUs.css'
import { Envelope, Telephone, Skype } from 'react-bootstrap-icons';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactUs = () => {

const list = ["Client Oriented", "Result-driven", "Independent", "Problem-solving", "Competent", "Transperent"]

  return (
    <>
     <Container fluid className='Contact-us-top-section'>
      <Row className='d-flex justify-content-center align-items-center ms-4'>
        <Col md={6} xs={12} className='address-section' >
           <p className='fs-4 fw-bold'>India</p>
           <p className='fw-bold fs-6'>Pune</p>
           <p className='fs-6'>Second Floor, Guruprasad <br /> Building,<br />
Near Sai Chowk,<br />
Pashan Sus Road- 411021 <br />

+91-8600990592</p>
<p className='fw-bold fs-6'>Contact us</p>
<p>Connecting is just a click away - Reach out to us today!</p>
<p>We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.</p>
<p className='fw-bold'>Your Benifits:</p>

<Row className='mb-4'>
  {list.map(item=>(
    <Col xs={6} className='d-flex benefits-list justify-content-start'>
      {item}
    </Col>
  ))}
</Row>

<Row className='justify-content-end '>
        <Col md={3}>
          <p><Envelope /> </p>
          <p> Mail Us</p>
          <p>we@mobantica.com</p>
        </Col>
        <Col md={3}>
          <p><Telephone /></p> 
          <p>Call Us</p>
          <p>+91-8600990592</p>
        </Col>
        <Col md={3} className='p-0'>
          <p><Skype /></p> 
          <p>Skype Us</p>
          <p>we@mobantica.com</p>
        </Col>
      </Row>

        </Col>
        <Col md={4} xs={12}>
           <ContactForm />
        </Col>
      </Row>
    </Container>
    <JoinMobantica />
    </>
   
  )
}

export default ContactUs
