# Github API test

A small web app built on Node.js and express using Githubs api to extract data about a users repos and determine or make a guess at that users favourite programming language.

tags: TDD, OOP, Node, Express, MVC, Jest, Nightwatch

### Test requirements

Build a web or command line app, which should allow users to enter an arbitrary Github username, and be presented with a best guess of the Github user's favourite programming language.
This can be computed by using the Github API to fetch all of the user's public Github repos, each of which includes the name of the dominant language for the repository.
You may use any programming language, framework or library.

### Process

I started the process by writing down some of my initial thoughts in my notebook about the challenge, mainly focused on the user experience of using my app.

* Reading the Github API documentation
* Interact with API in the command line to get an idea of the format of the data
* Command line or web app: I decided to make a small web app as the interface because it is something i can build on and also that was how i imagined a user would want to interact with the program.
* Ruby or JavaScript: I chose javascript only because ive been trying to work more on my understanding of the language. 
* Think about testing with an API, and choose testing frameworks: I recently used Nightwatch on another project and so i thought i would try to introduce it here too. I also chose to go with Jest for the unit testing, again just because i had used it recently.
* Think about designing my domain and objects: This ended up as quite a simple design, with my call to the API insode the controller and a single JS class object called developer that handles the logic that is run on the reetreived data.
* Single or multi page app: I chose to go with multiple views but I think when i get time to improve it i will look into making a single page app.
* Draw out user interface diagram: domain model diagram below
* Write user story: There wasnt much to write in terms of a user story but it is documented below.
* decide which method to use to query the API: After reading some documentation i chose to go with javascripts fetch api method because the syntax seemed cleaner and i read that it is one of the most up to date ways of making api calls in JS.
* think about how to wrap the data in an object - the main developer class, with single responsibility to determine the users favourite language.

### User stories

```
As a user
So I can make a query to the API
I want to be able to enter a username and see the favourite language of the Github user.
```

### Using the app

```
$ git clone https://github.com/Lucx14/Github-API-test.git
$ cd Github-API-test
$ npm install
$ nodemon
```
The program will be running on localhost:3000

To run the end to end browser feature tests 
while the program is running on localhost:3000
```
$ npm run feature
```
To run the unit tests
```
$ npm test
```





### Domain model


 ```

    Client
╔════════════╗  
║            ║ Sends HTTP requests
║  Browser   ║ (GET, POST)
║            ║
╚════════════╝
      |
      |
Express Framework
╔════════════╗
║            ║
║   SERVER   ║
║            ║
╚════════════╝
      |
      |
   app.js                        Model
╔════════════╗             ╔═════════════════╗
║            ║------------>║                 ║
║ Controller ║             ║    Developer    ║
║            ║<------------║     (class)     ║
║            ║             ╚═════════════════╝
║            ║
║            ║                    API
║            ║             ╔═════════════════╗
║            ║------------>║                 ║
║            ║             ║   Github Api    ║
║            ║<------------║                 ║
╚════════════╝             ╚═════════════════╝
      |
╔════════════╗
║            ║
║ Views (ejs)║
║            ║
╚════════════╝



```
