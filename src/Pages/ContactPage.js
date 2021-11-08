import React, { Component } from 'react';
import { Box } from 'grommet';
import { Github, Action, Twitter, Mail } from 'grommet-icons';
import { FaDiscord } from 'react-icons/fa';
import ContactCard from '../components/ContactCard';

class ContactPage extends Component {
  render() {
    return (
      <Box direction='column' margin='medium'>
        <ContactCard link='mailto:hallie@halz.dev' backColor='polishedPine' textColor='white' methodName='Email' methodIcon={ <Mail size='large' color='white' /> } actualContact='hallie@halz.dev' sellingPoint='Best for business inquiries, and opportunities to work with me' />
        <ContactCard link='https://discord.com' backColor='rubyPink' textColor='white' methodName='Discord' methodIcon={ <FaDiscord color='white' size='38pt' /> } actualContact='hallie#8192' sellingPoint='Best for questions, comments, and concerns about what I do and who I am' />
        <ContactCard link='https://twitter.com/h4l1ie' backColor='polishedPine' textColor='white' methodName='Twitter' methodIcon={ <Twitter size='large' color='white' /> } actualContact='@h4l1ie' sellingPoint='Best to stay up to date on my work and my thoughts' />
        <ContactCard link='https://github.com/ha1lie' backColor='rubyPink' textColor='white' methodName='Github' methodIcon={ <Github size='large' color='white' /> } actualContact='@ha1lie' sellingPoint='Best to learn from what I do, and make some suggestions to help me out' />
      </Box>
    );
  }
}

export default ContactPage;