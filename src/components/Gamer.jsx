import Buttons from "./Buttons";
import { useState } from "react";

const Gamer = (props) => {

    const [number, setNumber] = useState(Math.floor(Math.random() * 100));
    const [steps, setSteps] = useState(0);

    const changeNumberHandeler = (e) => {
        setNumber(e);
        setSteps(steps + 1);
    }

    return (
        <div>
            <h3>Gamer: {props.name}</h3>
            <h3>Number: {number}</h3>
            <h3>Steps: {steps}</h3>
            <Buttons
                number={number}
                setNumber={changeNumberHandeler}
            />
            <h3>{props.name}'s scores: {props.scores}</h3>
        </div>
    )
}

export default Gamer;