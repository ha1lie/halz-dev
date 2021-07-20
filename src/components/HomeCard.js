import { Component } from "react";
import { Card, Box, Paragraph, Heading, ResponsiveContext } from 'grommet';


class HomeCard extends Component {
    render() {
      return(
        <ResponsiveContext.Consumer>
        { size => (
          <Card flex='grow' style={{ minHeight: '20px' }} elevation='none' pad='medium' margin='medium' background={ this.props.color ?? 'polishedPine' }>
            <Box flex='grow' direction={ this.props.imageSide === 'right' ? 'row-reverse' : 'row'} justify='start' >
              { (size === 'small') ? (
                <Box width='12px'>
                  <Box flex='grow' width='12pt' background='#00000020' round='6pt' />
                </Box>
              ) : (
                <Box width='200px'>
                  <Box flex='grow' round='medium' width='small' responsive={false} background={ this.props.backgroundString ?? "url('/frosting.jpg')" } />
                </Box>
              )}
              <Box margin='medium' direction='column' justify='between' align={ this.props.imageSide === 'right' ? 'end' : 'start'}>
                <Box align={ this.props.imageSide === 'right' ? 'end' : 'start'}>
                  <Heading color={ this.props.textColor ?? '#444444' } size='xlarge' weight='700' margin='none'>{ this.props.topTitle ?? 'Hello,' }</Heading>
                  <Heading color={ this.props.textColor ?? '#444444' } size='large' margin='none'>{ this.props.bottomTitle ?? "I'm Hallie." }</Heading>
                </Box>
                <Paragraph color={ this.props.textColor ?? '#444444' } textAlign={ this.props.imageSide === 'right' ? 'end' : 'start'} margin={{vertical: 'none'}} padding={{vertical: 'none'}}>{ this.props.bodyText ?? 'she/her. programmer. black belt. chef. photographer. painter. teacher. friend. designer. cyclist. student. neurodivergent. artist. hostess. artist. creative.' }</Paragraph>
              </Box>
              <Box flex='grow' />
            </Box>
          </Card>
        )}
      </ResponsiveContext.Consumer>
      );
    }
  }

  export default HomeCard;