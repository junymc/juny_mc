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
                <p>Hello, </p>
                <p> I am Juny,</p>
                <p>Web Developer.</p>
            </div>
            <div className="about">
                <p>Full stack developer | graphic designer</p>
                <a target="_blank" href="https://gitconnected.com/junymc/resume"> Resume </a>
            </div>
            </>
        )
    }
}

export default Home;