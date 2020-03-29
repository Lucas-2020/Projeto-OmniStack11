import React, { useState } from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../Services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNew(e) {
        e.preventDefault();

        const data = {

            title,
            description,
            value,
        };

        try { 

await api.post('incidents', data, {
   headers: {
       Authorization: ongId,
   } 
})
    history.push('/profile');

        }
        catch(err) {
            alert('Erro ao Cadastrar Caso, Tente Novamente.');
        }

    }
    

    return (

<div className="new-container">
    <div className="content">

        <section>
           

    <img src={logoImg} alt="Be The Hero" ></img>
    <h1>Cadastrar novo Caso</h1>
    <p>descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
    <Link className="back-link" to="../profile"><FiArrowLeft size={16} color="#E02041" /> Voltar para Home</Link>

           
        </section>

        <form onSubmit={handleNew}>

    <input type="text" placeholder="Título do Caso" value={title} onChange={e => setTitle(e.target.value)}></input>

    <textarea placeholder="descrição" value={description} onChange={e => setDescription(e.target.value)}></textarea>

    <input type="text" placeholder="Valor em Reais" value={value} onChange={e => setValue(e.target.value)}></input>
    

    <button type="submit" className="button">Cadastrar</button>


        </form>

    </div>
</div>

    );

}