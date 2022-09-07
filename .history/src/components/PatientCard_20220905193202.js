import React from 'react'

export const PatientCard = ({ patient }) => {
    return (
        <div>
            <h3>{patient.name}</h3>
            <p>{patient.description}</p>
        </div>

    )
}
