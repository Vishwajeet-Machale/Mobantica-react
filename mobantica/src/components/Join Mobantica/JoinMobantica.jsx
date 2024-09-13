import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import './JoinMobantica.css'

const clientLogos = [
    "https://mobantica.com/wp-content/uploads/2024/01/RENTPRO-1-150x150.jpg",
    "https://mobantica.com/wp-content/uploads/2024/01/funex-150x150.jpg",
    "https://mobantica.com/wp-content/uploads/2024/01/pg-150x150.jpg",
    "https://mobantica.com/wp-content/uploads/2024/01/RENTPRO-150x150.jpg",
    "https://mobantica.com/wp-content/uploads/2024/01/5dsolutions-150x150.jpg",
    "https://mobantica.com/wp-content/uploads/2024/01/jash-150x150.jpg",
    "https://mobantica.com/wp-content/uploads/2024/01/techbulls-150x150.jpg",
  ];


const JoinMobantica = () => {
  return (
    <Container className='my-5'>
    <h2 className='text-center'>Join our 100+ Happy Clients</h2>
    <div className='marquee-container'>
      <div className='marquee-content'>
        {clientLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Client logo ${index + 1}`} className='mx-3' />
        ))}
        {clientLogos.map((logo, index) => (
          <img key={index + clientLogos.length} src={logo} alt={`Client logo ${index + 1}`} className='mx-3' />
        ))}
      </div>
    </div>
  </Container>
  )
}

export default JoinMobantica
