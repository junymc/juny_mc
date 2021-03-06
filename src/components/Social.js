import React from 'react';
import { SocialIcon } from 'react-social-icons'

class Social extends React.Component {
    render() {
        return (
            <div className="social">
                <ul>
                    <li><SocialIcon url="http://linkedin.com/in/junyoung-mcardle" bgColor="#171515" /></li>
                    <li><SocialIcon url="https://www.facebook.com/junyoung.mcardle" bgColor="#171515" /></li>
                    <li><SocialIcon url="https://github.com/junymc" bgColor="#171515" /></li>
                </ul>
            </div>
        )
    }
}

export default Social;