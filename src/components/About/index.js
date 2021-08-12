import React from 'react';
import './style.css';
import profilePicturePath from '../../images/portfolio-profile.jpeg'

import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger);

function About() {
    const atLeastTabletWidth = window.matchMedia('(min-width: 700px)');

    if (atLeastTabletWidth.matches) {
        // animations for tablet and desktop viewing
        return (
            <section className="about panel" id="about">
                <Tween
                    from={{
                        x: '-250px',
                        opacity: 0,
                        scrollTrigger: {
                            trigger: '.hi',
                            start: 'top bottom',
                            end: 'bottom center',
                            scrub: 1,
                            toggleActions: 'restart pause reverse pause'
                        }
                    }}
                    duration={1.5}
                >
                    <h1 className="hi">Hi, my name's Ian</h1>
                </Tween>
                <Tween
                    from={{
                        opacity: '0',
                        scale: '0.6', 
                        scrollTrigger: {
                            trigger: '.profile-pic',
                            start: 'top bottom',
                            end: 'bottom center',
                            scrub: 1,
                            toggleActions: 'restart pause reverse pause'
                        }
                    }}
                    duration={2.5}
                >
                    <img src={profilePicturePath} alt="Ian's portrait" className="profile-pic" />
                </Tween>
                <Tween
                    from={{
                        x: '250px',
                        opactiy: '0',
                        scrollTrigger: {
                            trigger: '.so-happy',
                            start: 'top bottom',
                            end: 'bottom 80%',
                            scrub: 1,
                            toggleActions: 'restart pause reverse pause'
                        }
                    }}
                    duration={1.5}
                >
                    <h2 className="so-happy">and I'm so happy to meet you.</h2>
                </Tween>
                <Tween
                    from={{
                        scale: '0.6',
                        opacity: '0',
                        scrollTrigger: {
                            trigger: '.so-happy',
                            start: 'top bottom',
                            end: 'bottom 80%',
                            scrub: 1,
                            toggleActions: 'restart pause reverse pause'
                        }
                    }}
                    duration={2.5}
                >
                    <h4 className="about-desc">I'm a full stack web developer with a passion for skill and character development. See my resume and my projects below to get a better idea of what we could accomplish together.</h4>
                </Tween>
            </section>
        )
    } else {
        // animation for mobile viewing
        return (
            <section className="about panel" id="about">
                <Tween
                    from={{
                        x: '-100px',
                        opacity: 0,
                        scrollTrigger: {
                            trigger: '.hi',
                            start: 'top 90%',
                            end: 'top center',
                            scrub: true,
                            toggleActions: 'restart pause reverse pause'
                        }
                    }}
                >
                    <h1 className="hi">Hi, my name's Ian</h1>
                </Tween>
                <Tween
                    from={{
                        opacity: '0',
                        scale: '0.3', 
                        scrollTrigger: {
                            trigger: '.profile-pic',
                            start: 'top 90%',
                            end: 'top 60%',
                            scrub: true,
                            toggleActions: 'restart pause reverse pause'
                        }
                    }}
                >
                    <img src={profilePicturePath} alt="Ian's portrait" className="profile-pic" />
                </Tween>
                <Tween
                    from={{
                        x: '100px',
                        opactiy: '0',
                        scrollTrigger: {
                            trigger: '.so-happy',
                            start: 'top 90%',
                            end: 'top 80%',
                            scrub: true,
                            toggleActions: 'restart pause reverse pause'
                        }
                    }}
                >
                    <h2 className="so-happy">and I'm so happy to meet you.</h2>
                </Tween>
                <Tween
                    from={{
                        scale: '0.3',
                        opacity: '0',
                        scrollTrigger: {
                            trigger: '.so-happy',
                            start: 'top 90%',
                            end: 'top 80%',
                            scrub: true,
                            toggleActions: 'restart pause reverse pause'
                        }
                    }}
                >
                    <h4 className="about-desc">I'm a full-stack developer refining my skills through MSU's Coding Bootcamp. See my resume and my projects below to get a better idea of what we could accomplish together.</h4>
                </Tween>
            </section>
        )
    }
}

export default About;