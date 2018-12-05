#### Github API test

### Test requirements

Build a web or command line app, which should allow users to enter an arbitrary Github username, and be presented with a best guess of the Github user's favourite programming language.
This can be computed by using the Github API to fetch all of the user's public Github repos, each of which includes the name of the dominant language for the repository.
You may use any programming language, framework or library.

### Process

### User stories

```
As a user
So I can make a query to the API
I want to be able to enter a username and see the favourite language of the Github user.
```

### Using the app

to boot up a local server
npm install
nodemon


to run feature tests with nightwatch
-nodemon to run a server on localhost:3000
npm run feature

to run jest unit tests 
npm test

to run the linter
./node_modules/.bin/eslint < Name of what ever file >

### Domain model
