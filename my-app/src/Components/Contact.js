import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <p className='name'> Daniel Milano </p>
                        <img src={require('./images/03.jpg')} className="avatar-img" alt={'Computer Edited Pencil Drawing'} />
                    </Cell>
                    <Cell col={6}>Other Half</Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;