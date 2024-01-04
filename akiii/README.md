# Flashcards App (akiii)

This repository contains the source code for akiii, also known as the Flashcards App. For more detailed information, please visit the [GitHub Page](link_to_github_page).

## Getting Started

Follow these steps to set up and run the application locally.

### Prerequisites

Ensure the following are installed on your machine:

- Node.js
- npm package manager (included with Node.js)

### Installation

1. If you haven't installed create-react-app globally, do so by running:

- npm install -g create-react-app

2. Create a new React application by executing:

- npx create-react-app akiii

3. Once the app is created, navigate to the project directory:

- cd akiii

4. Start the React app:

- npm start

5. If you haven't installed JSON-Server globally, install it:

- npm install -g json-server

6. Run the following commands to start JSON-Server and watch the respective JSON files:

- json-server --watch database.json --port 3001
- json-server --watch messages.json --port 4000


### Usage

After starting both the React app and JSON-Server, access the application via http://localhost:3000 on your web browser. The React app interacts with JSON-Server to fetch and display data.

Explore the flashcards and enjoy using the app!
