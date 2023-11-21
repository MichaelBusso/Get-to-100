import Buttons from "./Buttons";
import { useState } from "react";
import './components style/Gamer.css'

const Gamer = (props) => {

    const [number, setNumber] = useState(props.player.number);
    const [steps, setSteps] = useState(props.player.steps);
    setNumber(props.player.number);
    setSteps(props.player.steps);

    const isCurrentPlayer = (playerIndex) => playerIndex === props.currentPlayerIndex;

    const actionHandler = (e) => {
        if (e === 'q') {
            props.removePlayer(props.player);
        } if (e === 'n') {
            props.newGame(props.player);
            if (steps !== 0) {
                setNumber(Math.floor(Math.random() * 100))
                setSteps(0)
            }
        } else if (isCurrentPlayer(props.player.index) && props.gameStatus === 2) {
            setNumber(e);
            setSteps(steps + 1);
            props.player.steps = steps + 1;
            props.player.number = e(number);
            props.changeDetails(props.player);
            props.setCurrentPlayerIndex();
        }
    }

    return (
        <div className='container'>
            <h3>Gamer: {props.player.name} == {isCurrentPlayer(props.player.index) && props.gameStatus === 2 ? <span className="enable">Enabled</span> : 'Disabled'} == {number === 100 ? <span className="finished">Finished</span> : 'In the Game'}</h3>
            <h3>Number: {number}</h3>
            {props.gameStatus === 2 && number !== 100 && <h3>Steps: {steps}</h3>}
            <Buttons
                key={'btns'}
                gameStatus={props.gameStatus}
                number={number}
                setNumber={actionHandler}
            />
            <h3>{props.player.name}'s scores: {props.player.scores.join(' , ')}</h3>
        </div>
    )
}

export default Gamer;