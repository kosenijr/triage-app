import React, { useEffect, useState } from 'react';
import { FaEllipsisV, FaSearch, FaBolt, FaCalendarAlt, FaUndo } from "react-icons/fa";
import styles from '../src/styles/App.module.css'
import PatientCard from './components/PatientCard'
import '../src/styles/Global.module.css'
import { ROUTES } from '../src/constants'
import Modal from './components/Modal'

const log = console.log;



function App() {

  const [patientRecords, setPatientRecords] = useState([]);
  const [numOfPatients, setNumOfPatients] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(ROUTES['GET_ALL_PATIENTS'])
      .then(res => res.json())
      .then(res => setPatientRecords(res))
  }, []);

  useEffect(() => {
    setNumOfPatients(patientRecords.length);
  }, [patientRecords]);

  const onRoomAssignment = (patient, room) => {
    const oldPatientRecord = patient;
    const newPatientRecord = {
      id: patient.id,
      name: patient.name,
      dob: patient.dob,
      complaint: patient.complaint,
      priority: patient.priority,
      room: patient.room,
      stage: 'treating'
      
    }
    

    setPatientRecords(patientRecords.map((record) => {
      if (record.id === patient.id) {
        record.room = room;
        record.stage = 'treating';
      }
      return record;
    }));

    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify(newPatientRecord),
    };

    fetch("https://cw4ccp3r5d.execute-api.us-east-2.amazonaws.com/Prod/patient/", requestOptions)
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

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
        <div>{numOfPatients}</div>
        <Modal />
        <div className={styles['processing']}>
          <div className={styles['process-columns']}>
            <h2>Triage</h2>
            {patientRecords.map((patient, index) => {
              log(patient)
              if (patient.stage === 'triage') {
                return (
                  <PatientCard key={index} patient={patient} updateRoomAssignment={onRoomAssignment} />
                )
              }

            })}
          </div>
          <div className={styles['process-columns']}>
            <h2>Treating</h2>
            {patientRecords.map((patient, index) => {

              if (patient.stage === 'treating') {
                return (
                  <PatientCard key={index} patient={patient} updateRoomAssignment={onRoomAssignment} />
                )
              }

            })}

          </div>
          <div className={styles['process-columns']}>
            <h2>Discharging</h2>
            {patientRecords.map((patient, index) => {

              if (patient.stage === 'discharging') {
                return (
                  <PatientCard key={index} patient={patient} updateRoomAssignment={onRoomAssignment} />
                )
              }

            })}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// styles is a regular object