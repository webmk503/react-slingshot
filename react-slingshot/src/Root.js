import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router-dom";
import CreatedPost from "./containers/CreatedPost";
import ShortPost from "./containers/ShortPost";
import PostContainer from "./containers/Post";
import NotFoundPage from "./components/PageNotFound";

export default class Root extends Component {
  render() {
      const { history, store} = this.props;
          return (
              <Provider store={store}>
                  <ConnectedRouter history={history}>
                      <Switch>
                          <Route exact path="/" component={ShortPost} />
                          <Route path="/create" component={CreatedPost} />
                          <Route path="/post/:id" component={PostContainer} />
                          <Route component={NotFoundPage} />
                      </Switch>
                  </ConnectedRouter>
              </Provider>
        );
  }
}

Root.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object,
};
