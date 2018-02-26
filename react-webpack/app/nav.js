import React from 'react';
import {NavLink} from 'react-router-dom';
// import './nav.css';
const NavBar = () => (
  <div>
    <div>
      <NavLink exact className="blue" to="/">wikiHong</NavLink>|&nbsp;
      <NavLink style={{color: 'red', fontSize: '20px' }} to="/wikiHong2">wikiHong2</NavLink>|&nbsp;
      <NavLink activeClassName="pink" to="/wikiHong3">wikiHong3</NavLink>|&nbsp;
      <NavLink to="/react">404page</NavLink>|&nbsp;
      <NavLink to="/Redirect">Redirect</NavLink>
    </div>
  </div>
)
export default NavBar;