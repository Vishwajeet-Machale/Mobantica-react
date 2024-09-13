import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const testimonials = [
  {
    quote: "Mahesh and his team at Mobantica are exceptional. They played a pivotal role in the successful launch of our mobile application. Mahesh stands out with his passion, dedication, and an unwavering commitment to surpassing client expectations. His ability to understand and deliver on our needs was remarkable. I am thoroughly impressed by their work and would highly recommend Mobantica for anyone seeking top-notch mobile solution services. A sincere  thank you to Mahesh and his team!",
    name: "John Doe",
    designation: "CEO, Company ABC",
  },
  {
    quote: "Mahesh and his team at Mobantica are exceptional. They played a pivotal role in the successful launch of our mobile application. Mahesh stands out with his passion, dedication, and an unwavering commitment to surpassing client expectations. His ability to understand and deliver on our needs was remarkable. I am thoroughly impressed by their work and would highly recommend Mobantica for anyone seeking top-notch mobile solution services. A sincere  thank you to Mahesh and his team!",
    name: "John Doe",
    designation: "CEO, Company ABC",
  },
  {
    quote: "Mahesh and his team at Mobantica are exceptional. They played a pivotal role in the successful launch of our mobile application. Mahesh stands out with his passion, dedication, and an unwavering commitment to surpassing client expectations. His ability to understand and deliver on our needs was remarkable. I am thoroughly impressed by their work and would highly recommend Mobantica for anyone seeking top-notch mobile solution services. A sincere  thank you to Mahesh and his team!",
    name: "John Doe",
    designation: "CEO, Company ABC",
  }
];

const TestimonialSlider = () => {
  return (
    <Container className='my-5'>
      <h2 className='text-center mb-4'>Clients Testimonials</h2>
      <Carousel interval={2000}>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className='d-flex justify-content-center'>
              <blockquote className='blockquote text-center'>
                <p className='mb-4 fs-6'>{testimonial.quote}</p>
                <footer className='blockquote-footer'>
                  {testimonial.name}, <cite title="Source Title">{testimonial.designation}</cite>
                </footer>
              </blockquote>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default TestimonialSlider;
