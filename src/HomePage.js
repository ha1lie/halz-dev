import React, { useState } from 'react';
import { Box, Text, Stack, Image } from 'grommet';
import Blur from 'react-css-blur';

function HomePage() {

  

  return (
    <Box margin='medium' round='medium'>
      <Stack anchor='bottom'>
        <Box height='300px' round='medium' background='url(/dogShell.jpg)' />
        <Blur radius='10px' transition='0ms'>
          <Stack>
            <Box height='150px' fill='horizontal' background='#0b77ffbb' >
              <Image src='/dogShell.jpg' fill fit='cover' />
            </Box>
            <Box fill background='#00000060' />
          </Stack>
          
        </Blur>
        
      </Stack>
    </Box>
  );
}

export default HomePage;