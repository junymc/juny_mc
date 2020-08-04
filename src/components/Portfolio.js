import React from 'react'

class Portfolio extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="column">
                    <img src="https://i.imgur.com/dpoJZ5S.jpg" alt="Snow" width="100%"/>
                    <a target="_blank" href="https://github.com/junymc/adventure_challenge"> Adventure Challenge </a>
                </div>
                <div className="column">
                    <img src="https://i.imgur.com/6DSgkSh.jpg" alt="Forest" width="100%"/>
                    <a target="_blank" href="https://github.com/junymc/rails_project_party_planner"> Party Planner </a>
                </div>
                <div className="column">
                    <img src="https://i.imgur.com/6ZByXqS.png" alt="Mountains" width="100%"/>
                    <a target="_blank" href="https://github.com/junymc/my-love-shoes"> My Love Shoes </a>
                </div>
                <div className="column">
                    <img src="https://i.imgur.com/6ZByXqS.png" alt="Mountains" width="100%"/>
                    <a target="_blank" href="https://github.com/junymc/sinatra-project-movie-review"> Movie Review </a>
                </div>
            </div>
        )
    }
}

export default Portfolio;