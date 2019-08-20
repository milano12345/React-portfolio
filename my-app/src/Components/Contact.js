import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <p className='name'> Daniel Milano </p>
                        <img src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png' style={{ height: '250px' }} className="avatar-img2" alt={'Computer Edited Pencil Drawing'} />
                        <p className='contact_description'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                            </p>
                    </Cell>
                    <Cell col={6}>
                        <p className='name'>Contact Me!</p>
                        <hr />
                        <div className='contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '1.6rem' }} icon="person">Daniel Milano</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '1.6rem' }} icon="mail">Dmilano857 @gmail.com </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '1.6rem' }} icon="phone">201-560-8737</ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;