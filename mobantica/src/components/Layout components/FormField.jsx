import React from 'react';
import { Form } from 'react-bootstrap';

const FormField = ({ label, name, type = "text", register, errors, as = "input", ...rest }) => {
  return (
    <Form.Group controlId={name} className="mb-3">
      <Form.Label className='form-label'>{label}</Form.Label>
      <Form.Control
        as={as}
        type={type}
        {...register(name, rest.validation)}
        isInvalid={!!errors[name]}
      />
      <Form.Control.Feedback type="invalid">
        {errors[name]?.message}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormField;
