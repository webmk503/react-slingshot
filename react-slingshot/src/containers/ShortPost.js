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
  if (searchValue.length > 0) {
    filteredPosts = posts.filter((post) => {
      if (post.title.includes(searchValue) || post.description.includes(searchValue)) {
        return filteredPosts.push(post);
      }
    });
    return {
      filteredPosts: filteredPosts,
      comments: state.commentReducer.comments,
    };
  }
  return {
    filteredPosts: [...posts],
    comments: state.commentReducer.comments,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    createPost,
    createComment,
    changeSearchValue
  }, dispatch)
});

class App extends Component {

  input = '';

  render() {
    const {actions: {changeSearchValue}, filteredPosts, searchValue} = this.props;
    return (
      <div className="app">
        <MainMenu/>
        <form role="search" className="search-form">
          <input
            type="search"
            name="q"
            className="search-text"
            placeholder="Search..."
            autoComplete="off"
            ref={(input) => this.input = input}
            onChange={() => changeSearchValue(this.input.value)}
          />
        </form>
        <div>
          {filteredPosts.map((post) => (
            <ShortPost
              objPost={post}
              key={`${post.id}`}
            />
          ))}
        </div>

      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


