import Panel from "./Panel";
import Login from "./Login";
import { useState } from "react";

const Linking = () => {
    const [login, setLogin] = useState(false);

    const loginHandler = () => {
        setLogin(true)
    }

    return (
        <div>
            {login ?
                <Panel /> :
                <Login setLogin={loginHandler} />
            }
        </div>

    )
}

export default Linking;