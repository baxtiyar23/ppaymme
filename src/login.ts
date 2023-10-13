import "bootstrap/dist/css/bootstrap.min.css";
import "../src/main.css";
import * as yup from 'yup'; // Import Yup
const passwordsection = document.querySelector('.password') as HTMLElement;
const first = document.getElementById('next') as HTMLButtonElement;
const emailsection = document.querySelector('.email') as HTMLElement;

interface FormValues {
  email: string;
  password: string | number;
}
let r : string = ""

// Define a Yup schema for validation
const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password:  yup.string().required().min(8)
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
const form = document.querySelector('form');
first.addEventListener('click', handleSubmit);

async function handleSubmit(event: Event) {
  event.preventDefault();

  const formValues = parseFormValues();

  try {
     validationSchema.validate(formValues, { abortEarly: false });
     r = 'Form is valid';
    console.log(formValues);
if(r === 'Form is valid'){
  passwordsection.classList.replace('d-block', 'd-none')
  emailsection.classList.replace('d-none', 'd-block')
}  ;
  } catch (error) {
    console.error('Form validation failed', error);
  }
}



