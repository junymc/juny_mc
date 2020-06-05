import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div id="nav">
                    <nav>
                    <ul className="nav-links">
                       <li><Link to="/" style={{ textDecoration: 'none'}}> Home </Link></li>
                       <li><Link to="/resume" style={{ textDecoration: 'none' }}> Resume </Link></li>
                       <li><Link to="/portfolio" style={{ textDecoration: 'none' }}> Portfolio</Link></li>
                       <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact Me</Link></li>
                    </ul>
                    </nav>
                </div>
        )
    }

}

export default Navbar;