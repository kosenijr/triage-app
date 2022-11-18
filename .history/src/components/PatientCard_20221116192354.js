import React, { useState } from 'react'
import styles from '../styles/PatientCard.module.css'
import { ROUTES } from '../constants'

const PatientCard = ({ patient, onStartDischarge, onCompleteDischarge, updateRoomAssignment }) => {
    const [priority, setPriority] = useState(patient.priority);
    const onPriorityChange = (newPriority) => {
        setPriority(newPriority);
        const newPatientRecord = {
            ...patient,
            priority: newPriority
        }
        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify(newPatientRecord),
        };

        fetch(ROUTES['GET_EACH_PATIENT'], requestOptions)
            .then(result => result.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
    return (
        <div className={styles['patient-card']}>
            <div className={styles['inner-patient-card']}>
                <h3>{patient?.name}</h3>
                <div className={styles['card-priority']}>
                    <h4>Priority</h4>
                    <span className={priority === 1 ? 'font-bold' : ''} onClick={() => onPriorityChange(1)}>1</span>
                    <span className={priority === 2 ? 'font-bold' : ''} onClick={() => onPriorityChange(2)}>2</span>
                    <span className={priority === 3 ? 'font-bold' : ''} onClick={() => onPriorityChange(3)}>3</span>
                </div>
                <p>Date of Birth: {patient?.dob}</p>
                <h4>Chief Complaint:</h4>

                <p>{patient?.complaint}</p>

                {patient?.stage === 'triage' &&
                    <div>
                        <label htmlFor="assign-room">Assign to room:</label>
                        <select name="rooms" id="assign-room" onChange={(e) => updateRoomAssignment(patient, e.target.value)}>
                            <option value="">--Please choose an option--</option>
                            <option value="treating-room">Treating Room</option>
                            <option value="discharging-room">Discharging Room</option>

                        </select>
                    </div>
                }
                {patient?.stage === 'treating' && <button className={styles[-button]} onClick={() => onStartDischarge(patient)}>Start Discharge Process</button>}

                {patient?.stage === 'discharging' && <button className={styles[-button]} onClick={() => onCompleteDischarge(patient)}>Discharge Process Complete</button>}


            </div >
        </div>

    )
}

export default PatientCard
