import React, {Component} from 'react'
import {Card, Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import '../images/elliot.jpg';
import '../styles/global.css';
import {Link} from "react-router-dom";

class ShortPost extends Component {

  render() {
    const {objPost} = this.props;
    return (

        <div className="post">
          <Card
            image='../images/elliot.jpg'
            header={objPost.title}
            meta={objPost.author}
            description={objPost.description}
            extra={
              <Link to={`post/${objPost.id}`}>
                <Icon name='comment'/>
                Подробнее
              </Link>
            }
          />
      </div>
    );
  }
}

ShortPost.propTypes = {
  objPost: PropTypes.object
};

export default ShortPost;
