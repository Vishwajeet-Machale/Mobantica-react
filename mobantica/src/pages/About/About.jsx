import React from 'react'
import JoinMobantica from '../../components/Join Mobantica/JoinMobantica'
import TrackRecord from '../../components/TrackRecord/TrackRecord'
import Companies from '../../components/Companies/Companies'
import BetterTogether from '../../components/Better Together/BetterTogether'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <Container fluid className='mb-4'>
      <Container fluid>
        <Row className='d-flex justify-content-center'>
          <Col md={6} xs={12} className='align-items-center mt-3 '>
              <p className='fs-4 fw-bold text-center m-0'>Dedicated to delivering excellence</p>
              <p className='fs-6 fw-bold text-center m-0'>Everyone has a story. Here is ours.</p>
              <p>Mobantica Solution is a leading web and mobile app development company based in Pune. We specialize in crafting innovative, user-centric mobile applications that drive success in the digital space. Our expert team of developers, designers, and strategists is committed to delivering solutions that not only meet but exceed expectations, resulting in tangible, positive </p >
              <p>In a rapidly evolving mobile app market, we stay ahead by leveraging cutting-edge technologies and industry best practices. Whether developing a new app from scratch or revitalizing an existing one, we ensure our solutions are reliable, scalable, and tailored to a variety of operating systems, including iOS, Android, and cross-platform environments.</p>
      <p>At Mobantica Solution, we take your vision and transform it into a functional, impactful reality.</p>
          </Col>
        </Row>
      </Container>
      <JoinMobantica />
      <TrackRecord />
      <Companies />
      <BetterTogether />
    </Container>
      
  
  )
}

export default About
