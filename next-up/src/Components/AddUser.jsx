import React, { Component } from 'react';
import UserService from '../Services/UserService';
import "../CSS/adduser.css";
import { storeUser } from '../LocalStorage/useLocalStorage';

class AddUser extends Component {
constructor(props) {
super(props);
this.state = {
id: '',
name: '',
email: '',
username: '',
password: '',
};

this.nameHandler = this.nameHandler.bind(this);
this.emailHandler = this.emailHandler.bind(this);
this.usernameHandler = this.usernameHandler.bind(this);
this.passwordHandler = this.passwordHandler.bind(this);

} //constructor

 

nameHandler = (event) => {
this.setState({
name: event.target.value,
});
};

emailHandler = (event) => {
this.setState({
email: event.target.value,
});
};
usernameHandler = (event) => {
  this.setState({
  username: event.target.value,
  });
  };
passwordHandler = (event) => {
    this.setState({
    password: event.target.value,
    });
    };

saveUser = (e) => {
e.preventDefault();
let user = {
id: this.state.id,
name: this.state.name,
email: this.state.email,
username: this.state.username,
password: this.state.password,
};
console.log(user);
UserService.createUser(user)
.then((res) => {
  storeUser(res.data.username)

  this.props.history.push('/users');
})
.catch((err) => {
console.log('record not saved.');
});
}; //closing save method

cancel() {
this.props.history.push('/login');
}

render() {
return (
<div>

<div className='signUpContainer'>
  <div className='backgroundCard'>
  <h2 className='textInfo'>Sign Up!</h2>
  <div className='logInCard-body'>
    <form className='signUpForm'>
      <div className='form-group signUpText'>
        <label>Name: </label>
        <input
          placeholder='Name'
          name='name'
          required
          className='form-control'
          value={this.state.name}
          onChange={this.nameHandler}
        />
      </div>

      <div className='form-group signUpText'>
        <label>User Email: </label>
        <input
          placeholder='Email'
          name='email'
          type='email'
          required
          className='form-control'
          value={this.state.email}
          onChange={this.emailHandler}
        />
      </div>
    <div className='form-group signUpText'>
        <label>User Name: </label>
        <input
          placeholder='Name'
          name='name'
          required
          className='form-control'
          value={this.state.username}
          onChange={this.usernameHandler}
        />
      </div>
      <div className='form-group signUpText'>
        <label>Password: </label>
        <input
          placeholder='Password'
          name='password'
          type='password'
          required

          className='form-control'
          value={this.state.password}
          onChange={this.passwordHandler}
        />
      </div>
      
      <button className=' saveBtn' onClick={this.saveUser}>
        {' '}
        Save{' '}
      </button>
      <button
        className='cancelBtn'
        onClick={this.cancel.bind(this)}
      >
        {' '}
        Cancel{' '}
      </button>
    </form>
  </div>
</div>
</div>
</div>
 
);
}
}

export default AddUser;
