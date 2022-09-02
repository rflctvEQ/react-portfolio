import React, { useEffect, useState } from 'react';
import './style.css';
import angularIcon from '../../linked-files/angular-icon.svg';
import reactIcon from '../../linked-files/react.svg';
import typescriptIcon from '../../linked-files/typescript-icon.svg';
import javascriptIcon from '../../linked-files/javascript.svg';
import rxjsIcon from '../../linked-files/reactivex.svg';
import htmlIcon from '../../linked-files/html.svg'
import cssIcon from '../../linked-files/css.svg'
import greensockIcon from '../../linked-files/greensock-icon.svg';
import bootstrapIcon from '../../linked-files/bootstrap.svg';
import graphqlIcon from '../../linked-files/graphql.svg';
import grpcIcon from '../../linked-files/grpc.svg';
import nestjsIcon from '../../linked-files/nestjs.svg';
import nodejsIcon from '../../linked-files/nodejs-icon.svg';
import expressIcon from '../../linked-files/express.svg';
import phpIcon from '../../linked-files/php.svg';
import insomniaIcon from '../../linked-files/insomnia.svg';
import redisIcon from '../../linked-files/redis.svg';
import mysqlIcon from '../../linked-files/mysql.svg';
import mongodbIcon from '../../linked-files/mongodb.svg';
import typeormIcon from '../../linked-files/typeorm.svg';
import retoolIcon from '../../linked-files/retool-icon.svg';
import awsS3Icon from '../../linked-files/aws-s3.svg';
import dockerIcon from '../../linked-files/docker-icon.svg';
import gitIcon from '../../linked-files/git.svg';

import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
// forces CSSRulePlugin to be included in build -- although ScrollTrigger works just fine locally, CSSPlugin seems to be dropped during build
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

gsap.registerPlugin(ScrollTrigger);



function Skills() {
    const [iconWidthAndHeight, setIconWidthAndHeight] = useState('150');

    useEffect(() => {
        // shrink icons if viewport is smaller than 600px
        if (window.innerWidth < 600) {
            // console.log('window.innerWidth < 600');
            setIconWidthAndHeight('100');
        }

        // when potential employers go to see the responsiveness of my page ;) 
        function handleResize() {
            if (window.innerWidth <= 600) {
                setIconWidthAndHeight('100');
            } else {
                setIconWidthAndHeight('150');
            }
        }

        window.addEventListener('resize', handleResize);
    }, [])

    return (
        <section className="resume panel" id="resume">
            <h1 className='check-out-my-resume'>{`Check out `}
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
                        <span>my&nbsp;resume</span>
                    </Tween>
                </a>
                {` for a peek into my professional career so far.`}</h1>
            <h1 className="technologies-title">Technologies</h1>
            <div className="container technologies">
                <div className="row">
                    <Tween
                        from={{
                            opacity: 0,
                            x: '100px',
                            scrollTrigger: {
                                trigger: '.tech-logo'
                            }
                        }}
                        ease='elastic'
                        delay={.5}
                        duration={1.5}
                    >
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={angularIcon} alt="Angular logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>Angular</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={reactIcon} alt="React logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>React</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={typescriptIcon} alt="TypeScript logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>TypeScript</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={javascriptIcon} alt="JavaScript logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>JavaScript</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={rxjsIcon} alt="RxJS logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>RxJS</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={htmlIcon} alt="HTML 5 logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>HTML</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={cssIcon} alt="CSS logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>CSS</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={greensockIcon} alt="Greensock logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>GreenSock Animation</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={bootstrapIcon} alt="Bootstrap logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>Bootstrap</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={graphqlIcon} alt="GraphQL logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>GraphQL</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={grpcIcon} alt="gRPC logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>gRPC</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={nestjsIcon} alt="NestJS logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>NestJS</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={nodejsIcon} alt="Node.js logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>Node.js</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={expressIcon} alt="Express.js logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>Express</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={phpIcon} alt="PHP logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>PHP</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={redisIcon} alt="Redis logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>Redis</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={mysqlIcon} alt="MySQL logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>MySQL</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={mongodbIcon} alt="MongoDB logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>MongoDB</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={typeormIcon} alt="TypeORM logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>TypeORM</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={retoolIcon} alt="Retool logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>Retool</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={awsS3Icon} alt="AWS S3 logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>AWS S3</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={dockerIcon} alt="Docker logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>Docker</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={insomniaIcon} alt="Insomnia logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>Insomnia</p>
                        </div>
                        <div className="tech-div col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="tech-logo">
                                <img src={gitIcon} alt="Git logo" width={iconWidthAndHeight} height={iconWidthAndHeight} />
                            </div>
                            <p>Git</p>
                        </div>
                    </Tween>
                </div>
            </div>
        </section>
    )
}

export default Skills;//