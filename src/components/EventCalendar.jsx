import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/calendar.css";

// Localizador de fechas usando moment.js
const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  // Estado para los eventos
  const [events, setEvents] = useState([]);

  // Estado para controlar el evento seleccionado
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Estado para controlar el popup
  const [showPopup, setShowPopup] = useState(false);

  // Función para agregar un evento nuevo
  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Nuevo evento:");
    if (title) {
      setEvents((prev) => [...prev, { start, end, title }]);
    }
  };

  // Función que se ejecuta cuando se selecciona un evento
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  // Función para cerrar el popup
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedEvent(null);
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        style={{ height: 600 }}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent} // Maneja clics en eventos
    
        popup
      />

      {/* Popup para mostrar la información del evento */}
      {showPopup && selectedEvent && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedEvent.title}</h2>
            <p><strong>Inicio:</strong> {moment(selectedEvent.start).format('LLLL')}</p>
            <p><strong>Fin:</strong> {moment(selectedEvent.end).format('LLLL')}</p>
            <button onClick={handleClosePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
