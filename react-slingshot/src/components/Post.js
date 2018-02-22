import React, {Component} from 'react';
import {Form, Container, Header,} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import '../styles/global.css';
import CommentsBlock from "./CommentsBlock";
import '../styles/global.css';

class Post extends Component {

  render() {
    const {addComment, objPost, objComments} = this.props;

    return (
      <Form>
        <Container text>
          <Header as='h2'>Title: {objPost.title}</Header>
          <h6>Date: {objPost.date}</h6>
          <h6>Author: {objPost.author}</h6>
          <p className="shortDescr">{objPost.description}</p>
          <br/>
        </Container>
        <Header as='h3' dividing>Comments</Header>

        {objPost.comments.map((commentId) => (
          <CommentsBlock
            comment={objComments[commentId]}
            key={commentId}
          />
        ))}
        <Comment createComment={addComment} post={objPost}/>
      </Form>
    );
  }
}

Post.propTypes = {
  addComment: PropTypes.func,
  objPosts: PropTypes.object,
  objComments: PropTypes.object,
};

export default Post;
