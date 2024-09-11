import React from 'react'
import Banner from '../../components/Banner/Banner'
import AboutUs from '../../components/AboutUs/AboutUs'
import TrackRecord from '../../components/TrackRecord/TrackRecord'
import ChooseUs from '../../components/chooseUs/ChooseUs'
import Card from '../../components/Card/Card'
import './Home.css'
import { FaMobileAlt, FaLaptopCode, FaPencilRuler, FaShoppingCart, FaAppStore, FaCogs } from 'react-icons/fa';
import { assets } from '../../assets/assets'
import { Button } from 'react-bootstrap'

const Home = () => {

  const whatWeDo = [
    {
      icon: <FaMobileAlt />, // Mobile App icon
      title: "Mobile App",
      info: "From conceptualising to designing, building, and delivering your mobile applications for iOS and Android, we offer end-to-end solutions."					
    },
    {
      icon: <FaLaptopCode />, // Web App icon
      title: "Web App",
      info: "We are experts in HTML5, Bootstrap, Javascript, Angular, React, Vue, Node, PHP, Python, and Java for online applications. We've created responsive and advanced web applications."					
    },
    {
      icon: <FaPencilRuler />, // UI/UX Design icon
      title: "UI/UX design",
      info: "We provide outstanding user experiences that aid clients in achieving their business objectives."					
    },
    {
      icon: <FaShoppingCart />, // WooCommerce icon
      title: "Woo Commerce",
      info: "Boost an eCommerce company's performance. We assist you in growing, marketing, and optimising your online store."					
    },
    {
      icon: <FaAppStore />, // Cross-Platform Mobile App icon
      title: "Cross Platform Mobile App",
      info: "For a variety of organisations, we have created numerous cross-platform applications. React Native and Flutter are the programming languages we use."					
    },
    {
      icon: <FaCogs />, // Product Development icon
      title: "Product Development",
      info: "We provide dedicated offshore development centres for businesses as part of product development, all while maintaining complete transparency."					
    },
  ];

  const clientLogos = [
    "https://mobantica.com/wp-content/uploads/2024/01/RENTPRO-1-150x150.jpg",
    "https://mobantica.com/wp-content/uploads/2024/01/funex-150x150.jpg",
    "https://mobantica.com/wp-content/uploads/2024/01/pg-150x150.jpg",
    "https://mobantica.com/wp-content/uploads/2024/01/RENTPRO-150x150.jpg",
    "https://mobantica.com/wp-content/uploads/2024/01/5dsolutions-150x150.jpg",
    "https://mobantica.com/wp-content/uploads/2024/01/jash-150x150.jpg",
    "https://mobantica.com/wp-content/uploads/2024/01/techbulls-150x150.jpg",

  ]


  const companyImages = [
    {
      img:"https://mobantica.com/rent-pro/",
      title:"RentPro"
    },
    {
      img:"https://mobantica.com/manufacturing-and-retail/",
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
    
 
  ]
  
  return (
    <div>
      <Banner />
      <AboutUs />
      <TrackRecord />
      <ChooseUs />
      {/* <div className='WhatWeDo mt-5 mb-5 row' >
      <h3 className='p-5 fw-bold text-center'>What we do ?</h3>
      <div className='d-flex container ms-1 row'>
         {whatWeDo.map((item)=>(
          <div className='col-4 mb-5'>
          <Card item={item}/>
         </div>
         ))}
      </div>
      </div>
      <div className='d-flex mt-5 mb-5 row' >
      <div className='col-md-5 mt-5 ms-4'>
      <h2 className='fw-bold text-start '>Who we are?</h2>
      <p className='fs-7 '>Mobantica Solutions is the top<b> mobile app development company in Pune</b>.Our goal is to provide businesses with cost-effective mobile application development solutions. We’ll Create A Plan For You To Develop A Mobile App That Complies With Your Business Goals. We Will Use Both Our Tech Know-How And Imagination To Create Mobile Apps. At Mobantica, our team of experts develops mobile applications that are reasonably priced, well-integrated with potent technology, and both.</p>
      <Button>Know more</Button>
      </div>     
      <div className='d-flex col-md-6 ms-1 row'>
         <img src='https://mobantica.com/wp-content/uploads/2023/03/mapbox-ZT5v0puBjZI-unsplash.jpg' className='home-image-section'  alt="" />
      </div>
      </div>
      <div className='d-flex mt-5 mb-5 row'>
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
</div>
<div className=' mt-5 mb-5 row'>
  <h1 className='text-center' >Solving IT challenges in every industry, every day.</h1>
  
</div> */}
    </div>
  )
}

export default Home
