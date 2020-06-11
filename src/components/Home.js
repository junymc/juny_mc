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
                <p>Hello, I am Juny, Web Developer.</p>
            </div>
            </>
        )
    }
}

export default Home;