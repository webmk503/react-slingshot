import React, {Component} from 'react';
import {Form, Container, Header,} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import '../styles/global.css';
import CommentsBlock from "./CommentsBlock";
import '../styles/global.css';
import {updateAuthor} from "../utils/localStorage";

class Post extends Component {

  input = '';
  state = {
    editingAuthor: false,
    authorName: this.props.authors[this.props.objPost.authorId].name,
  };

  handleSaveAuthor = () => {
    const {saveAuthor, objPost, objComments, authors} = this.props;
    if (this.state.editingAuthor) {
      this.setState({
        authorName: authors[objPost.authorId].name
      });
      const editAuthor = {
        id: authors[objPost.authorId].id,
        name: this.state.authorName
      };
      saveAuthor(editAuthor);
      updateAuthor(editAuthor);

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
    const {objPost, authors} = this.props;
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
        Author: {authors[objPost.authorId].name}
        <button onClick={this.handleSaveAuthor}>
          Edit Author
        </button>
      </h6>
    );
  };

  render() {
    const {addComment, objPost, objComments, authors, createAuthor} = this.props;
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
            authors={authors}
            key={commentId}
          />
        ))}
        <Comment
          createComment={addComment}
          createAuthor={createAuthor}
          authors={authors}
          post={objPost}
        />
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
