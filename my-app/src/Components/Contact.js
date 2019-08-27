import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <p className='name'>Let's Collaborate!</p>
                        <img src={require('./images/IMG_1627.jpg')} style={{ width: '85%', textAlign: 'center', borderRadius: '5%', margin: '18px' }} className="avatar-img2" alt={'Computer Edited Pencil Drawing'} />
                        <p className='contact_description'>I am always seeking to create new projects. Drop me a line. Let's chat!
                            </p>
                    </Cell>
                    <Cell col={6}>
                        <p className='name'>Contact Me!</p>
                        <div className='contact-list'>
                            <ul>
                                <li>Name: Daniel Milano</li>
                                <li>Email: dmilano857@gmail.com</li>
                                <li>Social Links Below</li>
                            </ul>

                            <div className='social-links'>
                                {/* Github */}
                                <a href="https://github.com/milano12345">
                                    <img
                                        src="https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png"
                                        alt="Github icon"
                                        className="icon"
                                    /></a>
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/daniel-milano-90088b18a/">
                                    <img
                                        src='https://image.flaticon.com/icons/png/512/61/61109.png'
                                        alt='Linkedin Icon'
                                        className='icon'
                                    />
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;