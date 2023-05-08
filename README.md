# TODO it!
#### Video Demo: <url here>
#### Description:
TODO it! is a web based todo list app.
Project is based on React framework. PostgreSQL used as a Data Base.
With TODO it! you can add, modify and delete (complete) your tasks! Web app looks simple and easy to use.
New users will be prompted to create an account using unique username and password. Existing users can log in into their own todo list space.

### Client
Client part of the project consists of following files:
1. index.js – entry point for React.
2. App.js – the "main" logic of the client. Renders whole app, implements cookies and checks authorization of users. Also, sorts tasks by newest date (top -> bottom).
3. index.css – styles of all elements.
4. Components:
    1. ListHeader.js – renders header of an app (if user is logged in), where user can observe the name of a todo list, 'add task' and 'logout' buttons, welcoming message with name of a user, space that shows todos (or nothing if no todos yet), copyright with link on GitHub account.
    2. Auth.js – renders signup/login (if user isn't logged in yet) with implemented logic uses cookies, fetches to/from data base, checks correctness of provided data with data from DB.
    3. ListItem.js – renders todo as an independent item with todo name, 'edit' and 'delete' buttons.
    4. Modal.js – renders a modal used for creating or editing a todo.
    5. ArrowIcon.js – renders an arrow icon used in ListItem.js just before the name of a todo.
5. Dependencies:
    1. react-cookie – implementation on cookie to control authorization of users.
    2. dotenv – added for using .env files.
    3. other standard dependencies.

### Server
Server part of the project consists of following files:
1. server.js – the "main" logic of a server. Implements routing using Express, getting of all todos from data base, creating, editing and deleting of a todo. Also, implements signup and loggin in.
2. db.js – a pool for communication with  data base.
3. Dependencies:
    1. bcrypt – used for password-hashing.
    2. cors – used for cross-origin resource sharing.
    3. dotenv – added for using .env files.
    4. express – a back end web app framework used to build REST API.
    5. jsonwebtoken – implementation of JSON Web Token.
    6. nodemon – used to develop app interactively.
    7. pg – used to connect postgresql.
    8. uuid – used to create unique id of todos.

## Data Base:
PostgreSQL used as a Data Base.

## Area for improvements:
1. Changing the name of todo list.
2. 'Complete' option.
3. Review of completed tasks (archive).
4. Sub-tasks.
5. Optional 'due to' date.
6. Multi todo lists support.
7. Changing password.
8. Strong password requirement.

