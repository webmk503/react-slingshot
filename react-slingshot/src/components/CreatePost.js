import React, {Component} from 'react';
import {Form, TextArea, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/global.css';

class CreatePost extends Component {

    titleInput = '';
    authorInput = '';

    state = {
        title: '',
        author: '',
        descr: ''
    };

    newPostDate = new Date();
    options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    handleEditText = () => (e) => {
        if (e.currentTarget === this.titleInput) {
            this.setState({
                title: e.target.value,
            });
        } else if (e.currentTarget === this.authorInput) {
            this.setState({
                author: e.target.value,
            });
        }
        else {
            this.setState({
                descr: e.target.value,
            });
        }
    };

    handleCreatingArticle = () => {
        this.props.createArticle(
            this.state.title,
            this.newPostDate.toLocaleString('ru', this.options),
            this.state.author,
            this.state.descr
        );
        this.setState({
            title: '',
            author: '',
            descr: ''
        });
    };
    render() {
        return (
            <Form>
                <Form.Field>
                    <input type='text'
                           placeholder='Title'
                           value={this.state.title}
                           onChange={this.handleEditText}
                           ref={(input) => this.titleInput = input}/>
                </Form.Field>
                <Form.Field>
                    <input type='text'
                           placeholder='Author'
                           value={this.state.author}
                           onChange={this.handleEditText}
                           ref={(input) => this.authorInput = input}/>
                </Form.Field>
                <Form.Field inline>
                    <TextArea autoHeight
                              placeholder='Enter an articles text'
                              value={this.state.descr}
                              onChange={this.handleEditText('drte')}
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
