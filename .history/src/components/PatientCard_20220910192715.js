import React from 'react'
import styles from '../styles/PatientCard.module.css'

const PatientCard = ({ patient }) => {
    return (
        <div className={styles['patient-card']}>
            <h3>{patient?.name}</h3>
            <p>Date of Birth: {patient?.dob}</p>
            <h4>Chief Complaint:</h4>
            <p>{patient?.complaint}</p>
            {patient?.stage === 'triage' &&
                <div>
                    <label for="assign-room">Assign to room:</label>
                    <select name="rooms" id="assign-room" onChange={assignRoom}>
                        <option value="">--Please choose an option--</option>
                        <option value="room-1">Room 101</option>
                        <option value="room-2">Room 102</option>
                        <option value="room-3">Room 103</option>
                        <option value="room-4">Room 104</option>
                        <option value="room-5">Room 105</option>
                        <option value="room-6">Room 106</option>
                    </select>
                </div>
            }
            {patient?.stage === 'treating' && <button>Start Discharge Process</button>}

            {patient?.stage === 'discharging' && <button>Discharge Process Complete</button>}


        </div >

    )
}

export default PatientCard
