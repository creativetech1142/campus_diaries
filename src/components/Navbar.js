import React, { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './Navbar.css';
import Academics from "./pages/academics";
import Home from "./pages/home";
import OurTeam from "../components/pages/Our Team/ourTeam";
import Pupedia from "./pages/pupedia";
import ContactUs from "./pages/contactUs";
import Updates from "./pages/updates";
import ScrollToTop from './pages/ScrollToTop'
function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar,setNavbar] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const changeBackground=()=>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll',changeBackground);
  return (
     <BrowserRouter>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          CAMPUS DIARIES
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='/home' className='nav-links' activeClassName='active' exact={true} onClick={closeMobileMenu}>
              HOME
            </NavLink>
          </li>
          <li className='nav-item'>
          <NavLink
            to='/our-team'
            className='nav-links' activeClassName='active'  exact={true}
            onClick={closeMobileMenu}
          >
            OUR TEAM
          </NavLink>
        </li>
          <li className='nav-item'>
            <NavLink
              to='/pupedia'
              className='nav-links' activeClassName='active'  exact={true}
              onClick={closeMobileMenu}
            >
              PUPEDIA
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/academics/questionPapers'
              className='nav-links' activeClassName='active' exact={true}
              onClick={closeMobileMenu}
            >
              ACADEMICS
            </NavLink>
          </li>
          <li className='nav-item'>
          <NavLink
            to='/updates'
            className='nav-links' activeClassName='active'  exact={true}
            onClick={closeMobileMenu}
          >
            UPDATES
          </NavLink>
        </li> 
        <li className='nav-item'>
            <NavLink
              to='/contact-us'
              className='nav-links' activeClassName='active' exact={true}
              onClick={closeMobileMenu}
            >
          CONTACT US
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
          <ScrollToTop />
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/our-team" component={OurTeam} />
          <Route path="/pupedia" component={Pupedia} />
          <Route path="/academics" component={Academics} />
          <Route path="/updates" component={Updates} />
          <Route path="/contact-us" component={ContactUs} />
       </main>
      </BrowserRouter>
  );
}

export default Navbar;
