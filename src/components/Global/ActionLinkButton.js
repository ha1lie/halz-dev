import { Component } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Box, Text, Button } from 'grommet';


class ActionLinkButton extends Component {
  render() {
    return(
      <Button plain href={ this.props.link } onClick={ this.props.action } label={
        <Box background={ this.props.buttonColor ?? 'rubyPink' } height='50pt' pad={{ horizontal: 'medium' }} round='medium' align='center' justify='between' direction={ this.props.toRight ? 'row' : 'row-reverse' } >
          <Text weight='600' color={ this.props.buttonTextColor ?? '#444444' } >{ this.props.buttonTitle }</Text>
          {( this.props.toRight ) ? (
            <FaChevronRight color={ this.props.buttonTextColor ?? '#444444' } />
          ) : (
            <FaChevronLeft color={ this.props.buttonTextColor ?? '#444444' } />
          )}
        </Box>
      } />
    );
  }
}

export default ActionLinkButton;