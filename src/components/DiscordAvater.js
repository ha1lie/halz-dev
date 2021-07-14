import React, { Component } from 'react';
import { Box, Avatar, Stack } from 'grommet';

class DiscordAvatar extends Component {
  render() {
    return (
      <Stack anchor='bottom-right'>
        <Avatar size='medium' src='https://cdn.discordapp.com/avatars/783088512139788298/d2cbde3f0916841377f5ed768293e6df.png?size=256' />
        <Box background={ this.props.statusColor } width='12px' height='12px' round='6px' />
      </Stack>
    );
  }
}

export default DiscordAvatar;