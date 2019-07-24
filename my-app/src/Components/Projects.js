import React, { Component } from 'react';
import { Tabs, Tab, CardTitle, CardText, CardActions, Card, Button, Grid, Cell } from 'react-mdl';
import Bakery from './images/01.jpg'
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return <Grid className="demo-grid-1">
            <Cell col={5}>
                    <Card className='card'>
                    <CardTitle expand style={{ color: '#fff', background: 'url(https://milano12345.github.io/images/gallery/thumbs/01.jpg) bottom right 50% no-repeat' }}>Bakery Website</CardTitle>
                        <CardText>
                            This was made using HTML/CSS
                            </CardText>
                        <CardActions border>
                            <Button colored>Link to CodePen</Button>
                        </CardActions>
                     </Card>
                     </Cell>
                     <Cell col={5}>
                    <Card className='card'>
                    <CardTitle expand style={{ color: '#fff', background: 'url(https://milano12345.github.io/images/Screenshot%20(6).png) bottom right 50% no-repeat #46B6AC' }}>Responsive Website</CardTitle>
                        <CardText>
                            This was made using HTML/CSS. Integrating responsive web design.
                            </CardText>
                        <CardActions border>
                            <Button colored>Link to CodePen</Button>
                        </CardActions>
                     </Card>
                     </Cell>
                     <Cell col={5}>
                    <Card className='card'>
                    <CardTitle expand style={{ color: '#fff', background: 'url(https://milano12345.github.io/images/Screenshot%20(7).png) bottom right 50% no-repeat #46B6AC' }}>Advanced CSS challenge</CardTitle>
                        <CardText>
                            This was made using HTML/CSS using advanced techniques.
                            </CardText>
                        <CardActions border>
                            <Button colored>Link to CodePen</Button>
                        </CardActions>
                     </Card>
                     </Cell>
                     <Cell col={5}>
                    <Card className='card'>
                    <CardTitle expand style={{ color: '#fff', background: 'url(https://milano12345.github.io/images/Screenshot%20(8).png) bottom right 50% no-repeat #46B6AC' }}>User Interface Challenge</CardTitle>
                        <CardText>
                            This was made using HTML/CSS. Integrating Flexbox.
                            </CardText>
                        <CardActions border>
                            <Button colored>Link to GitHub</Button>
                        </CardActions>
                     </Card>
                     </Cell>
                     <Cell col={5}>
                    <Card className='card'>
                    <CardTitle expand style={{ color: '#fff', background: 'url(https://milano12345.github.io/images/Screenshot%20(9).png) bottom right 50% no-repeat #46B6AC' }}>Preprocessor Use</CardTitle>
                        <CardText>
                            This was made using HTML/CSS. Utitilizing the Preprocessor LESS.
                            </CardText>
                        <CardActions border>
                            <Button colored>Link to GitHub</Button>
                        </CardActions>
                     </Card>
                     </Cell>
        </Grid>
        } else if (this.state.activeTab === 1) {
            return <div>Welcome to React</div>
        } else if (this.state.activeTab === 2) {
            return <div>Welcome to Java</div>
        }
    }
    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                </Tabs>
                <section className='projects-grid'>
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Projects;