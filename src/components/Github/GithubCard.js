import { Component } from "react";
import { Box, Anchor, Text, Avatar } from 'grommet';

class GithubCard extends Component {

    constructor(props) {
      super(props);
      this.getTitle = this.getTitle.bind(this);
    }
  
    getTitle() {
      const tmpTitle = this.props.commit.title;
      if (tmpTitle.includes('https://github.com/')) {
        return tmpTitle.replace('https://github.com/', '');
      } else {
        return tmpTitle;
      }
    }
  
    render() {
      return (
        <Box flex='grow' pad='none' gap='none' margin='xsmall' background='appBarTextColor' round='small' >
          <Box flex='grow' round={{ size: 'small', corner: 'top' }} pad='small' background='#00000020' margin='none' style={{ minHeight: '10px' }}>
            <Anchor plain href={ this.props.commit.url } target='_blank' >
              <Text color='appBarBackground' weight='600'>{ this.getTitle() }</Text>
            </Anchor>
          </Box>
          <Box fill direction='row' pad='small' gap='xsmall' align='center' style={{ minHeight: '10px'}}>
            <Avatar size='small' src={ this.props.commit.author.avatarURL } />
            <Box flex direction='row' pad='none' gap='3px'>
              <Anchor href={ this.props.commit.author.url } target='_blank' color='violetPurple' >
                <Text weight='600'>{ this.props.commit.author.username }</Text>
              </Anchor>
              <Text>/</Text>
              <Anchor href={ this.props.commit.repo.url } target='_blank' color='violetPurple' >
                <Text weight='600'>{ this.props.commit.repo.name }</Text>
              </Anchor>
            </Box>
          </Box>
        </Box>
      );
    }
  }

  export default GithubCard;