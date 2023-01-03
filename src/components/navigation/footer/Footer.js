import React from 'react'
import '../footer/Footer.css'
import { MdLocationPin } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import Twitch from '../../../images/twitch.png'
import LinkedIn from "../../../images/LinkedIn.png"

const Footer = () => {
  return (
    <div>
        <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
            <div className="row flex justify-evenly row1">
                <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                    <MdLocationPin className='text-purple-400 text-3xl mt-4'/>
                    <div className="cta-text">
                    <h4>Find us</h4>
                    <span>1010 Avenue, sw 54321, chandigarh</span>
                    </div>
                </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                    <FaPhone className='text-purple-400 text-3xl mt-4'/>
                    <div className="cta-text">
                    <h4>Call us</h4>
                    <span>9876543210 0</span>
                    </div>
                </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                    <SiGmail className='text-purple-400 text-3xl mt-4'/>
                    <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="footer-content pt-5 pb-5">
            <div className="row flex row2">
                <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                    <div className="footer-logo">
                    <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo"></img></a>
                    </div>
                    <div className="footer-text">
                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                        elit,Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="footer-social-icon">
                    <span>Follow us</span>

                    <div className='flex'>
                    <a href="#">
                        <img src={Twitch} className="w-8 rounded-md"></img>    
                    </a>
                    <a href="#">
                        <img src={LinkedIn} className="w-8 rounded-md"/>    
                    </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                    <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                    </div>
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Expert Team</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Latest News</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                    <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                    </div>
                    <div className="footer-text mb-25">
                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                    </div>
                    <div className="subscribe-form">
                    <form action="#">
                        <input type="text" placeholder="Email Address" />
                        <button><MdOutlineAlternateEmail className='text-purple-400 text-3xl'/></button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                    <p>Copyright &copy; 2023, All Right Reserved <a href="https://github.com/mhrdd021">Mhrdd</a></p>
                </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
    </div>
  )
}

export default Footer