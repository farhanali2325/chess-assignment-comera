import React from 'react';
import '../App.css'; // Import the CSS file for styling

/**
 * MoveHistory component displays the list of moves made in the chess game.
 * It also adapts to the current theme (light or dark) and distinguishes between user and computer moves.
 * 
 * @param {Array} history - Array of moves made in the game.
 * @param {String} theme - Current theme ('light' or 'dark') to apply appropriate styling.
 */
function MoveHistory({ history, theme }) {
  return (
    // Apply the current theme class to the move-history container
    <div className={`move-history ${theme}`}>
      
      {/* Title for the Move History section */}
      <h2 className="move-history-title">Move History</h2>
      
      {/* Unordered list to display the moves */}
      <ul className="move-history-list">
        
        {/* Loop through the history array and display each move */}
        {history.map((move, index) => (
          <li 
            key={index} 
            className={`move-item ${index % 2 === 0 ? 'user-move' : 'computer-move'}`} // Alternates between user and computer
          >
            {/* Label for move source: "You" for even-indexed moves, "Computer" for odd-indexed moves */}
            <span className="move-label">{index % 2 === 0 ? 'You' : 'Computer'}:</span> 
            
            {/* Display the move detail (e.g., 'e2 to e4') */}
            <span className="move-detail">{move}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoveHistory;
