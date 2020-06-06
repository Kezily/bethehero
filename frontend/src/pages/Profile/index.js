import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
   const [incidents, setIncidents] = useState([]);

   const history = useHistory();

   const ongId = localStorage.getItem('ongId');
   const ongName = localStorage.getItem('ongName');

   useEffect(() => {
      api.get('profile', {
         headers: {
            Authorization: ongId,
         }
      }).then(response => {
         setIncidents(response.data);
      })
   }, [ongId]);

   async function handleDeleteIncident(id) {
      try {
         await api.delete(`incidents/${id}`, {
            headers: {
               Authorization: ongId,
            }
         });

         setIncidents(incidents.filter(incident => incident.id !== id));
      } catch (err) {
         alert('Erro ao deletar caso, tente novamente.');
      }
   }

   function handleLogout() {
      localStorage.clear();
      history.push('/');
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
            </div>
         </div>
      );
   }
   
   return (
      <div className="profile-container">
         <header>
            <img src={logoImg} alt="Be The Hero"/>
            <span>Bem vinda, {ongName}</span>

            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button onClick={handleLogout} type="button">
               <FiPower size={18} color="#E02041" />
            </button>
         </header>

         <h1>Casos cadastrados</h1>
         
         <ul>
            {incidents.map(incident => (
               <li key={incident.id}>
                  <strong>CASO:</strong>
                  <p>{incident.title}</p>

                  <strong>DESCRIÇÃO</strong>
                  <p>{incident.description}</p>

                  <strong>VALOR:</strong>
                  <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                  <button onClick={() => handleDeleteIncident(incident.id)} type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
               </li>
            ))}
         </ul>
      </div>
   );
}