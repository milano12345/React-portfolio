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
                    <img src={require("./images/IMG_1569.jpg")} className="avatar-img2" alt={'Computer Edited Pencil Drawing'} />
                             </div>
                        <h2>Daniel Milano</h2>
                        <h3 style={{color: 'grey'}}>Programmer</h3>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                        <div className='text-card'>
                        <p style={{textAlign: 'left', padding:'16px', color:'darkgray'}}>Daniel is a driven, motivated individual with a passion for learning new technologies. He has been tinkering with websites since the young age of 10. From running bots on Runescape to save precious time,  utilizing Tamper data on Firefox to hack games in the early stages of Facebook, rooting Android phones/ flashing ROMs, and of course, full design customization on MySpace. Daniel has since matured and now spends his time more productively, learning full stack web development so he can contribute something meaningful and worthwhile to mankind.</p>
                        </div>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2 style={{marginLeft: '14px'}}>Education</h2>
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