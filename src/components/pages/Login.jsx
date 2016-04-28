import React from 'react'
import withRouter from './../../utils/withRouter'
import AuthStore from '../../stores/AuthStore';
import AuthActions from '../../actions/AuthAction';
import {TextField,RaisedButton, Paper, FontIcon, Divider } from 'material-ui';

import {Row, Col} from 'react-flexbox-grid/lib';

class Login extends React.Component {

  constructor(props) {
    super(props);
  }


  handleFacebook() {
    AuthActions.loginWithFacebook();
  }

  handleGoogle() {
    AuthActions.loginWithGoogle();
  }

  render() {
    const paperStyles = {
      marginTop: '20%',
      padding: 20,
      minWidth: 400
    };

    const buttonStyles = {
      margin: 12,
      width: '50%'
    };

    const iconStyles = {

    };

    return (


        <Row center="xs">
          <Col xs={6}>
            <Paper zDepth={1} style={paperStyles}>
                <form>
                  <img src="/public/img/logo-black.png" style={{ width: 300}}/>
                  <br/>
                  <TextField floatingLabelText="Username" /><br/>
                  <TextField floatingLabelText="Password" type="password" />
                  <br/>
                  <br/>
                  <RaisedButton
                    label="Sign In"
                    primary={true}
                    style={buttonStyles} />
                  <br/>
                  <RaisedButton
                    label="Sign In with Facebook"
                    onClick={this.handleFacebook.bind(this)}
                    primary={true} style={buttonStyles}
                    icon={<FontIcon style={iconStyles} className="fa fa-facebook-official"/>} />
                  <br/>
                  <RaisedButton
                    label="Sign In with Google"
                    onClick={this.handleGoogle.bind(this)}
                    primary={true}
                    style={buttonStyles}
                    icon={<FontIcon style={iconStyles} className="fa fa-google"/>} />
                  <br/>
                </form>
            </Paper>
          </Col>
        </Row>

    );
  }

}


export default withRouter(Login)
