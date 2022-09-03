import React, { useState } from 'react'
import UserPool from '../../UserPool';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='email'>E-mail</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <label htmlFor='password'>Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Signup