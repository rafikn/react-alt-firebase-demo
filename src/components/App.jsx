import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import WhyBuyTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import Toolbar from 'material-ui/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar';
import ToolbarSeparator from 'material-ui/Toolbar';
import ToolbarTitle from 'material-ui/Toolbar';

const ToolbarExamplesSimple = () => (
  <Toolbar>
    <ToolbarGroup float="right">
    </ToolbarGroup>

    <ToolbarGroup float="right">
      <ToolbarSeparator />
      <RaisedButton label="Sign Up" primary={true} />
    </ToolbarGroup>
  </Toolbar>
);

export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(WhyBuyTheme)}>
          <ToolbarExamplesSimple />
      </MuiThemeProvider>
    );
  }
};
