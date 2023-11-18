import Button from './Button';
import './components style/Login.css';
import React, { useState } from 'react';

const Login = (props) => {

    const [name, setName] = useState('');
    const [storageStatus, setStorageStatus] = useState(false);

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const getFromLocalStorage = (key) => {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : [];
    };

    const singUpHandler = () => {
        if (name === '') {
            return alert('Invalid name!');
        }
        let users = getFromLocalStorage('users');
        if (users.find((user) => user.name === name)) {
            setName('');
            return alert('User already exist!');
        }
        users.push({ name: name, scores: [] });
        localStorage.setItem('users', JSON.stringify(users));
        setName('');
        setStorageStatus(true)
    };

    return (
        <div className='loginContainer'>
            <input type="text" value={name} onChange={handleInputChange} placeholder='Name' />
            <Button
                action={singUpHandler}
                value='Sing-Up'
            />
            {storageStatus &&
                <Button
                    action={props.setLogin}
                    value='Login'
                />
            }
            {getFromLocalStorage('users').map((user, index) => (
                <p key={`loginContainer_ ${index}`}>Name: {user.name}, Scores: {user.scores.join(' , ')}</p>
            ))}
        </div>
    );
};

export default Login;