import "./App.css";
import EventsTable from "./components/EventsTable";
import CalendarView from "./components/CalendarView";

function App() {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
        <CalendarView />
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
