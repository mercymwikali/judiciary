import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [value, onChange] = useState(new Date());
  const [eventDescription, setEventDescription] = useState('');
  const [events, setEvents] = useState([]);

  const addEvent = () => {
    const newEvent = {
      date: value,
      description: eventDescription.trim() !== '' ? eventDescription : 'No Description',
    };
    setEvents([...events, newEvent]);
    setEventDescription('');
  };

  return (
    <div className=' bg-transparent'>
      <Calendar onChange={onChange} value={value} />
      <div>
        <h2 className='text-primary'>Events:</h2>
        <ul>
          {events.map((event, index) => (
            <li className='text-primary' key={index}>
              {event.date.toLocaleDateString()}: {event.description}
            </li>
          ))}
        </ul>
        <div className="mb-2">
          <label htmlFor="eventDescription" className="form-label text-primary">Event Description:</label>
          <input
            type="text"
            id="eventDescription"
            className="form-control"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </div>
        <button onClick={addEvent} className='btn btn-primary'>Add Event</button>
      </div>
    </div>
  );
}

export default MyCalendar;
