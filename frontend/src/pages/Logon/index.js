import React, { useState } from 'react';
import './style.css';
import herosImg from '../../assets/heros.png';
import logoImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'

import api from '../../Services/api';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();


        try {

            const res = await api.post('session', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', res.data.name);

            history.push('/profile');

        } catch (err) {
            alert('Falha no Login, Tente Novamente');

        }


    }

return (
    <div className="logon-container">

    <section className="form">

    <img src={logoImg} alt="Be The Hero" />

    <form onSubmit={handleLogin}>

        <h1>Faça seu Logon</h1>
        <input type="text" placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}></input>
        <button className="button" type="submit">Entrar</button>
        <Link className="back-link" to="./register"><FiLogIn size={16} color="#E02041" /> Não tenho Cadastro</Link>


    </form>

    </section>

    <img src={herosImg} alt="heros" />

    </div>
);


}