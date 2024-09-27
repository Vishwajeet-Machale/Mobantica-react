import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './BetterTogether.css'


const BetterTogether = () => {

    const images = [
      {
         img :"https://mobantica.com/wp-content/uploads/2024/02/mobileappMobantica.webp"
      },
      {
         img :"https://mobantica.com/wp-content/uploads/2024/02/mobileappMobantica.webp"
      },
      {
         img :"https://mobantica.com/wp-content/uploads/2024/02/mobileappMobantica.webp"
      },
      {
         img :"https://mobantica.com/wp-content/uploads/2024/02/mobileappMobantica.webp"
      },
      {
         img :"https://mobantica.com/wp-content/uploads/2024/02/mobileappMobantica.webp"
      },
      {
         img :"https://mobantica.com/wp-content/uploads/2024/02/mobileappMobantica.webp"
      }
     
    ]


  return (
    <Container fluid>
       <Row className='d-flex mb-4'>
          <Col md={4} xs={12} className='d-flex flex-column align-items-start pt-4'>
          <p className=' fs-1 fw-bold'>Better together!</p>
          <p className='fs-6'>We know that work is important, but so is play! We respect all of our partnerships,
             and we make every effort to engage in fun ways that solve critical problems and leave a smile on your face at 
             the same time.</p>
          <Button>Get in touch</Button>
          </Col>
          <Col md={8} xs={6}>
             <Row>
                {images.map((item)=>(
                    <Col md={4} xs={12} sm={6} className='pb-1'>
                        <img src={item.img}  className="group-images" />
                    </Col>
                ))}
             </Row>
             
          </Col>
       </Row>
    </Container>
  )
}

export default BetterTogether
