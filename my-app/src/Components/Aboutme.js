import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education'

class AboutMe extends Component {
    render() {
        return (
            <Grid>
            <Cell className='resume-left-col' col={4}>
                <div style={{textAlign: 'center'}}>
                <img src={require("./images/02.jpg")} style={{color: '#fff', height: '250px', borderRadius: '80%', marginTop: '30px'}}  alt={'Wakeboarding'}/>
                     </div>
                <h2>Daniel Milano</h2>
                <h3 style={{color: 'grey'}}>Programmer</h3>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts
                    of Malorum for use in a type specimen book.</p>
            </Cell>
            <Cell className='resume-right-col' col={8}>
                <h2>About Me</h2>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts
                    of Malorum for use in a type specimen book.</p>
                   
            </Cell>
        </Grid>

                



        )
    }
}

export default AboutMe;