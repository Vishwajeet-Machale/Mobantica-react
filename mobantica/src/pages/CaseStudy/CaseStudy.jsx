import React from 'react'
import { Container } from 'react-bootstrap'
import './CaseStudy.css';

const CaseStudy = () => {
  return (
   <Container fluid  >
    <div className='Case-Study-tag-section'>
        <p className='fs-2 text-white fw-bold text-center'>Case study overview of a few of our projects.</p>
        <p className='text-center align-center' style={{width:"50%"}}>Our expert team has over a decade of experience developing software solutions for trusted brands. We’ve created numerous high-quality digital products loved by millions. Here are a few selected case studies from our extensive project portfolio.</p>
      </div>
   </Container>
  )
}

export default CaseStudy
