import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Attendees.css'
import axios from 'axios'

const Attendees = () => {
    const [AttendeeID, setAttendeeID] = React.useState();
    const [FirstName, setFirstName] = React.useState();
    const [LastName, setLastName] = React.useState();
    const [Email, setEmail] = React.useState();
    const [Phone, setPhone] = React.useState();
    
    const [attendees, setAttendees] = React.useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/add_attendee", { AttendeeID, FirstName, LastName, Email, Phone })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:3001/attendees')
            .then(result => setAttendees(result.data))
            .catch(err => console.log(err))
    },[])

    return (
        <div className='attendees'>
            <h1 className='attendees-title'>Attendees</h1>
            <div className='add-attendees'>
                <h2 className='add-attendees-title'>Add Attendee</h2>
                <form className='attendees-form' onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="attendee-id" class="form-label attendees-label">Attendee ID</label>
                        <input type="number" class="form-control attendees-input" id="attendee-id" onChange={(e)=>{setAttendeeID(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="first-name" class="form-label attendees-label">First Name</label>
                        <input type="text" class="form-control attendees-input" id="first-name" onChange={(e)=>{setFirstName(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="last-name" class="form-label attendees-label">Last Name</label>
                        <input type="text" class="form-control attendees-input" id="last-name" onChange={(e)=>{setLastName(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label attendees-label">Email</label>
                        <input type="email" class="form-control attendees-input" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label attendees-label">Phone</label>
                        <input type="number" class="form-control attendees-input" id="phone" onChange={(e)=>{setPhone(e.target.value)}} />
                    </div>
                    <button className='attendees-btn'>Add Attendee</button>
                </form>
            </div>


            <div className="show-attendees">
                <h1>Attendees</h1>
                    <div className='show-attendees-container'>
                        <table className='show-attendees-table table table-hover'>
                            <thead>
                                <tr>
                                    <th scope="col">Attendee ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                            {attendees.map((attendee) => {
                                return <tr>
                                    <td>{attendee.AttendeeID}</td>
                                    <td>{attendee.FirstName}</td>
                                    <td>{attendee.LastName}</td>
                                    <td>{attendee.Email}</td>
                                    <td>{attendee.Phone}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default Attendees