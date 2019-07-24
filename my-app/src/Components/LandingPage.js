import React, {Component} from 'react';


class LandingPage extends Component {
    render() {
        return (
            <div className='container'>
                <div className='landing-grid'>
                    <div className='profile-img'>
                        <img
                            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/29257634_10160146986325593_5921444468665352192_n.jpg?_nc_cat=103&_nc_oc=AQk-oJHZIDZXrqxmry3pEh-nIgp8xvO5DHjW2TTUkRR7zRfm_RowpJN_t5nMNjlbyo18uNW9nQFvmCSAJl6eb-Hy&_nc_ht=scontent-dfw5-1.xx&oh=02739697720b7a58b4688ee4cdc4b673&oe=5DE3803B"
                            alt="Daniel Milano"
                            className="avatar-img"
                            />
                            </div>
                        <div className='banner-text'>
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | BOOTSTRAP | JAVASCRIPT | REACT | NODE JS | EXPRESS | JAVA</p>
                        </div>
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
            </div>
        )
    }
}

export default LandingPage;