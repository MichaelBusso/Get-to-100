import Gamer from "./Gamer";
import { useState } from "react";

const Panel = ({ setGameStarted, players }) => {

    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

    const moveTurnHandler = () => {
        for (let i = 0; i < players.length; i++) {
            if (players[(currentPlayerIndex + 1 + i) % players.length].inGame) {
                setCurrentPlayerIndex((currentPlayerIndex + 1 + i) % players.length);
                break;
            }
        }
        gameModeChecker();
    }

    const setPlayerToLocalStorage = (player) => {
        const usersStorgae = JSON.parse(localStorage.getItem('users'));
        const index = usersStorgae.findIndex(user => user.name === player.name);
        usersStorgae[index] = player;
        localStorage.setItem('users', JSON.stringify(usersStorgae));
    }

    const gameModeChecker = () => {
        if (!players.some((obj) => obj.inGame === true)) {
            players.forEach((player) => setPlayerToLocalStorage(player));
            setTimeout(() => {
                alert('Game Over!!!');
                players.length = 0;
                setGameStarted();
            }, 100);
        }
    }

    return (
        <div className="panelGamersContainer">
            {players.map((player, index) => (
                <Gamer
                    player={player}
                    key={index}
                    currentPlayerIndex={currentPlayerIndex}
                    setCurrentPlayerIndex={moveTurnHandler}
                />
            ))}
        </div>
    )
}

export default Panel;