# Authenti9 - Setup Guide

This guide will help you clone and run the **Authenti9** project on your local system.

## Prerequisites
Make sure you have the following tools installed:

### 1. Install Node.js
- Download and install [Node.js](https://nodejs.org/) (LTS version recommended).
- Verify installation:
  ```sh
  node -v
  npm -v
  ```

### 2. Install Git
- Download and install [Git](https://git-scm.com/).
- Verify installation:
  ```sh
  git --version
  ```

### 3. Install a Code Editor (Recommended: VS Code)
- Download [Visual Studio Code](https://code.visualstudio.com/).
- Install extensions for better experience:
  - **ES7+ React/Redux Snippets**
  - **Prettier - Code formatter**
  - **Vite** (if applicable)

## Clone the Repository
Open a terminal and run the following command:
```sh
  git clone https://github.com/technoidnine/authenti9.git
```

Navigate into the project directory:
```sh
  cd authenti9
```

## Install Dependencies
Run the following command to install required packages:
```sh
  npm install
```

## Running the Project
Start the development server:
```sh
  npm run dev
```

This will start the server, and you can open the application in your browser at:
```
http://localhost:5173/
```

## Environment Variables (If Required)
If the project requires environment variables, create a **.env** file in the root directory and add necessary variables as per the documentation.

## Additional Tools (Optional)
- **Postman** (for testing APIs) - [Download here](https://www.postman.com/)
- **Thunder Client** (VS Code Extension for API testing)

## Contributing
If you want to contribute, fork the repository, create a feature branch, make changes, and submit a pull request.

## Troubleshooting
- If you face permission issues, try running:
  ```sh
  sudo npm install
  ```
- Delete `node_modules` and `package-lock.json` if needed:
  ```sh
  rm -rf node_modules package-lock.json && npm install
  ```

