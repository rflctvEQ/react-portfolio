import React from 'react';
import './style.css';

import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';

// forces CSSRulePlugin to be included in build -- although ScrollTrigger works just fine locally, CSSPlugin seems to be dropped during build
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);


function Projects() {

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#222" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <section className="projects panel" id="projects">
                <div className="container project-container">
                    <h1>My projects</h1>
                    <div className="row justify-content-center row1">
                        <Tween
                            from={{
                                x: '250px',
                                opacity: 0,
                                scrollTrigger: {
                                    trigger: '.project1'
                                }
                            }}
                            ease='back'
                        >
                            <figure className="col-10 col-md-4 col-lg-3 project project1">
                                <div className="description">
                                    <p className="project-title">Generation Esports</p>
                                    <p>Esports platform for tournament/streaming/team management.<br /><br /> Angular | TypeScript | NestJS | Node.js | Express | PHP | MySQL | MongoDB | Redis | TypeORM | gRPC | GraphQL | REST | AWS</p>
                                    <div className="link-buttons">
                                        <a href="https://app.generationesports.com" target="_blank" className="project-link">Visit Site</a>
                                    </div>
                                </div>
                            </figure>
                            <figure className="col-10 col-md-4 col-lg-3 project project2">
                                <div className="description">
                                    <p className="project-title">Enchanted Quill</p>
                                    <p>React/TypeScript/Express/MySQL ecommerce site for Enchanted Quill Artwork, LLC.</p>
                                    <div className="link-buttons">
                                        <a href="https://enchantedquillart.com" target="_blank" className="project-link">Visit Site</a>
                                    </div>
                                </div>
                            </figure>
                            <figure className="col-10 col-md-4 col-lg-3 project project3">
                                <div className="description">
                                    <p className="project-title">This Game</p>
                                    <p>React/TypeScript interactive story with subpar writing.</p>
                                    <div className="link-buttons">
                                        <a href="https://github.com/rflctvEQ/this-game" target="_blank" className="github-link">GitHub Repo</a>
                                        <a href="https://stoic-kowalevski-619236.netlify.app/" target="_blank" className="project-link">Visit Site</a>
                                    </div>
                                </div>
                            </figure>
                        </Tween>
                        <Tween
                            from={{
                                x: '-250px',
                                opacity: 0,
                                scrollTrigger: {
                                    trigger: '.project4'
                                }
                            }}
                            ease='back'
                        >
                            <figure className="col-10 col-md-4 col-lg-3 project project4">
                                <div className="description">
                                    <p className="project-title">Inspecto-Gadget</p>
                                    <p>MVP of React/JS/Express/MySQL app building inspectors in Orchard Lake, MI use for tracking inspections.</p>
                                    <p className='username'>User: Electrical</p>
                                    <p className='password'>Password: pass12345</p>
                                    <div className="link-buttons">
                                        <a href="https://github.com/Laurenzel93/inspecto-gadget" target="_blank" className="github-link">GitHub Repo</a>
                                        <a href="https://arcane-taiga-84005.herokuapp.com/" target="_blank" className="project-link">Visit Site</a>
                                    </div>
                                </div>
                            </figure>
                            <figure className="col-10 col-md-4 col-lg-3 project project5">
                                <div className="description">
                                    <p className="project-title">Group Mentality</p>
                                    <p>JS/Handlebars/Experss/MySQL app where you can post to a public forum and have direct interactions with mental health specialists.</p>
                                    <div className="link-buttons">
                                        <a href="https://github.com/rflctvEQ/group-mentality" target="_blank" className="github-link">GitHub Repo</a>
                                        <a href="https://protected-waters-68869.herokuapp.com/" target="_blank" className="project-link">Visit Site</a>
                                    </div>
                                </div>
                            </figure>
                            <figure className="col-10 col-md-4 col-lg-3 project project6">
                                <div className="description">
                                    <p className="project-title">Tech Blog</p>
                                    <p>JS/Handlebars/Experss/MySQL app for techies to blog about their latest projects.</p>
                                    <div className="link-buttons">
                                        <a href="https://github.com/rflctvEQ/tech-blog" target="_blank" className="github-link">GitHub Repo</a>
                                        <a href="https://afternoon-retreat-69044.herokuapp.com/" target="_blank" className="project-link">Visit Site</a>
                                    </div>
                                </div>
                            </figure>
                        </Tween>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#222" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </>
    )
}

export default Projects;