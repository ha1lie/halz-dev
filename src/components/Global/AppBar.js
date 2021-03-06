import React, { Component } from "react";
import { Box, Heading, Button, ResponsiveContext, Layer, Anchor, Text } from 'grommet';
import { FormClose, Github, Twitter, Menu } from "grommet-icons";
import DiscordAvatar from "../AppBarHelpers/DiscordAvatar";
import DiscordInfo from "../AppBarHelpers/DiscordInfo";
import GithubStream from "../Github/GithubStream";

const AppBarContainer = (props) => (
    <Box 
        tag='header'
        direction='row'
        align='center'
        justify='between'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='none'
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
          <AppBarContainer background='charcoal' >
            <Box direction='row' align='center' gap='8px'>
              <Anchor href='/'>
                <Heading level='2' margin='none' color='eppeline'>Hallie</Heading>
              </Anchor>
              <Box background='dangerRed' pad='small' round='small' margin={{ horizontal: 'small' }} align='center' justify='center'>
                <Text color='white'>WIP Website</Text>
              </Box>
              <Heading level='4' margin='none'>{ this.props.statusSaying }</Heading>
            </Box>
            {(size === 'small') ? (
                <Button icon={ <Menu /> } onClick={ () => { this.setState({ showMobileContainer: true, showAcivityThread: this.state.showAcivityThread }) } } />
            ) : (
                <Box direction='row' pad='horizontal'>
                <Anchor color='eppeline' label='About Me' href='/aboutme' />
                <Anchor color='eppeline' label='Contact' margin={{left: 'small'}} href='/contact' />
                <Anchor color='eppeline' label='My Projects' margin={{left: 'small'}} href='/projects' />
              </Box>
            )}
          </AppBarContainer>
          {(size === 'small' && this.state.showMobileContainer) ? ( 
              <Layer animation='fadeIn' background="#00000000">
                  <Box fill background='charcoal' tag='header' justify='between' align='center' direction='column' >
                    <Box fill='horizontal' direction='column'>
                      <Box fill='horizontal' elevation='none' justify='between' direction='row' pad={{ left: 'medium', right: 'small', vertical: 'small' }}>
                        <Box direction='row' align='center' gap='8px'>
                          <Heading level='2' margin='none' color='eppeline'>Hallie</Heading>
                          <Heading level='4' margin='none'>{ this.props.statusSaying }</Heading>
                        </Box>
                        <Button plain icon={ <FormClose size='large' /> } onClick={ () => { this.setState({ showMobileContainer: false, showAcivityThread: this.state.showAcivityThread }) } } />
                      </Box>
                      <Box fill='horizontal' margin={{top: '36px'}} justify='center' direction='row' gap='24px'>
                        <Button plain icon={ <Github color='eppeline' size='36px' /> } onClick={ () => { this.setState({ showMobileContainer: this.state.showMobileContainer, showAcivityThread: (this.state.showAcivityThread === 'github' ? 'empty' : 'github') }) } } />
                        <Button plain icon={ <DiscordAvatar statusColor={ this.props.statusColor } /> } onClick={ () => { this.setState({ showMobileContainer: this.state.showMobileContainer, showAcivityThread: (this.state.showAcivityThread === 'discord' ? 'empty' : 'discord') }) } } />
                        <Button plain icon={ <Twitter color='eppeline' size='36px' /> } onClick={ () => { this.setState({ showMobileContainer: this.state.showMobileContainer, showAcivityThread: (this.state.showAcivityThread === 'twitter' ? 'empty' : 'twitter') }) } } />
                      </Box>
                    </Box>
                    { (this.state.showAcivityThread !== 'empty') ? (
                      <Box animation={{ duration: 350, type: 'fadeIn'}} width='90%' height='60vh' justify='center' round='medium' background='nearBlack' style={{ overflowY: 'scroll'}} >
                        { (this.state.showAcivityThread === 'github') ? (
                          <GithubStream commits={ this.props.commits } />
                        ) : (
                          <Box>
                            {(this.state.showAcivityThread === 'discord') ? (
                              <DiscordInfo statusColor={ this.props.statusColor } />
                            ) : (
                              <Text>TWITTER VIEW</Text>
                            )}
                          </Box>
                        )}
                      </Box>
                    ) : (
                      <Box direction='column' align='center'>
                        <Anchor color='eppeline' href='/aboutme' >
                          <Heading level='1'>About Me</Heading>
                        </Anchor>
                        <Anchor color='eppeline' href='/contact' >
                          <Heading level='1'>Contact</Heading>
                        </Anchor>
                        <Anchor color='eppeline' href='/projects' >
                          <Heading level='1'>My Projects</Heading>
                        </Anchor>
                      </Box>
                    ) }
                    <Box fill='horizontal' direction='row' pad={{ horizontal: 'large', vertical: 'small'}} align='center' justify='center' gap='36px'>
                      <Anchor color='eppeline' icon={ <Box align='center'><Github size='large' /><Text>@ha1lie</Text></Box> } href='https://github.com/ha1lie' target='_blank' />
                      <Anchor color='eppeline' icon={ <Box align='center'><Twitter size='large' /><Text>@h4l1ie</Text></Box> } href='https://twitter.com/h4l1ie' target='_blank' />
                    </Box>
                  </Box>
              </Layer>
            ) : undefined }
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default AppBar;