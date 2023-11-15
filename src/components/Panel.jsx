import Button from "./Button";
import Gamer from "./Gamer";
import { useState } from "react";

const Panel = () => {

    const persons = [
        { name: 'Player 1', index: 0 },
        { name: 'Player 2', index: 1 },
        { name: 'Player 3', index: 2 }
    ]

    const [players, setPlayers] = useState([]);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

    const addPlayersHandler = (person) => {
        if (!players.find((player) => player.name === person.name)) {
            setPlayers([...players, person])
        }
    }

    const moveTurnHandler = () => {
        setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length)
    }

    const removePlayerHandler = (e) => {
        setPlayers(players.filter((player) => player.name !== e))
    }

    return (
        <div>
            {persons.map((person) => (
                <Button
                    action={() => addPlayersHandler(person)}
                    value={person.name}
                />
            ))}
            {players.map((player) => (
                <Gamer
                    name={player.name}
                    index={player.index}
                    scores={[]}
                    currentPlayerIndex={currentPlayerIndex}
                    setCurrentPlayerIndex={moveTurnHandler}
                    removePlayer={removePlayerHandler}
                />
            ))}
        </div>

    )
}

export default Panel;