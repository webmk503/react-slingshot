import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import '../../node_modules/semantic-ui-css/semantic.min.css';
import Post from '../components/Post';
import '../styles/global.css';
import {createPost, createComment, createAuthor, saveAuthor} from "../actions/index";
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
    createComment,
    saveAuthor,
    createAuthor
  }, dispatch)
});

class PostContainer extends Component {

  render() {
    const {actions: {createComment, saveAuthor, createAuthor}, comments, posts, authors} = this.props;
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
            objPost={post}
            authors={authors}
            objComments={comments}
            addComment={createComment}
            createAuthor={createAuthor}
            saveAuthor={saveAuthor}
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


