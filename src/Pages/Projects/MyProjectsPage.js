import React, { Component } from 'react'
import { Box, Anchor, Text, ResponsiveContext, Image } from 'grommet'
import ProjectCard from './ProjectCard'
import { ReactComponent as SymPlaceImage } from './EarthMarkersvg.svg'
import { ReactComponent as LinklyIcon } from './linkly.svg'
import { ReactComponent as LogoIcon } from './logo.svg'

class MyProjectsPage extends Component {
  render() {
    return (
      <ResponsiveContext.Consumer>
        { size => (
          <Box direction='column' gap='medium' margin='medium'>
            <Box>
              <Text weight='700' size='220%'>My Works</Text>
              <Text>This is a collection of my projects. Keep in mind, all of these are side projects, and have acted as suplements throughout my educational career. Some of them are released and available to use as the general public. Some of these works may be unfinished. It is also important to remember that I am not a professional designer, and development is where my passion is. With all of this in mind, I hope that you enjoy reading about these projects, and that it can inspire you about what you can do as well.</Text>
            </Box>
            <Text weight='600' size='160%'>The Latest</Text>
            <ProjectCard inBeta defaultExpanded title="SymPlace" color='#4B8F8C' subtitle="Discover safe spaces near you">
              <Box direction={ size === 'small' ? 'column' : 'row' }>
                <SymPlaceImage />
                <Box direction='column' pad='small'>
                  <Text weight='600' size='120%'>What Is It?</Text>
                  <Text>SymPlace was a result of UB Hacking 2021, where I worked to develop a mobile app that would cache information and reviews on places and establishments that are accepting and safe for people of color or the LGBTQ+ spectrum.</Text>
                  <Box pad={{ vertical: 'small' }}>
                    <Text weight='600' size='120%'>How does it work?</Text>
                    <Text>SymPlace uses on device actions to keep track of the locations you visit securely, and recommends you to review your favorite. Through this, it exponentially grows the record of safe spaces around the globe. It recommends locations near you that you might enjoy, while keeping you safe and happy.</Text>
                  </Box>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>Where is it now?</Text>
                    <Text>SymPlace is now being developed to be released to the public, with more secure server storage, a more efficient caching method, designed to keep you even safer. You can view the latest progress <Anchor href='https://symplace.halz.dev/' color='rubyPink'>here</Anchor>. The original will continue to be open source, though should not be pointed at as the true source code for the final version.</Text>
                  </Box>
                  <Text weight='600' size='120%'>Check it out</Text>
                  <Anchor color='rubyPink' href='https://symplace.halz.dev/'>
                    <Text>SymPlace Official Site</Text>
                  </Anchor>
                  <Anchor color='rubyPink' href="https://devpost.com/software/symplace">
                    <Text>Check out the DevPost</Text>
                  </Anchor>
                  <Anchor color='rubyPink' href="https://github.com/ha1lie/SymPlace">
                    <Text>Or the GitHub for the original</Text>
                  </Anchor>
                </Box>
              </Box>
            </ProjectCard>

            <Text weight='600' size='160%'>Apps</Text>

            <ProjectCard title="Flip" color='#f3dfbf' subtitle="A simple PDF rotation tool, and scanner">
              <Box direction={ size === 'small' ? 'column' : 'row'} pad='small'>
                <Image fit='cover' fill='horizontal' width={ size === 'small' ? '100%' : '40%' } src='http://localhost:3000/flipMarketing.png' extend='border-radius: 20px;' />
                <Box pad={{ left: 'small' }} width={ size === 'small' ? '100%' : '60%' } direction='column'>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>What is Flip?</Text>
                    <Text>Flip is an iOS/iPadOS app that makes rotating a PDF on your mobile device super easy. Flip also comes with a built in PDF scanner which allows you to name your PDF document for export as required.</Text>
                  </Box>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>Why was Flip Developed?</Text>
                    <Text>Flip was developed in response to my high school making the transition to iPad's during my senior year. Throughout the challenges of adopting to a new technology for most of the school, these new devices seemed less simple to use. One of the largest complaints received from both teachers and students was that remote work would come in skewed, and thus, this was born. Originally intended as a free alternative for my school, it's now publicly available and used by more than 5000 people outside of the district as well.</Text>
                  </Box>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>Where is it now?</Text>
                    <Anchor color='rubyPink' href='https://flip.halz.dev'>
                      <Text>View the Official Site</Text>
                    </Anchor>
                    <Anchor color='rubyPink' href='https://apps.apple.com/us/app/flip-pdf-utility/id1578807493'>
                      <Text>Download on the App Store</Text>
                    </Anchor>
                  </Box>
                </Box>
              </Box>
            </ProjectCard>

            <ProjectCard title="Linkly" color='#5e5ce6' subtitle="Menu Bar Link Manager">
              <Box direction={ size === 'small' ? 'column' : 'row'} pad='small'>
                <LinklyIcon />
                <Box pad={{ left: 'small' }} width={{ max: '75%' }} direction='column'>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>What is Linkly?</Text>
                    <Text>Linkly is a simple Mac menu bar app. It is designed to keep your most used links quick to access, even when you don't have a browser open. Once you set Linkly to open on login, then you don't have to worry about it. No impact on battery life or performance, it is the simplest way to always have what you need one click away.</Text>
                  </Box>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>Where is it now?</Text>
                    <Anchor color='rubyPink' href='https://linkly.halz.dev'>
                      <Text>View/Download on the Official Site</Text>
                    </Anchor>
                  </Box>
                </Box>
              </Box>
            </ProjectCard>

            <Text weight='600' size='160%'>Web Development</Text>

            <ProjectCard workInProgress title="My Website" color='#9C528B' subtitle="A marketing piece, and learning adventure">
              <Box direction={ size === 'small' ? 'column' : 'row' } pad='small' >
                <Box flex='grow' align='center' >
                  <Box width='40pt'>
                    <LogoIcon />
                  </Box>
                </Box>
                <Box direction='column' pad={{ left: 'small' }} >
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>What?</Text>
                    <Text>This website, and all other subdomains for my other projects were developed by me and for me and my projects. I'm not a professional web developer nor do I claim for it to be my area of expertise.</Text>
                  </Box>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>Why?</Text>
                    <Text>Mainly for practice. While there are certainly many platforms that exist to simply develop a portfolio when you don't specialize in it, I saw no reason to limit the growth of my skillset. It's allowed me to gain a better understanding, and a somewhat finished and evolving project for me to enjoy.</Text>
                  </Box>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>What's on here?</Text>
                    <Text>Everything from my resume, to my portfolio(what you're looking at!) to blurbs about me and a simple way to access the rest of my content! Some things may not always be accessible, as my server does go offline periodically for maintenance, but they will be back shortly after! Make sure to stop by often!</Text>
                  </Box>
                </Box>
              </Box>
            </ProjectCard>

            <Text weight='600' size='160%'>iOS Tweak Development</Text>

            <ProjectCard title="WaggleTunes Tweak" color='#183642' subtitle="Your music. Your controls. Whenever you need them.">
              <Box direction={ size === 'small' ? 'column' : 'row'} pad='small'>
                <Image fit='contain' fill='vertical' width={ size === 'small' ? '100%' : '40%' } src='http://localhost:3000/waggletunesImage.jpeg' extend='border-radius: 20px;' />
                <Box pad={ size === 'small' ? { top: 'small' } : { left: 'small' } } width={ size === 'small' ? '100%' : '60%' } direction='column'>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>What does it do?</Text>
                    <Text>WaggleTunes is a iOS tweak to create a music player universally accessible on your device without accessing any menu's or even your control center. It floats where you need it, and hides in the edges when you don't.</Text>
                  </Box>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>Where can I get it?</Text>
                    <Text>You can install WaggleTunes off of the Packix repository for free on any iOS 13/14 device.</Text>
                  </Box>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>Where is it now?</Text>
                    <Anchor color='rubyPink' href='https://repo.packix.com/package/com.halliehax.waggletunes/'>
                      <Text>Install on Packix</Text>
                    </Anchor>
                    <Anchor color='rubyPink' href='https://github.com/ha1lie/WaggleTunes'>
                      <Text>Check out the code</Text>
                    </Anchor>
                  </Box>
                </Box>
              </Box>
            </ProjectCard>

            <ProjectCard title="BattiBar Tweak" color='#E0FBFC' subtitle="Information in a color.">
              <Box direction={ size === 'small' ? 'column' : 'row'} pad='small'>
                <Image fit='contain' fill='vertical' width={ size === 'small' ? '100%' : '40%' } src='http://localhost:3000/battibarImage.png' extend='border-radius: 20px;' />
                <Box pad={ size === 'small' ? { top: 'small' } : { left: 'small' } } width={ size === 'small' ? '100%' : '60%' } direction='column'>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>What does it do?</Text>
                    <Text>BattiBar is a tweak that colorizes your battery icon on iOS 13 and 14 based off of your custom choice color gradient to quickly show you your battery percentage.</Text>
                  </Box>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>Where can I get it?</Text>
                    <Text>You can install BattiBar off of the Packix repository for free on any iOS 13/14 device.</Text>
                  </Box>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>Where is it now?</Text>
                    <Anchor color='rubyPink' href='https://repo.packix.com/package/com.halliehax.battibar/'>
                      <Text>Install on Packix</Text>
                    </Anchor>
                    <Anchor color='rubyPink' href='https://github.com/ha1lie/battibar'>
                      <Text>Check out the code</Text>
                    </Anchor>
                  </Box>
                </Box>
              </Box>
            </ProjectCard>

            <ProjectCard title="Snapify Tweak" subtitle="Unify your social experience.">
              <Box direction={ size === 'small' ? 'column' : 'row'} pad='small'>
                <Image fit='contain' fill='vertical' width={ size === 'small' ? '100%' : '40%' } src='http://localhost:3000/snapifyImage.png' extend='border-radius: 20px;' />
                <Box pad={ size === 'small' ? { top: 'small' } : { left: 'small' } } width={ size === 'small' ? '100%' : '60%' } direction='column'>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>What does it do?</Text>
                    <Text>Snapify replaces the stock iOS Message's send button with an on keyboard send-return key. This mimics the behavior of the popular messaging app Snapchat's send button. It allows for a more unified experience across your apps, replacing this behavior all throughout iOS.</Text>
                  </Box>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>Where can I get it?</Text>
                    <Text>You can install WaggleTunes off of the Packix repository for free on any iOS 13/14 device.</Text>
                  </Box>
                  <Box pad={{ bottom: 'small' }}>
                    <Text weight='600' size='120%'>Where is it now?</Text>
                    <Anchor color='rubyPink' href='https://repo.packix.com/package/com.halliehax.snapify/'>
                      <Text>Install on Packix</Text>
                    </Anchor>
                    <Anchor color='rubyPink' href='https://github.com/ha1lie/snapify'>
                      <Text>Check out the code</Text>
                    </Anchor>
                  </Box>
                </Box>
              </Box>
            </ProjectCard>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default MyProjectsPage;