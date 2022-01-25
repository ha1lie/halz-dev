import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Box, Anchor, Grommet, Text, ResponsiveContext } from 'grommet'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import AppBar from './components/Global/AppBar'
import HomePage from './Pages/HomePage'
import AboutMePage from './Pages/AboutMe/AboutMePage'
import ContactPage from './Pages/ContactPage'
import MyProjectsPage from './Pages/Projects/MyProjectsPage'
import UnknownPage from './Pages/UnknownPage'
import ResumePage from './Pages/AboutMe/ResumePage'
import theme from './theme'
import getCommits from './GithubHelper'

async function fetchDiscordStatus() {
  let response = await fetch("https://api.becketto.dev/getDiscordStatus?userId=783088512139788298");
  return response.json();;
}

class App extends Component {

  constructor(props) {
    super(props);

    //state stuff 
    this.state = {
      showSidebar: 'empty',
      statusSaying: '',
      statusColor: '#ffffff00',
      commits: []
    };
  }

  async componentDidMount() {
    //Download github information in the background in case it's needed by the user
    let githubData = await getCommits('ha1lie', 20);
    this.setState({ commits: githubData });

    //Download discord information for the site user
    let discordData = await fetchDiscordStatus();
    let saying = ""
    if (discordData.activity.type !== undefined && discordData.activity.name !== undefined) {
      saying = discordData.activity.type + " " + discordData.activity.name 
    } else if (discordData.activity.custom !== undefined) {
      saying = discordData.activity.custom
    }
    
    this.setState({ 
      statusSaying: saying, 
      statusColor: (discordData.status.split(" ").join("") + "Color") 
    });
  }

  render() {
    return (
      <Grommet flex='grow' fill='vertical' background='purple' theme={theme} >
        <Router flex='grow' fill={true}>
          <ResponsiveContext.Consumer>
            { size => (
              <Box direction='column' flex='grow' height={{ min: '100vh' }} fill={true} background='nearBlack'>
                <AppBar commits={ this.state.commits } statusSaying={ this.state.statusSaying } statusColor={ this.state.statusColor } />
                <Box direction='row' flex='grow' fill={true} margin={{ top: '45pt'}}>
                  <Box flex='grow' fill={true} direction='column'>
                    <Switch>
                      <Route path='/resume' exact>
                        <ResumePage />
                      </Route>
                      <Route path='/aboutme' exact>
                        <AboutMePage />
                      </Route>
                      <Route path='/contact' exact>
                        <ContactPage />
                      </Route>
                      <Route path='/projects' exact>
                        <MyProjectsPage padding={{left: '60pt'}} />
                      </Route>
                      <Route path='/' exact>
                        <HomePage />
                      </Route>
                      <Route path='/'>
                        <UnknownPage />
                      </Route>
                    </Switch>
                  </Box>
                </Box>
                { size !== 'small' ? (
                  <Box direction='row' justify='center' align='center' gap='medium' pad={{ bottom: 'medium', top: 'small'}}>
                    <Anchor target='_blank' color='eppeline' href='https://twitter.com/h4l1ie' label={
                      <Box direction='row' align='center' gap='xsmall' >
                        <FaTwitter size='20pt' />
                        <Text>@h4l1ie</Text>
                      </Box>
                    } />
                    <Anchor target='_blank' color='eppeline' href='https://github.com/ha1lie' label={
                      <Box align='center' direction='row' gap='xsmall' >
                        <FaGithub size='20pt' />
                        <Text>@ha1lie</Text>
                      </Box>
                    } />
                  </Box>
                ) : ( <Box></Box> ) }
              </Box>
            )}
          </ResponsiveContext.Consumer>
        </Router>
      </Grommet>
    );
  }
}

export default App;