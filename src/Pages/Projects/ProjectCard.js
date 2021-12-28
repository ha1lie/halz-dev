import React, { Component } from 'react';
import { Box, Collapsible, Text } from 'grommet';
import { Down, Up } from 'grommet-icons';

class ProjectCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isExpanded: this.props.defaultExpanded ?? false
    }
  }

  toggleExpansion() {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render() {
    return (
      <Box direction='column' round='medium' background={ this.props.color ?? '#5e5ec6' } >
        <Box onClick={ () => { this.toggleExpansion() } } focusIndicator={ false } direction='row' justify='between' align='center' background='#00000030' pad={{ horizontal: 'medium', vertical: 'small' }} round={{ size:'medium', corner: 'top' }}>
          <Box> 
            <Box direction='row' align='center'>
              <Text weight='700' size='150%'>{ this.props.title }</Text>
              { this.props.workInProgress ? (
                <Box background='#ff000050' pad='small' round='small' margin={{ horizontal: 'small' }} align='center' justify='center'>
                  <Text color='white'>Work In Progress</Text>
                </Box>
              ) : (
                <Box>
                </Box>
              )}
              { this.props.inBeta ? (
                <Box background='#a848ab50' pad='small' round='small' margin={{ horizontal: 'small' }} align='center' justify='center'>
                  <Text color='white'>Beta Testing Open Soon</Text>
                </Box>
              ) : (
                <Box>
                </Box>
              )}
            </Box>
            <Text>{ this.props.subtitle }</Text>
          </Box>
          { this.state.isExpanded ? (
            <Up onClick={ () => { this.toggleExpansion() } } />
          ) : (
            <Down onClick={ () => { this.toggleExpansion() } } />
          )}
        </Box>
        <Collapsible open={ this.state.isExpanded }>
          <Box pad='small' size='100%'>
            { this.props.children }
          </Box>
        </Collapsible>
      </Box>
    );
  }
}

export default ProjectCard;