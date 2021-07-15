import React, { Component } from "react";
import { Box, Heading, Button, ResponsiveContext, Layer, Anchor, Text } from 'grommet';
import { FormClose, Github, Twitter, Menu } from "grommet-icons";
import DiscordAvatar from "./DiscordAvater";
import DiscordInfo from "./DiscordInfo";
import GithubStream from "./GithubStream";

const AppBarContainer = (props) => (
    <Box 
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='raisinBlack'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1', position: 'fixed', left: '0px', right: '0px', top: '0px' }}
        height='60px'
        {...props}
    />
);

class AppBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMobileContainer: false,
      showAcivityThread: 'empty'
    };
  }

  render() {
    return (<ResponsiveContext.Consumer>
      {size => (
        <Box fill>
          <AppBarContainer background='appBarBackground' >
            <Box direction='row' align='center' gap='8px'>
              <Anchor href='/'>
                <Heading level='2' margin='none' color='appBarTextColor'>Hallie</Heading>
              </Anchor>
              <Heading level='4' margin='none'>{ this.props.statusSaying }</Heading>
            </Box>
            {(size === 'small') ? (
                <Button icon={ <Menu /> } onClick={ () => { this.setState({ showMobileContainer: true, showAcivityThread: this.state.showAcivityThread }) } } />
            ) : (
                <Box direction='row' pad='horizontal'>
                <Anchor color='appBarTextColor' label='About Me' href='/aboutMe' />
                <Anchor color='appBarTextColor' label='Contact' margin={{left: 'small'}} href='/contact' />
                <Anchor color='appBarTextColor' label='My Projects' margin={{left: 'small'}} href='/myProjects' />
              </Box>
            )}
          </AppBarContainer>
          {(size === 'small' && this.state.showMobileContainer) ? ( 
              <Layer animation='fadeIn' background="#00000000">
                  <Box flex background='appBarBackground' tag='header' justify='between' align='center' direction='column' >
                    <Box fill='horizontal' direction='column'>
                      <Box fill='horizontal' elevation='none' justify='between' direction='row' pad={{ left: 'medium', right: 'small', vertical: 'small' }}>
                        <Box direction='row' align='center' gap='8px'>
                          <Heading level='2' margin='none' color='appBarTextColor'>Hallie</Heading>
                          <Heading level='4' margin='none'>{ this.props.statusSaying }</Heading>
                        </Box>
                        <Button plain icon={ <FormClose size='large' /> } onClick={ () => { this.setState({ showMobileContainer: false, showAcivityThread: this.state.showAcivityThread }) } } />
                      </Box>
                      <Box fill='horizontal' margin={{top: '36px'}} justify='center' direction='row' gap='24px'>
                        <Button plain icon={ <Github color='appBarTextColor' size='36px' /> } onClick={ () => { this.setState({ showMobileContainer: this.state.showMobileContainer, showAcivityThread: (this.state.showAcivityThread === 'github' ? 'empty' : 'github') }) } } />
                        <Button plain icon={ <DiscordAvatar statusColor={ this.props.statusColor } /> } onClick={ () => { this.setState({ showMobileContainer: this.state.showMobileContainer, showAcivityThread: (this.state.showAcivityThread === 'discord' ? 'empty' : 'discord') }) } } />
                        <Button plain icon={ <Twitter color='appBarTextColor' size='36px' /> } onClick={ () => { this.setState({ showMobileContainer: this.state.showMobileContainer, showAcivityThread: (this.state.showAcivityThread === 'twitter' ? 'empty' : 'twitter') }) } } />
                      </Box>
                    </Box>
                    { (this.state.showAcivityThread !== 'empty') ? (
                      <Box animation={{ duration: 350, type: 'fadeIn'}} width='90%' height='70%' round='medium' background='violetPurple' style={{ overflowY: 'scroll'}} >
                        { (this.state.showAcivityThread === 'github') ? (
                          <GithubStream commits={ this.props.commits } />
                        ) : (
                          <Box>
                            {(this.state.showAcivityThread === 'discord') ? (
                              <DiscordInfo />
                            ) : (
                              <Text>TWITTER VIEW</Text>
                            )}
                          </Box>
                        )}
                      </Box>
                    ) : (
                      <Box direction='column' align='center'>
                        <Anchor color='appBarTextColor' href='/aboutMe' >
                          <Heading level='1'>About Me</Heading>
                        </Anchor>
                        <Anchor color='appBarTextColor' href='/contact' >
                          <Heading level='1'>Contact</Heading>
                        </Anchor>
                        <Anchor color='appBarTextColor' href='/myProjects' >
                          <Heading level='1'>My Projects</Heading>
                        </Anchor>
                      </Box>
                    ) }
                    <Box direction='row' pad='large' gap='36px'>
                      <Anchor color='appBarTextColor' icon={ <Box align='center'><Github size='large' /><Text>@ha1lie</Text></Box> } href='https://github.com/ha1lie' target='_blank' />
                      <Anchor color='appBarTextColor' icon={ <Box align='center'><Twitter size='large' /><Text>@h4l1ie</Text></Box> } href='https://twitter.com/h4l1ie' target='_blank' />
                    </Box>
                  </Box>
              </Layer>
            ) : (<Box />)}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default AppBar;