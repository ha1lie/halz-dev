import React, { Component } from 'react';
import { Box, Card, Heading, Paragraph, ResponsiveContext, Text, Anchor } from 'grommet';
import { BsArrowRightShort } from 'react-icons/bs'


class HomePage extends Component {
  render() {
    return(
      <ResponsiveContext.Consumer>
        { size => (
          <Box direction='column'>
            <Card style={{ minHeight: '20px' }} elevation='none' pad='medium' margin='medium' background='rubyPink'>
              <Box flex='grow' direction='row' justify='start' >
                { (size === 'small') ? (
                  <Box width='12px'>
                    <Box flex='grow' width='12pt' background='#00000020' round='6pt' />
                  </Box>
                ) : (
                  <Box width='200px'>
                    <Box flex='grow' round='medium' width='small' responsive={false} background="url('/foliage.jpg')" />
                  </Box>
                )}
                <Box margin='medium' direction='column' justify='between' align='start'>
                  <Box align='start'>
                    <Heading color='white' size='xlarge' weight='700' margin='none'>Hello,</Heading>
                    <Heading color='white' size='large' margin='none'>I'm Hallie</Heading>
                  </Box>
                  <Paragraph color='white' textAlign='start' margin={{vertical: 'none'}} padding={{vertical: 'none'}}>she/her. programmer. black belt. chef. photographer. painter. teacher. friend. designer. cyclist. student. neurodivergent. artist. hostess. artist. creative.</Paragraph>
                  <Anchor href='/aboutme' color='white' label={
                    <Box direction='row' align='center' pad={{ top: 'small' }}>
                      <Text>Read more about me</Text>
                      <BsArrowRightShort size='26pt' />
                    </Box>
                  } />
                </Box>
                <Box flex='grow' />
              </Box>
            </Card>

            <Card style={{ minHeight: '20px' }} elevation='none' pad='medium' margin='medium' background='polishedPine'>
              <Box flex='grow' direction='row-reverse' justify='start' >
                { (size === 'small') ? (
                  <Box width='12px'>
                    <Box flex='grow' width='12pt' background='#00000020' round='6pt' />
                  </Box>
                ) : (
                  <Box width='200px'>
                    <Box flex='grow' round='medium' width='small' responsive={false} background="url('/powerlines.jpg')" />
                  </Box>
                )}
                <Box margin='medium' direction='column' justify='between' align='end'>
                  <Box align='end'>
                    <Heading color='white' size='xlarge' weight='700' margin='none'>Code</Heading>
                    <Heading color='white' size='large' margin='none'>Unbelievable</Heading>
                  </Box>
                  <Paragraph color='white' textAlign='end' margin={{vertical: 'none'}} padding={{vertical: 'none'}}>With experience in dozens of programming languages, I can bring your vision to life.</Paragraph>
                  <Anchor href='/projects' color='white' label={
                    <Box direction='row' align='center' pad={{ top: 'small' }}>
                      <Text>Look at my portfolio</Text>
                      <BsArrowRightShort size='26pt' />
                    </Box>
                  } />
                </Box>
                <Box flex='grow' />
              </Box>
            </Card>

            <Card style={{ minHeight: '20px' }} elevation='none' pad='medium' margin='medium' background='eppeline'>
              <Box flex='grow' direction='row' justify='start' >
                { (size === 'small') ? (
                  <Box width='12px'>
                    <Box flex='grow' width='12pt' background='#00000020' round='6pt' />
                  </Box>
                ) : (
                  <Box width='200px'>
                    <Box flex='grow' round='medium' width='small' responsive={false} background="url('/frosting.jpg')" />
                  </Box>
                )}
                <Box margin='medium' direction='column' justify='between' align='start'>
                  <Box align='start'>
                    <Heading color='#444444' size='xlarge' weight='700' margin='none'>Design</Heading>
                    <Heading color='#444444' size='large' margin='none'>Beautiful</Heading>
                  </Box>
                  <Paragraph color='#444444' textAlign='start' margin={{vertical: 'none'}} padding={{vertical: 'none'}}>With the ability to bring your words into picture. Building beautiful interactions in pure code, Adobe Illustrator, and even paper.</Paragraph>
                </Box>
                <Box flex='grow' />
              </Box>
            </Card>

            <Card style={{ minHeight: '20px' }} elevation='none' pad='medium' margin='medium' background='violentBlue'>
              <Box flex='grow' direction='row-reverse' justify='start' >
                { (size === 'small') ? (
                  <Box width='12px'>
                    <Box flex='grow' width='12pt' background='#00000020' round='6pt' />
                  </Box>
                ) : (
                  <Box width='200px'>
                    <Box flex='grow' round='medium' width='small' responsive={false} background="url('/starbucks.jpg')" />
                  </Box>
                )}
                <Box margin='medium' direction='column' justify='between' align='end'>
                  <Box align='end'>
                    <Heading color='white' size='xlarge' weight='700' margin='none'>Leading</Heading>
                    <Heading color='white' size='large' margin='none'>Bravely</Heading>
                  </Box>
                  <Paragraph color='white' textAlign='end' margin={{vertical: 'none'}} padding={{vertical: 'none'}}>Three years of experience teaching martial arts and aiding individuals learn to code, with guidance and a leading project manager.</Paragraph>
                </Box>
                <Box flex='grow' />
              </Box>
            </Card>

            <Card style={{ minHeight: '20px' }} elevation='none' pad='medium' margin='medium' background='charcoal'>
              <Box flex='grow' direction='row' justify='start' >
                { (size === 'small') ? (
                  <Box width='12px'>
                    <Box flex='grow' width='12pt' background='#00000020' round='6pt' />
                  </Box>
                ) : (
                  <Box width='200px'>
                    <Box flex='grow' round='medium' width='small' responsive={false} background="url('/rainbow.jpg')" />
                  </Box>
                )}
                <Box margin='medium' direction='column' justify='between' align='start'>
                  <Box align='start'>
                    <Heading color='white' size='xlarge' weight='700' margin='none'>Hire Me</Heading>
                    <Heading color='white' size='large' margin='none'>To Create</Heading>
                  </Box>
                  <Paragraph color='white' textAlign='start' margin={{vertical: 'none'}} padding={{vertical: 'none'}}>Looking for a developer or even someone to get your idea off the ground? I may be the right person with the perfect skill set and motivation to see your creation come to life. Reach out to me!</Paragraph>
                  <Anchor href='/contact' color='white' label={
                    <Box direction='row' align='center' pad={{ top: 'small' }}>
                      <Text>Find out how to contact me</Text>
                      <BsArrowRightShort size='26pt' />
                    </Box>
                  } />
                </Box>
                <Box flex='grow' />
              </Box>
            </Card>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default HomePage;