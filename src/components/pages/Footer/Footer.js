import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa';
const Icon = styled.div`
   color: #fff;
   font-size: 1.8rem
`;
const Footer = () => {
    return (
        <div>
        <footer class="footer-distributed">

        <div class="footer-left">
            <h3>Campus<span> Diaries</span></h3>
            <p class="footer-links">
            <p class="footer-company-name">Quick Links</p>
                <Link to="/academics/questionPapers">Academics&nbsp;</Link>
                |
                <a href="#">&nbsp;Events&nbsp;</a>
                |
                <a href="#">&nbsp;Contribute&nbsp;</a>
                |
                <a href="#">&nbsp;Contact Us&nbsp;</a>
            </p>

            <p class="footer-company-name">Join Us</p>
            <div class="footer-icons">
					<Link><Icon><FaFacebookSquare /></Icon></Link>
                    <Link><Icon><FaInstagramSquare /></Icon></Link>
                    <Link><Icon><FaTwitterSquare /></Icon></Link>
                    <Link><Icon><FaLinkedin /></Icon></Link>
				</div>
            <p class="footer-company-name">© 2021 Campus Diaries Pvt. Ltd.</p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                  <p><span>Punjab University Regional Centre, Bajwara</span>
                   Hoshiarpur, Punjab, 146023</p>
            </div>

            <div>
                <i class="fa fa-phone phn"></i>
                <p>+91 9417665710</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:creativetech1142@gmail.com">creativetech1142@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About Us</span>
                Campus Diaries is a socio-academic portal made for PUSSGRCians. It was started out by 3 passionate students 
                with a strong aim of working for the betterment of college. It provides every single update regarding 
                educational, cultural events and workshops. Moreover it provides access to all the past year question papers, 
                classroom notes, lab work and other cool stuff. <br></br>
                Feel free to contact us if you want to be a part of this 
                amazing platform.
            </p>
        </div>
    </footer> 
        </div>
    )
}

export default Footer
