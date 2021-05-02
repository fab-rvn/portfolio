import React from 'react';
import {
  ErrorMsg,
  FormBtn,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormP,
  FormTextarea,
  FormWrap,
} from './ContactElements';
import useForm from './useForm';
import validateForm from './validateForm';

const Form = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateForm
  );

  return (
    <>
      <FormContent>
        <FormH1>Get in Touch</FormH1>
        <FormP>
          If you’d like to chat about a project please fill in the form below
          and I’ll get back within 1-2 days.
        </FormP>
        <FormWrap onSubmit={handleSubmit}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            name="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextarea
            name="message"
            placeholder="How can I help you?"
            rows={5}
            cols={5}
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && (
            <ErrorMsg className="last">{errors.message}</ErrorMsg>
          )}
          <FormBtn type="submit">Send</FormBtn>
        </FormWrap>
      </FormContent>
    </>
  );
};

export default Form;
