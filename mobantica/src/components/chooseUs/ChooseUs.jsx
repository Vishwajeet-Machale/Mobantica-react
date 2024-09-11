import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './ChooseUs.css'
import { assets } from '../../assets/assets'

const ChooseUs = () => {

  const list = [
    {
      img: assets.costEffective,
      title: "Faster Time to Market",
      subtitle: "Professional development teams can accelerate the development process, helping clients get their products to market faster."
    },
    {
      img: assets.Innovative,
      title: "Better User Experience",
      subtitle: "Custom software can be designed with a focus on user experience, making it more intuitive and user-friendly for employees or customers."
    },
    {
      img: assets.Industry,
      title: "Innovation and Creativity",
      subtitle: "Working with skilled developers can bring fresh perspectives and innovative ideas to the software development process."
    },
    {
      img: assets.Scalability,
      title: "Support and Maintenance",
      subtitle: "Reputable mobile app development company in Pune often provide ongoing support and maintenance to address issues, perform updates, and keep the software running smoothly."
    }
  ]

  return (
    <Container className='choose-us mt-5'>
      <h3 className='mb-5 fw-bold text-center'>Why choose us?</h3>
      <Row className='choose-us-content'>
        {list.map((item, index) => (
          <Col xs={12} sm={6} md={4} lg={3} className='d-flex flex-column align-items-center mb-4' key={index}>
            <img className='choose-us-img mb-3' src={item.img} alt={item.title} />
            <p className='mb-2 fw-bold title'>{item.title}</p>
            <p className='fs-6 sub-title'>{item.subtitle}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ChooseUs
