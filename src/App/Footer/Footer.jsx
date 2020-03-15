import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        
        <footer className='Footer'>
            <div class="social-icons">
                <a class="social-icon social-icon--facebook" href="#">
                    <i class="fa fa-facebook"></i>
                </a>
                <a class="social-icon social-icon--twitter" href="#">
                    <i class="fa fa-twitter"></i>
                </a>
                <a class="social-icon social-icon--instagram" href="#">
                    <i class="fa fa-instagram"></i>
                </a>
                <a class="social-icon social-icon--linkedin" href="#">
                <i class="fa fa-linkedin"></i>
                </a>
            </div>
            <div className="copyright">&copy;2020 Sed ut perspiciatis</div>
        </footer>
    )
};

export default Footer;