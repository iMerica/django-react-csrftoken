import React from 'react';
import cookie from 'react-cookie';

class DjangoCSRFToken extends React.Component {
  constructor() {
    super();
    this.state = {
      csrfToken: cookie.load('csrftoken'),
    };
  }
  render() {
    return (
      React.DOM.input(
        {
          type: 'hidden',
          name: 'csrfmiddlewaretoken',
          value: this.state.csrfToken
        }
      )
    );
  }
}

export default DjangoCSRFToken;
