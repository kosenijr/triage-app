import React from 'react'
import styles from '../styles/PatientCard.module.css'

export const PatientCard = ({ patient }) => {
    return (
        <div className={styles['patient-card']}>
            <h3>{patient.name}</h3>
            <DOB>{patient.dob}</DOB>
            <p>{patient.complaint}</p>
        </div>

    )
}
