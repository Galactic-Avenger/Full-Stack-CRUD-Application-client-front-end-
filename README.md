# Full-Stack CRUD Application (Front-End/Client)

This is the main repository for the client (front-end) code for the Project - Full-Stack CRUD Application.

## Project-Overview
The Full-Stack CRUD Application Client is built using React and Redux with client-side routing managed by React Router. This interface is designed for a Campus Management System that allows users to perform the following tasks:

- View a visually appealing home page with navigation to view all campuses and all students.
- Display lists of campuses and students.
- View detailed information on individual campuses and students.
- Add, edit, and delete campuses and students using responsive forms with real-time validations.

The client communicates with the back-end (available in a [Separate Repository](https://github.com/Galactic-Avenger/Full-Stack-CRUD-Application-server-back-end-) ) via RESTful API endpoints to ensure data consistency and seamless operation.


## Team Members
- **Abdulla Saleh** - GitHub: @Galactic-Avenger
- **Khandakar Wahiduzzaman** - GitHub: @KhandakarWahiduzzaman
- **Leo Chen** - GitHub: @lc6003

  
----------
### 1. Set up and run the client (front-end) application on your local machine
1.	Start a terminal (e.g., Git Bash) on your local machine.
2.  Go to the "final-project-client" folder, enter the command to install dependencies: `npm install` 
3.	Start the client application by entering the command: `npm start` 
4.	After the client application is successfully started, a web browser is automatically opened at the address: `http://localhost:3000` 

<br/>

## Common Errors You May Encounter
### Error: ERR_OSSL_EVP_UNSUPPORTED
This error indicates that your application uses an algorithm or key size not supported by OpenSSL 3.0.
#### Solution: 
1. If you use *Windows*, in the `package.json` file, set the "scripts" attributes as follows:

```
  "scripts": {
  "start": "SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts start", 
  "build": "SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts build", 
  ...
    },
```

2. If you use *Mac OSX or Linux*, include the following command in the `~/.bash_profile` or `~/.bashrc` file.

```
  export NODE_OPTIONS=--openssl-legacy-provider
```
