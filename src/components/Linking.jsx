import Panel from "./Panel";
import Login from "./Login";
import { useState } from "react";

const Linking = () => {
    const [login, setLogin] = useState(false);

    const loginHandler = () => {
        setLogin(true);
    }

    let gamePlayers = [];

    return (
        <div>
            {login ?
                <Panel players={gamePlayers}/> :
                <Login
                    setLogin={loginHandler}
                    gamePlayers={gamePlayers}
                />
            }
        </div>
    )
}

export default Linking;