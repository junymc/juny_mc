import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        const navStyle = {
            textDecoration: 'none',
            color: '#C30B7F'
          }
        return (
                <>
                    <nav className="nav">
                        <ul className="nav-links">
                            <li><Link to="/" style={navStyle}> Home </Link></li>
                            <li><Link to="/about" style={navStyle}>About me</Link></li>
                            <li><Link to="/portfolio" style={navStyle}> Portfolio</Link></li>
                            <li><Link to="/blog" style={navStyle}>Blog</Link></li>
                            <li><Link to="/contact" style={navStyle}>Contact</Link></li>
                        </ul>
                    </nav>
                </>
        )
    }

}

export default Navbar;