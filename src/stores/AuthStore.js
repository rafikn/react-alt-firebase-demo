import alt from '../alt';
import AuthAction from '../actions/AuthAction';
import { decorate, bind, datasource } from 'alt-utils/lib/decorators';

@decorate(alt)
class AuthStore {

  constructor() {
    this.state = {
      user: null,
      error: null
    };
  }

  @bind(AuthAction.loginWithEmail)
  loginWithEmail(user) {
    this.setState({user: user});
  }

  @bind(AuthAction.loginWithGoogle)
  loginWithGoogle(user) {
    this.setState({user: user});
  }


  @bind(AuthAction.loginWithFacebook)
  loginWithFacebook(user) {
    console.log("setting new state");

    this.setState({user: user});
  }

}

export default alt.createStore(AuthStore);
