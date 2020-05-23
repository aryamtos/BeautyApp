import React, { useState } from 'react';
import api from '../../services/api';
export default function Login({ history }) {


    const [email, setEmail] = useState('');

    //const [senha, setSenha] = useState('');

    /*
    
                    <input
                        type="password"
                        id="password"
                        placeholder="senha"
                        value={senha}
                        onChange={event => setSenha(event.target.value)}
                    />
    */


    async function handleSubmit(event) {

        event.preventDefault();

        //const response2 = await api.post('/User', {nome}); 
        //const response = await api.post('/User', { email, senha });
        const response = await api.post('/User', { email });
        const { _id } = response.data;

        localStorage.setItem('user', _id);
        history.push('/dashboard');
    }

    return (

        <>
            <p>
                <strong>Login in to your account
        </strong>
            </p>
            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <button className="btn" type="submit">Log in</button>
                <div>
                    <p>Don't have an account? <strong>Cadastrar</strong></p>
                </div>

            </form>
        </>
    )
}