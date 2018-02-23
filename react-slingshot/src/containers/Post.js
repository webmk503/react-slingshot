import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import '../../node_modules/semantic-ui-css/semantic.min.css';
import Post from '../components/Post';
import '../styles/global.css';
import {createPost, createComment, createAuthor} from "../actions/index";
import MainMenu from "../components/MainMenu";

const mapStateToProps = state => {
  console.log('state', state);
  return {
    posts: state.postReducer.posts,
    comments: state.commentReducer.comments,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    createComment,
  }, dispatch)
});

class PostContainer extends Component {

  render() {
    const {actions: {createComment, createAuthor}, comments, posts} = this.props;
    const id = this.props.match.params.id;
    const post = posts[id];
    if (!post) {
      return <div>This page doesn`t exist</div>
    }
    return (
      <div>
        <MainMenu/>
        <div>
          <Post
            key={Math.random()}
            objPost={posts[id]}
            objComments={comments}
            addComment={createComment}
          />
        </div>
      </div>
    );
  }
}

PostContainer.propTypes = {
  posts: PropTypes.object,
  actions: PropTypes.object,
  comments: PropTypes.object,
  createComment: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);


