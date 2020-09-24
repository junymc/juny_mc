import React from 'react'
import Photo1 from '../myself.jpg'
import Photo2 from '../myself1.jpg'
import Photo3 from '../myself2.jpg'

class About extends React.Component {
    render() {
        return (
            <section className="bigbox">
                <div className="title-text">
                    <div className="title-text title-text--big">Junyoung McArdle</div>
                </div>
                
                <div className="row">
                    <div className="col-1-of-2">
                        <p className="paragraph">Full stack web developer with a background in customer service and transitioned career from sales to software engineering. Also have combined creative skills from a background in art and graphic design, passionate about creating artistic work with strong visual sense and creativity.</p>
                        <p className="paragraph">Well-organised person, problem solver. Fan of HGtv tv series, sify and, always love travling. A family person, mother of two fractious boys, therefore remote employment is preferred.</p>
                        <p className="paragraph">A Quick learner, a team player and responsible person who completes the job in time with a good quality of work.</p>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={Photo2} alt="Photo 1" className="composition__photo composition__photo--p1"/>
                            <img src={Photo3} alt="Photo 1" className="composition__photo composition__photo--p2"/>
                            <img src={Photo1} alt="Photo 1" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About ;