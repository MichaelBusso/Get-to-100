import Panel from "./Panel";
import Login from "./Login";
import { useState } from "react";

const Linking = ({ gamePlayers }) => {

    const [gameStarted, setGameStarted] = useState(false);

    const startHandler = () => {
        setGameStarted(true);
    }

    return (
        <div>
            {gameStarted ?
                <Panel players={gamePlayers} /> :
                <Login
                    setGameStarted={startHandler}
                    gamePlayers={gamePlayers}
                />
            }
        </div>
    )
}

export default Linking;