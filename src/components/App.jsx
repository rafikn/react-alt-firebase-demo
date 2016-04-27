import React from 'react';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import Layout from './layout/Layout.jsx';
import FAQ from './pages/FAQ.jsx';
import Login from './pages/Login.jsx';
import NewItem from './pages/NewItem.jsx';
import SignUp from './pages/SignUp.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <Route path="/new/item" component={NewItem} />
            <Route path="/login" component={Login} />
            <Route path="/faq" component={FAQ} />
            <Route path="/signup" component={SignUp} />
          </Route>
        </Router>
    );
  }
}

export default App;
