import "bootstrap/dist/css/bootstrap.min.css";
import "../src/main.css";

interface FormValues {
 email: string;
 password: string |number;
}

function validateForm(formValues: FormValues): boolean {
 if (formValues.email && formValues.password) {
   return true;
 } else {
   return false;
 }
}

function parseFormValues(): FormValues {
 const emailInput = document.getElementById('exampleInputEmail1') as HTMLInputElement;
 const passwordInput = document.getElementById('exampleInputPassword1') as HTMLInputElement;

 const formValues: FormValues = {
   email: emailInput.value,
   password: passwordInput.value,
 };

 return formValues;
}

function handleSubmit(event: Event) {
 event.preventDefault();

 const formValues = parseFormValues();
 const isValid = validateForm(formValues);

 if (isValid) {
   console.log('Form is valid');
   console.log(formValues);
 }
}


const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


const passwordsection = document.querySelector(".password") as HTMLElement;
const first = document.getElementById("next") as HTMLButtonElement;
const emailsection = document.querySelector(".email") as HTMLElement;

first.onclick =()=>{
passwordsection.style.display="none";
emailsection.style.display="block";
}