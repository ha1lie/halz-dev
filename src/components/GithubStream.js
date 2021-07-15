import React, { Component } from 'react';
import { Anchor, Avatar, Box, Text } from 'grommet';


class GithubCard extends Component {
  render() {
    return (
      <Box pad='none' margin='xsmall' background='appBarTextColor' round='small' >
        <Box round={{ size: 'small', corner: 'top' }} pad='small' background='#00000010' margin='none'>
          <Text weight='600'>{ this.props.commit.title }</Text>
        </Box>
        <Box direction='row' pad='small' gap='xsmall'>
          <Avatar size='small' src={ this.props.commit.author.avatarURL } />
          <Anchor href={ this.props.commit.author.url } target='_blank' color='violetPurple' >
            <Text weight='600'>{ this.props.commit.author.username }</Text>
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