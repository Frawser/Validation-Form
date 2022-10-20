//First name validation
let firstName = document.getElementById("firstName");

let firstNameValidation = function(){
   firstNameValue = firstName.ariaValueMax.trim();
   validFirstName=/^[A-Za-z]+$/;
   firstNameError = document.getElementById("first-name-error");

   if(firstNameValue=="")
   {
      firstNameError.innerHTML="First Name is required";
   }else if(!validFirstName.test(firstNameValue))
   {
      firstNameError.innerHTML="First Name must be only string without white spaces";
      }else{
         firstNameError.innerHTML="";
         return true;
      }

}

firstName.oninput=function(){
   firstNameValidation();
}

//Last name validation
let lastName= document.getElementById("lastName");

let lastNameValidation= function(){
   lastNameValue=lastName.value.trim(); 

   validLastName=/^[A-Za-z]+$/;

   lastNameErr=document.getElementById('last-name-err');

   if(lastNameValue=="")
   {
    lastNameErr.innerHTML="Last Name is required";
   }else if(!validLastName.test(lastNameValue)){
     lastNameErr.innerHTML="Last Name must be only string without white spaces";
   }else{
     lastNameErr.innerHTML="";
     return true;
   }
  }

lastName.oninput=function(){
   lastNameValidation();
}

//Email validation
let emailAdress = document.getElementById("emailAdress");

let emailAdressValidation = function(){
   emailAdressValue = emailAdress.value.trim();
   validEmailAdress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   emailAdressError = document.getElementById("email-error");

   if(emailAdressValue=="")
   {
      emailAdressError.innerHTML="Email is required";
   }else if(!validEmailAdress.test(emailAdressValue)){
      emailAdressError.innerHTML="Email Adress must be in valid format with @ symbol";
   }else{
      emailAdressError.innerHTML="";
      return true;
   }
}

emailAdress.oninput = function(){
   emailAdressValidation();
}

//Password validation
let password= document.getElementById("password");;
let passwordValidation = function(){
  passwordValue=password.value.trim(); 
   validPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
   
   passwordErr=document.getElementById('password-err');
   if(passwordValue=="")
   {
    passwordErr.innerHTML="Password is required";
   }else if(!validPassword.test(passwordValue)){
     passwordErr.innerHTML="Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters";
   }
   else{
     passwordErr.innerHTML="";
     return true;
   }
}
password.oninput=function(){
   passwordValidation();
 confirmPasswordValidation();
   
}

//Repeat password validation
let repeatPassword= document.getElementById("repeatPassword");;
let repeatPasswordValidation=function(){
   repeatPasswordValue=repeatPassword.value.trim(); 
   
   repeatPasswordErr=document.getElementById('repeat-password-err');
   if(repeatPasswordValue==""){
       repeatPasswordErr.innerHTML="Repeat Password is required";
   }
  else if(repeatPasswordValue!=password.value){
     repeatPasswordErr.innerHTML="Repeated Password does not match";
   }
   else{
     repeatPasswordErr.innerHTML="";
     return true;
   }
}
repeatPassword.oninput=function(){
 repeatPasswordValidation();
   
}

//Validate on submit
document.getElementById("validationForm").onsubmit = function(e){

   firstNameValidation();
   lastNameValidation();
   emailAddressValidation();
   passwordValidation();
   repeatPasswordValidation();

  if(firstNameValidation()==true && 
    lastNameValidation()==true && 
    emailAddressValidation() == true && 
    passwordValidation()==true && 
    repeatPasswordValidation()==true){
    return true;
  }else{
    return false;
  }
}

