import React, { useState } from 'react'
import styles from '../styles/Modal.module.css'
import { GrClose } from "react-icons/gr";



export default function Modal({ onCreatePatient, setIsModalOpen }) {
    const [name, setName] = useState('');
    const [dob, setDOB] = useState('');
    const [complaint, setComplaint] = useState('');
    const [priority, setPriority] = useState(3);
    const [room, setRoom] = useState('triage');
    const [stage, setStage] = useState('triage');


    const onSubmit = (e) => {
        e.preventDefault();
        const patient = {
            name,
            dob,
            complaint,
            priority,
            room,
            stage
        }
        onCreatePatient(patient);
    }

    return (
        <div className={styles['modal']}>
            < GrClose className={styles['cancel-modal']} onClick={() => setIsModalOpen(false)} />
            <form action="">
                <div className={styles['input-group']}>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} id="name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="{styles['input-group']">

                </div>
               
                <div className="{styles['input-group']">

                </div>
                <input type="text" value={complaint} onChange={(e) => setComplaint(e.target.value)} />
                <div className="{styles['input-group']">

                </div>
                <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} />
                <div className="{styles['input-group']">

                </div>
                <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} />
                <div className="{styles['input-group']">

                </div>
                <input type="text" value={stage} onChange={(e) => setStage(e.target.value)} />
                <button onClick={(e) => onSubmit(e)}>Submit</button>
            </form>
        </div>

    )
}
