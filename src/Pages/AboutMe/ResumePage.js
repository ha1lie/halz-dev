import React, { Component } from 'react';
import { Box, Heading, Text } from 'grommet';
import ActionLinkButton from '../../components/Global/ActionLinkButton';

class ResumePage extends Component {
  render() {
    return (
      <Box direction='column' margin='medium' gap='10pt'>
        <Text weight='600' size='200%' >ATTENTION</Text>
        <Text>The fastest way to get a copy of my resume is by emailing me at <Text color='polishedPine'>hallie@halz.dev</Text> with some information! This page will be updated soon with my resume and a way to get the full copy!</Text>
        <Text>I look forward to hearing from you!</Text>
        <ActionLinkButton buttonTitle='Back to about me' link='/aboutMe' buttonTextColor='white' />
        <ActionLinkButton link='/requestMyResume' buttonTitle='Request my full resume and references' buttonColor='polishedPine' buttonTextColor='white' toRight={true} />
      </Box>
    );
  }
}

export default ResumePage;