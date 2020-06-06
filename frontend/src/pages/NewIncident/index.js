import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import erroImg from '../../assets/error.png';
import api from '../../services/api';

export default function Profile() {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [value, setValue] = useState('');

   const ongId = localStorage.getItem('ongId');

   const history = useHistory();

   async function handleNewIncident(e) {
      e.preventDefault();

      const data = {
         title,
         description,
         value,
      }

      try {
         await api.post('incidents', data, {
            headers: {
               Authorization: ongId
            }
         });

         history.push('/profile');
      } catch (err) {
         alert('Erro ao cadastrar caso, tente novamente');
      }
   }

   if(!ongId) {
      return (
         <div className="new-incident-container">
            <div className="content">
               <section>
                  <img src={logoImg} alt="Be The Hero"/>
                  <h1>Erro</h1>
                  <p>Você não tem permissão para acessar esta página.</p>

                  <Link to="/" className="back-link"><FiLogIn size={16} color="#E02041" /> Fazer logon</Link>
               </section>

               <img src={erroImg} width="100%" alt="Be The Hero"/>
            </div>
         </div>
      );
   }

   return (
      <div className="new-incident-container">
         <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero"/>
               <h1>Cadastrar novo caso</h1>
               <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

               <Link to="/profile" className="back-link"><FiArrowLeft size={16} color="#E02041" /> Voltar para home</Link>
            </section>

            <form onSubmit={handleNewIncident}>
               <input 
                  placeholder="Título do caso" 
                  value={title}
                  onChange={e => setTitle(e.target.value)}
               />
               <textarea 
                  placeholder="Descrição"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
               />
               <input 
                  placeholder="Valor em reais" 
                  value={value}
                  onChange={e => setValue(e.target.value)}
               />

               <button className="button" type="submit">Cadastrar</button>
            </form>
         </div>
      </div>
   )
}