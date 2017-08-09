import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import 'grommet/grommet.min.css';
import Auth from './containers/Auth';
import DevTools from './containers/DevTools';
import Home from './containers/Home';
import Layout from './containers/Layout';
import PrivateRoute from './containers/PrivateRoute';
import Wallet from './containers/Wallet';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/wallet/:id" component={Wallet} />
          <Route path="/login" component={Auth} />
          <Route path="/signup" component={Auth} />
          <Redirect to="/" />
        </Switch>
        {DevTools.enabled && <DevTools />}
      </Layout>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};

export default App;