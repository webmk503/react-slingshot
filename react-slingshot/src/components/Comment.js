import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../styles/global.css';

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
    console.log(this.props);
    if (this.state.commentsAuthor.length > 0) {
      this.props.createComment(
        this.state.commentsAuthor,
        this.state.comment,
        new Date().toLocaleString('ru', this.options),
        this.props.post.id
      );
    } else {
      this.props.createComment(
        this.props.post.author,
        this.state.comment,
        new Date().toLocaleString('ru', this.options),
        this.props.post.id
      );
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
