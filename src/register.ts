import "bootstrap/dist/css/bootstrap.min.css";
import "../src/main.css";
import * as yup from 'yup'; // Import Yup
import IMask from 'imask';
const resetsection = document.querySelector('.reset-password') as HTMLElement;
const emailsection = document.querySelector('.email') as HTMLElement;
const InputPassword = document.getElementById('Password1') as HTMLInputElement;
const confirmPassword = document.getElementById('passwordtesting') as HTMLInputElement
const phoneNum = document.getElementById('phone') as HTMLInputElement
const registerBtn = document.getElementById("register-btn") as HTMLButtonElement
const fullName = document.getElementById('fullname') as HTMLInputElement
const username = document.getElementById('username') as HTMLInputElement
IMask(
 phoneNum,
 {
   mask: '+{998}(00)000-00-00'
 }
)

const schema = yup.object().shape({
  fullname : yup.string().required("Fullname is required"),
  username : yup.string().required("Fullname is required"),
  passwordInput2:yup.string().matches( /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,).required(),
  confirmInput:yup.string().oneOf([yup.ref("passwordInput2")], "Passwords must match").required(),
})


registerBtn.addEventListener("click", (e:Event) => {
	e.preventDefault();
	const values = {
		fullname :fullName.value,
  username : username.value,
  passwordInput2:InputPassword.value,
  confirmInput:confirmPassword.value,
	};

		schema.validate(values)
  .then(() => {
   console.log(values);;
   resetsection.classList.replace('d-none', 'd-block')
  emailsection.classList.replace('d-block', 'd-none')
	})

 .catch((error) => {
  console.error(error);
 });
 })
