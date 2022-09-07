import React from 'react'
import styles from '../styles/PatientCard.module.css'

export const PatientCard = ({ patient }) => {
    return (
        <div className={styles['patient-card']}>
            <h3>{patient.name}</h3>
            <p>Date of Birth: {patient.dob}</p>
            <h4>Chief Complaint:</h4>
            <p>{patient.complaint}</p>
            {patient.stage === 'triage' &&  
            <div>
            </div>    
            <label for="pet-select">Choose a pet:</label>
            <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>

            }

        </div>

    )
}
