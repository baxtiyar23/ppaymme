import "bootstrap/dist/css/bootstrap.min.css";
import "../src/main.css";
import * as yup from 'yup'; // Import Yup
const InputPassword = document.getElementById('Password-Reset') as HTMLInputElement;
const confirmPassword = document.getElementById('ConfirmReset') as HTMLInputElement
const resetBtn = document.getElementById("btn-reset") as HTMLButtonElement
const resetsection = document.querySelector('.reset-password') as HTMLElement;
const forgotsection= document.querySelector('.forgot-password') as HTMLElement;

const schema = yup.object().shape({
 passwordInput2:yup.string().matches( /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,).required(),
 confirmInput:yup.string().oneOf([yup.ref("passwordInput2")], "Passwords must match").required(),
})


resetBtn.addEventListener("click", (e:Event) => {
	e.preventDefault();

	const values = {
  passwordInput2:InputPassword.value,
  confirmInput:confirmPassword.value,
	};

		schema.validate(values)
  .then(() => {
   console.log(values);;
  forgotsection.classList.replace('d-none', 'd-block')
  resetsection.classList.replace('d-block', 'd-none')
	})

 .catch((error) => {
  console.error(error);
 });
 })
