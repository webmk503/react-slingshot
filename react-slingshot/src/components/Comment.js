import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../styles/global.css';
import {updateAuthor, updateComments} from "../utils/localStorage";
import DateOptions from '../HOC/DateOptions';

class Comment extends Component {

  commentInput = '';

  state = {
    commentsAuthor: '',
    comment: '',
  };

  handleEditText = (field) => (e) => {
    this.setState({
      [field]: e.target.value,
    });
  };

    handleCreatingCommentAndAuthor = () => {
      const {post, authors, options} = this.props;
      if (this.state.commentsAuthor.length > 0
        && authors[post.authorId].name !== this.state.commentsAuthor) {
      const newAuthor = {
        id: Math.random(),
        name: this.state.commentsAuthor,
        date: '',
      };
      this.props.createAuthor(newAuthor);
      const newComment = {
        id: Math.random(),
        authorId: newAuthor.id,
        comment: this.state.comment,
        date: '',
        postId: post.id
      };
      this.props.createComment(newComment);
      //updateComments(newComment);
      //updateAuthor(newAuthor);
      } else {
      const newComment = {
        id: Math.random(),
        authorId: authors[post.authorId].id,
        comment: this.state.comment,
        date: new Date().toLocaleString('ru', options),
        postId: post.id
      };
      this.props.createComment(newComment);
      //updateComments(newComment);
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

export default DateOptions(Comment);
