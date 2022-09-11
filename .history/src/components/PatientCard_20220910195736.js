import React from 'react'
import styles from '../styles/PatientCard.module.css'

const PatientCard = ({ patient, updateRoomAssignment }) => {

    return (
        <div className={styles['patient-card']}>
            <h3>{patient?.name}</h3>
            <p>Date of Birth: {patient?.dob}</p>
            <h4>Chief Complaint:</h4>
            <p>{patient?.complaint}</p>
            {patient?.stage === 'triage' &&
                <div>
                    <label for="assign-room">Assign to room:</label>
                    <select name="rooms" id="assign-room" onChange={(event) => updateRoomAssignment(patient, event.target.value =)}>
                        <option value="Room 101">--Please choose an option--</option>
                        <option value="Room 102">Room 101</option>
                        <option value="Room 103">Room 102</option>
                        <option value="Room 104">Room 103</option>
                        <option value="Room 10">Room 104</option>
                        <option value="Room 10">Room 105</option>
                        <option value="Room 10">Room 106</option>
                    </select>
                </div>
            }
            {patient?.stage === 'treating' && <button>Start Discharge Process</button>}

            {patient?.stage === 'discharging' && <button>Discharge Process Complete</button>}


        </div >

    )
}

export default PatientCard
