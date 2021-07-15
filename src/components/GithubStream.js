import React, { Component } from 'react';
import { Anchor, Avatar, Box, Text } from 'grommet';


class GithubCard extends Component {
  render() {
    return (
      <Box pad='small' margin='xsmall' background='appBarTextColor' round='small' >
        <Text>{ this.props.commit.message }</Text>
        <Box direction='row'>
          <Avatar size='small' src={ this.props.commit.author.avatarURL } />
          <Anchor href={ this.props.commit.author.url } target='_blank' >
            <Text>{ this.props.commit.author.username }</Text>
          </Anchor>
        </Box>
      </Box>
    );
  }
}


class GithubStream extends Component {

  constructor(props) {
    super(props);
    console.log("INITIALIZING GITHUBSTREAM");
  }

  render() {
    return (
      <Box direction='column'>
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