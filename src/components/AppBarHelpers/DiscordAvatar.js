import React, { Component } from 'react';
import { Box, Avatar, Stack } from 'grommet';

class DiscordAvatar extends Component {
  render() {
    return (
      <Stack anchor='bottom-right'>
        <Avatar size={ this.props.size ?? 'medium'} src='https://avatars.githubusercontent.com/u/70453087?v=4' />
        <Box background={ this.props.statusColor } width='12px' height='12px' round='6px' />
      </Stack>
    );
  }
}

export default DiscordAvatar;