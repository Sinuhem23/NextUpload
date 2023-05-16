import React, { Component } from 'react';
import { getUserFromStorage } from '../LocalStorage/useLocalStorage';
import UserService from '../Services/UserService';

import '../CSS/subnav.css';

const subNav = [
  { url: '/trending-boats', name: 'Boats' },
  { url: '/trending-cars', name: 'Cars' },
  { url: '/trending-motorcycles', name: 'Motorcycles' },
  { url: '/trending-airplanes', name: 'Airplanes' },
  { url: '/', name: 'All' },
];

class SubNav extends Component {
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
        <div className='all_Navbar_Container'>
          {/* -- Sub-Navbar -- */}
          {/* -- The navigation menu -- */}
          {this.state.user.username ? (
            <div className='sub_navbar'>
              <a href='./likedvideos'>Liked Videos</a>
              <div className='subnav'>
                <button className='subnavbtn'>
                  Playlist <i className='fa fa-caret-down'></i>
                </button>
                <div className='subnav-content'>
                  <a href='./entireplaylist'>All</a>

                  <a href='./favorite-playlist'>Favorite List</a>
                </div>
              </div>
              <div className='subnav'>
                <button className='subnavbtn'>
                  Account <i className='fa fa-caret-down'></i>
                </button>
                <div className='subnav-content'>
                  <a href='./myvideos'>My videos</a>

                  <a href='./users'>My information</a>
                </div>
              </div>
              <div className='subnav'>
                <button className='subnavbtn'>
                  Trending <i className='fa fa-caret-down'></i>
                </button>
                <div className='subnav-content'>
                  {subNav.map((item, idx) => (
                    <a key={idx} href={item.url}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <a href='./history'>History</a>
            </div>
          ) : (
            <div className='sub_navbar'>
              <div className='subnav'>
                <button className='subnavbtn'>
                  Trending <i className='fa fa-caret-down'></i>
                </button>
                <div className='subnav-content'>
                  {subNav.map((item, idx) => (
                    <a key={idx} href={item.url}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* -- End of Sub-Navbar -- */}
        </div>
        {/* -- End of All Navbar Container -- */}
      </div>
    );
  }
}
export default SubNav;
