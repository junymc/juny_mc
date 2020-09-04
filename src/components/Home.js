import React from 'react'
import Social from './Social'

class Home extends React.Component {

    render() {
        return (
            <>
            <div>
                <Social />
            </div>
            <div className="home">
                <div className="intro">
                    <span className="intro-main">Hello, </span>
                    <span className="intro-sub1"> I am Juny,</span>
                    <span className="intro-sub2">Web Developer.</span>
                </div>
                <div className="title">
                    <p>Full stack developer | graphic designer</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://gitconnected.com/junymc/resume"> Resume </a>
                </div>
            </div>
            </>
        )
    }
}

export default Home;