import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education'

class AboutMe extends Component {
    render() {
        return (
            <div className={'about-me'}>
                        <Grid className='about-grid'>
                    <Cell className='about-me-left' col={4}>
                        <div style={{textAlign: 'center', backgroundColor: ''}}>
                             </div>
                             <img src={require("./images/02.jpg")} style={{color: '#fff', height: '250px', borderRadius: '80%', marginLeft: '90px', marginTop: '30px' }}  alt={'Wakeboarding'}/>
                        <h2 style={{color: 'white', paddingTop:'1em', margin: '0px'}}>Daniel Milano</h2>
                        <h3 style={{color: 'grey'}}>About Me</h3>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}></hr>
                        <p style={{color: 'white'}}>Hey guys! My name is Daniel. I am an avid sports enthusiast. I enjoy Wakeboarding, Playing Basketball,
                         Street Hockey, Football, WiffleBall, and Baseball.</p>
                    </Cell>
                    <Cell className='about-me-right' col={8}>
                        <h1>Hobbies and Interests</h1>
            
                    </Cell>
                </Grid>

            </div>


        )
    }
}

export default AboutMe;