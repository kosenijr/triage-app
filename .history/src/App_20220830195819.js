import React, { useState } from 'react';
import { FaEllipsisV, FaSearch, FaBolt, FaCalendarAlt, FaUndo } from "react-icons/fa";
import styles from '../src/styles/App.module.css'
import '../src/styles/Global.module.css'




function App() {

  const [triage, setTriage] = useState([{ name: 'John Smith', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt officiis perferendis, non quos veritatis adipisci ut! At ducimus iste quos!' }]);
  const [treating, setTreating] = useState([{ name: 'John Smith', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt officiis perferendis, non quos veritatis adipisci ut! At ducimus iste quos!' }]);
  const [discharge, setDischarging] = useState([{ name: 'John Smith', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt officiis perferendis, non quos veritatis adipisci ut! At ducimus iste quos!' }]);


  return (
    <div className={styles['App']}>
      <div className={styles['left-nav']}>
        <FaSearch className='mb-4 mt-4' />
        <FaBolt className='mb-4' />
        <FaCalendarAlt className='mb-4' />
        <FaUndo className='mb-4' />
      </div>
      <div className={styles['right-content']}>
        <header className={styles['header']}>
          <div>
            <span className={styles['title']}>Mount Sinai</span>
            <span className={styles['sub-title']}>Emergency Department</span>
          </div>
          <div>
            <FaEllipsisV />

          </div>
        </header>

        <div className={styles['processing']}>
          <div className={styles['process-columns']}>
            <h2>Triage</h2>
            {triage.map(elem => {
              return (
                <div className={styles['patient-card']}>
                  <h3>{ }</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt officiis perferendis, non quos veritatis adipisci ut! At ducimus iste quos!</p>
                </div>
              )
            })}
          </div>
          <div className={styles['process-columns']}>
            <h2>Treating</h2>
            <div className={styles['patient-card']}>
              <h3>John Smith</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt officiis perferendis, non quos veritatis adipisci ut! At ducimus iste quos!</p>
            </div>

          </div>
          <div className={styles['process-columns']}>
            <h2>Discharging</h2>
            <div className={styles['patient-card']}>
              <h3>John Smith</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt officiis perferendis, non quos veritatis adipisci ut! At ducimus iste quos!</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// styles is a regular object