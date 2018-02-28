import React, {Component} from 'react';
import {Form, TextArea, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import '../styles/global.css';
import {updateAuthor, updatePosts} from "../utils/localStorage";

class CreatePost extends Component {

  titleInput = '';
  authorInput = '';

  options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  state = {
    title: '',
    author: '',
    descr: ''
  };

  handleEditText = (field) => (e) => {
    this.setState({
      [field]: e.target.value,
    });
  };

  handleCreatingArticle = () => {
    const {authors} = this.props;
    const author = Object.values(authors);
    const ifEqual = author.find((elem) => {
      return elem.name === this.state.author;
    });
    console.log(ifEqual);
    if (ifEqual) {
      const newPost = {
        id: Math.random(),
        title: this.state.title,
        date: new Date().toLocaleString('ru', this.options),
        authorId: ifEqual.id,
        description: this.state.descr,
        comments: []
      };
      this.props.createArticle(
        newPost
      );
      this.setState({
        title: '',
        author: '',
        descr: ''
      });
      updatePosts(newPost);
    } else {

      const newAuthor = {
        id: Math.random(),
        name: this.state.author,
      };
      const newPost = {
        id: Math.random(),
        title: this.state.title,
        date: new Date().toLocaleString('ru', this.options),
        authorId: newAuthor.id,
        description: this.state.descr,
        comments: []
      };
      this.props.createAuthor(
        newAuthor
      );
      this.props.createArticle(
        newPost
      );
      this.setState({
        title: '',
        author: '',
        descr: ''
      });
      updateAuthor(newAuthor);
      updatePosts(newPost);
    }


  };


  render() {
    return (
      <Form>
        <Form.Field>
          <input type='text'
                 placeholder='Title'
                 value={this.state.title}
                 onChange={this.handleEditText('title')}
                 ref={(input) => this.titleInput = input}/>
        </Form.Field>
        <Form.Field>
          <input type='text'
                 placeholder='Author'
                 value={this.state.author}
                 onChange={this.handleEditText('author')}
                 ref={(input) => this.authorInput = input}/>
        </Form.Field>
        <Form.Field inline>
                    <TextArea
                      autoHeight
                      placeholder='Enter an articles text'
                      value={this.state.descr}
                      onChange={this.handleEditText('descr')}
                      style={{minHeight: 100}}/>
        </Form.Field>
        <Form.Field inline>
          <Link to="/">
            <Button color='black'
                    onClick={this.handleCreatingArticle}>
              Create an article
            </Button>
          </Link>
        </Form.Field>
      </Form>
    );
  }
}

CreatePost.propTypes = {
  createArticle: PropTypes.func,
};


export default CreatePost;
