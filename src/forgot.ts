import "bootstrap/dist/css/bootstrap.min.css";
import "../src/main.css";
import * as yup from 'yup'; // Import Yup
const InputEmail = document.getElementById('ForgottenInputEmail1') as HTMLInputElement;
const forgotBtn = document.getElementById("btn-forgot") as HTMLButtonElement
const forgotsection= document.querySelector('.forgot-password') as HTMLElement;

const schema = yup.object().shape({
 InputEmail:yup.string().email().required(),
})


forgotBtn.addEventListener("click", (e:Event) => {
	e.preventDefault();

	const values = {
  InputEmail:InputEmail.value,
	};

		schema.validate(values)
  .then(() => {
   console.log(values);;
 })

 .catch((error) => {
  console.error(error);
 });
 })
