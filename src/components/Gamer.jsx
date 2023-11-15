import Buttons from "./Buttons";
import { useState } from "react";
import './components style/Gamer.css'

const Gamer = (props) => {

    const [number, setNumber] = useState(Math.floor(Math.random() * 100));
    const [steps, setSteps] = useState(0);

    const isCurrentPlayer = (playerIndex) => playerIndex === props.currentPlayerIndex;

    const changeNumberHandler = (e) => {
        if (e === 'q') {
            props.removePlayer(props.name);
        } else if (e === 'n') {

        } else if (isCurrentPlayer(props.index)) {
            let x = e(number);
            setSteps(steps + 1);
            setNumber(x);
            props.setCurrentPlayerIndex();
            console.log(x)
        }
    }

    return (
        <div className="container">
            <h3>Gamer: {props.name} == {isCurrentPlayer(props.index) ? 'Enabled' : 'Disabled'} == {number === 100 ? 'Finished' : 'In the Game'}</h3>
            <h3>Number: {number}</h3>
            <h3>Steps: {steps}</h3>
            <Buttons
                number={number}
                setNumber={changeNumberHandler}
            />
            <h3>{props.name}'s scores: {props.scores}</h3>
        </div>
    )
}

export default Gamer;