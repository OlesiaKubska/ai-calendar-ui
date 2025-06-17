import { useEffect, useState } from "react";
import "./App.css";
import EventsTable from "./components/EventsTable";
import CalendarView from "./components/CalendarView";
import PromptExecutor from "./components/PromptExecutor";
import type { CalendarEvent } from "../src/types/CalendarEvent";

function App() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:5047/api/v1/events");
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error(err);
      setEvents([]);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
        <PromptExecutor onDone={fetchEvents} />
        <CalendarView events={[events]} />
      </div>
      <div className="min-h-screen bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">
          Event Management
        </h2>
        <EventsTable />
      </div>
    </div>
  );
}

export default App;
