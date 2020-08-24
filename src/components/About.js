import React from 'react'
import MyPic from '../myself.jpg'

class About extends React.Component {
    render() {
        return (
            <div className="bigbox">
                <h1>Junyoung McArdle</h1>
                <div className="text-zone">
                    
                    <p>Full stack web developer with a background in customer service and transitioned career from sales to software engineering. Also have combined creative skills from a background in art and graphic design, passionate about creating artistic work with strong visual sense and creativity.</p>
                    <p>Well-organised person, problem solver. Fan of HGtv tv series, sify and, always love travling. A family person, mother of two fractious boys, therefore remote employment is preferred.</p>
                    <p>A Quick learner, a team player and responsible person who completes the job in time with a good quality of work.</p>
                </div>
                <div className="my-image">
                    <img src={MyPic} alt="myself" height="520" width="400"/>
                </div>
            </div>
        )
    }
}

export default About ;