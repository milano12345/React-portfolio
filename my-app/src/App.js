import React from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';
import Main from './Components/Main'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import BottomNav from './Components/Footer.js';


function App() {
  return (
    <div className="App">
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="DM Portfolio" scroll>
            <Navigation>
                <NavLink to="/Resume">Resume</NavLink>
                <NavLink to="/AboutMe">About Me</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </Navigation>
        </Header>
        <Drawer title="Daniel Milano">
            <Navigation>
                <NavLink to='/'>Home</NavLink>
                <NavLink to="/Resume">Resume</NavLink>
                <NavLink to="/AboutMe">About Me</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </Navigation>
        </Drawer>
        <Content>
          <Main />
          
          <BottomNav/>
        </Content>
    </Layout>
    

</div>
    
    </div>
  );
}

export default App;
