import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import '../../node_modules/semantic-ui-css/semantic.min.css';
import CreatePost from '../components/CreatePost';
import {createPost, createComment, createAuthor} from "../actions/index";
import '../styles/global.css';
import MainMenu from "../components/MainMenu";

const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts,
    comments: state.commentReducer.comments,
    authors: state.authorReducer.authors,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
      createPost,
      createComment,
      createAuthor,
    },
    dispatch)
});

class CreatedPost extends Component {

  render() {
    const {actions: {createPost, createAuthor}, posts, authors, comments} = this.props;
    return (
      <div className="posts">
        <MainMenu/>
        <CreatePost
          key={posts.id}
          objPosts={posts}
          authors={authors}
          comments={comments}
          createArticle={createPost}
          createAuthor={createAuthor}
        />
      </div>
    );
  }
}

CreatedPost.propTypes = {
  posts: PropTypes.object,
  actions: PropTypes.object,
  createPost: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatedPost);
