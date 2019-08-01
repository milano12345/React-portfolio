import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Main from './Components/Main'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

function App() {
  return (
    <Router>
    <div className="App">
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="DM Portfolio" scroll>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Daniel Milano">
            <Navigation>
                <Link to='/'>Home</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main />
            <div className="page-content" />
        </Content>
    </Layout>
</div>
    </div>
    </Router>
  );
}

export default App;
