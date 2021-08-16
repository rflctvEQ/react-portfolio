import { useEffect } from 'react';
import './style.css';
import profilePicturePath from '../../images/portfolio-profile.jpeg'

// import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
// forces CSSRulePlugin to be included in build -- although ScrollTrigger works just fine locally, CSSPlugin seems to be dropped during build
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

gsap.registerPlugin(ScrollTrigger);


function About() {
    const atLeastTabletWidth = window.matchMedia('(min-width: 700px)');

    // animations for screens that are at least 700px wide
    // in the future, I should use useState to make specific changes within these gsap functions
    const largerScreenAnimations = () => {
        gsap.from('.hi', {
            x: '-250px',
            opacity: 0,
            scrollTrigger: {
                trigger: '.hi',
                start: 'top bottom',
                end: 'bottom center',
                scrub: 1,
                toggleActions: 'restart pause reverse pause'
            }
        })

        gsap.from('.profile-pic', {
            opacity: '0',
            scale: '0.6',
            scrollTrigger: {
                trigger: '.profile-pic',
                start: 'top bottom',
                end: 'bottom center',
                scrub: 1,
                toggleActions: 'restart pause reverse pause'
            }
        })

        gsap.from('.so-happy', {
            x: '250px',
            opacity: '0',
            scrollTrigger: {
                trigger: '.so-happy',
                start: 'top bottom',
                end: 'bottom 80%',
                scrub: 1,
                toggleActions: 'restart pause reverse pause'
            }
        })

        gsap.from('.about-desc', {
            scale: '0.6',
            opacity: '0',
            scrollTrigger: {
                trigger: '.so-happy',
                start: 'top bottom',
                end: 'bottom 80%',
                scrub: 1,
                toggleActions: 'restart pause reverse pause'
            }
        })


    }

    const smallerScreenAnimations = () => {
        gsap.from('.hi', {
            x: '-100px',
            opacity: 0,
            scrollTrigger: {
                trigger: '.hi',
                start: 'top 90%',
                end: 'top center',
                scrub: true,
                toggleActions: 'restart pause reverse pause'
            }
        })

        gsap.from('.profile-pic', {
            opacity: '0',
            scale: '0.3',
            scrollTrigger: {
                trigger: '.profile-pic',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                toggleActions: 'restart pause reverse pause'
            }
        })

        gsap.from('.so-happy', {
            x: '100px',
            opactiy: '0',
            scrollTrigger: {
                trigger: '.so-happy',
                start: 'top 90%',
                end: 'top 80%',
                scrub: true,
                toggleActions: 'restart pause reverse pause'
            }
        })

        gsap.from('.about-desc', {
            scale: '0.3',
            opacity: '0',
            scrollTrigger: {
                trigger: '.so-happy',
                start: 'top 90%',
                end: 'top 80%',
                scrub: true,
                toggleActions: 'restart pause reverse pause'
            }
        })
    }

    useEffect(() => {
        if (atLeastTabletWidth.matches) {
            console.log('largerScreenAnimations forthcoming')
            largerScreenAnimations()
        } else {
            console.log('smallerScreenAnimations forthcoming')
            smallerScreenAnimations()
        }
    })

    // animations for tablet and desktop viewing
    return (
        <section className="about panel" id="about">
            <h1 className="hi">Hi, my name's Ian</h1>
            <img src={profilePicturePath} alt="Ian's portrait" className="profile-pic" />
            <h2 className="so-happy">and I'm so happy to meet you.</h2>
            <h4 className="about-desc">I'm a full stack web developer with a passion for skill and character development. See my resume and my projects below to get a better idea of what we could accomplish together.</h4>
        </section>
    )

}

export default About;