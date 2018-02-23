import React, {Component} from 'react';
import {Form, Container, Header,} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import '../styles/global.css';
import CommentsBlock from "./CommentsBlock";
import '../styles/global.css';

class Post extends Component {

  input = '';
  state = {
    editingAuthor: false,
    authorName: this.props.objPost.author,

  };

  handleSaveAuthor = () => {
    const {saveAuthor, objPost, objComments} = this.props;

    if (this.state.editingAuthor) {
      this.setState({
        authorName: objPost.author
      });
      Object.values(objComments).map((comment) => {
        saveAuthor(objPost.id, this.state.authorName, comment.id);
        console.log('commentId', comment)
      })
    }
    this.setState({
      editingAuthor: !this.state.editingAuthor,
    });
  };

  handleEditName = () => {
    this.setState({
      authorName: this.input.value
    });
  };

  renderEditOrSave = () => {
    const {objPost} = this.props;
    if (this.state.editingAuthor) {
      return (
        <h6>
          <input
            type="text"
            value={this.state.authorName}
            onChange={this.handleEditName}
            ref={(input) => {
              this.input = input
            }}
          />
          <button onClick={this.handleSaveAuthor}>Save</button>
        </h6>
      );
    }
    return (
      <h6>
        Author: {objPost.author}
        <button onClick={this.handleSaveAuthor}>
          Edit Author
        </button>
      </h6>
    );
  };

  render() {
    const {addComment, objPost, objComments} = this.props;
    return (
      <Form>
        <Container text>
          <Header as='h2'>Title: {objPost.title}</Header>
          <h6>Date: {objPost.date}</h6>
          {this.renderEditOrSave()}
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
