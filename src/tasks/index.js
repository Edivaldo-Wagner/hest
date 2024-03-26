import React from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import LogoDash from './../img/logo-dashboard.svg'
import  styles from './../css/tasks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'react-bootstrap';
import { faHome, faWallet, faCalendar, faTasks, faCog, faBell, faUserCircle, faClock, faLock, faChevronLeft, faChevronRight, faPlusCircle, faSortAmountUp, faEuroSign, faQrcode, faPaperPlane, faCoins, faCopy, faBarcode, faMoneyCheckAlt, faHandHoldingUsd, faPen, faPlus, faBox    } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Dashboard = () => {

  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Vendas Mensais',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  
  


  return (
    <>

      <Header className={styles.header_menu}/>

      <div className={styles.all_container}>

      

      <div class={styles.dash_header} style={{ border: 'none' }}>

      <FontAwesomeIcon className={styles.icone_sino} icon={faBell} style={{ color: '#353738', fontSize: '20px' }} />

      <div className={styles.titulo_agendamento} style={{ color: '#353738' }}>Tarefas</div>

      </div> {/*dash_header*/}

      


      <div className={styles.container_agendamentos}>

        <div className={styles.ul}>

        <li className={styles.container_proximo_cliente} style={{ backgroundColor: 'rgb(255, 84, 0)', borderRadius: '5px', color: '#fff', height: '40px', display: 'flex', marginLeft: '3px', alignItems: 'center' }}>

          <label style={{ flex: 1, textAlign: 'center', marginTop: '8px', fontSize: '14px' }}>Grupo 01</label>

          <FontAwesomeIcon className={styles.iconesino} icon={faPen} style={{ position: 'relative', float: 'right', right: '20px', top: '-2px', color: '#fff', fontSize: '18px'}} />
        
        </li>

        <Table striped bordered responsive style={{ width: '100%', fontSize: '13px' }}>
              <thead>
                <tr style={{ border: '1px solid red' }}>
                  <th>Tarefa</th>
                  <th>Prazo</th>
                  <th>Prioridade</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pagar Conta</td>
                  <td>02/03</td>
                  <td>Alta</td>
                  <td>Em processo</td>
                </tr>
                <tr>
                  <td>Salário</td>
                  <td>02/04</td>
                  <td>Média</td>
                  <td>Feito</td>
                </tr>
                <tr>
                  <td>Limpeza</td>
                  <td>02/08</td>
                  <td>Baixa</td>
                  <td>Em processo</td>
                </tr>
              </tbody>
            </Table>

            <li className={styles.container_proximo_cliente} style={{ backgroundColor: 'rgb(255, 84, 0)', borderRadius: '5px', color: '#fff', height: '40px', display: 'flex', marginLeft: '3px', alignItems: 'center' }}>

              <div style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fff', borderRadius: '50%', width: '18px', height: '18px', color: 'rgb(255, 84, 0)' }}>

               <FontAwesomeIcon className={styles.iconesino} icon={faPlus} style={{ position: 'relative', textAlign: 'center', width: '100%', top: '-4px', color: 'rgb(255, 84, 0)', fontSize: '11px'}} />
            
              </div>

            </li>

            <li className={styles.container_proximo_cliente} style={{ backgroundColor: 'rgb(255, 84, 0)', borderRadius: '5px', color: '#fff', height: '40px', display: 'flex', marginLeft: '3px', alignItems: 'center' }}>

              <label style={{ flex: 1, textAlign: 'center', marginTop: '8px', fontSize: '14px' }}>Novo Grupo de Tarefas</label>

              <div style={{ position: 'relative', right: '10px', backgroundColor: '#fff', borderRadius: '50%', width: '18px', height: '18px', color: 'rgb(255, 84, 0)' }}>

               <FontAwesomeIcon className={styles.iconesino} icon={faPlus} style={{ position: 'relative', textAlign: 'center', width: '100%', top: '-4px', color: 'rgb(255, 84, 0)', fontSize: '11px'}} />
            
              </div>

            </li>

            <li className={styles.container_proximo_cliente} style={{ backgroundColor: 'rgb(255, 84, 0)', borderRadius: '5px', color: '#fff', height: '40px', display: 'flex', marginLeft: '3px', marginTop: '-5px', alignItems: 'center' }}>

              <label style={{ flex: 1, textAlign: 'center', marginTop: '8px', fontSize: '14px' }}>Tarefas Arquivadas</label>

              <div style={{ position: 'relative', right: '10px', backgroundColor: '#fff', borderRadius: '50%', width: '18px', height: '18px', color: 'rgb(255, 84, 0)' }}>

               <FontAwesomeIcon className={styles.iconesino} icon={faBox} style={{ position: 'relative', textAlign: 'center', width: '100%', top: '-4px', color: 'rgb(255, 84, 0)', fontSize: '11px'}} />
            
              </div>

            </li>
          
        </div>  

      </div> {/*container_agendamentos*/}

      


      </div> {/*all-container*/}
  
    </>
  );
};

export default Dashboard;
