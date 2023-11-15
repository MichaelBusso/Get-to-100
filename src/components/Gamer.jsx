import Buttons from "./Buttons";
import { useState, useEffect } from "react";
import './components style/Gamer.css'

const Gamer = (props) => {

    const [number, setNumber] = useState(Math.floor(Math.random() * 10));
    const [steps, setSteps] = useState(0);

    const isCurrentPlayer = (playerIndex) => playerIndex === props.currentPlayerIndex;

    useEffect(() => {
        if (isCurrentPlayer(props.index) && number === 10) {
            props.setCurrentPlayerIndex();
        }
    })

    const changeNumberHandler = (e) => {
        if (e === 'q') {
            // props.removePlayer(props.player.name);
        } if (e === 'n') {
            // props.newGame();
        } else if (isCurrentPlayer(props.index)) {
            setNumber(e);
            setSteps(steps + 1);
            props.player.steps = steps + 1;
            props.player.number = e(number);
            props.changeDetails(props.player);
            props.setCurrentPlayerIndex();
        }
    }

    return (
        <div className="container">
            <h3>Gamer: {props.player.name} == {isCurrentPlayer(props.index) ? 'Enabled' : 'Disabled'} == {number === 10 ? 'Finished' : 'In the Game'}</h3>
            <h3>Number: {number}</h3>
            <h3>Steps: {steps}</h3>
            <Buttons
                number={number}
                setNumber={changeNumberHandler}
            />
            <h3>{props.player.name}'s scores: {props.player.scores.join(' , ')}</h3>
        </div>
    )
}

export default Gamer;