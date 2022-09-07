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
                    <select name="pets" id="assign-room">
                        <option value="">--Please choose an option--</option>
                        <option value="room-1">room 101</option>
                        <option value="room-2">room 102</option>
                        <option value="room-3">room 103</option>
                        <option value="room-4">room 104</option>
                        <option value="room-5">room 105</option>
                        <option value="room-6">room 106</option>
                    </select>
                </div>
            }

        </div >

    )
}

export default PatientCard
