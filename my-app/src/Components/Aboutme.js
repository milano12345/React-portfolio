import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class AboutMe extends Component {
    render() {
        return (
            <div className={'about-me'}>
                <Grid >
                <Cell className={'about-me-left'} col={4}>
                    <h1>About Me</h1>
                    <img src={require("./images/02.jpg")} style={{color: '#fff', height: '250px', borderRadius: '80%' }}  alt={'Wakeboarding'}/>
                    <p style={{fontFamily:'cursive', paddingTop:'5px', marginTop:'50px'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                            The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts
                            of Malorum for use in a type specimen book.</p>
                    </Cell>
                    <Cell col={8}>
                        </Cell>
                        </Grid>

            </div>


        )
    }
}

export default AboutMe;