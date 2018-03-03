import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import MainMenu from '../components/MainMenu';
import '../../node_modules/semantic-ui-css/semantic.min.css';
import ShortPost from "../components/ShortPost";
import '../styles/global.css';
import {createPost, createComment, changeSearchValue} from "../actions/index";

const mapStateToProps = state => {
  let searchValue = state.postReducer.searchValue;
  const posts = Object.values(state.postReducer.posts);
  let filteredPosts = [];
  let stateObject = {
    posts: [...posts],
    comments: state.commentReducer.comments,
    authors: state.authorReducer.authors
  };

  if (searchValue.length > 0) {
    filteredPosts = posts.filter((post) => {
      return (post.title.includes(searchValue) || post.description.includes(searchValue));
    });
    stateObject.posts = filteredPosts;
  }
  return stateObject;
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    createPost,
    createComment,
    changeSearchValue
  }, dispatch)
});

class App extends Component {

  render() {
    const {actions: {changeSearchValue}, posts, authors} = this.props;
    return (
      <div className="app">
        <MainMenu/>
        <form role="search" className="search-form">
          <input
            className="search-text"
            placeholder="Search..."
            autoComplete="off"
            onChange={(e) => changeSearchValue(e.target.value)}
          />
        </form>
        <div>
          {posts.map((post) => (
            <ShortPost
              objPost={post}
              authors={authors}
              key={`${post.id}`}
            />
          ))}
        </div>

      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


