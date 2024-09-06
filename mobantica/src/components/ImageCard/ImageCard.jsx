import React from 'react'

const ImageCard = ({item}) => {
  return (
    <div className='bg-red d-flex border p-3'>
      <img src={item.img} alt="" />
      <h4>{item.title}</h4>
    </div>
  )
}

export default ImageCard
