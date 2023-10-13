import "bootstrap/dist/css/bootstrap.min.css";
import "../src/main.css";
import * as yup from 'yup'; // Import Yup

interface FormValues {
  email: string;
  password: string | number;
}

// Define a Yup schema for validation
const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
});

function parseFormValues(): FormValues {
  const emailInput = document.getElementById('exampleInputEmail1') as HTMLInputElement;
  const passwordInput = document.getElementById('exampleInputPassword1') as HTMLInputElement;

  const formValues: FormValues = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  return formValues;
}

async function handleSubmit(event: Event) {
  event.preventDefault();

  const formValues = parseFormValues();

  try {
    await validationSchema.validate(formValues, { abortEarly: false });
    console.log('Form is valid');
    console.log(formValues);
  } catch (error) {
    // Handle validation errors
    console.error('Form validation failed', error);
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

// const passwordsection = document.querySelector('.password') as HTMLElement;
// const first = document.getElementById('next') as HTMLButtonElement;
// const emailsection = document.querySelector('.email') as HTMLElement;

// first.onclick = () => {
//   passwordsection.style.display = 'none';
//   emailsection.style.display = 'block';
// };