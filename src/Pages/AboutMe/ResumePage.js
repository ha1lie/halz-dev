import { Box, Text, ResponsiveContext, Anchor } from 'grommet';
import ActionLinkButton from '../../components/Global/ActionLinkButton';
import { BsArrowRightShort } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'

function ResumePage() {
  return <ResponsiveContext.Consumer>
    { size => (
      <Box direction='column' margin='medium'>
        <ActionLinkButton buttonColor='violentBlue' buttonTitle='Want to learn about me?' buttonTextColor='white' toRight={true} link='/aboutme' />
        <Box pad={{ top: 'large' }} direction='column'>
          <Text weight='600' size='300%'>My Resume</Text>
          <Text>This is an abbreviated version of my resume, with some details left out such as addresses, phone numbers, and specific locations in order to maintain some privacy. For a full version of my resume, please reach out to me via email.</Text>
          <Anchor color='white' href='/contact' label={
            <Box direction='row' align='center'>
              <Text>Get my email</Text>
              <BsArrowRightShort size='26pt' />
            </Box>
          } />
          
          <Box pad={{ top: 'medium' }} >
            <Text weight='500' size='200%'>Special Skills</Text>
            <Box pad={{ top: 'small' }} direction={ size === 'small' ? 'column' : 'row' }>
              <Box width={ size === 'small' ? '100vw' : '50vw' }>
                <Box direction='column' gap='small'>
                  <Box direction='row' align='center' gap='small' >
                    <GoPrimitiveDot />
                    <Text>Driven and Self Motivated</Text>
                  </Box>
                  <Box direction='row' align='center' gap='small' >
                    <GoPrimitiveDot />
                    <Text>Conversational French Speaker</Text>
                  </Box>
                  <Box direction='row' align='center' gap='small' >
                    <GoPrimitiveDot />
                    <Text>Open-Minded to new ideas and concepts</Text>
                  </Box>
                </Box>
              </Box>
              <Box>
              <Box direction='column' gap='small'>
                  <Box direction='row' align='center' gap='small' >
                    <GoPrimitiveDot />
                    <Text>Leadership Qualities And Abilities</Text>
                  </Box>
                  <Box direction='row' align='center' gap='small' >
                    <GoPrimitiveDot />
                    <Text>Comfortable with a variety of technologies and programming languages</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box pad={{ top: 'medium' }} gap='medium' >
            <Text weight='500' size='200%'>Jobs</Text>
            <Box gap='medium' pad={ size === 'small' ? 'none' : { top: 'small' } } direction={ size === 'small' ? 'column' : 'row' }>
              <Box width={ size === 'small' ? '100vw' : '50vw' } gap='xsmall'>
                <Text weight='700' size='140%' >RIT Tech Crew</Text>
                <Text weight='600' size='120%'>Junior Coordinator, Production Assistant</Text>
                <Text weight='600'>August 2021 - Present</Text>
                <Text>RIT Tech Crew is a student led and professionally managed team responsible for almost all auditory and lighting technology and events on campus. I work as a production assistant during events, as well as a junior coordinator, currently training to organize a group of 70+ students, contact clients and ensure clear understanding of all jobs run by the team.</Text>
              </Box>
              <Box width={ size === 'small' ? '100vw' : '50vw' } gap='xsmall'>
                <Text weight='700' size='140%' >Local Steakhouse</Text>
                <Text weight='600' size='120%'>Hostess</Text>
                <Text weight='600'>Summer 2021</Text>
                <Text>I worked as the singular hostess at a high end steakhouse. I was responsible for making a positive first interaction with 50-100 clients per night, ensuring clear communication between 12 staff members, and managing the moment to moment big picture logistics of the restaurant.</Text>
              </Box>
            </Box>
            <Box gap='medium' pad={ size === 'small' ? 'none' : { top: 'small' } } direction={ size === 'small' ? 'column' : 'row' }>
              <Box width={ size === 'small' ? '100vw' : '50vw' } gap='xsmall'>
                <Text weight='700' size='140%' >Martial Arts Studio</Text>
                <Text weight='600' size='120%'>Assistant Instructor</Text>
                <Text weight='600'>August 2017 - May 2021</Text>
                <Text>After achieving my first degree black belt in 2017, I began my journey in teaching martial arts, and life skills, to people of all ages and abilities. I worked both in the studio during class time, as well as outside to plan for my student's success. I worked with my instructor as well as masters across the region during clinics and tournaments, on top of classroom work.</Text>
              </Box>
              <Box width={ size === 'small' ? '100vw' : '50vw' } gap='xsmall'>
                <Text weight='700' size='140%' >Chipotle</Text>
                <Text weight='600' size='120%'>Crew Member</Text>
                <Text weight='600'>November 2020 - March 2021</Text>
                <Text>I worked in a chain restaurant at a very difficult time for the world. I was able to bring my best into work every day, ensuring that I was able to impact the customers as best I could. Despite many challenges in staffing and other shortages, I was able to become a utility worker important to both my location and others surrounding.</Text>
              </Box>
            </Box>
            <Box gap='medium' pad={ size === 'small' ? 'none' : { top: 'small' } } direction={ size === 'small' ? 'column' : 'row' }>
              <Box width={ size === 'small' ? '100vw' : '50vw' } gap='xsmall'>
                <Text weight='700' size='140%' >Local Ice Cream Shop</Text>
                <Text weight='600' size='120%'>Software Developer</Text>
                <Text weight='600'>February 2021 - April 2021</Text>
                <Text>As a final project my senior year of high school, I had the opportunity to work with a local company to learn about their processes and business. I decided to partner with a local ice cream company, and was able to develop a point of sale application, app store app for both iOS and Android, as well as a backend. This aided the company in streamlining their customer service, and ordering times.</Text>
              </Box>
            </Box>
          </Box>

          <Box pad={{ top: 'medium' }} >
            <Text weight='500' size='200%'>Events/Unique</Text>
            <Box pad={{ top: 'small' }} direction='column'>
              <Box direction={ size === 'small' ? 'column' : 'row' } pad='small' gap='small' > 
                <Box flex='grow' width={ size === 'small' ? '100vw' : '30vw' }>
                  <Text weight='700' size='120%'>Second Degree Black Belt</Text>
                </Box>
                <Text>Received from the World Tang Soo Do Association in 2017(Cho Dan)/2019(E Dan), I am a registered and certified dan member. I have been practicing since 2012.</Text>
              </Box>

              <Box direction={ size === 'small' ? 'column' : 'row' } pad='small' gap='small' > 
                <Box flex='grow' width={ size === 'small' ? '100vw' : '30vw' }>
                  <Text weight='700' size='120%'>WICHacks Organizer</Text>
                </Box>
                <Text>As part of my time in Women in Computing @ RIT, I work with our Hackathon committee to help put together a full fledged hackathon in the spring. This hackathon brings together students from all over the country and world, with many real world sponsors, to create a great time for participants.</Text>
              </Box>

              <Box direction={ size === 'small' ? 'column' : 'row' } pad='small' gap='small' > 
                <Box flex='grow' width={ size === 'small' ? '100vw' : '30vw' }>
                  <Text weight='700' size='120%'>Billie Micheal Student Leadership Award</Text>
                </Box>
                <Text>Granted once a year to one outstanding student in each state, I was the 2017 recipient for the award, given as part of the American Spirit Awards gala, showing a history of reliance and service above and beyond in the community.</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>;
}

export default ResumePage;