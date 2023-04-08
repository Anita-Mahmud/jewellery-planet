import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
const Footer = () => {
    return (
        <div className=''>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                   <Link to='/'>
                   <img src={logo} alt='book' className='w-20'/>
                    <p className="link link-hover font-lobster text-xl mt-2 text-blue-900 font-bold">Jewellery Planet</p>
                   </Link>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Jewellery Selling</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover" to='/about'>About us</Link>
                    <Link className="link link-hover" to='/contact'>Contact</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover" to='#'>Terms of use</Link>
                    <Link className="link link-hover" to='#'>Privacy policy</Link>
                    <Link className="link link-hover" to='#'>Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;