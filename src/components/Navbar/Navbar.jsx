import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <NavLink to="/" className={styles.brand}>
      Felipe.
    </NavLink>
    <ul className={styles.links_list}>
      <li>
        <NavLink to="/skills" >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" >
          Contact
        </NavLink>
      </li>
      
    </ul>
  </nav>
  )
}

export default Navbar