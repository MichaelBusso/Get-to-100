import Button from "./Button";
import Gamer from "./Gamer";
import Screen from "./Screen";
import { useState } from "react";

let playersFinishedIndex = [];

const Panel = () => {

    const getFromLocalStorage = (key) => {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    };

    const persons = getFromLocalStorage('users');

    const [players, setPlayers] = useState([]);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [gameStatus, setGameStatus] = useState(1);
    const [screenStatus, setScreenStatus] = useState(false)

    const gameStartedHandler = () => {
        setGameStatus(2);
    }

    const addPlayersHandler = (person, index) => {
        if (!players.find((player) => player.name === person.name)) {
            setPlayers([...players, { ...person, index }])
        }
    }

    const setPlayerToLocalStorage = (player) => {
        const usersStorgae = JSON.parse(localStorage.getItem('users'));
        const user = usersStorgae.find(user => user.name === player.name);
        user.scores.push(player.steps);
        localStorage.setItem('users', JSON.stringify(usersStorgae));
    }

    const changePlayerDetailsHandler = (player) => {
        let newArray = [...players];
        const index = newArray.findIndex((p) => p.name === player.name);
        newArray[index] = player;
        if (player.number === 10) {
            newArray[index].scores.push(player.steps);
            playersFinishedIndex.push(index);
            setPlayerToLocalStorage(player);
            if (playersFinishedIndex.length === players.length) {
                setGameStatus(3);
                setScreenStatus(true);
            }
        }
        setPlayers(newArray);
    }

    const moveTurnHandler = () => {
        for (let i = 0; i < players.length; i++) {
            if (!playersFinishedIndex.includes((currentPlayerIndex + 1 + i) % players.length)) {
                setCurrentPlayerIndex((currentPlayerIndex + 1 + i) % players.length)
                break;
            }
        }
    }

    const removePlayerHandler = (player) => {
        setScreenStatus(false);
        setPlayers(players.filter((p) => p !== player))
    }

    const newGameHandler = (player) => {
        let newArray = [...players];
        const index = newArray.findIndex((p) => p.name === player.name);
        newArray[index] = player;
        newArray[index].number = 0;
        setPlayers(newArray);
        if (players.findIndex((p) => p.number !== 0) === -1) {
            setGameStatus(2);
            setCurrentPlayerIndex(0)
            setScreenStatus(false);
            playersFinishedIndex = [];
        }
    }

    return (
        <div>
            {screenStatus &&
                <Screen players={players} winners={playersFinishedIndex} />}
            <div className="panelButtonsContainer">
                {gameStatus === 1 &&
                    persons.map((person, index) => (
                        <Button
                            action={() => addPlayersHandler(person, index)}
                            value={person.name}
                            key={index}
                        />
                    ))}
                {gameStatus === 1 && players.length > 0 &&
                    <div className="startButton">
                        <Button
                            action={gameStartedHandler}
                            value={'Start'}
                        />
                    </div>

                }
            </div>
            <div className="panelGamersContainer">
                {players.map((player, index) => (
                    <Gamer
                        player={player}
                        index={index}
                        key={index}
                        gameStatus={gameStatus}
                        changeDetails={changePlayerDetailsHandler}
                        currentPlayerIndex={currentPlayerIndex}
                        setCurrentPlayerIndex={moveTurnHandler}
                        newGame={newGameHandler}
                        removePlayer={removePlayerHandler}
                    />
                ))}
            </div>
        </div>

    )
}

export default Panel;