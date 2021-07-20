import React, { Component } from 'react';
import { Box } from 'grommet';
import HomeCard from './components/HomeCard';


class HomePage extends Component {
  render() {
    return(
      <Box direction='column' >
        <HomeCard imageSide='left' color='violetPurple' textColor='white' backgroundString="url('/foliage.jpg')" />
        <HomeCard imageSide='right' color='polishedPine' textColor='white' backgroundString="url('/powerlines.jpg')" topTitle='Code' bottomTitle='Unbelievable' bodyText='With experience in dozens of programming languages, I can bring your vision to life.' />
        <HomeCard imageSide='left' color='eppeline' topTitle='Design' bottomTitle='Beautiful' bodyText='With the ability to bring your words into picture. Building beautiful interactions in pure code, Adobe Illustrator, and even paper.' />
        <HomeCard imageSide='right' color='rubyPink' textColor='white' backgroundString="url('/starbucks.jpg')" topTitle='Leading' bottomTitle='Bravely' bodyText='Three years of experience teaching martial arts and aiding individuals learn to code, with guidance and a leading project manager.' />
      </Box>
    );
  }
}

export default HomePage;