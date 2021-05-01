import React, { useState } from 'react';
import { Container, FormWrapper, Icon } from './ContactElements';
import Form from './Form';
import Success from './Success';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <Container>
      <FormWrapper>
        <Icon to="/">faber</Icon>
        {!isSubmitted ? <Form submitForm={submitForm} /> : <Success />}
      </FormWrapper>
    </Container>
  );
};

export default Contact;
