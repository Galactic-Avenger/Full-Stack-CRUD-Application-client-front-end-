# Full-Stack CRUD Application (Front-End/Client)

This is the main repository for the client (front-end) code for the Project - Full-Stack CRUD Application.

----------
## Project-Overview



## Team Members
- **Abdulla Saleh** - GitHub: @Galactic-Avenger
- **Khandakar Wahiduzzaman** - GitHub: @KhandakarWahiduzzaman
- **Leo Chen** - GitHub: @lc6003

  
### Live Link 
[Website link](https://Galactic-Avenger.github.io/Full-Stack-CRUD-Application-client-front-end-/)

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
