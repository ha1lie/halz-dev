import React, { Component, useState } from 'react';
import { Box, Text, Anchor } from 'grommet';
import { Github, Twitter, Mail } from 'grommet-icons';
import { FaDiscord } from 'react-icons/fa';
import ContactCard from '../components/ContactCard';

class ContactPage extends Component {

  render() {
    return (
      <Box direction='column' margin='medium' align='left'>
        <Text weight='600' size='300%'>Hey,</Text>
        <Text weight='400' size='250%'>Let's get in touch!</Text>
        <Box pad={{ vertical: 'medium', horizontal: 'small'}}>
          <Text size='100%'>I encourage you to reach out to me to discuss my works, ask me questions, hire me, or chat about any of my interests and hobbies! I'm happy to share my knowledge and experience with you, no matter what it is in, and converse about your ideas and opinions as well.</Text>
        </Box>
        <Box direction='column' gap='small'>
          <Box pad='medium' flex='shrink' background='charcoal' direction='column' round='small' gap='small' justify='center' align='left'>
            <Text weight='600' size='200%'>Email</Text>
            <Text>Send me an email for</Text>
            <Box direction='row' gap='small'>
              <Box pad='xsmall' round background='nearBlack'></Box>
              <Box direction='column'>
                <Text weight='600'>Business Inquiries</Text>
                <Text weight='600'>Work Opportunities</Text>
                <Text weight='600'>Professional Communication</Text>
              </Box>
            </Box>
            <Text>Accessible at <Anchor color='rubyPink' href='mailto:hallie@halz.dev'>hallie@halz.dev</Anchor></Text>
          </Box>
          <Box pad='medium' flex='shrink' background='charcoal' direction='column' round='small' gap='small' justify='center' align='left'>
            <Text weight='600' size='200%'>Discord</Text>
            <Text>Reach out on discord for</Text>
            <Box direction='row' gap='small'>
              <Box pad='xsmall' round background='nearBlack'></Box>
              <Box direction='column'>
                <Text weight='600'>Fastest Response Times</Text>
                <Text weight='600'>Friendly Banter</Text>
                <Text weight='600'>Quick Questions</Text>
              </Box>
            </Box>
            <Text>Reach out to <Text color='rubyPink'>@hallie#8192</Text></Text>
          </Box>
          <Box pad='medium' flex='shrink' background='charcoal' direction='column' round='small' gap='small' justify='center' align='left'>
            <Text weight='600' size='200%'>Twitter</Text>
            <Text>Keep up to date on what I'm working on</Text>
            <Box direction='row' gap='small'>
              <Box pad='xsmall' round background='nearBlack'></Box>
              <Box direction='column'>
                <Text weight='600'>Funny Times</Text>
                <Text weight='600'>Quick Updates</Text>
              </Box>
            </Box>
            <Text>Follow <Anchor color='rubyPink' href='https://twitter.com/h4l1ie'>@h4l1ie</Anchor></Text>
          </Box>
          <Box pad='medium' flex='shrink' background='charcoal' direction='column' round='small' gap='small' justify='center' align='left'>
            <Text weight='600' size='200%'>Github</Text>
            <Text>Check out my Github to</Text>
            <Box direction='row' gap='small'>
              <Box pad='xsmall' round background='nearBlack'></Box>
              <Box direction='column'>
                <Text weight='600'>Learn From My Projects</Text>
                <Text weight='600'>See The Latest And Greatest</Text>
                <Text weight='600'>Get Access To Unreleased Projects</Text>
              </Box>
            </Box>
            <Text>Follow <Anchor color='rubyPink' href='https://github.com/ha1lie'>@ha1lie</Anchor></Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default ContactPage;