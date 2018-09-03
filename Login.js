
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './../css/login.css';
import axios from 'axios';

class Login extends Component {
constructor(){
  super()
  this.state = {
    email:'',
    password:''
  }
}


handleInputChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = () => {
  let userDetails = {
    email: this.state.email,
    password: this.state.password
  }

  let registeredUser = axios.post('https:v-forum-api.bahdcasts.com/api/login', userDetails)
  registeredUser.then((response)=> {
    console.log(response);
    if(response.status === 200) {
      return (this.props.history.push('/home')) 
    }
    
  }).catch((error)=>{
    console.log(error);
  })

  

}

  render() {
    return (
        <div className="jumbotron">
        <div className="containercon">
          <div className="containercon2">
            <h1 style={{fontSize: 32}}>Welcome</h1>
            <h2 style={{fontSize: 15}}>Create an account to personalize your homepage,<br /> follow your favorite authors and publications,<br /> applaud stories you love, and more.</h2> 
            <input id="email" type="text" className="form-control mb-2" placeholder="write your email" name={'email'} title={'email'} value={this.state.email} onChange={this.handleInputChange} />
            <input id="password" type="password" className="form-control mb-2" placeholder="password" name={'password'} title={'password'} value={this.state.password} onChange={this.handleInputChange} />
            <small id="error-message" />
            <button id="submit-button" className="btn btn-sm btn-primary my-2" onClick={this.submit}>Login</button>
            <button id="spinner-button" className="btn btn-sm btn-primary">
              <i className="fas fa-spinner fa-spin " />
            </button>
            <div className="signinaccount">
              <p className="signin">Dont have an account? <span><a href="login.html">Create one.</a></span></p>
              <p>To make Medium work, we log user data and share it with service providers. Click "Sign up" above to accept Medium’ <a href="#" className="text-dark"> Terms of Service </a> &amp; <a href="#" className="text-dark"> Privacy Policy.</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login ;