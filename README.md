
Family social media

The rough impetus for starting this project was to create a basic social media page for my extended family to keep in touch with each other during the pandemic.

backend: https://github.com/jameshallam93/familyServer/tree/master

## Built using:
The main tools I used to make this app are:

- React, Javascript
- Redux/thunk
- Jest/Enzyme

It also gave me an opportunity to practice using custom hooks, stylised components and password hashing using bcrypt.

## Roadmap

- Add session validation using JSON web tokens
- Conditional ability to post new content depending on if logged in or not; attach username to all posts
- Ability to set posted content to delete after a set period of time (i.e. a week) - should be doable through useEffect and delete markers.
