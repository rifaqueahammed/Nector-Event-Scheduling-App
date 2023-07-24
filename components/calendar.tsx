import React from 'react';
import { Calendar, Event } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { startOfDay, addHours } from 'date-fns';



// Define your events data with the Event interface
interface MyEvent extends Event {
  title: string;
  start: Date;
  end: Date;
}

const MyCalendar: React.FC = () => {
  // Sample events data
  const events: MyEvent[] = [
    {
      title: 'Meeting',
      start: startOfDay(new Date()),
      end: addHours(new Date(), 1),
    },
    {
      title: 'Event 2',
      start: addHours(new Date(), 2),
      end: addHours(new Date(), 3),
    },
    // Add more events here
  ];

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={Calendar.momentLocalizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px' }}
      />
    </div>
  );
};

export default MyCalendar;
