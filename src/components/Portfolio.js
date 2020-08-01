import React from 'react'

class Portfolio extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="column">
                    <img src="https://i.imgur.com/6DSgkSh.jpg" alt="Snow" width="400px"/>
                </div>
                <div className="column">
                    <img src="https://i.imgur.com/wpIyens.jpg" alt="Forest" width="400px"/>
                </div>
                <div className="column">
                    <img src="https://i.imgur.com/FgwRQZa.jpg" alt="Mountains" width="400px"/>
                </div>
            </div>
        )
    }
}

export default Portfolio;