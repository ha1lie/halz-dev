import React, { Component } from 'react';
import { Box } from 'grommet';
import GithubCard from './GithubCard';

class GithubStream extends Component {
  render() {
    return (
      <Box flex direction='column'>
        { 
          this.props.commits.map((commit) => 
            <GithubCard key={commit.date.ms} commit={ commit } />
          ) 
        }
      </Box>
    );
  }
}

export default GithubStream;