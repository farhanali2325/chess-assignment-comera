import React, { useState } from 'react';
import Dashboard from './components/Dashboard'; // Import Dashboard component
import Game from './components/Game'; // Import Game component
import './App.css'; // Import the app's styles

function App() {
  // State to manage the current theme (light or dark)
  const [theme, setTheme] = useState('light');
  
  // State to track if the game has started or not
  const [gameStarted, setGameStarted] = useState(false);

  // Function to start the game - sets gameStarted to true, moving from Dashboard to Game
  const startGame = () => {
    setGameStarted(true);
  };

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Switch theme based on current theme
  };

  return (
    <div className={`App ${theme}`}> {/* Apply the theme as a class to the root div */}
      {!gameStarted ? ( 
        // If game hasn't started, show the Dashboard
        <Dashboard startGame={startGame} toggleTheme={toggleTheme} theme={theme} />
      ) : (
        // Once the game starts, show the Game component
        <Game theme={theme} />
      )}
    </div>
  );
}

export default App;