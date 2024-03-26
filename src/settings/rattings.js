import React, { useState } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import UserIcon from './../img/user-icon.jpg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link } from 'react-router-dom';
import RattingsIcon from './../img/rattings-icone.png'
import  styles from './../css/rattings.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faSignOutAlt, faCaretDown, faUser, faStar  } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Settings = () => {

  {/*===========PRIMEIRA UNIDADE========*/}

    const [isShowHiddenProf1, setIsShowHiddenProf1] = useState(true);

  const showHiddenProf1 = () => {
    setIsShowHiddenProf1(!isShowHiddenProf1);
  };



  let displayShowHiddenProf1;
  if (isShowHiddenProf1) {
    displayShowHiddenProf1 = 'none';
  } else {
    displayShowHiddenProf1 = 'block';
  }



{/*===========/PRIMEIRA UNIDADE========*/}



{/*===========SEGUNDA UNIDADE========*/}

  const [isShowHiddenProf2, setIsShowHiddenProf2] = useState(true);

  const showHiddenProf2 = () => {
    setIsShowHiddenProf2(!isShowHiddenProf2);
  };



  let displayShowHiddenProf2;
  if (isShowHiddenProf2) {
    displayShowHiddenProf2 = 'none';
  } else {
    displayShowHiddenProf2 = 'block';
  }


{/*===========/SEGUNDA UNIDADE========*/}


const uma_estrela = (

<div className={styles.estrelaIcon} style={{ display: 'flex',  position: 'relative', top: '-20px', right: '30px', float: 'right', backgrund: 'pink', textAlign: 'right', color: '#353738' }}>

        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
      </div>

      )


const quatro_estrelas = (

<div className={styles.estrelaIcon} style={{ display: 'flex',  position: 'relative', top: '-20px', right: '30px', float: 'right', backgrund: 'pink', textAlign: 'right', color: '#353738' }}>

        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
      </div>

      )


const cinco_estrelas = (

<div className={styles.estrelaIcon} style={{ display: 'flex',  position: 'relative', top: '-20px', right: '30px', float: 'right', backgrund: 'pink', textAlign: 'right', color: '#353738' }}>

        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
      </div>

      )




  return (
    <>

      <div className={styles.all_container}>

      

      

      


      <div className={styles.container_agendamentos}>

        <div className={styles.ul}>

        <div className={styles.dash_header} style={{ border: 'none' }}>

<Link to="/settings" style={{textDecoration: 'none'}}>

<div className={styles.container_icone_sino}>

<FontAwesomeIcon className={styles.icone_sino} icon={faAngleLeft} style={{ color: '#fff', fontSize: '20px' }} />

</div>

</Link>

<div className={styles.titulo_agendamento} style={{ color: '#353738', fontSize: '30px' }}>Avaliações </div>


</div> {/*dash_header*/}

  <p style={{marginTop: '130px'}}></p>
      
  <div style={{ width: '100%', marginTop: '-85px' }}>

  <img style={{position: 'relative', top: '110px', width: '110px', float: 'left', marginLeft: '20px' }} src={RattingsIcon}/>

    <li className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent'}}>

    <li className={styles.container_btns} style={{ position: 'relative', backgroundColor: 'transparent', border: '1px solid rgb(255, 84, 0)', float: 'right', left: '50%', transform: 'translateX(-55%)', height: '40px', marginTop: '30px', width: '60%' }}>
    
    <label className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Edivaldo Wagner</label>
    
  </li>

    <li style={{ listStyle: 'none', marginTop: '40px',  }}>

  

      {uma_estrela}


    <p style={{ fontSize: '17px', color: '#353738', lineHeight: '25px', marginTop: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo ligula, efficitur a nisl ac, feugiat maximus nunc. Mauris vitae arcu et lacus sagittis lacinia.</p> </li>



  </li>

  <hr className={styles.border_bottom}/>

  </div>
 
   
<div style={{ width: '100%', marginTop: '-95px' }}>

  <img style={{position: 'relative', top: '110px', width: '110px', float: 'left', marginLeft: '20px' }} src={RattingsIcon}/>

    <li className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent'}}>

    <li className={styles.container_btns} style={{ position: 'relative', backgroundColor: 'transparent', border: '1px solid rgb(255, 84, 0)', float: 'right', left: '50%', transform: 'translateX(-55%)', height: '40px', marginTop: '30px', width: '60%' }}>
    
    <label className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Deivid Bastos</label>
    
  </li>

    <li style={{ listStyle: 'none', marginTop: '40px',  }}>

  
 
      {quatro_estrelas}


    <p style={{ fontSize: '17px', color: '#353738', lineHeight: '25px', marginTop: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo ligula, efficitur a nisl ac, feugiat maximus nunc. Mauris vitae arcu et lacus sagittis lacinia.</p> </li>



  </li>

  <hr className={styles.border_bottom}/>

  </div>


  <div style={{ width: '100%', marginTop: '-95px' }}>

  <img style={{position: 'relative', top: '110px', width: '110px', float: 'left', marginLeft: '20px' }} src={RattingsIcon}/>

    <li className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent'}}>

    <li className={styles.container_btns} style={{ position: 'relative', backgroundColor: 'transparent', border: '1px solid rgb(255, 84, 0)', float: 'right', left: '50%', transform: 'translateX(-55%)', height: '40px', marginTop: '30px', width: '60%' }}>
    
    <label className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Henrique Souza</label>
    
  </li>

    <li style={{ listStyle: 'none', marginTop: '40px',  }}>

  
 
      {cinco_estrelas}


    <p style={{ fontSize: '17px', color: '#353738', lineHeight: '25px', marginTop: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo ligula, efficitur a nisl ac, feugiat maximus nunc. Mauris vitae arcu et lacus sagittis lacinia.</p> </li>



  </li>

  <hr className={styles.border_bottom}/>

  </div>
  
  

        </div>  

      </div> {/*container_agendamentos*/}


      </div> {/*all-container*/}

      <p style={{ marginTop: '50px' }}></p>
  
    </>
  );
};

export default Settings;
