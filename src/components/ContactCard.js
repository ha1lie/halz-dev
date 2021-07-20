import React, { Component } from 'react';
import { Box, Heading, Paragraph, Text, ResponsiveContext, Anchor } from 'grommet';

class ContactCard extends Component {
  render() {
    return(
      <ResponsiveContext.Consumer>
        { size => (
          <Box margin={{vertical: 'small'}} round='medium' pad='small' background={ this.props.backColor ?? 'offwhite'} direction={ size === 'small' ? 'column' : 'row' } gap={ size === 'small' ? 'small' : '10pt'}>
            <Anchor href='https://www.google.com' target='_blank' label={
              <Box background='#ffffff20' width={ size === 'small' ? '100vw' : '160pt' } pad='small' round='small' align='center' direction='column'>
                <Text size='30pt' weight='700' color={ this.props.textColor ?? '#444444'}>{ this.props.methodName }</Text>
                { this.props.methodIcon }
              </Box>
            } />
            <Box flex background='#ffffff10' pad='small' round='small' align={size === 'small' ? 'center' : 'start'} direction='column'>
              <Box fill='vertical' />
              <Text size='20pt' weight='600' color={ this.props.textColor ?? '#444444'}>{ this.props.actualContact }</Text>
              <Paragraph fill textAlign={ size === 'small' ? 'center' : 'start' } weight='400' margin='none' pad='none' color={ this.props.textColor ?? '#444444'}>{ this.props.sellingPoint }</Paragraph>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default ContactCard;