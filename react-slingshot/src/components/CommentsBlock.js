import React, {Component} from 'react';
import {Comment,} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../styles/global.css';

class CommentsBlock extends Component {

  render() {
    const {comment, authors} = this.props;
    return (
      <Comment.Group minimal>
        <Comment>
          <Comment.Avatar src='../images/matt.jpg'/>
          <Comment.Content>
            <Comment.Author>{authors[comment.authorId].name}</Comment.Author>
            <Comment.Metadata>
              <span>{comment.date}</span>
            </Comment.Metadata>
            <Comment.Text>{comment.comment}</Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    );
  }
}

CommentsBlock.propTypes = {
  comment: PropTypes.object,
};

export default CommentsBlock;
