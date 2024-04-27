import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo" />
                    <p>Lorem ipsum dolor sit, DUMMY TEXT ONLY amet consectetur adipisicing elit. Eum, necessitatibus deleniti. Itaque dolorum, beatae doloribus dignissimos natus ut impedit quae nulla voluptate dolore. Tempore error harum ipsa animi quibusdam! Iusto.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebook" />
                        <img src={assets.twitter_icon} alt="twitter" />
                        <img src={assets.linkedin_icon} alt="Linkedin" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                
                <div className="footer-content-right">
                <h2>Get In Touch</h2>    
                <ul>
                    <li>+123-456-789-10</li>
                    <li>contact@bayskie@gmail.com</li>
                </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">
                Copyright &copy; 2024 Bayskie Foods. All rights reserved.
            </p>
        </div>
        
    )
}

export default Footer
