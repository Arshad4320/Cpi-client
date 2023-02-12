import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/styles.css'

const Footer = () => {
    return (
        <div className='bg-color text-neutral-content pb-5'>
            <footer className=" footer p-10  ">
            <div>
                <span className="footer-title">Menu</span>
                <Link to='/' className="link link-hover">Home</Link>
                <Link to='/about' className="link link-hover">About</Link>
                <Link to='/notice' className="link link-hover">Notice</Link>
                <Link to='/contact'className="link link-hover">Contact Us</Link>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <Link className="link link-hover">Facebook</Link>
                <Link className="link link-hover">Youtube</Link>
                <Link className="link link-hover">Linkedin</Link>
                <Link className="link link-hover">Twitter</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
        <p className='text-center
         '>Developed by Dark Web Team</p>
        </div>
    );
};

export default Footer;