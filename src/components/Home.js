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
                <span className="home-main">Hello, </span>
                <span className="home-sub1"> I am Juny,</span>
                <span className="home-sub2">Web Developer.</span>
            </div>
            <div className="title">
                <p>Full stack developer | graphic designer</p>
                <a target="_blank" rel="noopener noreferrer" href="https://gitconnected.com/junymc/resume"> Resume </a>
            </div>
            </>
        )
    }
}

export default Home;