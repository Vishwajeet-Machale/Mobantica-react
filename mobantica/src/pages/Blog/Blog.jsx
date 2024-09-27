import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Blog = () => {

  const blogList = [
    {
      image: "https://mobantica.com/wp-content/uploads/2024/07/Copy-of-Social-Media-Mobantica-4.jpg",
     title: "Developing Apps with Best Practices for Unlocking the Power of FlutterFlow",
     sub_title: "IT Consulting ,Mobile development",
     info:"The mobile app industry has expanded at an exponential rate over the last 10 years, altering how we live, work, and utilize technology."
    },
    {
      image: "https://mobantica.com/wp-content/uploads/2024/09/Mobile-App-Development-2.jpg",
     title: "How Emerging Tech (AR, VR, AI) is Revolutionizing Mobile Apps",
     sub_title: "IT Consulting ,Mobile development",
     info:"The mobile app industry has expanded at an exponential rate over the last 10 years, altering how we live, work, and utilize technology."
    },
    {
      image: "https://mobantica.com/wp-content/uploads/2024/08/Mobile-App-Development-7.jpg",
     title: "Mobile app Industry insights, stats, tips, and opinion pieces",
     sub_title: "IT Consulting ,Mobile development",
     info:"The mobile app industry has expanded at an exponential rate over the last 10 years, altering how we live, work, and utilize technology."
    },
    {
      image: "https://mobantica.com/wp-content/uploads/2024/07/Copy-of-Social-Media-Mobantica-4.jpg",
     title: "How We Built a High-Performance Mobile App",
     sub_title: "IT Consulting ,Mobile development",
     info:"The mobile app industry has expanded at an exponential rate over the last 10 years, altering how we live, work, and utilize technology."
    },
    {
      image: "https://mobantica.com/wp-content/uploads/2024/08/feature-mobile-app-1.jpg",
     title: "The Future of Mobile App Development: Trends and Predictions",
     sub_title: "IT Consulting ,Mobile development",
     info:"The mobile app industry has expanded at an exponential rate over the last 10 years, altering how we live, work, and utilize technology."
    },
    {
      image: "https://mobantica.com/wp-content/uploads/2024/07/Copy-of-Social-Media-Mobantica-4.jpg",
     title: "Building Secure Mobile Apps: Best Practices and Common Pitfalls",
     sub_title: "IT Consulting ,Mobile development",
     info:"The mobile app industry has expanded at an exponential rate over the last 10 years, altering how we live, work, and utilize technology."
    },
  ]

  return (
    <>
    <Container>
    <p className='fs-3 fw-bold text-center'>Mobantica Blog</p>
    <p className='text-center'>Our official blog with news, technology advice, and business culture.</p>
    </Container>
    <Container className='m-3 mx-auto p-3' style={{ background : '#ebebeb', borderRadius : '5px', width : "70%" }}>
       <Row className='d-flex justify-content-center '>
        <Col xs={5} className=' p-4'>
        <p className='fs-4 fw-bold'>Developing Apps with Best Practices for Unlocking the Power of FlutterFlow</p>
        <p className='fs-6 fw-normal'>The mobile app industry has expanded at an exponential rate over the last 10 years, altering how we live, work, and utilize technology.</p>
        <p className=''>Read full story</p>
        </Col>
        <Col xs={5}>
        <img src="https://mobantica.com/wp-content/uploads/2024/09/Mobile-App-Development-1.jpg" style={{ width : '300px', height : "auto"}} alt="" />
        </Col>
       </Row>
    </Container>
    <Container>
    <Row className='justify-content-center'>
  {blogList.map((item, index) => (
    <Col key={index} xs={12} sm={6} md={3} className="border d-flex flex-column justify-content-center align-items-center mx-2 my-4">
      <img src={item.image} alt={item.title} style={{ height: '150px', width: 'auto' }} className="mb-3" />
      <p className="fs-6 text-center">{item.sub_title}</p>
      <p className="fs-5 fw-bold text-center">{item.title}</p>
      <p className="text-center">{item.info}</p>
      <p className="text-primary text-center">Read More</p>
    </Col>
  ))}
</Row>
    </Container>
    </>
    
  )
}

export default Blog
