import React, {Component} from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {connect, Provider} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router-dom";
import {bindActionCreators} from "redux";

import CreatedPost from "./containers/CreatedPost";
import ShortPost from "./containers/ShortPost";
import PostContainer from "./containers/Post";
import NotFoundPage from "./components/PageNotFound";
import {getAuthors, getComments, getPosts} from "./utils/localStorage";
import {getLocalStorage} from "./actions/index";

const mapStateToProps = state => {
  const posts = getPosts();
  const comments = getComments();
  const authors = getAuthors();
  return {
    posts: posts,
    comments: comments,
    authors: authors
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getLocalStorage,
  }, dispatch)
});

class Root extends Component {

  componentWillMount() {
    const { posts, comments, authors } = this.props;
   this.props.actions.getLocalStorage(posts, authors, comments);

  }

  render() {
    const {history, store} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={ShortPost}/>
            <Route path="/create" component={CreatedPost}/>
            <Route path="/post/:id" component={PostContainer}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Root);

Root.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object,
};
