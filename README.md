# Blog Dojo React Application

![Blog Dojo Logo/Image]

## Overview

Welcome to the Blog Dojo React application! This project is a small React application that allows users to view and create blogs. It uses a mock database provided by json-server for data storage.

## Features

- View a list of existing blogs
- Create new blogs
- Mock database using json-server for data storage
- [Add any other features here]

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/mouaff25/dojo-blog.git
    ```

2. Navigate to the project directory:

   ```bash
   cd dojo-blog
   ```

3. Install the dependencies:

   ```bash
    npm install
    ```

4. Run the mock database:

   ```bash
   npx json-server --watch data/db.json --port 8000
   ```

5. Start the application:

   ```bash
   npm start
   ```

6. Open your browser and visit http://localhost:3000 to view the application.

## Dependencies

- [React](https://reactjs.org/)
- [json-server](https://github.com/typicode/json-server)

## License

This project is licensed under the [MIT License](./LICENSE).

## Acknowledgements

Special thanks to Net Ninja for the "Full Modern React Tutorial" playlist that inspired this project.