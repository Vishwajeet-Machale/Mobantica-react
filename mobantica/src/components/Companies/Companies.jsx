import React from 'react'
import './Companies.css'
import { Container, Row, Col } from 'react-bootstrap'

const companyImages = [
    {
      img:"https://mobantica.com/wp-content/uploads/2024/08/industry1.jpg",
      title:"RentPro"
    },
    {
      img:"https://mobantica.com/wp-content/uploads/2024/08/ivm-768x400.jpg",
      title:"SalesMi"
    },
    {
      img:"https://mobantica.com/wp-content/uploads/2024/08/industry1.jpg",
      title:"SmartHome"
    },
    {
      img:"https://mobantica.com/wp-content/uploads/2024/08/industry1.jpg",
      title:"FunEx"
    },
    {
      img:"https://mobantica.com/wp-content/uploads/2024/08/industry5.jpg",
      title:"Healthcare"
    },
    {
      img:"https://mobantica.com/wp-content/uploads/2024/08/ivm-768x400.jpg",
      title:"Inventory Management"
    },
  ];
  

const Companies = () => {
  return (
    <Container className='my-5'>
    <h1 className='text-center'>Solving IT challenges in every industry, every day.</h1>
    <Row className='justify-content-center ms-5 my-5'>
      <Col md={10}>
        <Row className='justify-content-center ms-5 me-5'>
        {companyImages.map((item, index) => (
<Col md={5} xs={12} key={index} className='d-flex justify-content-between align-items-center me-2 mb-3 p-2 image-card'>
  <img src={item.img} alt={item.title} className='company-img me-3' />
  <p className='company-title fs-6 fw-bold pe-5'>{item.title}</p>
</Col>
))}
     </Row>
      </Col>

</Row>
  </Container>
  )
}

export default Companies
