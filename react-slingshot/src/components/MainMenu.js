import React, {Component} from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import '../styles/global.css';

class MainMenu extends Component {
  state = {activeItem: 'Posts'};

  render() {
    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Link to="/create">
            <span className="menu">Create</span>
          </Link>
          <Link to="/">
            <span className="menu active">Posts</span>
          </Link>

        </Menu>
      </Segment>
    )
  }
}

export default MainMenu;


