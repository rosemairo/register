import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import Axios from '../../node_modules/axios';


class Form extends Component {
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
    }
  render() {
    return (
      <div>
        <Input value={this.state.name} onChange={this.handleInput} name= {'name'} title={'name'} />
        <Input title={'email'} onChange={this.handleInput} name={'email'} value={this.state.email} />
        <Input title={'password'} onChange={this.handleInput} name={'password'} value={this.state.password} />
        <Button onClick={this.submit} />
      </div>
    );
  }
}

export default Form;
