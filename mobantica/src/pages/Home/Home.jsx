import React from 'react'
import Banner from '../../components/Banner/Banner'
import AboutUs from '../../components/AboutUs/AboutUs'
import TrackRecord from '../../components/TrackRecord/TrackRecord'
import ChooseUs from '../../components/chooseUs/ChooseUs'
import Card from '../../components/Card/Card'
import './Home.css'
import { FaMobileAlt, FaLaptopCode, FaPencilRuler, FaShoppingCart, FaAppStore, FaCogs } from 'react-icons/fa';
import { Button, Container, Row, Col } from 'react-bootstrap'
import TestimonialSlider from '../../components/Testimonial slider/TestimonialSlider'
import Footer from '../../components/Footer/Footer'
import JoinMobantica from '../../components/Join Mobantica/JoinMobantica'
import Companies from '../../components/Companies/Companies'

const Home = () => {

  const whatWeDo = [
    {
      icon: <FaMobileAlt />,
      title: "Mobile App",
      info: "From conceptualising to designing, building, and delivering your mobile applications for iOS and Android, we offer end-to-end solutions."					
    },
    {
      icon: <FaLaptopCode />,
      title: "Web App",
      info: "We are experts in HTML5, Bootstrap, Javascript, Angular, React, Vue, Node, PHP, Python, and Java for online applications. We've created responsive and advanced web applications."					
    },
    {
      icon: <FaPencilRuler />,
      title: "UI/UX design",
      info: "We provide outstanding user experiences that aid clients in achieving their business objectives."					
    },
    {
      icon: <FaShoppingCart />,
      title: "Woo Commerce",
      info: "Boost an eCommerce company's performance. We assist you in growing, marketing, and optimising your online store."					
    },
    {
      icon: <FaAppStore />,
      title: "Cross Platform Mobile App",
      info: "For a variety of organisations, we have created numerous cross-platform applications. React Native and Flutter are the programming languages we use."					
    },
    {
      icon: <FaCogs />,
      title: "Product Development",
      info: "We provide dedicated offshore development centres for businesses as part of product development, all while maintaining complete transparency."					
    },
  ];

  // const clientLogos = [
  //   "https://mobantica.com/wp-content/uploads/2024/01/RENTPRO-1-150x150.jpg",
  //   "https://mobantica.com/wp-content/uploads/2024/01/funex-150x150.jpg",
  //   "https://mobantica.com/wp-content/uploads/2024/01/pg-150x150.jpg",
  //   "https://mobantica.com/wp-content/uploads/2024/01/RENTPRO-150x150.jpg",
  //   "https://mobantica.com/wp-content/uploads/2024/01/5dsolutions-150x150.jpg",
  //   "https://mobantica.com/wp-content/uploads/2024/01/jash-150x150.jpg",
  //   "https://mobantica.com/wp-content/uploads/2024/01/techbulls-150x150.jpg",
  // ];

 
  return (
    <div>
      <Banner />
      <AboutUs />
      <TrackRecord />
      <ChooseUs />
      
      <Container fluid className='WhatWeDo my-5'>
        <h3 className='py-5 fw-bold text-center'>What we do?</h3>
        <Row className='justify-content-center'>
          {whatWeDo.map((item, index) => (
            <Col xs={12} sm={6} md={4} key={index} className='mb-4'>
              <Card item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      
      <Container className='my-5'>
        <Row className='align-items-center'>
          <Col md={5} className='mt-5'>
            <h2 className='fw-bold'>Who we are?</h2>
            <p className='fs-7'>
              Mobantica Solutions is the top <b>mobile app development company in Pune</b>. Our goal is to provide businesses with cost-effective mobile application development solutions...
            </p>
            <Button>Know more</Button>
          </Col>
          <Col md={6} className='d-flex justify-content-center'>
            <img src='https://mobantica.com/wp-content/uploads/2023/03/mapbox-ZT5v0puBjZI-unsplash.jpg' className='home-image-section' alt='Who we are' />
          </Col>
        </Row>
      </Container>
      
      <JoinMobantica />
      <Companies />
      <Container>
        <TestimonialSlider></TestimonialSlider>
      </Container>
      
    </div>
  );
};

export default Home;
