import React, { useEffect, useState } from 'react';
import { FaEllipsisV, FaSearch, FaBolt, FaCalendarAlt, FaUndo } from "react-icons/fa";
import styles from '../src/styles/App.module.css'
import '../src/styles/Global.module.css'
import { ROUTES } from '../src/constants'

const log = console.log;



function App() {

  const [patientRecords, setPatientRecords] = useState([]);

  useEffect(() => {
    fetch(ROUTES[GET_ALL_PATIENTS])
      .then(res => res.json())
      .then(res => setPatientRecords(res.data))
  }, [])

  log(patientRecords);

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
            {.map((elem, index) => {
              return (
                <div key={index} className={styles['patient-card']}>
                  <h3>{elem.name}</h3>
                  <p>{elem.description}</p>
                </div>
              )
            })}
          </div>
          <div className={styles['process-columns']}>
            <h2>Treating</h2>
            {treating.map((elem, index) => {
              return (
                <div key={index} className={styles['patient-card']}>
                  <h3>{elem.name}</h3>
                  <p>{elem.description}</p>
                </div>
              )
            })}

          </div>
          <div className={styles['process-columns']}>
            <h2>Discharging</h2>
            {discharging.map((elem, index) => {
              return (
                <div key={index} className={styles['patient-card']}>
                  <h3>{elem.name}</h3>
                  <p>{elem.description}</p>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// styles is a regular object