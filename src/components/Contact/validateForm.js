export default function validateForm(values) {
  let errors = [];

  if (!values.name.trim()) {
    errors.name = 'Please enter your name❗️';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email❗️';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'OPS! Your email address is not correct❗️';
  }

  if (!values.message.trim()) {
    errors.message = 'Please be sure to drop me a message❗️';
  }

  return errors;
}
