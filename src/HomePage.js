import React from 'react';
import { Box, Heading, Card, Paragraph, ResponsiveContext } from 'grommet';

function HomePage() {

  return (
    <ResponsiveContext.Consumer>
      { size => (
        <Box>
          <Card height={ size === 'small' ? '210pt' : '300pt'} elevation='none' pad='medium' margin='medium' background='#DBEBC0'>
            <Box fill direction='row'>
              { (size === 'small') ? (
                <Box fill='vertical' width='12pt' background='#00000020' round='6pt' />
              ) : (
                <Box fill='vertical' round='medium' width='small' responsive={false} background="url('/frosting.jpg')" />
              )}
              <Box margin='medium' direction='column' justify='between'>
                <Box>
                  <Heading size='xlarge' weight='700' margin='none'>Hello,</Heading>
                  <Heading size='large' margin='none'>I'm Hallie.</Heading>
                </Box>
                <Paragraph margin={{vertical: 'none'}} padding={{vertical: 'none'}}>she/her. programmer. black belt. chef. photographer. painter. teacher. friend. designer. cyclist. student. neurodivergent. artist. hostess. artist. creative.</Paragraph>
              </Box>
            </Box>
          </Card>
          <Card height={ size === 'small' ? '210pt' : '300pt'} elevation='none' pad='medium' margin='medium' background='#DBEBC0'>
          <Box fill direction='row'>
            { (size === 'small') ? (
              <Box fill='vertical' width='12pt' background='#00000020' round='6pt' />
            ) : (
              <Box fill='vertical' round='medium' width='small' responsive={false} background="url('/frosting.jpg')" />
            )}
            <Box margin='medium' direction='column' justify='between'>
              <Box>
                <Heading size='xlarge' weight='700' margin='none'>Hello,</Heading>
                <Heading size='large' margin='none'>I'm Hallie.</Heading>
              </Box>
              <Paragraph margin={{vertical: 'none'}} padding={{vertical: 'none'}}>she/her. programmer. black belt. chef. photographer. teacher. friend. designer. cyclist. student. neurodivergent. artist. hostess. driver. creative.</Paragraph>
            </Box>
          </Box>
        </Card>
        <Card height={ size === 'small' ? '210pt' : '300pt'} elevation='none' pad='medium' margin='medium' background='#DBEBC0'>
          <Box fill direction='row'>
            { (size === 'small') ? (
              <Box fill='vertical' width='12pt' background='#00000020' round='6pt' />
            ) : (
              <Box fill='vertical' round='medium' width='small' responsive={false} background="url('/frosting.jpg')" />
            )}
            <Box margin='medium' direction='column' justify='between'>
              <Box>
                <Heading size='xlarge' weight='700' margin='none'>Hello,</Heading>
                <Heading size='large' margin='none'>I'm Hallie.</Heading>
              </Box>
              <Paragraph margin={{vertical: 'none'}} padding={{vertical: 'none'}}>she/her. programmer. black belt. chef. photographer. teacher. friend. designer. cyclist. student. neurodivergent. artist. hostess. driver. creative.</Paragraph>
            </Box>
          </Box>
        </Card>
        </Box>
      )}
    </ResponsiveContext.Consumer>
    
  );
}

export default HomePage;