import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import MainMenu from '../components/MainMenu';
import '../../node_modules/semantic-ui-css/semantic.min.css';
import ShortPost from "../components/ShortPost";
import '../styles/global.css';
import {createPost, createComment} from "../actions/index";

const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts,
    comments: state.commentReducer.comments,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    createPost,
    createComment
  }, dispatch)
});

class App extends Component {

  render() {
    const {posts} = this.props;
    console.log('from shortpost',posts);
    return (
      <div className="app">
        <MainMenu/>
        <div>
          {Object.values(posts).map((post) => (
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


