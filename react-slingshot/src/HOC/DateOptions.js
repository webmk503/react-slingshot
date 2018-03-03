import React, { Component } from 'react';

function dateOptions(Component) {
  return class extends Component {

    options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    render() {
      return <Component {...this.props} options={this.options}/>;
    }

  }
}

export default dateOptions;
