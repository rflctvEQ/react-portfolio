import React from 'react';
import { Tween } from 'react-gsap';
import './style.css';

function Title() {
    return (
        <header className="jumbotron vh-100 custom-jumbo">
            <div className="header-div">
                <Tween
                    from={{
                        x: '-2000px',
                        opacity: '0',
                        delay: '1'
                    }}
                    duration={1}
                    ease='back'
                >
                    <h1 className="my-name">IAN EVERITT</h1>
                </Tween>
                <Tween
                    from={{ y: '150px', opacity: '0', delay: '2' }}
                    duration={1}
                    ease='elastic.out(.5)'
                >
                    <h2 className="web-dev">Full-Stack Web Developer</h2>
                </Tween>
            </div>
        </header >
    )
}

export default Title;