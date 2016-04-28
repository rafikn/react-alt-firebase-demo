import React from 'react';
import auth from '../utils/auth.js'

import Link from 'react-router';
import Header from './Header.jsx';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import WhyBuyTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

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
    const style = {
      width: 800
    };

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(WhyBuyTheme)}>
        <Grid fluid>
          <Header />
          {this.props.children}
        </Grid>
      </MuiThemeProvider>
    );
  }

}
