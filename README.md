# Chess Web Application

Welcome to the Chess Web Application! This project is a web-based chess game where players can play against a computer. The game features an interactive chessboard, move history tracking, light/dark themes, and game control options like resigning and offering a draw.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Components Overview](#components-overview)
  - [Dashboard](#dashboard-component)
  - [Game](#game-component)
  - [MoveHistory](#movehistory-component)
  - [Button](#button-component)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- Play chess against a simple AI (random move generation)
- Responsive and interactive chessboard
- Light and Dark theme support
- Move history tracking
- Game control options: Resign or Offer Draw
- Toast notifications for game events like check, checkmate, invalid moves, and more
- Chess logic powered by [Chess.js](https://github.com/jhlywa/chess.js) and board rendering via [Chessboardjsx](https://github.com/willb335/chessboardjsx)

## Tech Stack

- **Frontend**: React (JSX), CSS
- **Game Logic**: Chess.js
- **Board Rendering**: Chessboardjsx
- **Notifications**: React Toastify
- **Styling**: Custom CSS for theming and animation

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository**:
    ```bash
    git clone git@github.com:farhanali2325/chess-assignment-comera.git
    cd chess-assignment-comera
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```
    or if you're using Yarn:
    ```bash
    yarn install
    ```

3. **Start the application**:
    ```bash
    npm start
    ```
    or with Yarn:
    ```bash
    yarn start
    ```

4. **Open the application in your browser**:
    ```
    http://localhost:3000
    ```

## Usage

- After running the app, you will be greeted with a dashboard where you can:
  - Start a new game
  - Toggle between light and dark themes
- During the game:
  - Move pieces by dragging them to the desired position.
  - Resign or offer a draw using the available buttons.
  - View the move history.
  - The AI will make random moves in response to your moves.

## File Structure

chess-web-app/
├── public/                     # Public assets and index.html
│   └── index.html              # Main HTML file
├── src/                        # Source files
│   ├── components/             # Reusable components
│   │   ├── Button.js           # Reusable Button component
│   │   ├── Dashboard.js        # Main dashboard page
│   │   ├── Game.js             # Chess game page with chessboard and controls
│   │   ├── MoveHistory.js      # Displays the history of moves in the game
│   ├── App.js                  # Main application entry point
│   ├── App.css                 # Global styles for the application
│   └── index.js                # Entry point for React
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Version lock file for npm dependencies
└── README.md                   # Project documentation (this file)


## Components Overview

### Dashboard Component

- **Location**: `src/components/Dashboard.js`
- **Description**: 
  - Displays a welcome message.
  - Contains buttons to start a new game and toggle the theme.
  - Button component is used for better reusability.

### Game Component

- **Location**: `src/components/Game.js`
- **Description**: 
  - The main game interface where the chessboard is displayed.
  - Handles player moves, AI moves, and game state.
  - Provides resign and offer draw options.
  - Uses Chess.js for chess logic and Chessboardjsx for board rendering.
  - Utilizes `react-toastify` for user notifications (e.g., check, checkmate, invalid moves).

### MoveHistory Component

- **Location**: `src/components/MoveHistory.js`
- **Description**: 
  - Displays a history of moves made during the game.
  - Alternates between "You" (user moves) and "Computer" (AI moves).
  - Adapts to light or dark theme.

### Button Component

- **Location**: `src/components/Button.js`
- **Description**: 
  - A reusable button component with customizable styles and behavior.
  - Used throughout the application in places like the dashboard and game controls.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in interactive watch mode.<br />

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the default build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and make a pull request. You can also open an issue if you find bugs or have suggestions.

Steps:
1. Fork this repository.
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
