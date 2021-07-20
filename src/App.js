import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, Grommet, Button, Collapsible, ResponsiveContext, Stack } from 'grommet';
import { Github, Resume, Twitter } from "grommet-icons";
import AppBar from './components/AppBar';
import HomePage from './HomePage';
import AboutMePage from './AboutMePage';
import ContactPage from './ContactPage';
import MyProjectsPage from './MyProjectsPage';
import UnknownPage from './UnknownPage';
import DiscordInfo from './components/DiscordInfo';
import TwitterStream from './components/TwitterStream';
import GithubStream from './components/GithubStream';
import DiscordAvatar from './components/DiscordAvater';
import ResumePage from './ResumePage';

const theme = {
  
  global: {
    colors: {
      background: 'eppeline',
      appBarBackgroundDark: 'charcoal',
      appBarBackgroundLight: 'offwhite',
      appBarTextColorDark: 'offwhite',
      appBarTextColorLight: 'charcoal',
      appBarTextColor: '#0000ff',
      appBarBackground: '#00ff00',
      violetPurple: '#7C77B9',
      rubyPink: '#D81159',
      polishedPine: '#439A86',
      offwhite: '#FBFEF9',
      charcoal: '#2C2C34',
      nearBlack: '#17171A',
      eppeline: '#F7F1ED',
      offlineColor: '#0A2463',
      onlineColor: '#44FFD1',
      idleColor: '#FFE66D',
      DoNotDisturbColor: '#FE4A49',
    },
    font: {
      family: 'Nunito',
      size: '18px',
      height: '20px',
    },
  },
  heading: {
    level: {
      '4': {
        color: '#ff0000',
        font: {
          weight: '200'
        }
      }
    }
  }
};

const getCommits = async (user, limit) => {
  limit = limit === undefined ? 25 : limit;
  let returnValue = [],
      request = async (path) => {
          let req = new XMLHttpRequest(),
              resp;
          await fetch(`https://api.github.com${path}`).then(async (res) => {
              resp = await res.json();
          });
          return resp;
      };
  await Promise.all(
      (
          await request(`/users/${user}/repos`)
      ).map(async (repo) => {
          Promise.all(
              (await request(`/repos/${repo.full_name}/commits`)).map(
                  async (commit) => {
                      let commitProto = {
                          url: undefined,
                          comments: undefined,
                          title: undefined,
                          repo: {
                              url: undefined,
                              name: undefined,
                          },
                          date: {
                              ms: undefined,
                              string: undefined,
                          },
                          author: {
                              username: undefined,
                              avatarURL: undefined,
                              url: undefined,
                          },
                      };

                      if (commit.committer.login !== user) return;
                      let date = new Date(commit.commit.committer.date);
                      commitProto.url = commit.html_url;
                      commitProto.comments = commit.commit.comment_count;
                      commitProto.title = commit.commit.message.split(/\r?\n/)[0] ?? '';
                      commitProto.repo.url = repo.html_url;
                      commitProto.repo.name = repo.name;
                      commitProto.date.ms = date.getTime();
                      commitProto.date.string = date.toUTCString();
                      commitProto.author.avatarURL = commit.committer.avatar_url;
                      commitProto.author.username = commit.committer.login;
                      commitProto.author.url = commit.committer.html_url;
                      returnValue.push(commitProto);
                  }
              )
          );
      })
  );
  return returnValue.sort((a, b) => b.date.ms - a.date.ms).slice(0, limit);
};

async function awaitDiscordFetch() {
  let response = await fetch("https://api.becketto.dev/discordStatus?id=783088512139788298");
  let data = await response.json();
  return data;
}

class App extends Component {

  setColorModeToDark(isDark) {
    if (isDark) {
      document.querySelector('meta[name="theme-color"]').setAttribute("content", '#2C2C34');
      theme.global.colors.appBarBackground = 'appBarBackgroundDark';
      theme.global.colors.appBarTextColor = 'appBarTextColorDark';
      theme.global.colors.background = 'nearBlack';
    } else {
      document.querySelector('meta[name="theme-color"]').setAttribute("content", '#FBFEF9');
      theme.global.colors.appBarBackground = 'appBarBackgroundLight';
      theme.global.colors.appBarTextColor = 'appBarTextColorLight';
      theme.global.colors.background = 'eppeline';
    }
  }

  constructor(props) {
    super(props);

    // const mode = useLightSwitch();

    this.setColorModeToDark(true);

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
    let discordData = await awaitDiscordFetch();
    this.setState({ statusSaying: discordData.activity, statusColor: (discordData.status.split(" ").join("") + "Color") });
  }

  render() {
    return (
      <Grommet full theme={theme} themeMode='dark'>
        <Router>
          <ResponsiveContext.Consumer>
            { size => (
              <Box direction='column'>
                <AppBar commits={ this.state.commits } statusSaying={ this.state.statusSaying } statusColor={ this.state.statusColor } />
                <Box direction='row' margin={{ top: '45pt'}}>
                  { (size !== 'small') ? (
                    <Box direction='row' style={{ position: 'fixed' }} >
                      <Collapsible direction='horizontal' open={this.state.showSidebar !== 'empty'} >
                        <Box flex elevation='none' background='appBarBackground' width='250px' pad='small' margin='small' round='small' style={{ overflowY: 'scroll', maxHeight: '90vh' }} >
                          { (this.state.showSidebar === 'discord') ? (
                            <DiscordInfo statusColor={ this.state.statusColor } />
                          ) : ( <Box>
                            { (this.state.showSidebar === 'github') ? (
                              <GithubStream commits={ this.state.commits } />
                            ) : ( <TwitterStream /> )}
                          </Box>) }
                        </Box>
                      </Collapsible>
                      <Box height='140pt' margin='small' elevation='none' direction='column' background='appBarBackground' pad='small' round='small' gap='small' align='center' justify='between' >
                        <Button plain icon={ <DiscordAvatar statusColor={ this.state.statusColor } /> } onClick={ () => { this.setState({ showSidebar: ((this.state.showSidebar === 'discord') ? 'empty' : 'discord') }) } } />
                        <Button plain icon={ <Github color='appBarTextColor' size='36px' /> } onClick={ () => { this.setState({ showSidebar: ((this.state.showSidebar === 'github') ? 'empty' : 'github') }) } } />
                        <Button plain icon={ <Twitter color='appBarTextColor' size='36px' /> } onClick={ () => { this.setState({ showSidebar: ((this.state.showSidebar === 'twitter') ? 'empty' : 'twitter') }) } } />
                      </Box>
                    </Box>
                  ) : undefined }
                  <Box flex='grow' margin={{left: ((size !== 'small') ? ( (this.state.showSidebar !== 'empty' ) ? '370px' : '100px') : '0px')}}>
                    <Switch>
                      <Route path='/aboutMe/resume' exact>
                        <ResumePage />
                      </Route>
                      <Route path='/aboutMe' exact>
                        <AboutMePage />
                      </Route>
                      <Route path='/contact' exact>
                        <ContactPage />
                      </Route>
                      <Route path='/myProjects' exact>
                        <MyProjectsPage />
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
              </Box>
            )}
          </ResponsiveContext.Consumer>
        </Router>
      </Grommet>
    );
  }
}

export default App;