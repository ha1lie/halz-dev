import React, { Component } from 'react';
import DiscordAvatar from './DiscordAvatar';
import { Box, Text, Anchor, Stack } from 'grommet';

class DiscordInfo extends Component {

  getStatusString() {
    if (this.props.statusColor === 'onlineColor') {
      return 'Online';
    } else if (this.props.statusColor === 'idleColor') {
      return 'Idle';
    } else if (this.props.statusColor === 'offlineColor') {
      return 'Offline';
    } else {
      return 'Do Not Disturb';
    }
  }

  render() {
    return (
      <Box align='center' gap='xsmall'>
        <Stack anchor='bottom-right'>
          <DiscordAvatar size='100px' />
          <Box background={ this.props.statusColor } width='20px' height='20px' round='10px' margin='4px' />
        </Stack>
        <Anchor plain href='https://discordapp.com/users/783088512139788298' target='_blank'>
          <Text size='16pt' weight='700' color='appBarTextColor'>hallie#2021</Text>
        </Anchor>
        <Text margin={{bottom: 'large'}} weight='200' color='appBarTextColor'>Status: { this.getStatusString() }</Text>
      </Box>
    );
  }
}

export default DiscordInfo;