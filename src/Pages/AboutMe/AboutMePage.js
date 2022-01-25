import React, { Component } from 'react';
import { Box, Text, Image, ResponsiveContext, Anchor } from 'grommet';
import ActionLinkButton from '../../components/Global/ActionLinkButton';
import { BsArrowRightShort } from 'react-icons/bs'

class AboutMePage extends Component {
  render() {
    return(
      <ResponsiveContext.Consumer>
        { size => (
          <Box margin='medium' direction='column'>
            <ActionLinkButton buttonColor='violentBlue' buttonTitle='Looking for my resume?' buttonTextColor='white' toRight={true} link='/resume' />
            
            <Box margin={{ top: 'large' }} direction={ size === 'small' ? 'column' : 'reverse-row' } align='center' justify='between'>
              <Box  width={ size === 'small' ? '60vw' : '30vw' } pad='30pt' background='rubyPink' round='large' >
                <Image fit='contain' src='/hallieFace.jpg' />
              </Box>
              <Box direction='column' width={ size === 'small' ? '100vw' : '50vw' } pad='medium' >
                <Text textAlign='end' size='300%' weight='600'>I'm Hallie,</Text>
                <Text textAlign='end'>An 18 year old developer, teacher, student, and leader just looking to make a difference in the big world around me!</Text>
              </Box>
            </Box>

            <Box direction={ size === 'small' ? 'column' : 'row'} pad='medium' gap='medium' align='center' justify='between'>
              <Box width={ size === 'small' ? '100%' : '50%' }>
                <Text size='250%' weight='600'>A Quick Summary</Text>
                <Text>I'm a country born girl, raised in Southern Maine, and who now attends university at the Rochester Institute of Technology in Rochester, NY studying Computing Security. In my free time, I enjoy photography, biking, the beach, and enjoying some good food.</Text>
              </Box>
              <Box height={ size === 'small' ? '60vw' : '40vw' } width={ size === 'small' ? '60vw' : '40vw' } pad='30pt' background='violentBlue' round='large' >
                <Image fit='cover' src='/coffee.jpg' />
              </Box>
            </Box>

            <Box direction={ size === 'small' ? 'column' : 'row'} pad='medium' gap='medium' justify='between' align='center' >
              <Box height={ size === 'small' ? '60vw' : '50vw' } width={ size === 'small' ? '60vw' : '40vw' } pad='30pt' background='polishedPine' round='large' >
                <Image fit='cover' src='/tech+coffee.jpg' />
              </Box>
              <Box width={ size === 'small' ? '100%' : '50%' } gap='small'>
                <Text textAlign='end' size='250%' weight='600'>My Time In Tech</Text>
                <Text textAlign='end'>Ever since a fateful interaction with one technology educator in my middle school years, I've fallen in love with software development, and more. I managed to create my first, albeit simple, app in 8th grade, placing first in a statewide contest, and getting my first taste of publicity. After that, I worked with local companies to develop solutions for their business, and others still to being side projects for supplemental income.</Text>
                <Text textAlign='end'>I've become comfortable with many technologies, from Javascript to Python, Swift, and even Dart.</Text>
              </Box>
            </Box>

            <Box direction={ size === 'small' ? 'column' : 'row'} pad='medium' gap='medium' justify='between' align='center' >
              <Box gap='small' width={ size === 'small' ? '100%' : '50%' }>
                <Text size='250%' weight='600'>Favorite Skills And Hobbies</Text>
                <Text>Outside of work, I keep myself busy with many hobbies. A second degree black belt with the World Tang Soo Do Association, and a varsity Cross Country runner in high school, I enjoy keeping active at all times. In the summer, I spend my weekends with my dog on the east coast beaches, and biking through trails in my hometown.</Text>
                <Text>While some of these hobbies have led to work on the side as well, such as having had the joy to work as an assistant instructor at my martial arts studio, these things will always be held close to my heart. The friends that I made through these activities will always be cherished, and I am so excited to get to share these amazing experiences with new people around me as well.</Text>
              </Box>
              <Box height={ size === 'small' ? '60vw' : '40vw' } width={ size === 'small' ? '60vw' : '50vw' } pad='30pt' background='eppeline' round='large' >
                <Image fit='cover' src='/outside.jpg' />
              </Box>
            </Box>  

            <Box direction={ size === 'small' ? 'column' : 'row'} pad='medium' gap='medium' justify='between' align='center' >
              <Box height={ size === 'small' ? '60vw' : '40vw' } width={ size === 'small' ? '60vw' : '40vw' } pad='30pt' background='rubyPink' round='large' >
                <Image fit='cover' src='/food+coffee.jpg' />
              </Box>
              <Box gap='small' width={ size === 'small' ? '100%' : '50%' }>
                <Text textAlign='end' size='250%' weight='600'>Customer Oriented Skills</Text>
                <Text textAlign='end'>Growing up, I wasn't different than many of my peers, working as a food service worker during the summer throughout my teenage years. This experience, though certainly not exhilarating at times, has allowed me to gain string skills in customer service. This has opened many doors and allowed me to meet a large amount of incredible people. What was once a way of making a living by being kindhearted to others, I now pride myself on being an approachable person in almost any situation, and truly feel that it's given me the empathy and compassion to work with all types of people.</Text>
                <Text textAlign='end'>Even in the tech field, communication is key. Being able to work with a variety of people, with different backgrounds, skills, and challenges, is a nessecary and given requirement to being a strong developer. Furthermore, the need to design technologies accessible to everyone is greater than ever, and a main priority for me.</Text>
              </Box>
            </Box>

            <Box direction='column' pad='medium' align='start' gap='small'>
              <Text>I believe that we are all created equal, and that everyone deserves to be treated with love and respect, regardless of race, ethnicity, gender, sexuality, political ideologies, personality, or any other differences we may have. I have lived my life loving other people, and I do my best to impart that on the people around me. It's always been my goal to leave an interaction happier than it started, and I hope that you do the same.</Text>
              <Anchor color='white' href='/contact' label={
                <Box direction='row' align='center'>
                  <Text>Tell Me Yours</Text>
                  <BsArrowRightShort size='26pt' />
                </Box>
              } />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default AboutMePage;