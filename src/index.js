import React from 'react';
import cookie from 'react-cookie';
import DOM from 'react-dom-factories';

class DjangoCSRFToken extends React.Component {
  constructor() {
    super();
    this.state = {
      csrfToken: cookie.load('csrftoken'),
    };
  }
  render() {
    return (
      DOM.input(
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
