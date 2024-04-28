import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Schedules.css'
import axios from 'axios'

const Schedules = () => {
    const [ScheduleID, setScheduleID] = useState();
    const [EventID, setEventID] = useState();
    const [StartTime, setStartTime] = useState();
    const [EndTime, setEndTime] = useState();
    const [Description, setDescription] = useState();
    
    const [schedules, setSchedules] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/add_schedule", { ScheduleID, EventID, StartTime, EndTime, Description })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:3001/schedules')
            .then(result => setSchedules(result.data))
            .catch(err => console.log(err))
    },[])

    return (
        <div className='schedules'>
            <h1 className='schedules-title'>Schedules</h1>
            <div className='add-schedules'>
                <h2 className='add-schedules-title'>Add Schedule</h2>
                <form className='schedules-form' onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="schedule-id" class="form-label schedules-label">Schedule ID</label>
                        <input type="number" class="form-control schedules-input" id="schedule-id" onChange={(e)=>{setScheduleID(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="event-id" class="form-label schedules-label">Event ID</label>
                        <input type="number" class="form-control schedules-input" id="event-id" onChange={(e)=>{setEventID(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="start-time" class="form-label schedules-label">Start Time</label>
                        <input type="time" class="form-control schedules-input" id="start-time" onChange={(e)=>{setStartTime(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="end-time" class="form-label schedules-label">End Time</label>
                        <input type="time" class="form-control schedules-input" id="end-time" onChange={(e)=>{setEndTime(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label schedules-label">Description</label>
                        <input type="text" class="form-control schedules-input" id="description" onChange={(e)=>{setDescription(e.target.value)}} />
                    </div>
                    <button className='schedules-btn'>Add Schedule</button>
                </form>
            </div>


            <div className="show-schedules">
                <h1>Schedules</h1>
                    <div className='show-schedules-container'>
                        <table className='show-schedules-table table table-hover'>
                            <thead>
                                <tr>
                                    <th scope="col">Schedule ID</th>
                                    <th scope="col">Event ID</th>
                                    <th scope="col">Start Time</th>
                                    <th scope="col">End Time</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            {schedules.map((schedule) => {
                                return <tr>
                                    <td>{schedule.ScheduleID}</td>
                                    <td>{schedule.EventID}</td>
                                    <td>{schedule.StartTime.slice(0, 10)}</td>
                                    <td>{schedule.EndTime.slice(0, 10)}</td>
                                    <td>{schedule.Description}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default Schedules