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
    const {authors, post} = this.props;
    console.log(post);

    if (this.state.commentsAuthor.length > 0 && authors[post.authorId].name !== this.state.commentsAuthor) {
      const newAuthor = {
        id: Math.random(),
        name: this.state.commentsAuthor
      };
      this.props.createAuthor(
       newAuthor
      );
      this.props.createComment(
        newAuthor.id,
        this.state.comment,
        new Date().toLocaleString('ru', this.options),
        post.id
      );
    } else {
      this.props.createComment(
        authors[post.authorId].id,
        this.state.comment,
        new Date().toLocaleString('ru', this.options),
        post.id,
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
