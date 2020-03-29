import React, { useState } from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../Services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [uf, setUf] = useState('');
    const [city, setCity] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
    e.preventDefault();

    const data = {
        name,
        email,
        whatsapp,
        uf,
        city,
    };

    try {
    const response = await api.post('ongs', data);

    alert(`Seu ID de Acesso: ${response.data.id}`);

    history.push('/');

    } catch (err) {
        alert('Erro no Cadastro, Tente Novamente');
    }
    }

return (

<div className="register-container">
    <div className="content">

        <section>
           

    <img src={logoImg} alt="Be The Hero" ></img>
    <h1>Cadastro</h1>
    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
    <Link className="back-link" to="./"><FiArrowLeft size={16} color="#E02041" /> Voltar para o Logon</Link>

           
        </section>

        <form onSubmit={handleRegister}>

        <input type="text" placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}></input>
        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}></input>
        <input type="text" placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}></input>
        
        <div className="input-group">

        <input type="text" placeholder="UF" style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)}></input>
        <input type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}></input>

        </div>

        <button className="button" type="submit" >Cadastrar</button>


        </form>

    </div>
</div>

); 

}