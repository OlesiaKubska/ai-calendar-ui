import React, { useEffect, useState } from "react";
import type { CalendarEvent } from "../types/CalendarEvent";

const EventsTable: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://aicalendar-gqcp.onrender.com/api/v1/events/next-week")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-gray-600">Loading events...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Events for Next Week</h2>
      <table className="w-full table-auto border border-gray-300 shadow-sm rounded overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Participants</th>
            <th className="px-4 py-2">Start</th>
            <th className="px-4 py-2">End</th>
          </tr>
        </thead>
        <tbody>
          {events.map((ev) => (
            <tr key={ev.id} className="border-t">
              <td className="px-4 py-2">{ev.title}</td>
              <td className="px-4 py-2">{ev.description}</td>
              <td className="px-4 py-2">{ev.participants?.join(", ") || ""}</td>
              <td className="px-4 py-2">
                {new Date(ev.start).toLocaleString()}
              </td>
              <td className="px-4 py-2">{new Date(ev.end).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;
