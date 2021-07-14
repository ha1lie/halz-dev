import React, { Component } from 'react';
import { Box, Text, Avatar, Anchor } from 'grommet';

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
        <Avatar margin={{top: 'large'}} size='xlarge' src='https://cdn.discordapp.com/avatars/783088512139788298/d2cbde3f0916841377f5ed768293e6df.png?size=256' />
        <Anchor plain href='https://discordapp.com/users/783088512139788298' target='_blank'>
          <Text size='16pt' weight='700' color='offwhite'>hallie#2021</Text>
        </Anchor>
        <Text margin={{bottom: 'large'}} weight='200' color='offwhite'>Status: { this.getStatusString() }</Text>
      </Box>
    );
  }
}

export default DiscordInfo;