/* eslint-disable @next/next/link-passhref */
import classes from './Navbar.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { createMainContext } from './Context';



const Footer = () => {

  return <section className="container text-center" style={{marginTop: '8%'}}>
    <nav className={`${classes.footer_main}`}>
      <div className="p-3">
        <span>© 2021 Debarshi Mondal, All right reserved.</span>
      </div>
    </nav>
  </section>
}

export default Footer;
