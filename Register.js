import React, { Component } from 'react';
import Form from '../components/Form';
import Axios from '../../node_modules/axios';

import './../css/register.css';


class Register extends React.Component {
  constructor() {
    super();
    this.state={
        name: '',
        email: '',
        password: ''
        
    }
    
    this.submit=this.submit.bind(this);
    this.handleInput = this.handleInput.bind(this);
}
handleInput(event) {
    this.setState({[ event.target.name ]: event.target.value});

}
submit() {
    let newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
        
    }
    let registerUser = Axios.post('https://v-forum-api.bahdcasts.com/api/register', newUser);
    registerUser.then(response=>console.log(response))
    registerUser.catch(error => console.error(error));
    console.log(this.state);

    let errorMessage = document.getElementById('error-message');
let getEmail = document.getElementById('email');
let spinnerButton = document.getElementById('spinner-button');
spinnerButton.style.display= "none";
let submitButton = document.getElementById('submit-button');
 submitButton.addEventListener('click', function() {
 	submitButton.style.display = 'none';
 	spinnerButton.style.display = 'inline-block';
	let inputName = document.getElementById('name').value;
	console.log (inputName);
	let inputEmail = document.getElementById('email').value;
	console.log (inputEmail);
	let inputPassword = document.getElementById('password').value;
	console.log(inputPassword);


	let newUser = {
	name: inputName,
	email: inputEmail,
	password: inputPassword,
	}


	

	let newUserString = JSON.stringify(newUser);

	let findEmail = localStorage.getItem(inputEmail);
	if (findEmail !== null) {
		errorMessage.style.display = 'block'
		errorMessage.style.color = 'red'
		errorMessage.innerHTML = 'user already exist'
		setTimeout (() => {
			errorMessage.style.display = 'none'
			spinnerButton.style.display = 'none';
			submitButton.style.display = 'inline-block';
		}, 1000);
		return;
	}; 


	localStorage.setItem(inputEmail, newUserString);

	setTimeout (() => {
		spinnerButton.style.display = 'none';
		submitButton.style.display = 'inline-block';
	}, 1000);
	window.location.pathname = 'home.html'
	
});
}
  render() {
    return (
      <div className="jumbotron">
  <div className="containercon">
    <div className="containercon2">
      <h1 style={{fontSize: 32}}>Join Medium</h1>
      <h2 style={{fontSize: 15}}>Create an account to personalize your homepage,<br /> follow your favorite authors and publications,<br /> applaud stories you love, and more.</h2> 
      <input id="name" type="text" className="form-control mb-2" placeholder="write your name" name={'name'} title={'name'} value={this.state.name} onChange={this.handleInput} />
      <input id="email" type="text" className="form-control mb-2" placeholder="write your email" name={'email'} title={'email'} value={this.state.email} onChange={this.handleInput} />
      <input id="password" type="password" className="form-control mb-2" placeholder="password" name={'password'} title={'password'} value={this.state.password} onChange={this.handleInput} />
      <small id="error-message" />
      <button id="submit-button" className="btn btn-sm btn-primary my-2" onClick={this.submit}>Register</button>
      <button id="spinner-button" className="btn btn-sm btn-primary">
        <i className="fas fa-spinner fa-spin " />
      </button>
      <div className="signinaccount">
        <p className="signin">Already have an account? <span><a href="login.html">login.</a></span></p>
        <p>To make Medium work, we log user data and share it with service providers. Click "Sign up" above to accept Medium’ <a href="#" className="text-dark"> Terms of Service </a> &amp; <a href="#" className="text-dark"> Privacy Policy.</a></p>
      </div>
    </div>
  </div>
</div>



    );
  }
}

export default Register;
