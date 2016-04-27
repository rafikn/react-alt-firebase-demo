import React from 'react';
import auth from '../utils/auth.js'

import Link from 'react-router';
import Header from './Header.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import WhyBuyTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

function redirectToLogin(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function redirectToDashboard(nextState, replace) {
  if (auth.loggedIn()) {
    replace('/')
  }
}

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn : auth.loggedIn()
    };
  }

  updateAuth(loggedIn) {
    this.state = {
      loggedIn: !!loggedIn
    };
  }

  componentWillMount() {
    auth.onChange = this.updateAuth;
    auth.login();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(WhyBuyTheme)}>
        <div>
          <Header />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }

}
