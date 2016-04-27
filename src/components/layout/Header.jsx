import React from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import Toolbar from 'material-ui/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar';
import ToolbarSeparator from 'material-ui/Toolbar';
import ToolbarTitle from 'material-ui/Toolbar';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';

import { Link } from 'react-router';


const iconStyles = {
  margin: '16 5 15 5'
};
const searchStyles = {
  margin: 4
};
const buttonStyles = {
  padding: '10 0 0 0',
  width: 250,
  textTransform: 'none'
};

import AuthStore from '../../stores/AuthStore';
import AuthActions from '../../actions/AuthAction';
import connectToStores from '../../utils/connectToStores';

@connectToStores
export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      user: null
    }

  }

  static getStores() {
    return [AuthStore];
  }

  static getPropsFromStores(props) {
    console.log("getting props from store", AuthStore.getState());

    return AuthStore.getState();
  }

  handleUpdateInput = (t) => {
    this.setState({
      dataSource: [t, t + t, t + t + t],
    });
  };


  render() {
    return (

        <Toolbar>
          <ToolbarGroup float="left">
            <FlatButton children={
              <img src="/public/img/logo-white.png" style={{ width: 115}} />
              }/>
          </ToolbarGroup>

          <ToolbarGroup float="right">
            <FontIcon className="material-icons" style={iconStyles}>search</FontIcon>

            <AutoComplete
               hintText="Browse Items"
               dataSource={this.state.dataSource}
               onUpdateInput={this.handleUpdateInput}
               fullWidth={true}
               underlineShow={false}
               style={searchStyles}
             />

            <ToolbarSeparator />
              <FlatButton
                containerElement={<Link to="/new/item" />}
                label="List an Item"
                primary={true}
                fullWidth={true}

                style={buttonStyles}
              />

              <FlatButton
                containerElement={<Link to="/faq" />}
                label="FAQ"
                primary={true}
                style={buttonStyles}
              />

              <FlatButton
                containerElement={<Link to="/login" />}
                label="Sign In"
                primary={true}
                style={buttonStyles}
              />

            <RaisedButton
              label="Sign Up"
              primary={true} style={{
                margin: '10 10 10 30',
              }}
              containerElement={<Link to="/signup" />}
            />
          </ToolbarGroup>
        </Toolbar>
    );
  }
};
