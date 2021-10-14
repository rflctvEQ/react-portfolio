import React, { useState } from "react";
import './style.css';

function Nav() {

    // button that opens/collapses navbar 
    const [ hamBtnClass, setHamBtnClass ] = useState('animated-icon');
    // div that opens/collapses with list of navlinks
    const [ collapseDivClass, setCollapseDivClass ] = useState('collapse navbar-collapse');

    // function for clicking hamburger icon
    const handleHamBtnClick = () => {
        const animatedIcon = document.getElementsByClassName('animated-icon')[0];

        if (animatedIcon.classList.value === 'animated-icon') {
            setHamBtnClass('animated-icon open');
            setCollapseDivClass('collapse navbar-collapse show');
        } else {
            setHamBtnClass('animated-icon');
            setCollapseDivClass('collapse navbar-collapse');
        }
    }

    // hide navbar while scrolloing 
    const [ navbarPosition, setNavbarPosition ] = useState('0')
    
    let prevScrollPos = window.pageYOffset;
    window.addEventListener('scroll', () => {
        const animatedIcon = document.getElementsByClassName('animated-icon')[0];
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            setNavbarPosition('0');
        // this ensures navbar doesn't disappear when the user clicks on hamburger icon
        } else if (animatedIcon.classList.contains('open')) {
            setNavbarPosition('0');
        // this fixes bug for mobile where navbar disappears when users scroll to top
        } else if (currentScrollPos < 30) {
            setNavbarPosition('0');
        } else {
            setNavbarPosition('-50px');
        }

        prevScrollPos = currentScrollPos;
    })

    return (
        <nav className="navbar navbar-dark red lighten-1 mb-4 custom-nav" style={{top: navbarPosition}}>
            <a className="navbar-brand nav-name" href="/#">Ian Everitt</a>
            {/* Collapse button */}
            <button className="navbar-toggler second-button custom-btn" onClick={handleHamBtnClick} type="button" data-target="#navbarSupportedContent23" aria-controls="navbarSupportedContent23" aria-expanded="false" aria-label="Toggle navigation">
                <div className={hamBtnClass}><span></span><span></span><span></span><span></span></div>
            </button>
            {/* Collapsible content */}
            <div className={collapseDivClass} id="navbarSupportedContent23">
                <ul className="navbar-nav mr-auto" onClick={ handleHamBtnClick }>
                    {/* adding className "active" to any <li> gives it special styling */}
                    <li className="nav-item about-link">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link projects-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link resume-link" href="#resume">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link contact-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;