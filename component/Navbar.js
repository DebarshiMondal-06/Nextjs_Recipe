/* eslint-disable @next/next/link-passhref */
import classes from './Navbar.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { createMainContext } from './Context';



const Navbar = ({ children }) => {
  const { setText } = useContext(createMainContext);

  return <section className="container">
    <nav className={`navbar navbar-expand-lg navbar-light shadow light ${classes.navbar_main}`}>
      <div className="container-fluid">
        <article className="navbar-brand" style={{ fontSize: 35, color: '#333333' }}>
          <Link href="/">
            <span style={{ cursor: 'pointer' }}>𝓬𝓾𝓲𝓼𝓲𝓷𝓮 </span>
          </Link>
        </article>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className={`navbar-nav ${classes.unorder_list}`}>
            <li className={`nav-item ${classes.items_nav}`}>
              <Link aria-current="page" href="/">
                <span>Home</span>
              </Link>
            </li>
            <li className={`nav-item ${classes.items_nav}`}>
              <Link className="nav-link" href="/tags">
                <span>Tags</span>
              </Link>
            </li>
            <li className={`nav-item ${classes.items_nav}`}>
              <Link className="nav-link" href="/newset">
                <span>Newest</span>
              </Link>
            </li>
            <li className={`nav-item ${classes.items_nav}`} onClick={() => setText('')}>
              <Link className="nav-link" href="/recipe">
                <span>Recipe</span>
              </Link>
            </li>
          </ul>
          <article className={`${classes.navbar_btn}`}>
            <Link href="/contact">
              <button className={`btn`}>
                Contact
              </button>
            </Link>
          </article>
        </div>
      </div>
    </nav>
    <div>{children}</div>
  </section>
}

export default Navbar
