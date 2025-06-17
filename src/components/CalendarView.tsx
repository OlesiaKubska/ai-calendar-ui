import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";

interface Event {
  title: string;
  start: string;
  end: string;
}

export default function CalendarView() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:5047/api/v1/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-6 px-4">
      <h2 className="text-2xl font-bold mb-4">📅 Calendar View</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        height="auto"
      />
    </div>
  );
}
