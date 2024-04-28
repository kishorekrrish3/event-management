import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Events from './components/Events/Events';
import Registrations from './components/Registrations/Registrations';
import Schedules from './components/Schedules/Schedules';
import Venues from './components/Venues/Venues';
import Attendees from './components/Attendees/Attendees';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/registrations' element={<Registrations />} />
          <Route path='/schedules' element={<Schedules />} />
          <Route path='/venues' element={<Venues />} />
          <Route path='/attendees' element={<Attendees />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
