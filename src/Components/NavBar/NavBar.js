import React from 'react';
import './NavBar.css';
// import mountainsPic from '../'

const NavBar = () => {

  return(
    <section className="section--navbar">
      <ul className="section__ul--navbar">
        <li className="li--navbar li--nav-about">About</li>
        <li className="li--navbar li--nav-published">Published</li>
        <li className="li--navbar li--nav-projects">Projects</li>
        <li className="li--navbar li--nav-contact">Contact</li>
      </ul>
    </section>
  )
}

export default NavBar;