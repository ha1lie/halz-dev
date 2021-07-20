import React, { Component } from 'react';
import { Box, Heading, Text } from 'grommet';
import ActionLinkButton from './components/ActionLinkButton';

class ResumePage extends Component {
  render() {
    return (
      <Box direction='column' margin='medium' gap='10pt'>
        <Text>This is my resume</Text>
        <ActionLinkButton buttonTitle='Back to about me' link='/aboutMe' buttonTextColor='white' />
        <ActionLinkButton link='/requestMyResume' buttonTitle='Request my full resume and references' buttonColor='polishedPine' buttonTextColor='white' toRight={true} />
      </Box>
    );
  }
}

export default ResumePage;