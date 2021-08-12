import React, { useEffect, useState } from 'react';
import './style.css';
import htmlIcon from '../../linked-files/html.svg'
import cssIcon from '../../linked-files/css.svg'
import javascriptIcon from '../../linked-files/javascript.svg';
import reactIcon from '../../linked-files/react.svg';
import bootstrapIcon from '../../linked-files/bootstrap.svg';
import nodejsIcon from '../../linked-files/nodejs-icon.svg';
import expressIcon from '../../linked-files/express.svg';
import insomniaIcon from '../../linked-files/insomnia.svg';
import mysqlIcon from '../../linked-files/mysql.svg';
import mongodbIcon from '../../linked-files/mongodb.svg';
import gitIcon from '../../linked-files/git.svg';
import googleIcon from '../../linked-files/google-icon.svg';

import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger);


function Skills() {
    const [iconWidth, setIconWidth] = useState('150');

    useEffect(() => {
        // shrink icons if viewport is smaller than 600px
        if (window.innerWidth < 600) {
            // console.log('window.innerWidth < 600');
            setIconWidth('100');
        }

        // when potential employers go to see the responsiveness of my page ;) 
        function handleResize() {
            if (window.innerWidth <= 600) {
                setIconWidth('100');
            } else {
                setIconWidth('150');
            }
        }

        window.addEventListener('resize', handleResize);
    }, [])

    return (
        <section className="resume panel" id="resume">
            <h1>{`Check out `}
                <a href="./resume-ian-everitt.pdf" target="_blank">
                    <Tween
                        from={{
                            opacity: 0,
                            scrollTrigger: {
                                trigger: '.resume',
                                toggleActions: 'restart'
                            }
                        }}
                        ease='back'
                        delay={.25}
                        duration={2}
                    >
                        <span>my resume</span>
                    </Tween>
                </a>
                {` for a peek into my professional career so far.`}</h1>
            <h1 className="technologies-title">Technologies:</h1>
            <div className="container technologies">
                <div className="row">
                    <Tween
                        from={{
                            opacity: 0,
                            x: '100px', 
                            scrollTrigger: {
                                trigger: '.tech-logo',
                                toggleActions: 'restart'
                            }
                        }}
                        ease='elastic'
                        delay={.5}
                        duration={1.5}
                    >
                        <div className="html-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={htmlIcon} alt="HTML 5 logo" width={iconWidth} />
                            </div>
                        </div>
                        <div className="css-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={cssIcon} alt="CSS logo" width={iconWidth} />
                            </div>
                        </div>
                        <div className="javascript-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={javascriptIcon} alt="JavaScript logo" width={iconWidth} />
                            </div>
                        </div>
                        <div className="react-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={reactIcon} alt="React logo" width={iconWidth} />
                            </div>
                        </div>
                        <div className="bootstrap-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={bootstrapIcon} alt="Bootstrap logo" width={iconWidth} />
                            </div>
                        </div>
                        <div className="nodejs-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={nodejsIcon} alt="Node.js logo" width={iconWidth} />
                            </div>
                        </div>
                        <div className="express-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={expressIcon} alt="Express.js logo" width={iconWidth} />
                            </div>
                        </div>
                        <div className="insomnia-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={insomniaIcon} alt="Insomnia logo" width={iconWidth} />
                            </div>
                        </div>
                        <div className="mysql-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={mysqlIcon} alt="MySQL logo" width={iconWidth} />
                            </div>
                        </div>
                        <div className="mongodb-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={mongodbIcon} alt="MongoDB logo" width={iconWidth} />
                            </div>
                        </div>
                        <div className="git-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={gitIcon} alt="Git logo" width={iconWidth} />
                            </div>
                        </div>
                        <div className="google-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={googleIcon} alt="Google logo" width={iconWidth} />
                            </div>
                        </div>
                    </Tween>
                </div>
            </div>
        </section>
    )
}

export default Skills;//