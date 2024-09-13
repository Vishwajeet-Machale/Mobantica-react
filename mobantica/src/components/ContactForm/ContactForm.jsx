import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import FormField from '../Layout components/FormField';
import './ContactForm.css';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission, like sending data to an API
  };

  return (
    <Container className='border'>
      <p className="my-4 fs-5 fw-bold text-center">Contact Us</p>
      <Form className='form p-2' onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Col md={6}>
            <FormField
              label="First Name"
              name="firstName"
              register={register}
              errors={errors}
              validation={{ required: 'First name is required' }}
            />
          </Col>
          <Col md={6}>
            <FormField
              label="Last Name"
              name="lastName"
              register={register}
              errors={errors}
              validation={{ required: 'Last name is required' }}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <FormField
              label="Email"
              name="email"
              type="email"
              register={register}
              errors={errors}
              validation={{
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              }}
            />
          </Col>
          <Col md={12}>
            <FormField
              label="Phone"
              name="phone"
              register={register}
              errors={errors}
              validation={{ required: 'Phone number is required' }}
            />
          </Col>
        </Row>
        <FormField
          label="Message"
          name="message"
          as="textarea"
          rows={3}
          register={register}
          errors={errors}
          validation={{ required: 'Message is required' }}
        />
        <Form.Group controlId="formBasicCheckbox" className="mb-3">
          <Form.Check
            type="checkbox"
            label="I am not a robot"
            {...register('notRobot', { required: 'Please confirm you are not a robot' })}
            isInvalid={!!errors.notRobot}
          />
          <Form.Control.Feedback type="invalid">
            {errors.notRobot?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" className='text-center' type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
