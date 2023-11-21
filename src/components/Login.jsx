import Button from './Button';
import './components style/Login.css';
import { FaPlus } from "react-icons/fa";
import React, { useState } from 'react';

const Login = ({ setLogin, gamePlayers }) => {

    const joinsTheGameHandler = (player) => {
        if(!player.inGame) {
            gamePlayers.push(player);
        }
        else {
            gamePlayers.filter((gamePlayer) => gamePlayer.name !== player.name)
        } 
        player.name = !player.name;
    }

    const getFromLocalStorage = (key) => {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : [];
    };

    const [name, setName] = useState('');
    const [users, setUsers] = useState(getFromLocalStorage('users'));

    const inputChangeHandler = (event) => {
        setName(event.target.value);
    };

    const addHandler = () => {
        if (name === '') {
            return alert('Invalid name!');
        }
        let myUsers = getFromLocalStorage('users');
        if (myUsers.find((user) => user.name === name)) {
            return alert('User already exist!');
        }
        myUsers.push({ name: name, scores: [], index: users.length, inGame: false });
        localStorage.setItem('users', JSON.stringify(myUsers));
        setUsers(myUsers);
        setName('');
    };

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
                action={setLogin}
                value='Start Game'
            />
            {users.map((user) => {
                <div
                    id={user.index}
                    onClick={(user) => joinsTheGameHandler(user)}
                >
                    <h3>{user.name}</h3>
                    <p>{user.scores}</p>
                </div>
            })}
        </div>
    )
}

export default Login;