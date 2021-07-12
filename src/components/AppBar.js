import React, { useState } from "react";
import { Avatar, Box, Grommet, Heading, Button, Collapsible, ResponsiveContext, Layer, DropButton, Anchor, Text } from 'grommet';
import { Notification, FormClose, FormDown, Github, Twitter, Menu } from "grommet-icons";
import DiscordAvater from "./DiscordAvater";

const AppBarContainer = (props) => (
    <Box 
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='raisinBlack'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        height='60px'
        {...props}
    />
);

function AppBar() {

    const [darkMode, setDarkMode] = useState(true);

    const [showMobileContainer, setShowMobileContainer] = useState(false);

    const [statusSaying, setStatusSaying] = useState("");

    fetch("https://api.becketto.dev/discordStatus?id=783088512139788298")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      setStatusSaying(myJson.activity);
    })
    .catch(function (error) {
      console.log("We had an error");
    });

    return (<ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBarContainer background={ darkMode ? 'appBarBackgroundDark' : 'appBarBackgroundLight' }>
              <Box direction='row' align='center' gap='8px'>
                <Heading level='2' margin='none' color={ darkMode ? 'appBarTextColorDark' : 'appBarTextColorLight' }>Hallie</Heading>
                <Heading level='4' margin='none'>{ statusSaying }</Heading>
              </Box>
              {(size == 'small') ? (
                  <Button icon={ <Menu /> } onClick={ () => { setShowMobileContainer(!showMobileContainer)} } />
              ) : (
                  <Box direction='row' pad='horizontal'>
                  <Anchor color={ darkMode ? 'appBarTextColorDark' : 'appBarTextColorLight' } label='About Me' href='/aboutMe' />
                  <Anchor color={ darkMode ? 'appBarTextColorDark' : 'appBarTextColorLight' } label='Contact' margin={{left: 'small'}} href='/contact' />
                  <Anchor color={ darkMode ? 'appBarTextColorDark' : 'appBarTextColorLight' } label='My Projects' margin={{left: 'small'}} href='/myProjects' />
                </Box>
              )}
              
            </AppBarContainer>
            {(size == 'small' && showMobileContainer) ? ( 
                <Layer animation='fadeIn' background="#00000000">
                    <Box flex background={ darkMode ? 'appBarBackgroundDark' : 'appBarBackgroundLight'} tag='header' justify='between' align='center' direction='column' >
                      <Box fill='horizontal' direction='column'>
                        <Box fill='horizontal' elevation='none' justify='between' direction='row' pad={{ left: 'medium', right: 'small', vertical: 'small' }}>
                          <Box direction='row' align='center' gap='8px'>
                            <Heading level='2' margin='none' color={ darkMode ? 'appBarTextColorDark' : 'appBarTextColorLight' }>Hallie</Heading>
                            <Heading level='4' margin='none'>{ statusSaying }</Heading>
                          </Box>
                          <Button plain icon={ <FormClose size='large' /> } onClick={ () => { setShowMobileContainer(false); } } />
                        </Box>
                        <Box fill='horizontal' margin={{top: '36px'}} justify='center' direction='row' gap='24px'>
                          <Button plain icon={ <Github color='offwhite' size='36px' /> } onClick={ () => {  } } />
                          <Button plain icon={ <DiscordAvater /> } onClick={ () => {  } } />
                          <Button plain icon={ <Twitter color='offwhite' size='36px' /> } onClick={ () => {  } } />
                        </Box>
                      </Box>
                      <Box direction='column' align='center'>
                        <Anchor color={ darkMode ? 'appBarTextColorDark' : 'appBarTextColorLight'} href='/aboutMe' >
                          <Heading level='1'>About Me</Heading>
                        </Anchor>
                        <Anchor color={ darkMode ? 'appBarTextColorDark' : 'appBarTextColorLight'} href='/contact' >
                          <Heading level='1'>Contact</Heading>
                        </Anchor>
                        <Anchor color={ darkMode ? 'appBarTextColorDark' : 'appBarTextColorLight'} href='/myProjects' >
                          <Heading level='1'>My Projects</Heading>
                        </Anchor>
                      </Box>
                      <Box direction='row' pad='large' gap='36px'>
                        <Anchor color={ darkMode ? 'appBarTextColorDark' : 'appBarTextColorLight'} icon={ <Box align='center'><Github size='large' /><Text>@ha1lie</Text></Box> } href='https://github.com/ha1lie' target='_blank' />
                        <Anchor color={ darkMode ? 'appBarTextColorDark' : 'appBarTextColorLight'} icon={ <Box align='center'><Twitter size='large' /><Text>@h4l1ie</Text></Box> } href='https://twitter.com/h4l1ie' target='_blank' />
                      </Box>
                    </Box>
                </Layer>
              ) : (<Box />)}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
}

export default AppBar;