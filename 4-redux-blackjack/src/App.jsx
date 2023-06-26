import './App.css'
import { DEALER_ROUND, NEW_GAME, NEXT_CARD, PLAYER_FINISHED, dealerPoints, handOfDealers, handOfPlayers, isPlayerRoundDone, playerPoints, whoWon } from './state/blackjackSlice';
import Hand from './view/Hand';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  
  const handOfDealer = useSelector(handOfDealers);
  const handOfPlayer = useSelector(handOfPlayers);
  const isPlayerDone = useSelector(isPlayerRoundDone);

  const dealerwinnings = useSelector(dealerPoints)
  const playerwinnings = useSelector(playerPoints)
  const winner = useSelector(whoWon)

  return(
    <div className='container'>
    <h1>Simple Blackjack</h1>
    <h2>Dealer ({dealerwinnings}):</h2>
    <Hand cards={handOfDealer}></Hand>
    <button onClick={() => dispatch(DEALER_ROUND())} disabled={!isPlayerDone}>Play Dealer</button>
    <h2>Player ({playerwinnings}):</h2>

    <Hand cards={handOfPlayer}></Hand>
    <button onClick={() => dispatch(NEXT_CARD())} disabled={isPlayerDone}>Get New Card</button>
    <button onClick={() => dispatch(PLAYER_FINISHED())} disabled={isPlayerDone}>Stop</button>
    <button onClick={() => dispatch(NEW_GAME())}>New Game</button>
    {winner && (<p className='result'>{winner} won!</p>)}
  </div>
  );
}

export default App
