import Button from "./Button";
import Gamer from "./Gamer";
import { useState, useEffect } from "react";

const Panel = () => {

    const persons = [
        { name: 'Player 1', scores: [], number: 0, steps: 0 },
        { name: 'Player 2', scores: [], number: 0, steps: 0 },
        { name: 'Player 3', scores: [], number: 0, steps: 0 }
    ]

    const [players, setPlayers] = useState([]);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

    useEffect(() => {
        console.log(players);
    })

    const addPlayersHandler = (person) => {
        if (!players.find((player) => player.name === person.name)) {
            setPlayers([...players, person])
        }
    }

    const changePlayerDetailsHandler = (player) => {
        let newArray = [...players];
        const index = newArray.findIndex((p) => player.name === p.name);
        newArray[index] = player;
        if (player.number === 10) {
            newArray[index].scores.push(player.steps);
        }
        setPlayers(newArray);
    }

    const moveTurnHandler = () => {
        setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length)
    }

    // const removePlayerHandler = (e) => {
    //     setPlayers(players.filter((player) => player.name !== e))
    // }

    // const newGameHandler = () => {
    //     if(!players.find((player) => player.number !== 100)) {

    //     }
    // }

    return (
        <div>
            {persons.map((person) => (
                <Button
                    action={() => addPlayersHandler(person)}
                    value={person.name}
                />
            ))}
            {players.map((player, index) => (
                <Gamer
                    player={player}
                    index={index}
                    changeDetails={changePlayerDetailsHandler}
                    currentPlayerIndex={currentPlayerIndex}
                    setCurrentPlayerIndex={moveTurnHandler}
                    // removePlayer={removePlayerHandler}
                    // newGame={newGameHandler}
                />
            ))}
        </div>

    )
}

export default Panel;