import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, Grommet, Button, Collapsible, ResponsiveContext, Stack } from 'grommet';
import { Github, Twitter } from "grommet-icons";
import AppBar from './components/AppBar';
import HomePage from './HomePage';
import AboutMePage from './AboutMePage';
import ContactPage from './ContactPage';
import MyProjectsPage from './MyProjectsPage';
import UnknownPage from './UnknownPage';
import DiscordInfo from './components/DiscordInfo';
import TwitterStream from './components/TwitterStream';
import GithubStream from './components/GithubStream';
import DiscordAvatar from './components/DiscordAvater';

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

function App() {

  const darkMode = true;
  const [showSidebar, setShowSidebar] = useState('empty');
  const [statusSaying, setStatusSaying] = useState("");
  const [statusColor, setStatusColor] = useState("onlineColor");

  fetch("https://api.becketto.dev/discordStatus?id=783088512139788298")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    setStatusSaying(myJson.activity);
    setStatusColor(myJson.status.split(" ").join("") + "Color");
  })
  .catch(function (error) {
    console.log("We had an error");
  });

  return (
    <Router>
      <Grommet theme={theme}>
        <ResponsiveContext.Consumer>
          { size => (
            <Box direction='column'>
              <AppBar statusSaying={ statusSaying } statusColor={ statusColor } darkMode={ darkMode } />
              <Stack margin={{ top: '45pt'}}>
                <Box margin={{left: ((size !== 'small') ? ( (showSidebar !== 'empty' ) ? '370px' : '100px') : '0px')}}>
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
                { (size !== 'small') ? (
                  <Box direction='row' style={{ position: 'fixed' }} >
                    <Collapsible direction='horizontal' open={showSidebar !== 'empty'} >
                      <Box fill='vertical' elevation='small' background='violetPurple' width='250px' pad='small' margin='small' round='small'>
                        { (showSidebar === 'discord') ? (
                          <DiscordInfo statusColor={ statusColor } />
                        ) : ( <Box>
                          { (showSidebar === 'github') ? (
                            <GithubStream />
                          ) : ( <TwitterStream /> )}
                        </Box>) }
                      </Box>
                    </Collapsible>
                    <Box height='140pt' margin='small' elevation='small' direction='column' background='polishedPine' pad='small' round='small' gap='small' align='center' justify='between' >
                      <Button plain icon={ <DiscordAvatar statusColor={ statusColor } /> } onClick={ () => { setShowSidebar((showSidebar === 'discord') ? 'empty' : 'discord') } } />
                      <Button plain icon={ <Github color={ (showSidebar === 'github') ? '#FEFBF9FF' : '#FEFBF9BF' } size='36px' /> } onClick={ () => { setShowSidebar((showSidebar === 'github') ? 'empty' : 'github') } } />
                      <Button plain icon={ <Twitter color={ (showSidebar === 'twitter') ? '#FEFBF9FF' : '#FEFBF9BF' } size='36px' /> } onClick={ () => { setShowSidebar((showSidebar === 'twitter') ? 'empty' : 'twitter') } } />
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
