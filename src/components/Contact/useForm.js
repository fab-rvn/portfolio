import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';

const useForm = (callback, validateForm) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateForm(values));

    if (!values.name || !values.email || !values.message) return;

    emailjs
      .sendForm(
        'contact_service',
        'contact_form',
        e.target,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        () => {
          setIsSubmitting(true);
        },
        error => {
          alert(error.text);
        }
      );
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
