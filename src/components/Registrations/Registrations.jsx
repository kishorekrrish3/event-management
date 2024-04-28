import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Registrations.css'
import axios from 'axios'

const Registrations = () => {
    const [RegistrationID, setRegistrationID] = useState();
    const [EventID, setEventID] = useState();
    const [AttendeeID, setAttendeeID] = useState();
    const [RegistrationDate, setRegistrationDate] = useState();
    
    const [registrations, setRegistrations] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/add_registration", { RegistrationID, EventID, AttendeeID, RegistrationDate })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:3001/registrations')
            .then(result => setRegistrations(result.data))
            .catch(err => console.log(err))
    },[])

    return (
        <div className='registrations'>
            <h1 className='registrations-title'>Registrations</h1>
            <div className='add-registrations'>
                <h2 className='add-registrations-title'>Add Registration</h2>
                <form className='registrations-form' onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="registration-id" class="form-label registrations-label">Registration ID</label>
                        <input type="number" class="form-control registrations-input" id="registration-id" onChange={(e)=>{setRegistrationID(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="event-id" class="form-label registrations-label">Event ID</label>
                        <input type="number" class="form-control registrations-input" id="event-id" onChange={(e)=>{setEventID(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="attendee-id" class="form-label registrations-label">Attendee ID</label>
                        <input type="number" class="form-control registrations-input" id="attendee-id" onChange={(e)=>{setAttendeeID(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="registration-date" class="form-label registrations-label">Registration Date</label>
                        <input type="date" class="form-control registrations-input" id="registration-date" onChange={(e)=>{setRegistrationDate(e.target.value)}} />
                    </div>
                    <button className='registrations-btn'>Add Registration</button>
                </form>
            </div>


            <div className="show-registrations">
                <h1>Registrations</h1>
                    <div className='show-registrations-container'>
                        <table className='show-registrations-table table table-hover'>
                            <thead>
                                <tr>
                                    <th scope="col">Registration ID</th>
                                    <th scope="col">Event ID</th>
                                    <th scope="col">Attendee ID</th>
                                    <th scope="col">Event Date</th>
                                </tr>
                            </thead>
                            <tbody>
                            {registrations.map((registration) => {
                                return <tr>
                                    <td>{registration.RegistrationID}</td>
                                    <td>{registration.EventID}</td>
                                    <td>{registration.AttendeeID}</td>
                                    <td>{registration.RegistrationDate.slice(0, 10)}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default Registrations