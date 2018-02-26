import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';
const NavBar = () => (
  <div>
    <div>
      <NavLink exact className="blue" to="/">wikiHong</NavLink>|&nbsp;
      <NavLink to="/wikiHong2">wikiHong2</NavLink>|&nbsp;
      <NavLink to="/wikiHong3">wikiHong3</NavLink>
    </div>
  </div>
)
export default NavBar;