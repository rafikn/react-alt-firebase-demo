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

  @bind(AuthAction.login)
  login(user) {
    console.log("hello")
    this.setState({user: user});
  }

}

export default alt.createStore(AuthStore);
