import { useState } from 'react';
import './App.css';
import dice1 from './images/dice1.png';
import dice2 from './images/dice2.png';
import dice3 from './images/dice3.png';
import dice4 from './images/dice4.png';
import dice5 from './images/dice5.png';
import dice6 from './images/dice6.png';

function App() { 
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [player1Score, setPlayer1Score] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [resultMessage, setResultMessage] = useState('');
  const [diceImage, setDiceImage] = useState(null);

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6);
    setDiceImage(diceImages[randomNum]);

    if (currentPlayer === 1) {
      setPlayer1Score(randomNum + 1); 
      setCurrentPlayer(2); 
    } else {
      const player2Score = randomNum + 1;

    
      if (player1Score > player2Score) {
        setResultMessage('Player 1 wins! 🎉');
      } else if (player1Score < player2Score) {
        setResultMessage('Player 2 wins! 🎉');
      } else {
        setResultMessage('It\'s a draw! 🤝');
      }

     
      setCurrentPlayer(1);
      setPlayer1Score(null);
    }
  };

  return (   
    <div className='App'>
      <center>
        <h2>{resultMessage || `Current Turn: Player ${currentPlayer}`}</h2>
        <div className='dice-container'>
          {diceImage && <img className='square' src={diceImage} alt="Dice" />}
        </div>
        <button 
          type="button" 
          className="btn btn-success w-50" 
          style={{ color: 'white', marginTop: '1rem' }} 
          onClick={rollDice}
          disabled={resultMessage !== ''}
        >
          Roll Dice
        </button>
      </center>
    </div> 
  );
}

export default App;
