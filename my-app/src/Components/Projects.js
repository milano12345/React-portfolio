import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return <div>Welcome to Html</div>
        } else if(this.state.activeTab === 1) {
            return <div>Welcome to React</div>
        } else if(this.state.activeTab === 2) {
            return <div>Welcome to Java</div>
    }
    }
    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
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