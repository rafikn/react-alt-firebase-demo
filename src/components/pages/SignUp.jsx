import React from 'react'
import withRouter from '../../utils/withRouter.js'

import {TextField,RaisedButton, Paper, FontIcon, Divider } from 'material-ui';


const style = {
  height: '60%',
  width: '40%',
  margin: '5em 30% 5em 30%',
  textAlign: 'center',
  display: 'inline-block',
}

const buttonStyles = {
  margin: 5,
  width: '70%',
  maxWidth: 250
}
const iconStyles = {
  marginRight: 24,
};
const inputStyle = {
  marginLeft: 20
}

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }


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
