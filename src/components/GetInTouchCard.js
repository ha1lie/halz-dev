import { Component } from "react";
import { Layer, Box, Button, Text, TextInput, TextArea } from 'grommet';
import { Close } from 'grommet-icons';
import ActionLinkButton from "./Global/ActionLinkButton";

class GetInTouchCard extends Component {
  render() {
    return(
      <Layer onEsc={ this.props.getOut } onClickOutside={ this.props.getOut } >
        <Box direction ='column' width='large' pad='medium' gap='medium' round='medium' background='polishedPine' >
          <Box flex='grow' direction='row' align='center' justify='between' >
            <Button onClick={ this.props.getOut } icon={ <Close color='#ffffff' /> } />
            <Text size='18pt' weight='600' color='white'>Let's get in touch!</Text>
          </Box>
          <Box direction='row' gap='medium'> {/* This is the box containing the actual form */}
            <Box direction='column' flex='grow' gap='medium'>
              <Box background='#00000010' round='small' >
                <TextInput onClick={ () => { console.log("UPDATING THE ABOUT FIELD") } } onClickOutside={ () => { console.log("GO AWAY FOCUS") } } plain placeholder='What About?' />
              </Box>
              <Box flex='grow' background='#00000010' round='small' >
                <TextArea plain fill placeholder='Tell me a bit about it!' />
              </Box>
            </Box>
            <Box flex='grow' gap='medium' >
              <Box background='#00000010' round='small' >
                <TextInput plain placeholder='Your Name' />
              </Box>
              <Box background='#00000010' round='small' >
                <TextInput plain placeholder='Your Company' />
              </Box>
              <Box background='#00000010' round='small' >
                <TextInput plain placeholder='Your Email' />
              </Box>
              <Box background='#00000010' round='small' >
                <TextInput plain placeholder='Your Phone Number' />
              </Box>
              <ActionLinkButton buttonTitle='Send it my way!' buttonTextColor='white' toRight action={ () => { console.log("Send the request"); } } />
            </Box>
          </Box>
        </Box>
      </Layer>
    );
  }
}

export default GetInTouchCard;