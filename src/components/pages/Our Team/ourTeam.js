import React from 'react'
import Image1 from './images/1.png'
import './ourTeam.css'
import Footer from '../Footer/Footer'
import { Fragment } from 'react'
const images1 = [
  {
      imageLink: Image1,
      imageLink1: Image1
  }
]
const ourTeam = () => {
    return (
      <Fragment>
      <div className="container3">
       <div className="header">
         <h1>Our Team is our biggest strength</h1>
       </div>
       <div className="header-after"></div>
       <div className="sub-container">
       <div className="teams">
       {images1.map((val, index) => (
        <img src={val.imageLink1} alt='logo'
          className="card-img"
          key={index}
        />
      ))}
      <div className="name">Manya sharma</div>
      <div className="social-links">
      <a href="#"><i className="fab fa-facebook-square"></i></a>
      <a href="#"><i className="fab fa-twitter-square"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
    </div>
       </div>

       <div className="teams">
       {images1.map((val, index) => (
        <img src={val.imageLink1} alt='logo'
          className="card-img"
          key={index}
        />
      ))}
      <div className="name">Trisha Sahu</div>
      <div className="social-links">
      <a href="#"><i className="fab fa-facebook-square"></i></a>
      <a href="#"><i className="fab fa-twitter-square"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
    </div>
       </div>

       <div className="teams">
       {images1.map((val, index) => (
        <img src={val.imageLink1} alt='logo'
          className="card-img"
          key={index}
        />
      ))}
      <div className="name">Gurjot Singh</div>
      <div className="social-links">
      <a href="#"><i className="fab fa-facebook-square"></i></a>
      <a href="#"><i className="fab fa-twitter-square"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
    </div>
       </div>
       </div>
       </div>
       <Footer />
       </Fragment>
    )
}

export default ourTeam
