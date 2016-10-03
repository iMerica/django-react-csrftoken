# DjangoCSRFToken

A drop-in React component for submitting forms with a Django CSRF middleware token.


## Installation

    npm install --save django-react-csrftoken


## Usage

```javascript

import React from 'react';
import DjangoCSRFToken from 'django-react-csrftoken'

class MyLoginForm extends React.Component {
  render(){
    return (
      <div className="container">
          <form>
            <DjangoCSRFToken/>
            // email
            // password
            // submit button
          </form>
      </div>
    )
  }
}
```

