import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <img src="concert-bg.jpg" className='home-bg' />
            <div className='home-container'>
                <h1 className='home-title'>Event Management Website</h1>
                <div className='home-links'>
                    <Link to='/events'><button className='home-btn'>Events</button></Link> 
                    <Link to='/attendees'><button className='home-btn'>Attendees</button></Link> 
                    <Link to='/registrations'><button className='home-btn'>Registrations</button></Link> 
                    <Link to='/schedules'><button className='home-btn'>Schedules</button></Link> 
                    <Link to='/venues'><button className='home-btn'>Venues</button></Link> 
                </div>
            </div>
        </div>
    )
}

export default Home