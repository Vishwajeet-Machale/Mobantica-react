import React from 'react'
import { Container, Row,Col, Button } from 'react-bootstrap';
import BetterTogether from '../../components/Better Together/BetterTogether.jsx'
import TestimonialSlider from '../../components/Testimonial slider/TestimonialSlider.jsx'
import './Careers.css';

const langs = ["Android", "IOS", "React Native", "Flutter", "Kotlin"]
const jobcard = [
  {
    title:'Senior QA',
    location:'Pune',
    Experience:'4 years',
  },
  {
    title:'Digital Marketing Intern',
    location:'Pune',
    Experience:'4 years',
  },
  {
    title:'Senior QA',
    location:'Pune',
    Experience:'4 years',
  }
  
]


const Careers = () => {
  return (
    <div>
      <div>
        <p className='fs-2 text-white fw-bold text-center Career-tag-section'>Our Current Openings</p>
      </div>
      <Container>
      <Row className="justify-content-center mb-4">
  {langs.map((lang, index) => (
    <Col key={index} xs="auto" md={1} className="text-center">
      <span className=''>{lang}</span>
    </Col>
  ))}
</Row>
<Row className='justify-content-center'>
  {
    jobcard.map((card)=>(
      <Col className='border m-2' md={3} >
         <p className='fs-5 fw-bold'>{card.title}</p>
         <p>Location-{card.location}</p>
         <div className='d-flex justify-content-between '>
          <div>Experience-{card.Experience}</div>
          <div>29 Septmber</div>
         </div>
         <Button className='mt-3 mb-1'>Job Details</Button>
      </Col>
    ))
  }
</Row>
      </Container>
      <TestimonialSlider />
      <BetterTogether />
    </div>
  )
}

export default Careers
