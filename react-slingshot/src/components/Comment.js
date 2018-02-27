import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../styles/global.css';
import {updateComments} from "../utils/localStorage";

class Comment extends Component {

  commentInput = '';

  state = {
    commentsAuthor: '',
    comment: '',
  };

  options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  handleEditText = (field) => (e) => {
    this.setState({
      [field]: e.target.value,
    });
  };

  handleCreatingCommentAndAuthor = () => {
    const {authors, post} = this.props;
    if (this.state.commentsAuthor.length > 0 && authors[post.authorId].name !== this.state.commentsAuthor) {
      const newAuthor = {
        id: Math.random(),
        name: this.state.commentsAuthor
      };
      this.props.createAuthor(
        newAuthor
      );
      const newComment = {
        id: Math.random(),
        authorId: newAuthor.id,
        comment: this.state.comment,
        date: new Date().toLocaleString('ru', this.options),
        postId: post.id
      };
      this.props.createComment(
        newComment
      );
      updateComments(newComment);
    } else {
      const newComment = {
        id: Math.random(),
        authorId: authors[post.authorId].id,
        comment: this.state.comment,
        date: new Date().toLocaleString('ru', this.options),
        postId: post.id
      };
      this.props.createComment(
        newComment,
      );
      updateComments(newComment);
    }
    this.setState({
      commentsAuthor: '',
      comment: ''
    });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Name'
          value={this.state.commentsAuthor}
          onChange={this.handleEditText('commentsAuthor')}
          ref={(input) => this.commentInput = input}
        />
        <Form.TextArea
          autoHeight
          placeholder='Enter a commentary'
          value={this.state.comment}
          onChange={this.handleEditText('comment')}
        />
        <Button
          content='Add Reply'
          onClick={this.handleCreatingCommentAndAuthor}
          labelPosition='left'
          icon='edit'
          primary
        />
      </div>
    );
  }
}

Comment.propTypes = {
  createComment: PropTypes.func,
};

export default Comment;
