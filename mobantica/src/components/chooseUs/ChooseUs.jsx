import React from 'react'
import './ChooseUs.css'
import { assets } from '../../assets/assets'

const ChooseUs = () => {

  const list = [
    {
      img:assets.costEffective,
      title:"Faster Time to Market",
      subtitle:"Professional development teams can accelerate the development process, helping clients get their products to market faster."
    },
    {
      img:assets.Innovative,
      title:"Better User Experience",
      subtitle:"Custom software can be designed with a focus on user experience, making it more intuitive and user-friendly for employees or customers."
    },
    {
      img:assets.Industry,
      title:"Innovation and Creativity",
      subtitle:"Working with skilled developers can bring fresh perspectives and innovative ideas to the software development process."
    },
    {
      img:assets.Scalability,
      title:"Support and Maintenance",
      subtitle:"Reputable mobile app development company in Pune often provide ongoing support and maintenance to address issues, perform updates, and keep the software running smoothly."
    }
  ]
  return (
    <div className='choose-us mt-5'>
    <h3 className='mb-5 fw-bold text-center'>Why choose us?</h3>
    <div className='choose-us-content d-flex row ms-3'>
      {list.map((item, index) => (
        <div className='choose-us-item d-flex flex-column col-3 text-center' key={index}>
          <img className='choose-us-img mb-3 text-start' src={item.img} alt={item.title} />
          <p className='mb-2 fw-bold title text-start'>{item.title}</p>
          <p className='fs-6 sub-title text-start'>{item.subtitle}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ChooseUs
