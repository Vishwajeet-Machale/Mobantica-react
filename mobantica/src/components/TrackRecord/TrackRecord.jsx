import React from 'react'
import './TrackRecord.css'
import { Indent } from 'react-bootstrap-icons'

const TrackRecord = () => {

  const record = [
    {
      title:"10 years",
      subtitle:"Proven Track Record"
    },
    {
      title:"40 +",
      subtitle:"Developers"
    },
    {
      title:"100 +",
      subtitle:"Clients"
    },
    {
      title:"120 +",
      subtitle:"Projects Delivered"
    }
  ]
  return (
    <div className='d-flex fluid flex-column text-center mt-5'>
      <h3 className='mb-3 fw-bold'>Our Track Record</h3>
       <div className='d-flex justify-content-evenly align-items-center p-4 mb-3 track-record-section' >
          {record.map((item, Index)=>(
              <div className='d-flex flex-column ' key={Index}>
                 <h3 className='mb-0 text-start'>{item.title}</h3>
                 <p className='fs-5 mb-0 text-start'>{item.subtitle}</p>
              </div>
            )
          )}
       </div>
    </div>
  )
}

export default TrackRecord
