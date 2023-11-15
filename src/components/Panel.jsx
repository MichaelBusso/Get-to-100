import Button from "./Button";
import Gamer from "./Gamer";
import { useState } from "react";

const Panel = () => {

    const names = ['Player 1', 'Player 2', 'Player 3', 'Player 4']

    const [players, setPlayers] = useState([]);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

    const addPlayersHandler = (e) => {
        if (!players.includes(e)) {
            setPlayers([...players, e])
        }
    }

    const removePlayersHandler = (e) => {
        setPlayers(players.filter((player) => player != e))
    }

    const moveTurnHandler = () => {
        setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length)
    }

    return (
        <div>
            {names.map((name, index) => (
                <Button
                    action={() => addPlayersHandler(name)}
                    key={index}
                    value={name}
                />
            ))}
            {players.map((player, index) => (
                <Gamer
                    name={player}
                    index={index}
                    scores={[]}
                    currentPlayerIndex={currentPlayerIndex}
                    setCurrentPlayerIndex={moveTurnHandler}
                    removePlayer={removePlayersHandler}
                />
            ))}
        </div>

    )
}

export default Panel;