# Intro to Express
This repository contains an introduction to using the Node.js web application framework Express. I'm creating this in preparation for a presentation I'll be doing in December 2017 for the [Western MA Development Technology User Group](https://www.meetup.com/Western-Mass-Development-Technology-Users-Group/).

It's still very much WIP. Don't mind the TODOs.

### Table of Contents
0. [Introduction](/0-intro/)
1. [Hello World](/1-hello-world/)
1. [Middleware](/2-middleware/)
1. [RESTful API](/3-api/)
1. [Data Access](/4-data-access/)
1. [Rendering Web Pages](/5-rendering-pages/)
1. [Session Management](/6-sessions/)
1. [Sockets](/7-sockets/)

### Environment setup
- Install Node.js and npm (included)
  - Installs globally (PATH) for convenience
- Use any text editor of your choice. Having a debugger is nice but optional.
  - Node.js debugging is supported out-of-the-box by VSCode.
  - There's the [Node.js Tools extension for Visual Studio](https://www.visualstudio.com/vs/node-js/).
  - Or use `node inspect` if you're hardcore.

### Running the code samples
1. Clone this repository
1. Run `npm install` from this directory
1. Run `node <filename>` from within any of the numbered subdirectories (e.g. `node hello-world`)
   - If you're using VSCode, just open any code sample file and press F5 to start debugging

### Resources
- [Node.js](https://nodejs.org)
    - [Express](https://expressjs.com)
    - [Mongoose](http://mongoosejs.com)
    - [Pug](https://pugjs.org) (formally 'jade')
    - [Socket.IO](https://socket.io)
- [MongoDB](https://www.mongodb.com)
- [Postman](https://www.getpostman.com)
- [VSCode](https://code.visualstudio.com)
