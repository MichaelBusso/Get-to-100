import Button from './Button';
import './components style/Login.css';
import { FaPlus } from "react-icons/fa";
import React, { useState } from 'react';

const Login = ({ setGameStarted, gamePlayers }) => {

    const joinsTheGameHandler = (player) => {
        if (!player.inGame) {
            player.index = gamePlayers.length;
            player.number = Math.floor(Math.random() * 10);
            player.steps = 0;
            gamePlayers.push(player);
        }
        else {
            gamePlayers = gamePlayers.filter((gamePlayer) => gamePlayer.name !== player.name);
            gamePlayers.forEach((player, index) => player.index = index);
        }
        player.inGame = !player.inGame;
        console.log(gamePlayers);
    }

    const getFromLocalStorage = (key) => {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : [];
    }

    const [name, setName] = useState('');
    const [users, setUsers] = useState(getFromLocalStorage('users'));

    const inputChangeHandler = (event) => {
        setName(event.target.value);
    }

    const addHandler = () => {
        if (name === '') {
            return alert('Invalid name!');
        }
        let myUsers = getFromLocalStorage('users');
        if (myUsers.find((user) => user.name === name)) {
            return alert('User already exist!');
        }
        myUsers.push({ name: name, scores: [], id: users.length, inGame: false });
        localStorage.setItem('users', JSON.stringify(myUsers));
        setUsers(myUsers);
        setName('');
    }

    return (
        <div className='loginContainer'>
            <input
                type="text"
                value={name}
                onChange={inputChangeHandler}
                placeholder='Name'
            />
            <Button
                action={addHandler}
                value={<FaPlus />}
            />
            <Button
                action={setGameStarted}
                value='Start Game'
            />
            <div className='loginUsersContainer'>
                {users.map((user, index) => (
                    <div className='playerContainer'
                        id={user.index}
                        key={index}
                        onClick={() => joinsTheGameHandler(user)}
                    >
                        <h3>{user.name}</h3>
                        <p>{user.scores.join(' , ')}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Login;