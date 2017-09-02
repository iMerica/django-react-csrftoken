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

## CSRF Cookie and React

Because react renders elements dynamically, Django might not set a CSRF token cookie if you render a form using react.
This is described in [the Django docs](https://docs.djangoproject.com/en/1.11/ref/csrf/):
> If your view is not rendering a template containing the csrf_token template tag, Django might not set the CSRF token cookie. This is common in cases where forms are dynamically added to the page. To address this case, Django provides a view decorator which forces setting of the cookie: ensure_csrf_cookie().

To fix this problem add the decorator mentioned above to your views:
```python

from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def register_view(request):
    // ...

```
