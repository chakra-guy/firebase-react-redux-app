import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => (
  <ul className="right">
    <li>
      <NavLink to="/project/create"><div className="btn blue accent-3">+ New Project</div></NavLink>
    </li>
    <li>
      <NavLink to="/">Log Out</NavLink>
    </li>
    <li>
      <NavLink to="/" className="btn btn-floating grey darken-3">ST</NavLink>
    </li>
  </ul>
);

export default SignedInLinks;
