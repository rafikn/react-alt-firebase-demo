import React from 'react'
import withRouter from './../../utils/withRouter'
import AuthStore from '../../stores/AuthStore';
import AuthActions from '../../actions/AuthAction';

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


class Login extends React.Component {


  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    event.preventDefault()

  }

  handleFacebook() {
    AuthActions.loginWithFacebook();
  }

  handleGoogle() {
    AuthActions.loginWithGoogle();
  }

  render() {
    return (
      <form>
        <Paper style={style} zDepth={1}>
          <img src="/public/img/logo-black.png" style={{ width: 300}}/>
          <br/>
          <TextField floatingLabelText="Username" /><br/>
          <TextField floatingLabelText="Password" type="password" />
          <br/>
          <br/>
          <RaisedButton label="Sign In" primary={true}  style={buttonStyles} /><br/>
          <RaisedButton onClick={this.handleFacebook.bind(this)} label="Sign In with Facebook" primary={true} style={buttonStyles} icon={<FontIcon style={iconStyles} className="fa fa-facebook-official"/>} /><br/>
          <RaisedButton onClick={this.handleGoogle.bind(this)} primary={true} style={buttonStyles} icon={<FontIcon style={iconStyles}  className="fa fa-google"/>} /><br/>
        </Paper>


      </form>
    );
  }

}


export default withRouter(Login)
