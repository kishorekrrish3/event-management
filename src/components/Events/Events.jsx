import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Events.css'
import axios from 'axios'

const Events = () => {
    const [EventID, setEventID] = React.useState();
    const [EventName, setEventName] = React.useState();
    const [EventDate, setEventDate] = React.useState();
    const [EventTime, setEventTime] = React.useState();
    const [VenueID, setVenueID] = React.useState();
    
    const [events, setEvents] = React.useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/add_event", { EventID, EventName, EventDate, EventTime, VenueID })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:3001/events')
            .then(result => setEvents(result.data))
            .catch(err => console.log(err))
    },[])

    return (
        <div className='events'>
            <h1 className='events-title'>Events</h1>
            <div className='add-events'>
                <h2 className='add-events-title'>Add Event</h2>
                <form className='events-form' onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="event-id" class="form-label events-label">Event ID</label>
                        <input type="number" class="form-control events-input" id="event-id" onChange={(e)=>{setEventID(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="event-name" class="form-label events-label">Event Name</label>
                        <input type="text" class="form-control events-input" id="event-name" onChange={(e)=>{setEventName(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="event-date" class="form-label events-label">Event Date</label>
                        <input type="date" class="form-control events-input" id="event-date" onChange={(e)=>{setEventDate(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="event-time" class="form-label events-label">Event Time</label>
                        <input type="time" class="form-control events-input" id="event-time" onChange={(e)=>{setEventTime(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="venue-id" class="form-label events-label">Venue ID</label>
                        <input type="number" class="form-control events-input" id="venue-id" onChange={(e)=>{setVenueID(e.target.value)}} />
                    </div>
                    <button className='events-btn'>Add Event</button>
                </form>
            </div>


            <div className="show-events">
                <h1>Events</h1>
                    <div className='show-events-container'>
                        <table className='show-events-table table table-hover'>
                            <thead>
                                <tr>
                                    <th scope="col">Event ID</th>
                                    <th scope="col">Event Name</th>
                                    <th scope="col">Event Date</th>
                                    <th scope="col">Event Time</th>
                                    <th scope="col">Venue ID</th>
                                </tr>
                            </thead>
                            <tbody>
                            {events.map((event) => {
                                return <tr>
                                    <td>{event.EventID}</td>
                                    <td>{event.EventName}</td>
                                    <td>{event.EventDate.slice(0, 10)}</td>
                                    <td>{event.EventTime}</td>
                                    <td>{event.VenueID}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default Events