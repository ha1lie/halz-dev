import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Avatar, Box, Grommet, Heading, Button, Collapsible, ResponsiveContext, Layer, DropButton, Anchor, Text, Stack, Sidebar } from 'grommet';
import { Notification, FormClose, FormDown, Github, Twitter } from "grommet-icons";
import AppBar from './components/AppBar';
import HomePage from './HomePage';
import AboutMePage from './AboutMePage';
import ContactPage from './ContactPage';
import MyProjectsPage from './MyProjectsPage';
import UnknownPage from './UnknownPage';
import DiscordInfo from './components/DiscordInfo';
import TwitterStream from './components/TwitterStream';
import GithubStream from './components/GithubStream';
import DiscordAvater from './components/DiscordAvater';

const theme = {
  
  global: {
    colors: {
      appBarBackgroundDark: '#2C2C34',
      appBarBackgroundLight: '#FBFEF9',
      appBarTextColorDark: '#FBFEF9',
      appBarTextColorLight: '#2C2C34',
      violetPurple: '#7C77B9',
      rubyPink: '#D81159',
      polishedPine: '#439A86',
      offwhite: '#FBFEF9',
      offlineColor: '#0A2463',
      onlineColor: '#44FFD1',
      idleColor: '#FFE66D',
      DoNotDisturbColor: '#FE4A49',
    },
    font: {
      family: 'Nunito',
      size: '18px',
      height: '20px',
    },
  },
  heading: {
    level: {
      '4': {
        color: '#ff0000',
        font: {
          weight: '200'
        }
      }
    }
  }
};

function updateDiscordShield() {
  httpGetAsync(`https://api.becketto.dev/getDiscordShield?id=783088512139788298`, (status) => {
      document.getElementById("discordStatus").src = status;
  })
}
function httpGetAsync(theUrl, callback) {
  // I did not make this.
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}
// https://cdn.discordapp.com/avatars/783088512139788298/d2cbde3f0916841377f5ed768293e6df.png?size=1024
function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [showSidebar, setShowSidebar] = useState('empty');

  return (
    <Router>
      <Grommet theme={theme}>
        <ResponsiveContext.Consumer>
          { size => (
            <Box direction='column'>
              <AppBar />
              <Stack>
                <Box margin={{left: ((size != 'small') ? ( (showSidebar != 'empty' ) ? '370px' : '100px') : '0px')}}>
                  <Switch>
                    <Route path='/aboutMe'>
                      <AboutMePage />
                    </Route>
                    <Route path='/contact'>
                      <ContactPage />
                    </Route>
                    <Route path='/myProjects'>
                      <MyProjectsPage />
                    </Route>
                    <Route path='/' exact>
                      <HomePage />
                    </Route>
                    <Route path='/'>
                      <UnknownPage />
                    </Route>
                  </Switch>
                </Box>
                { (size != 'small') ? (
                  <Box direction='row'>
                    <Collapsible direction='horizontal' open={showSidebar != 'empty'} >
                      <Box fill='vertical' background='violetPurple' width='250px' pad='small' margin='small' round='small'>
                        { (showSidebar == 'discord') ? (
                          <DiscordInfo />
                        ) : ( <Box>
                          { (showSidebar == 'github') ? (
                            <GithubStream />
                          ) : ( <TwitterStream /> )}
                        </Box>) }
                      </Box>
                    </Collapsible>
                    <Box margin='small' direction='column' background='polishedPine' pad='small' round='small' gap='small' align='center'>
                      <Button plain icon={ <DiscordAvater /> } onClick={ () => { setShowSidebar((showSidebar == 'discord') ? 'empty' : 'discord') } } />
                      <Button plain icon={ <Github color={ (showSidebar == 'github') ? '#FEFBF9FF' : '#FEFBF9BF' } size='36px' /> } onClick={ () => { setShowSidebar((showSidebar == 'github') ? 'empty' : 'github') } } />
                      <Button plain icon={ <Twitter color={ (showSidebar == 'twitter') ? '#FEFBF9FF' : '#FEFBF9BF' } size='36px' /> } onClick={ () => { setShowSidebar((showSidebar == 'twitter') ? 'empty' : 'twitter') } } />
                    </Box>
                  </Box>
                ) : ( <Box /> )}
              </Stack>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </Router>
    
  );
}

export default App;
