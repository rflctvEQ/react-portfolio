import React from 'react';
import './style.css';
import gmailIcon from '../../images/gmail-logo.png'
import githubIcon from '../../images/github-logo.png';
import linkedinIcon from '../../images/linkedin-logo.png';

function Contact() {

    return (
        <section className="vh-100 contact panel" id="contact">
            <div className="contact-row">
                <div className="contact-column">
                    <h1 className='contact-me'>Contact me</h1>
                    <div className="center-name-email">
                        <h2>Ian Everitt</h2>
                        <h3><a href='mailto:ian.andrew.everitt@gmail.com' target="_blank">ian.andrew.everitt@gmail.com</a></h3>
                    </div>
                </div>
                <div className="links">
                    <a href="mailto:ian.andrew.everitt@gmail.com" target="_blank">
                        <img src={gmailIcon} alt="Gmail logo" className="gmail-logo" />
                    </a>
                    <a href="https://github.com/rflctvEQ" target="_blank">
                        <img src={githubIcon} alt="GitHub logo" className="github-logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/ian-everitt-451973201/" target="_blank">
                        <img src={linkedinIcon} alt="LinkedIn logo" className="linkedin-logo" />
                    </a>
                </div>
            </div>
        </section> 
    )
}

export default Contact;