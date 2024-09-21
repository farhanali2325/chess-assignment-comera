import React from 'react';
import Button from './Button'; // Import the new Button component
import '../App.css';

function Dashboard({ startGame, toggleTheme, theme }) {
  return (
    <div className={`dashboard ${theme}`}>
      <h1 className="animated-welcome">Welcome to Chess Game</h1>
      <div className="button-container">
        <Button className="animated-button" onClick={startGame}>
          Start New Game
        </Button>
        <Button className="animated-button" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
