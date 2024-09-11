import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './TrackRecord.css'

const TrackRecord = () => {

  const record = [
    {
      title: "10 years",
      subtitle: "Proven Track Record"
    },
    {
      title: "40 +",
      subtitle: "Developers"
    },
    {
      title: "100 +",
      subtitle: "Clients"
    },
    {
      title: "120 +",
      subtitle: "Projects Delivered"
    }
  ];

  return (
    <Container fluid className='text-center mt-5'>
      <h3 className='mb-4 fw-bold'>Our Track Record</h3>
      <Row className='track-record-section p-4'>
        {record.map((item, index) => (
          <Col xs={12} md={6} lg={3} key={index} className='d-flex flex-column align-items-center mb-4 mb-md-0'>
            <h3 className='mb-0'>{item.title}</h3>
            <p className='fs-5 mb-0'>{item.subtitle}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TrackRecord;
