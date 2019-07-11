import React, {useEffect} from 'react';
import M from '../node_modules/materialize-css/dist/js/materialize.min.js';
import './App.css';

function SideNav(props) {
  const links = props.navLinks.map((link) => {
    return (
      <li>
        <a href={link.href}>{link.text}</a>
      </li>
    )
  });

  useEffect(() => {
    const sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav);
  });

  return (
    <ul className="sidenav" id="mobile-nav">
      {links}
    </ul>
  );
}

export default SideNav;
