import React from 'react';
import {NavLink} from 'react-router-dom';
const NavBar = () => (
  <div>
    <div>
      <NavLink exact to="/">wikiHong</NavLink>|&nbsp;
      <NavLink to="/wikiHong2">wikiHong2</NavLink>|&nbsp;
      <NavLink to="/wikiHong3">wikiHong3</NavLink>
    </div>
  </div>
)
export default NavBar;