const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) =>{
e.preventDefault();

checkInputs();
});

function checkInputs(){
    const UsernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (UsernameValue === ''){
        setErrorFor(username,"O nome de usuário é obrigatório");

        
    }else setSuccessFor(username);

    if (emailValue === ''){
        setErrorFor(email,"O E-mail é obrigatório");
  } else if(!checkEmail(emailValue)) {
        setErrorFor(email,"por favor insira um E-mail valido");
  } else{
    setSuccessFor(email);
  }

   if(passwordValue=== ''){
    setErrorFor(password," A senha é Obrigatoria");
   }else if (passwordValue.length < 7 ){
    setErrorFor(password,"a senha precisa ter no minimo 7 caracteres");
   }else{
    setSuccessFor(password);
   }

   if (passwordConfirmationValue === ''){
    setErrorFor(passwordConfirmation,"confirmação de senha é obrigatoria");
   }else if (passwordConfirmationValue !== passwordValue){
    setErrorFor(passwordConfirmation,"as senhas são diferentes");

   }else {
        setSuccessFor(passwordConfirmation);
   }
   
   const formControl = form.querySelectorAll('.form-control')
   const formIsValid = [...formControl].every(formControl=>{
    return (formControl.className === 'form-control success')
   });
   if (formIsValid){
    console.log("O formulario esta 100% valido");
   }

}



    function setErrorFor(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');

        small.innerText = message;

        formControl.className = "form-control error";
    }

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

