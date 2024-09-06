import React from 'react';
import './Card.css';

const Card = ({ item }) => {
  return (
    <div className='card-container d-flex bg-white flex-column'>
      <div className='icon mb-3'>{item.icon}</div> 
      <h4 className='card-title'>{item.title}</h4>
      <p className='card-info'>{item.info}</p>
      <div className="line mb-3"></div> 
      <a href="#" className="learn-more mt-auto">Learn More</a> {/* Added mt-auto */}
    </div>
  )
}

export default Card;
