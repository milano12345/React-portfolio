import React, { Component } from 'react';
import { Tabs, Tab, CardTitle, CardText, CardActions, Card, Button, Grid, Cell } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return <Grid className="demo-grid-1">
            <Cell col={6}>
                    <Card className='card'>
                    <CardTitle style={{color: '#fff', height: '220px', background: 'url(https://milano12345.github.io/images/gallery/thumbs/01.jpg) center / cover'}}>Bakery Website</CardTitle>
                        <CardText>
                            This was made using HTML/CSS. 
                            </CardText>
                        <CardActions border>
                            <Button href="https://codepen.io/Fall3n/pen/eXwNOO" colored>Link to CodePen</Button>
                        </CardActions>
                     </Card>
                     </Cell>
                     <Cell col={6}>
                    <Card className='card'>
                    <img src={require("./images/Screenshot (6).png")} style={{color: '#fff', height: '218px' }}  alt={'Responsive Web Designs'}/>
                        <CardText>
                             Integrating responsive web design using media queries at varying width's.
                            </CardText>
                        <CardActions border>
                            <Button href='https://github.com/milano12345/responsive-web-design-I' colored>Link to Github</Button>
                        </CardActions>
                     </Card>
                     </Cell>
                     <Cell col={6}>
                    <Card className='card'>
                        <img src={require('./images/Screenshot (7).png')} style={{color: '#fff', height: '218px'}} alt={'Responsive Web Designs'}/>
                        <CardText>
                            This was made with HTML/CSS using advanced techniques including flexbox!
                            </CardText>
                        <CardActions border>
                            <Button href="https://github.com/milano12345/Sprint-Challenge--Advanced-CSS/tree/daniel-milano" colored>Link to Github</Button>
                        </CardActions>
                     </Card>
                     </Cell>
                     <Cell col={6}>
                    <Card className='card'>
                        <img src={require('./images/Screenshot (8).png')} style={{color: '#fff', height: '218px'}} alt={'Responsive Web Designs'}/>
                        <CardText>
                            User Interface!
                            </CardText>
                        <CardActions border>
                            <Button href="https://github.com/milano12345/Sprint-Challenge--User-Interface" colored>Link to CodePen</Button>
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