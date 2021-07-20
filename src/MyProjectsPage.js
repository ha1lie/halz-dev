import React, { Component } from 'react';
import { Box, Heading, Text } from 'grommet';

class MyProjectsPage extends Component {
  render() {
    return (
      <Box direction='column'>
        <Text>These are my projects.</Text>
        <Heading>Waves Music App</Heading>
        <Heading>My Website</Heading>
        <Heading>WaggleTunes Tweak</Heading>
        <Heading>BattiBar Tweak</Heading>
        <Heading>Snapify Tweak</Heading>
      </Box>
    );
  }
}

export default MyProjectsPage;