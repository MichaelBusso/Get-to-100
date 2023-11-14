import Button from "./Button";
import Gamer from "./Gamer";
import { useState } from "react";

const Panel = () => {

    const names = ['player_1', 'player_2', 'player_3', 'player_4'];

    const [players, setPlayers] = useState([]);

    const changePlayersHandeler = (e) => {
        if (!players.includes(e)) {
            setPlayers([...players, e])
        }
    }



    const [selectedOption, setSelectedOption] = useState(players[0]);

    const handleOptionChange = () => {
        const currentIndex = players.indexOf(selectedOption);
        const nextIndex = (currentIndex + 1) % players.length;
        setSelectedOption(players[nextIndex]);
    };






    return (
        <div>
            {names.map((name, index) => (
                <Button
                    action={() => changePlayersHandeler(name)}
                    key={index}
                    value={name}
                />
            ))}
            {players.map((player, index) => (
                <Gamer
                    name={player}
                    key={index}
                    scores={[]}
                />
            ))}
        </div>

    )
}

export default Panel;