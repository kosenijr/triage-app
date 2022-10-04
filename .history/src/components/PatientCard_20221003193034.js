import React from 'react'
import styles from '../styles/PatientCard.module.css'

const PatientCard = ({ patient, onStartDischarge, onCompleteDischarge, updateRoomAssignment }) => {
    return (
        <div className={styles['patient-card']}>
            <h3>{patient?.name}</h3>
            <div>
            <h4>Priority</h4>
            <span>1</span><span>2</span><span>3</span>

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
            {patient?.stage === 'treating' && <button onClick={() => onStartDischarge(patient)}>Start Discharge Process</button>}

            {patient?.stage === 'discharging' && <button onClick={() => onCompleteDischarge(patient)}>Discharge Process Complete</button>}


        </div >

    )
}

export default PatientCard
