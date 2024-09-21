import React, { useState, useEffect } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';
import Button from './Button'; // Import the reusable Button component
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoveHistory from './MoveHistory';
import '../App.css';

function Game({ theme }) {
  // State to manage the chess game logic using the Chess.js library
  const [game, setGame] = useState(new Chess());

  // State to store the current position of pieces on the chessboard (FEN format)
  const [fen, setFen] = useState('start');

  // State to store the history of moves made during the game
  const [history, setHistory] = useState([]);

  // State to track whether the first move has been made (used to enable/disable certain buttons)
  const [isFirstMove, setIsFirstMove] = useState(false);

  // State to manage the dynamic width of the chessboard, useful for responsiveness
  const [boardWidth, setBoardWidth] = useState(700);

  // Function to update the board's width based on the current window size
  const updateBoardWidth = () => {
    // If the window is narrower than 600px, reduce the chessboard size
    const width = window.innerWidth < 600 ? window.innerWidth - 40 : 700;
    setBoardWidth(width);
  };

  // useEffect to handle resizing of the window and updating the chessboard width accordingly
  useEffect(() => {
    updateBoardWidth(); // Set initial board width
    // Add event listener to listen for window resize events
    window.addEventListener('resize', updateBoardWidth);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateBoardWidth);
    };
  }, []);

  // Function to handle when a piece is dropped onto the board
  const onDrop = ({ sourceSquare, targetSquare }) => {
    console.log("Source:", sourceSquare, "Target:", targetSquare);

    try {
      // Try to make a move in the game
      const move = game.move({
        from: sourceSquare, // Where the piece was moved from
        to: targetSquare,   // Where the piece was moved to
        promotion: 'q',     // Automatically promote pawns to a queen when reaching the last rank
      });

      // If the move is invalid, notify the user
      if (move === null) {
        toast.error('Invalid move!');
        return;
      }

      // If the move is valid, update the game state
      setFen(game.fen());         // Update the board position
      setHistory(game.history()); // Update the history of moves
      setIsFirstMove(true);       // Mark that the first move has been made

      // Check if the move resulted in a check or checkmate
      if (game.isCheck()) {
        toast.info('Check!');
      }

      if (game.isCheckmate()) {
        toast.success('Checkmate! You win!');
        return; // End the game if checkmate occurs
      }

      // Handle the computer's move with a random choice after the player's move
      setTimeout(() => {
        const possibleMoves = game.moves();
        if (game.isGameOver()) return; // Stop if the game is over

        // Make a random move for the computer
        const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        game.move(randomMove);
        setFen(game.fen()); // Update the board with the new position
        setHistory(game.history()); // Update the move history

        // Notify if the computer's move resulted in a check or checkmate
        if (game.isCheck()) {
          toast.info('Check!');
        }

        if (game.isCheckmate()) {
          toast.error('Checkmate! You lose!');
        }
      }, 1000); // Delay of 1 second for the computer's move
    } catch (error) {
      // Log any errors and notify the user of an invalid move
      console.log("Error making move:", error.message);
      toast.error('Invalid move!');
    }
  };

  // Function to handle the player resigning from the game
  const handleResign = () => {
    toast.error('You resigned. Game over! The computer wins!');
    // Reset the game state to start a new game
    setGame(new Chess());
    setFen('start');
    setHistory([]);
    setIsFirstMove(false); // Reset the first move state
  };

  // Function to handle offering a draw to the computer
  const handleOfferDraw = () => {
    toast.info('You offered a draw. Wait for the opponent\'s response.');
    // Additional logic for handling a draw offer can be added here
  };

  return (
    <div className={`game-page ${theme}`}>
      {/* Title for the chessboard section */}
      <h2 className="move-history-title">Chess Board</h2>

      {/* Chessboard component */}
      <div className="game-container">
        <Chessboard
          position={fen} // Set the position of the pieces
          onDrop={onDrop} // Handle piece movements
          width={boardWidth} // Dynamic board width for responsiveness
          lightSquareStyle={{ backgroundColor: '#f0d9b5' }} // Light square color
          darkSquareStyle={{ backgroundColor: '#b58863' }}  // Dark square color
        />

        {/* Control buttons for Resigning and Offering a Draw */}
        <div className="control-buttons">
          <Button onClick={handleResign} disabled={!isFirstMove}>
            Resign
          </Button>
          <Button onClick={handleOfferDraw} disabled={!isFirstMove}>
            Offer Draw
          </Button>
        </div>
      </div>

      {/* Component to display the move history */}
      <MoveHistory history={history} />

      {/* Toast notification container for displaying alerts */}
      <ToastContainer 
        position="top-right"  // Position of the toast notifications
        autoClose={2000}      // Automatically close after 2 seconds
        hideProgressBar       // Hide progress bar for toasts
        newestOnTop           // Show the newest toast on top
        closeOnClick          // Close toast when clicked
        pauseOnFocusLoss      // Pause toast when window loses focus
        draggable             // Allow dragging of toasts
        pauseOnHover          // Pause on hover over toast
      />
    </div>
  );
}

export default Game;
