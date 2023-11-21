import Gamer from "./Gamer";
import { useState } from "react";

const Panel = ({ players }) => {

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

    const gameModeChecker = () => {
        if (!players.some((obj) => obj.inGame === true)) {
            localStorage.setItem('users', JSON.stringify(players));
            setTimeout(() => alert('Game Over!!!'), 500);
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