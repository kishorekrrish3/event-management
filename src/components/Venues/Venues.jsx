import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Venues.css'
import axios from 'axios'

const Venues = () => {
    const [VenueID, setVenueID] = useState();
    const [VenueName, setVenueName] = useState();
    const [Address, setAddress] = useState();
    const [Capacity, setCapacity] = useState();
    
    const [venues, setVenues] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/add_venue", { VenueID, VenueName, Address, Capacity })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:3001/venues')
            .then(result => setVenues(result.data))
            .catch(err => console.log(err))
    },[])

    return (
        <div className='venues'>
            <h1 className='venues-title'>Venues</h1>
            <div className='add-venues'>
                <h2 className='add-venues-title'>Add Venue</h2>
                <form className='venues-form' onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="venue-id" class="form-label venues-label">Venue ID</label>
                        <input type="number" class="form-control venues-input" id="venue-id" onChange={(e)=>{setVenueID(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="venue-name" class="form-label venues-label">Venue Name</label>
                        <input type="text" class="form-control venues-input" id="venue-name" onChange={(e)=>{setVenueName(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label venues-label">Address</label>
                        <input type="text" class="form-control venues-input" id="address" onChange={(e)=>{setAddress(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="capacity" class="form-label venues-label">Capacity</label>
                        <input type="number" class="form-control venues-input" id="capacity" onChange={(e)=>{setCapacity(e.target.value)}} />
                    </div>
                    <button className='venues-btn'>Add Venue</button>
                </form>
            </div>


            <div className="show-venues">
                <h1>Venues</h1>
                    <div className='show-venues-container'>
                        <table className='show-venues-table table table-hover'>
                            <thead>
                                <tr>
                                    <th scope="col">Venue ID</th>
                                    <th scope="col">Venue Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Capacity</th>
                                </tr>
                            </thead>
                            <tbody>
                            {venues.map((venue) => {
                                return <tr>
                                    <td>{venue.VenueName}</td>
                                    <td>{venue.VenueID}</td>
                                    <td>{venue.Address}</td>
                                    <td>{venue.Capacity}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default Venues