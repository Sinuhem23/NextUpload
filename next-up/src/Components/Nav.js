import React, { Component } from 'react';
import UserService from '../Services/UserService';
import { getUserFromStorage } from '../LocalStorage/useLocalStorage';
import '../CSS/nav.css';
import Logo from '../images/gears.png';

// import SearchBar from './SearchBar';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
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
  render() {
    return (
      <div>
        {/* --Navbar   -- */}
        <nav className='nav'>
          <div>
            <a href='/'>
              <img className='icon-1' alt='VehicleUP Logo' src={Logo}></img>
            </a>
          </div>
          <h1 className='website_name'>
            <span>V</span>ehicle <span>U</span>ploads
          </h1>
          {/* <SearchBar /> */}
          <div className='icon-2'>
            <h3>
              <a href='/'>Home</a>
            </h3>
          </div>
          {this.state.user.username ? (
            <div className='icon-3'>
              <h3>
                <a href='/users'>{this.state.user.username}</a>
              </h3>
            </div>
          ) : (
            <div className='icon-3'>
              <h3>
                <a href='/login'>Login</a>
              </h3>
            </div>
          )}
        </nav>
        {/* -- End of Navbar -- */}
      </div>
    );
  }
}
export default Nav;
