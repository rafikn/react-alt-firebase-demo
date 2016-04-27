import React from 'react';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  margin: '5em'
}

const inputStyle = {
  marginLeft: 20
}

export default class NewItem extends React.Component {

  render() {
    return (
      <Paper style={style} zDepth={1}>
        <TextField hintText="First name" style={inputStyle} underlineShow={false} />
        <Divider />
        <TextField hintText="Middle name" style={inputStyle} underlineShow={false} />
        <Divider />
        <TextField hintText="Last name" style={inputStyle} underlineShow={false} />
        <Divider />
        <TextField hintText="Email address" style={inputStyle} underlineShow={false} />
        <Divider />
      </Paper>
    );
  }
}
