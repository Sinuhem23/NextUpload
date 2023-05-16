import React, { Component } from 'react';
import '../CSS/login.css';
import { Link } from 'react-router-dom';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  render() {
    return (
      <div>
        <div className='signUpContainer'>
          <div className='backgroundCard'>
            <h2 className='textInfo'>Log In!</h2>
            <div className='logInCard-body'>
              <form className='signInForm'>
                <div className='form-group signInText'>
                  <label>User Name: </label>
                  <input
                    placeholder='Name'
                    name='name'
                    className='form-control'
                    // value={this.state.name}
                    // onChange={this.nameHandler}
                  />
                </div>

                <div className='form-group signInText'>
                  <label>Password: </label>
                  <input
                    placeholder='Password'
                    name='password'
                    className='form-control'
                    // value={this.state.password}
                    // onChange={this.passwordHandler}
                  />
                </div>
                <button className='loginSubmit'>Submit</button>
                <div className='signUpSection'>
                  <h3 className='signUpTextArea'>Need To Sign Up?</h3>

                  <Link to='/add-user' className='signUpBtn'>
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
