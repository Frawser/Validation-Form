const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const repeatPasswordInput = document.querySelector('#repeatPassword');
const termsInput = document.querySelector('#terms');

const form = document.querySelector("#validationForm");

const isRequired = value => value == '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (emailInput) => {
	const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
	return re.test(emailInput);
};

const isPasswordSecure = (password) => {
	const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	return re.test(password);
};

const showError = (input, message) => {
	const inputgroup = input.parentElement;

	inputgroup.classList.remove('success');
	inputgroup.classList.add('error');

	const error = inputgroup.querySelector('small');
	error.textContent = message;

};

const showSuccess = (input) => {
	const inputgroup = input.parentElement;

	inputgroup.classList.remove('error');
	inputgroup.classList.add('success');

	const error = inputgroup.querySelector('small');
	error.textContent = '';
};

const checkFirstName = () => {
	let valid = false;
	const min = 2,
		max = 25;
	const firstName = firstNameInput.value.trim();

	if (!isRequired(firstName)) {
		showError(firstNameInput, 'First name cannot be blank.');
		console.log('First name cannot be blank.');
	} else if (/\d/.test(firstName)) {
		showError(firstNameInput, 'First name cannot have numbers');
		console.log('First name cannot have numbers.');
	} else if (!isBetween(firstName.length, min, max)) {
		showError(firstNameInput, 'First name must be between 2 and 25 characters.');
		console.log('First name must be between 2 and 25 characters.');
	} else {
		showSuccess(firstNameInput);
		valid = true;
	}
	return valid;
};

const checkLastName = () => {
	let valid = false;
	const min = 2,
		max = 25;
	const lastName = lastNameInput.value.trim();

	if (!isRequired(lastName)) {
		showError(lastNameInput, 'Last name cannot be blank.');
		console.log('Last name cannot be blank.');
	} else if (/\d/.test(lastName)) {
		showError(lastNameInput, 'Last name cannot have numbers.');
		console.log('Last name cannot have numbers.');
	} else if (!isBetween(lastName.length, min, max)) {
		showError(lastNameInput, 'Last name must be between 2 and 25 characters.');
		console.log('Last name must be between 2 and 25 characters.');
	} else {
		showSuccess(lastNameInput);
		valid = true;
	}
	return valid;
};

const checkEmail = () => {
	let valid = false;
	const email = emailInput.value.trim();
	if (!isRequired(email)) {
		showError(emailInput, 'Email cannot be blank.');
		console.log('Email cannot be blank');
	} else if (!isEmailValid(email)) {
		showError(emailInput, 'Email is not valid.');
		console.log('Email is not valid');
	} else {
		showSuccess(emailInput);
		valid = true;
	}
	return valid;
};


const checkPassword = () => {
	let valid = false;

	const password = passwordInput.value.trim();

	if (!isRequired(password)) {
		showError(passwordInput, 'Password cannot be blank.');
		console.log("Password cannot be blank.");
	} else if (!isPasswordSecure(password)) {
		showError(passwordInput, 'Password must has at least 8 characters that include at least 1 lowercase, 1 uppercase and 1 special character in (!@#$^&*)');
		console.log('Password must has at least 8 characters that include at least 1 lowercase, 1 uppercase and 1 special character in (!@#$^&*)');
	} else {
		showSuccess(passwordInput);
		valid = true;
	}
	return valid;
};

const checkRepeatPassword = () => {
	let valid = false;

	const repeatPassword = repeatPasswordInput.value.trim();
	const password = passwordInput.value.trim();

	if (!isRequired(repeatPassword)) {
		showError(repeatPasswordInput, 'Please enter the password again');
		console.log("Please enter the password again");
	} else if (password !== repeatPassword) {
		showError(repeatPasswordInput, 'Repeated password does not match');
		console.log('Repeated password does not match');
	} else {
		showSuccess(repeatPasswordInput);
		valid = true;
	}
	return valid;
};

const checkbox = () => {
	let valid = false;

	if (!termsInput.checked) {
		showError(termsInput, 'Must check the box');
		console.log('Please check the box');

	} else {
		showSuccess(termsInput);
		valid = true;
	}
	return valid;
};



function Users(Fname, Lname, email, password) {
	this.firstName = Fname;
	this.lastName = Lname;
	this.email = email;
	this.password = password;

	this.userlog = function() {
		return `New user! Welcome ${this.Fname} ${Lname}, your email is ${email} and your password is ${password}.`;
	};
}

const error = [];


const users = [];

form.addEventListener('submit', e => {
	e.preventDefault();

	for (let i = 0; i < e.target.length; i++) {

		switch (e.target[i].id) {
			case 'firstName':
				error[i] = checkFirstName();
				break;
			case 'lastName':
				error[i] = checkLastName();
				break;
			case 'email':
				error[i] = checkEmail();
				break;
			case 'password':
				error[i] = checkPassword();
				break;
			case 'repeatPassword':
				error[i] = checkRepeatPassword();
				break;
			case 'terms':
				error[i] = checkbox();
				break;
		}

	}
	if (error.includes(false)) {
		console.log('Error in the array!');
		errorMessage.classList.remove('d-none');
	} else {
		console.log(error);
		console.log('Success');
		console.log('Skickas till databasen');

		const user = new Users(firstName.value, lastName.value, email.value, password.value);
		users.push(user);
		console.log(users);
        errorMessage.classList.add('d-none');
		form.reset();

	}
});