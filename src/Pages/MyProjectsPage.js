import React, { Component } from 'react';
import { Box, Anchor, Text } from 'grommet';
import ProjectCard from '../components/Projects/ProjectCard';

class MyProjectsPage extends Component {
  render() {
    return (
      <Box direction='column' gap='medium' margin='medium'>
        <Box>
          <Text weight='700' size='220%'>My Works</Text>
          <Text>A Collection of projects put together by yours truly. Many projects are opensource, and I encourage you to take a look, and learn from my mistakes!Many projects are opensource, and I encourage you to take a look, and learn from my mistakes!Many projects are opensource, and I encourage you to take a look, and learn from my mistakes!</Text>
        </Box>
        <Text weight='600' size='160%'>The Latest</Text>
        <ProjectCard defaultExpanded={true} title="SymPlace" color='#4B8F8C' subtitle="Discover safe spaces near you">
          <Box direction='column' pad='small'>
            <Text weight='600' size='120%'>What Is It?</Text>
            <Text>SymPlace was a result of UB Hacking 2021, where I worked to develop a mobile app that would cache information and reviews on places and establishments that are accepting and safe for people of color or the LGBTQ+ spectrum.</Text>
            <Text weight='600' size='120%'>How does it work?</Text>
            <Text>SymPlace uses on device actions to keep track of the locations you visit securely, and recommends you review your favorite. Through this, it exponentially grows the record of safe spaces around the globe, by opensourcing to the larger community</Text>
            <Text weight='600' size='120%'>Check it out</Text>
            <Anchor href="https://devpost.com/software/symplace">
              <Text>Check out the DevPost</Text>
            </Anchor>
            <Anchor href="https://github.com/ha1lie/SymPlace">
              <Text>Or the GitHub</Text>
            </Anchor>
          </Box>
        </ProjectCard>
        <Text weight='600' size='160%'>Apps</Text>
        <ProjectCard title="Flip" color='#150578' subtitle="A simple PDF rotation tool, and scanner">
          <Text>THIS IS THE BODY OF THE VIEW THAT IM PASSING IN</Text>
        </ProjectCard>
        <ProjectCard title="Linkly" color='#4B8F8C' subtitle="Menu Bar Link Manager">
          <Box direction='row'>
            <Box round='medium' height='100pt' width='100pt' responsive={false} background="url('/linkly.png')" />
            <Box direction='column' pad='small'>
              <Text weight='600' size='120%'>What Is It?</Text>
              <Text>Let this be the body of the information about it</Text>
            </Box>
          </Box>
        </ProjectCard>
        <ProjectCard inBeta={ true } title="Waves Music App" color='#1F2232' subtitle="A new generation of social sounds">
          <Text>THIS IS THE BODY OF THE VIEW THAT IM PASSING IN</Text>
        </ProjectCard>
        <Text weight='600' size='160%'>Web Development</Text>
        <ProjectCard workInProgress title="My Website" color='#9C528B' subtitle="A marketing piece, and learning adventure">
          <Text>THIS IS THE BODY OF THE VIEW THAT IM PASSING IN</Text>
        </ProjectCard>
        <Text weight='600' size='160%'>iOS Tweak Development</Text>
        <ProjectCard title="Waggletunes Tweak" color='#183642' subtitle="Your music. Your controls. Whenever you need them.">
          <Text>THIS IS THE BODY OF THE VIEW THAT IM PASSING IN</Text>
        </ProjectCard>
        <ProjectCard title="Battibar Tweak" color='#E0FBFC' subtitle="Information in a color.">
          <Text>THIS IS THE BODY OF THE VIEW THAT IM PASSING IN</Text>
        </ProjectCard>
        <ProjectCard title="Snapify Tweak" subtitle="Unify your social experience.">
          <Text>THIS IS THE BODY OF THE VIEW THAT IM PASSING IN</Text>
        </ProjectCard>
      </Box>
    );
  }
}

export default MyProjectsPage;