import React, { Component } from 'react';
import UserService from '../Services/UserService';
import { getUserFromStorage } from '../LocalStorage/useLocalStorage';
import { Link } from 'react-router-dom';
import EntirePlayList from './EntirePlayList';
import '../CSS/account.css';

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    let user = getUserFromStorage();
    if (user !== null) {
      UserService.getUserByUserName(user).then((res) => {
        this.setState({ user: { ...res.data } });
        // this.setState({ user: res.data });
      });
    }
  }

  editUser(id) {
    this.props.history.push(`/update-user/${id}`);
  }

  deleteUser(id) {
    this.props.history.push(`/delete-user/${id}`);
  }

  render() {
    return (
      <div>
        {this.state.user.username ? (
          <h2 className='userAccountText'>{this.state.user.name}'s Account</h2>
        ) : (
          <Link className='signUpLink' to='/add-user'>
            Sign up!
          </Link>
        )}

        <div className='userDetailsContainer'>
          {this.state.user.username ? (
            <>
              <div>
                <image className='userImage'></image>
              </div>
              <div className='userDetails'>
                <h3>Username: {this.state.user.username} </h3>
                <h3>Email: {this.state.user.email} </h3>
                <button
                  onClick={() => this.editUser(this.state.user.id)}
                  className='updateBtn btn-primary'
                >
                  Update
                </button>
                <button
                  onClick={() => this.deleteUser(this.state.user.id)}
                  className='deleteBtn btn-danger'
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <h3>
              <></>
            </h3>
          )}
        </div>

        <div>
          <p></p>
        </div>
        <div className='row'>
          {/* Entire playlist */}
          <EntirePlayList />
        </div>
      </div>
    );
  }
}

export default ListUsers;
