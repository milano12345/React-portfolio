import React, {Component} from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div className={'about-me'}>
            <h1 class={'name'}>Daniel Milano</h1>
            <span>Full Stack Web Developer/WakeBoarder</span>
            <img src={require('./images/02.jpg')} className="avatar-img" alt={'Tailgrab on a wakeboard.'} />
            
            <p>Hey</p>
            </div>


        )
    }
}

export default AboutMe;