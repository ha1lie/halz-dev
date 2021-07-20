import React, { Component } from 'react';
import { Avatar, Box, Button, Heading, Paragraph, Text } from 'grommet';
import { FaChevronRight } from 'react-icons/fa';
import ActionLinkButton from './components/ActionLinkButton';

class AboutMePage extends Component {
  render() {
    return(
      <Box margin='medium' direction='column'>
        <Box direction='row' align='center'>
          <Box flex='grow' direction='column'>
            <Heading>Meet Me!</Heading>
            <Paragraph>This is going to be a bunch of stuff about me. Maybe I'll add some cool feature where it like dynamically fetches a cool quote or something, tell some interesting stories, or I could even add cool gifs to make the site interactive. I think that this has the chance to be an interesting website, and I'm going to push my ability to ensure that it is something I can look back on proudly</Paragraph>
          </Box>
          <Box round='100pt' width='200pt' height='200pt' background="url('/twitterIcon.jpg')" />
        </Box>
        <ActionLinkButton buttonTitle='Take a look at my resume' buttonTextColor='white' toRight={true} link='/aboutMe/resume' />
      </Box>
    );
  }
}

export default AboutMePage;