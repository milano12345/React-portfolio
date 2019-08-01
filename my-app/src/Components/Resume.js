import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className='resume-left-col' col={4}>
                        <div style={{textAlign: 'center'}}>
                    <img src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png' style={{ height: '250px' }} className="avatar-img2" alt={'Computer Edited Pencil Drawing'} />
                             </div>
                        <h2>Daniel Milano</h2>
                        <h3 style={{color: 'grey'}}>Programmer</h3>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                            The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts
                            of Malorum for use in a type specimen book.</p>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h1>Education</h1>
                        <Education 
                        startYear={2019} 
                        endYear={2020} 
                        schoolName={'Lambda School'}
                        schoolDescription='Lambda School is a 9+ month Computer Science & Software Engineering Academy that provides an immersive hands-on curriculum with a focus on computer science, and fullstack web development.
                            -Completed all curriculum course work including: React, React Native, Redux, Node, Express, MongoDB, Jest, Python, Django, etc.
                            -Write production-ready code using ReactJS, Redux, and CSS on the frontend and NodeJS and Express on the backend to build single page applications.' />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;