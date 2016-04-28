import React from 'react';
import { Link } from 'react-router';

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
import Paper from 'material-ui/Paper';

import {Row, Col} from 'react-flexbox-grid/lib';

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

    const iconStyles = {
      marginTop: 13
    };
    const searchStyles = {
      minWidth: 100
    };
    const linkStyles = {
      margin: 10
    };
    const buttonStyles = {
      marginTop: 10,
      minWidth: 120
    };


    return (
      <Row>
        <Col xs>
          <Paper zDepth={1}>
          <Toolbar style={{width: '100%'}}>
                <ToolbarGroup float="left">
                  <FlatButton children={
                      <img src="/public/img/logo-white.png" style={{ width: 115}} />
                  }/>
                </ToolbarGroup>
                <ToolbarGroup>
                  <FontIcon className="material-icons" style={iconStyles}>search</FontIcon>
                  <AutoComplete
                     hintText="Browse Items"
                     dataSource={this.state.dataSource}
                     onUpdateInput={this.handleUpdateInput}
                     fullWidth={true}
                     underlineShow={false}
                     style={searchStyles}
                   />
                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton
                      containerElement={<Link to="/faq" />}
                      label="FAQ"
                      primary={true}
                      fullWidth={true}

                      style={linkStyles}
                    />

                    <FlatButton
                      containerElement={<Link to="/login" />}
                      label="Sign In"
                      primary={true}
                      style={linkStyles}
                    />

                    <FlatButton
                      containerElement={<Link to="/signup" />}
                      label="Sign Up"
                      primary={true}
                      style={linkStyles}
                    />

                  <RaisedButton
                    label="List an Item"
                    primary={true} style={buttonStyles}
                    containerElement={<Link to="/new/item"/>}
                  />
                </ToolbarGroup>

          </Toolbar>
        </Paper>
        </Col>
      </Row>
    );
  }
};
